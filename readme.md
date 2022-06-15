# Quiz Fever
Система за създаване, управнение и попълване на тестове със свободен достъп.

## Функционалност
* Регистрация на потребители
* Възможност за разглеждане и решаване на тестове от други потребители
* Различни теми, свързани с тестовете
* Възможност за филтриране по тема и търсене по заглавие
* Водене на статистика за всеки потребител и тест
* Интерактивен редактор за тестове
* Интерактивен, гъвкав UX

## Технологии
* HTML, CSS, JavaScript
* lit-hmtl, page
* GitHub Pages, Back4App

## Екрани (Страници)
* **Welcome Screen** (landing page)
* **Login/Register** - регистрация с мейл, потребителско име и парола
* **Quiz Browser** - списък с тестове и възможност за търсене по заглавие и филтрация по тема
* **Quiz Details** - допълнително описание, статистика за теста, информация за автора и възможност за стартиране на теста
* **Quiz Contest Mode** - отговаряне на въпроси, всеки въпрос е в отделен изглед, възможност за свободно преминаване от въпрос на въпрос, възможност за рестартиране на теста
* **Quiz Results** - обобщение на резултатите, възможност за преглеждане на сгрешените въпроси
* **Profile Page** - информация за създадени тестове и всички решени тестове
* **Quiz Editor** - интегриран редактор за тестове, въпроси и отговори

## План за изпълнение
### Part1
* Създаване и настройване на приложение в Back4App
* Деплойване на приложение в GitHub Pages
* Login/register страница
* Quiz Editor функционалност


### Part2
* Довършване на структура и стилизация
* Welcome Screen
* Quiz Browser
* Quiz Details
* Quiz Contest Mode
* Quiz Results
* Profile Page

## Реализация
### Стриктира на данните
### Колекции
* Sessions (служебна)
* Users
```javascript
{
    email: String,
    username: String,
    password: String,
}
```
* Quizes
```javascript
{
    title: String,
    topic: String,
    questionCount: Number,
    quiz: Pointer<Quiz>
}
```
* Questions
```javascript
    text: String,
    answers: Array<String>,
    correctIdex: Number
```
* Solutions
```javascript
    quiz: Pointer<Quiz>,
    correct: Number
```

### Контрол на достъпа
* Гостите могат да се регистрират, да преглеждат каталога, детайлите на тестовете и профилните страници на потребителите
* Регистрираните потребители могат да решават тестове, да преглеждат резултатите си и да създават и редактират тестове
* Само създателя на един тест може да го редактира и изтрива
* Всеки регистриран потребител може да решава чужд тест