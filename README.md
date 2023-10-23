# congratulations-service

Основная идея сервиса - это быстрая генерация поздравления(ссылки для поздравления) без лишних хлопот, минимальность действий от пользователя, для дальнейшей отправки поздравителю.
     
Уникальность нашего сервиса будет в том, что генерируется не только текст сообщения, а ссылка на страницу с поздравлением с красивой анимацией. Также простота использования приложения, за пару манипуляций, без регистрации(просто ввел Ф.И.О, с чем поздравить, и получи ссылку на поздравление. Можно добавить не обязательное поле "от кого"). Ещё не маловажным является тот факт, что ссылку легко отправить адресату, через любой мессенджер, даже смс-кой.
Легко создать => легко просмотреть

## Ключевые критерии(на основании Фич-листа)

  - минимальность действий от пользователя;
  - рандомно генерируемое поздравление;
  - автоматически генерируемая ссылка с поздравлением;
  - вторая страница формируется динамически(в зависимости от введенных пользователем данных);
  - реализация страницы `About us`;
  - выбор темы поздравления(выпадающий сптсок);
  - анимации на главной странице;
  - приложение реалузуется на русском языке(для начала);
  - возможность музыкального сопровождения(выбор из нескольких звуковых дорожек);
  - реализация `Donat us`;


## Сценарии:
1) Создать поздравления, например, друга с днем рождения.
Параметры: 
  - От кого: строка с именем или ФИО
  - Кому: Имя: строка
  - Повод: День рождения, Новый год, Рождение ребенка, Свадьба итд (список вариантов)
  - Ключевые слова: «Спортсмен, супермэн». (для генератора)
  - Дата хранения: До какого числа поздравление актуально, после ссылка будет не валидной.
  - Ссылка: Ссылка на страницу по которой сгенерируется поздравление. Можно открывать много раз до указанной даты включительно.
2) Проверить результат: Создатель открывает страницу с результатом созданного поздравления, может откорректировать параметры и обновить результат.
3) Получатель получает ссылку на поздравление в личные сообщения или электронной почтой.
Тыкает на ссылку открывается страница с поздравлением, анимацией, текстом, возможно с музыкой.
4) Сгенерировать текст поздравления. Система предлагает отправителю вариант(ы) поздравления по заданным параметрам. Отправитель выбирает и возможно корректирует под себя.
5) Выбрать мелодию.
6) Выбрать анимацию.
7) Донаты
8) Выбрать язык (давайте русский сначала сделаем)

## Материалы
- [Ссылка на макет](https://drive.google.com/file/d/1PFOudo2MrIaFDnODklERCgwbvvz7OI8D/view)
- [Ссылка на наш Фич-лист](https://docs.google.com/spreadsheets/d/1dsekj5D07PjXrlgTYpZdWLDOEZo0R4sWBk0GU-l7Y7w/edit#gid=0)
