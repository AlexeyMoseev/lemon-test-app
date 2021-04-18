# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Проект

Тестовое приложение, выполненное для компании "Lemon".

Для установки всех зависимостей прописать в консоли: npm i или yarn i

Ссылка на рабочий проект на хостинге: https://lemon-app-moseev.netlify.app

## Функционал приложения

**Приложение умеет показывать следующие страницы:**
- / - главная
- /login - страница ввода логина и пароля
- /news - страница с новостями (любая однотипная информация)
- /profile - страница с произвольным текстом, недоступная без авторизации

**Cсылки на страницы реализованы в вывдвигающемся меню:**
- На главную (/)
- Новости (/news)
- Профиль (/profile)
- Если пользователь кликает на страницу “профиля” и он не “авторизован” - перенаправлять на страницу /login
Форма входа (/login) принимает “фейковые” данные:
          username: Admin
          password: 12345 
Если введены другие данные, то показывается сообщения: «Имя пользователя или пароль введены не верно»
Если введены корректные данные, то перебрасывается на страницу /profile

**В приложение встроена валидация данных на уровне клиента:**
- Пользователь не может отправить на сервер пустые поля(все поля обязательны для заполнения-required)
- Минимальная длина логина - 2 символа, минимальная длина пароля - 4 символа
Если хоть одно из условий выше не соблюдено - кнопка входа в профиль дезактивирована и не реагирует на нажатия,
также над полями ввода выводится сообщение, сигнализирующее об ошибке валидации.

## Техническая составляющая приложения:

Для написания приложения использовались следующие фреймворки, библиотеки и языки:
- **JS ES6** (vanilla)
- **CSS**
- **Система для быстрой развертки приложения create-react-app (на основе webpack)**
- **Фреймворк React**
- **Библиотека react-router-dom для настройки роутинга приложения**

При написании использовалься компонентный подход разработки react-приложения. Основные страницы - контейнеры, которые
могут иметь свое состояние, вспомогательные компоненты - функции без состояния. В прототипе у основных компонентов MainPage 
и ProfilePage нет состония, и контейнерами они сделаны лишь в целях дальнейшего расширения приложения и появления там состояния.

Использование redux я посчитал нецелесообразным для приложения, в том виде, в котором оно сейчас находится, и что на данном
этапе это лишь усложнит приложение.

Информация об авторизации пользователя хранится в переменной isAuthenticated в компоненте App; создана с использованием хука
useState, что позволило избежать создания еще одного компонента через {Component} 
 