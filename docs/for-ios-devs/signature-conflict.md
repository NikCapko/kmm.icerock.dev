---
sidebar_position: 3
---

# Конфликты имен на iOS

Следующий набор имен на iOS будет конфликтовать либо между собой либо с iOS сигнатурами:
- description
- itemId (при использовании moko-units)
- State (в SwiftUI используется)
- ключевые слова swift'а

(!) Если у объекта есть фукнция и переменная с одинаковым именемованием, то Swift будет видеть только последнюю из объявленных.