describe('Покупка аватара', function () {
   it('Покупку нового фото для тренера', function () {
        cy.visit('https://pokemonbattle.me/'); // Посетили сайт
        cy.get(':nth-child(1) > .auth__input').type('kolosovevgval@yandex.ru'); // Ввели верный логин
        cy.get('#password').type('Rnk334.34'); // Ввели верный пароль
        cy.get('.auth__button').click(); // Нажали войти
        cy.get('.header__btns > [href="/shop"]').click(); // Нажали магазин
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('6242209460323019'); // Ввели номер карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1027'); // Ввели месяц и год
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // Ввели верный код 
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('EVGENIY KOLOSOV'); // Ввели имя
        cy.get('.pay-btn').click(); // Нажали оплатить
        cy.get('#cardnumber').type('56456'); // Ввели верный код
        cy.get('.payment__submit-button').click(); // Нажали оплатить
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно'); // Проверка совпадения текста
        cy.get('.payment__adv').click(); // Нажали Вернуться в магазин
    })
})