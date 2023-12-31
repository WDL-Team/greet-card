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
- выбор темы поздравления(выпадающий список);
- анимации на главной странице;
- приложение реализуется на русском языке (для начала);
- возможность музыкального сопровождения(выбор из нескольких звуковых дорожек);
- реализация `Donat us`;

## Роли пользователей:

- Отправитель: Создает поздравление, проверяет результат, отправляет ссылку получателю
- Получатель: Получает ссылку от отправителя, открывает и радуется)

## Сценарии:

1. Создать поздравление, например, друга с днем рождения.
   Параметры:

- От кого: строка с именем (не обязательно)
- Кому: Строка с именем
- Повод: День рождения, юбилей, Новый год, 23 февраля, 8 марта, день Святого Валентина, День победы 9 мая, День России 12 июня, свадьба, рождение ребенка, новоселье, окончание учебного заведения, получение диплома. Пользователь может создать свой кастомный повод (просто это усложнит автогенерацию поздравления, возможно, их не будет в этом случае).
- Ключевые слова: «Спортсмен, супермэн, красавица, семьянин». Генератор может подобрать поздравление с использованием данных слов.
- Дата хранения: До какого числа поздравление актуально, после ссылка будет не валидной.
- Ссылка: Ссылка на страницу, по которой сгенерируется поздравление. Можно открывать много раз до указанной даты включительно.

2. Проверить результат: Отправитель открывает страницу с результатом созданного поздравления, может откорректировать параметры и обновить результат.
3. Получатель получает ссылку на поздравление в личные сообщения или электронной почтой.
   Тыкает на ссылку и открывается страница с поздравлением, анимацией, текстом, возможно с музыкой.
4. Сгенерировать текст поздравления. Система предлагает отправителю вариант(ы) поздравления по заданным параметрам. Отправитель выбирает и возможно корректирует под себя.
5. Выбрать мелодию. Делаем заготовки для разных поводов и общие.
6. Выбрать анимацию.
7. Страница "О нас" (Контакты, название команды, описание что можем сделать, чем можем быть полезны).
8. Донаты.

## Материалы

- Папка проекта в google drive https://drive.google.com/drive/folders/1P2txnkduawDJe40nQStJcGXKKwwivVg5
- [Ссылка на макет](https://drive.google.com/file/d/1PFOudo2MrIaFDnODklERCgwbvvz7OI8D/view)
- [Ссылка на наш Фич-лист](https://docs.google.com/spreadsheets/d/1dsekj5D07PjXrlgTYpZdWLDOEZo0R4sWBk0GU-l7Y7w/edit#gid=0)
