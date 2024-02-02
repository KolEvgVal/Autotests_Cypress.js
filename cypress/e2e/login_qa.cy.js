describe('Автотесты на форму логина и пароля', function () {
   it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Посетили сайт
        cy.get('#mail').type('german@dolnikov.ru '); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').should('be.visible'); // Проверка что текст виден
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверка совпадения текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка что крестик видимый
    })
     it('Востановление пароля', function () {
        cy.visit('https://login.qa.studio/'); // Посетили сайт
        cy.get('#forgotEmailButton').click(); // Нажали Забыли пароль
        cy.get('#mailForgot').type('evgvalkolosov@yandex.ru'); // Ввели почту
        cy.get('#restoreEmailButton').click(); // Нажали Отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверка совпадения текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка что крестик видимый
    })
     it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Посетили сайт
        cy.get('#mail').type('german@dolnikov.ru '); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio5'); // Ввели неверный пароль
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').should('be.visible'); // Проверка что текст виден
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка совпадения текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка что крестик видимый
    })
     it('Не верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Посетили сайт
        cy.get('#mail').type('german@dolniko.ru '); // Ввели не верный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').should('be.visible'); // Проверка что текст виден
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка совпадения текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка что крестик видимый
    })
     it('Логин не содердит символ собачки и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Посетили сайт
        cy.get('#mail').type('germandolniko.ru '); // Ввели логин без собачки
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').should('be.visible'); // Проверка что текст виден
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверка совпадения текста
    })
     it('Приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // Посетили сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru '); // Ввели верный логин с заглавными буквами
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').should('be.visible'); // Проверка что текст виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка что крестик видимый
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверка совпадения текста
    })
})