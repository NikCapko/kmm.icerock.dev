---
sidebar_position: 1
---

# Push notifications

## Notifications

Push notifications - это те всплывающие сообщения-уведомления, которые были отправлены сервером.  
Чтобы получше разобраться с тем, что такое пуши и для чего они используются, советуем прочитать [статью](https://www.sostav.ru/blogs/254470/32008/).

Используя Firebase можно отправлять два типа уведомлений - Notification message и Data message.  

***Notification message*** - это такие пуши, которые обязательно содержат в себе информацию для отображения - `title` и `body` сообщения.   
***Data message*** - эти пуши, наоборот, не содержат никакой информации для отображения, они предназначены для отправки каких-то данных самому приложению, например, изменить настройки работы с сервером со стороны конкретного клиента.

Эти пуши по разному обрабатываются системой в разном состоянии приложения:

1. ***Если приложение в foreground, т.е. открыто прямо сейчас:***
   - Data messages будут обработаны приложением, Notifications messages будут показаны юзеру
2. ***Если приложение находится в background, т.е. свернуто:***
   - Notifications messages также будут показаны юзеру
   - Data messages также придут и обработаются приложением, но система выставит ограничение (10-15 сек.) на время обработки пуша. Если приложение не успеет обработать Data message в установленное время, то система остановит приложение и все последующие пуши будет доставлять хуже, потому что уже знает, что приложение не может справиться в установленный срок.
3. ***Приложение выгружено из памяти юзером или устройство перезапущено и юзер еще не открывал приложение:***
   - Notifications messages также будут показаны юзеру
   - Data messages доставятся системе, однако она не передаст их приложению, потому что система предполагает, что пользователь не пользуется этим приложением

4. ***Если же приложение было выгружено из памяти системой, а не юзером, то Data messages его разбудят и у приложения будет N секунд на их обработку.***

***Если данные можно отправлять в обоих пушах, то почему бы не использовать Push Notifications и для отправки данных?***  
   - Используя Notification message можно отправлять текстовые данные с какой-нибудь информацией (диплинк на нужный экран приложения, например, на диалог с конкретным пользователем в соцсети), однако, она станет доступна только после того, как юзер нажмет на пуш.
   
***Push Notifications не дают гарантии, что обязательно дойдут до конкретного юзера, потому что:***
   - Если отправлять Push Notifications слишком часто, то система сама начнет ограничивать их появление, чтобы приложение не мешало юзеру
   - Если приложение не открывалось после перезапуска устройства, либо приложение было выгружено из памяти самим пользователем, то Data messages в принципе не передадутся системой приложению
   - Обе платформы могут ограничивать доставку пушей в зависимости от заряда батареи и активности использования приложения юзером
   - Если пользователь заходит в приложение раз в месяц - то система сильно снизит приоритет приложения на получение Data messages, для экономии энергии

Еще больше о разнице между ними вы можете узнать из [документации](https://firebase.google.com/docs/cloud-messaging/concept-options) и [видео](https://www.youtube.com/watch?v=61lY61gUq3g).

## Firebase Cloud Messaging
[Firebase Cloud Messaging](https://firebase.google.com/docs/cloud-messaging) (FCM) - это сервис, позволяющий интегрировать отправку push-уведомлений в ваше приложение.

<iframe src="//www.youtube.com/embed/sioEY4tWmLI" frameborder="0" allowfullscreen width="675" height="380"></iframe>
<br/>
<br/>

Чтобы использовать FCM в вашем мультиплатформенном приложении, необходимо выполнить следующие действия:
- зарегистрировать приложение в Firebase
- настроить FCM на каждой платформе
- в общем коде добавить логику отправки уникального токена устройства на сервер 
- в серверную часть приложения добавить логику отправки push-уведомлений

## Registration token
FCM Registration token - это уникальный для каждого устройства ключ, генерируемый FCM. Он нужен для того, чтобы идентифицировать устройство и отправлять пуши конкретно на него.

Токен не фиксированный, он может измениться в следующих случаях:
- для одной учетной записи (email, телефон и тд.), но на разных устройствах, токен будет разным
- приложение переустановлено на устройстве, токен изменится
- при выходе из учетной записи мы вручную сбросим старый токен, чтобы при логине в новую учетку не приходили пуши от прошлой
- удалены данные приложения

Поэтому, платформа должна реагировать не только на получение нового токена, но и на его обновление.

## Работа платформы, общего кода и сервера

### Платформа
Платформа отвечает только за то, что реагирует на получение `FCM token-а` и его передачу в общий код.

### Общий код
В общем коде новый/обновленный токен устройства отправляется на сервер.

### Сервер
Сервер получает FCM token от общего кода и действует в зависимости от логики работы приложения на нескольких устройствах:
- если приложение поддерживает использование одной учетной записи на нескольких девайсах, то сервер просто сохраняет все токены устройств, на которых используется учетная запись
- если использовать приложение можно только на одном устройстве - старый токен перезаписывается
- если произошло обновление токена конкретного устройства - сервер его обновит

Вся логика по отправке пушей и настройке их контента полностью происходит на сервере. Это позволяет быстро что-то добавить/изменить в поведении пушей, без необходимости просить пользователей обновить приложение.