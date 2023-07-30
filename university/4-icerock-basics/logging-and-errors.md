---
sidebar_position: 11
---

# Логирование и обработка ошибок

## Логирование

Рассмотрим ситуацию, в которой бы мы не заботились о логировании на протяжении всей работы над проектом. Успешно его завершили, протестировали и отдали заказчику.
Спустя какое-то время, после того как приложением начали пользоваться, получаем сообщение от заказчика, что пользователи жалуются на то, что у них бессистемно крашится приложение.

Мы начинаем искать ошибки и причины краша приложения. Все, что нам о них известно - что они происходят на нескольких экранах без какой-либо системы.  
Попробовали воспроизвести ошибки - не получилось. Проверили код нескольких проблемных экранов - тоже вроде бы все в порядке, проблемные места обработаны.  
Остается последний вариант - пробовать воспроизводить ошибки, чтобы определить, в каком месте и по какой причине они происходят. Всей командой пытаемся добиться краша приложения, но у нас все работает, ни одного краша за целый день.
Наконец, спустя еще N времени кому-нибудь удалось достичь краша, который затем исправили силами одного разработчика за 30 минут.  

Согласитесь, бороться таким образом с каждой ошибкой - не самый хороший вариант. 

Чтобы избежать этого, мы используем сервис [Firebase Crashlytics](https://firebase.google.com/docs/crashlytics), который позволяет получать данные обо всех ошибках, которые произошли у пользователей на устройствах, без какого-либо участия с их стороны.  
Сервис позволяет ловить два вида ошибок:
  - `fatal` - произошел прям краш приложения
  - `non-fatal` - произошла ошибка, однако, она была как-то обработана (`try catch`)

Как реагировать на `fatal` и `non-fatal` ошибки:
  - `fatal` - раз приложение крашнулось, значит где-то произошла ошибка, которая никак не обрабатывается.
    Нам необходимо найти и исправить данную ошибку.
  - `non-fatal` - раз произошла `non-fatal` ошибка, значит проблемное место мы уже обрабатываем и логируем.
    Нам стоит проверить, правильно ли обрабатывается эта ошибка и нужно ли в дальнейшем ее логировать.
  
Рассмотрим `non-fatal` ошибки подробнее. Какими они бывают:
  - это новая ошибка, которая произошла из-за косяка в нашем коде
  - это стандартная ошибка, например, из-за отсутствия интернета или из-за нехватки памяти на устройстве, чтобы сохранить файл

Если ошибка произошла из-за какого-то недочета в коде - мы просто исправим код и все.  

Если же эта ошибка стандартная - мы добавим обработку данной ошибки с отображением ее пользователю (через toast, alert или отдельное состояние экрана)
и изменим условие логирования, чтобы больше не видеть информацию об этой ошибке в `Firebase`.  
Это поможет нам избавиться от информации о куче лишних `non-fatal` ошибок, и, когда произойдет какая-то новая ошибка, мы не пропустим ее в общей куче ошибок, а сразу заметим и пойдем разбираться.

Теперь, когда нам снова напишет заказчик и сообщит, что у юзеров опять крашится приложение, наш план будет следующим:
- открываем `Firebase Crashlytics` и видим, какая ошибка происходит у пользователей
- оперативно исправляем ошибку

Для логирования в общем коде мы используем библиотеку [Napier](https://github.com/AAkira/Napier), которую связываем с `Firebase Crashlytics`, чтобы через `Napier` логи автоматически попадали и в `Crashlytics`.

Поэтому при разработке нового проекта логи проставляются как минимум во всех обработчиках ошибок.

Также, если заранее удается понять, что какая-то информация каждого конкретного запуска приложения может пригодиться для последующего исправления ошибки, ее следует логировать с уровнем `INFO`.
Однако, никакие секретные ключи и пароли логировать нельзя.


## Обработка ошибок в общем коде

В любом мобильном приложении часто происходят нефатальные ошибки, направленные на обратную связь,
например: отсутствие интернет соединения, нехватка памяти на устройстве для загрузки данных, различные ответы сервера и т.д.
Обо всем этом нужно корректно доносить пользователю.  
Такие ошибки, как правило, показываются юзеру как алерт или тост, чтобы юзер успел посмотреть, в чем проблема, и попробовал решить ее самостоятельно. 

Мы в IceRock используем для этого библиотеку [moko-errors](https://github.com/icerockdev/moko-errors).  
С ее помощью мы можем:
- централизованно обрабатывать все ошибки общего кода
- выбрать, как показывать ошибку юзеру - через `Toast`, `Alert` или иначе
- Использовать разные строки для разных ошибок, прямо в общем коде

Для знакомства с библиотекой посмотрите видео
<iframe src="//www.youtube.com/embed/scvtK62zqz8" frameborder="0" allowfullscreen width="675" height="380"></iframe>
<br/>
<br/>

## Практическое задание
- Используйте проект, готовый после раздела [Построение экранов вертикальными списками](./ui-units#практическое-задание)
- Используйте `ExceptionMappersStorage` во вьюмоделях
  - Вместо нескольких `catch` разных ошибок, добавьте один `catch(e: Exception)` с её маппингом через `ExceptionMappersStorage`
  - Добавьте в регистрацию `ExceptionMappersStorage` все необходимые типы