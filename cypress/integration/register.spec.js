const locators = require("../fixtures/locators.json")
const { faker } = require('@faker-js/faker');



describe('register case', () => {
    it('visit gallery app', () => {
        cy.visit('/');
    });

    let registerData = {
        firstNameInput : faker.name.firstName(),
        lastNameInput : faker.name.lastName(),
        emailInput : faker.internet.email(),
        password : faker.internet.password()
        }

    it('click register button', () => {
        cy.get('a[href="/register"]').click();
    });

    it('register with all empty fields', () =>{
        cy.visit('/register');
        cy.get(locators.registration.firstNameInput).type(' ');
        cy.get(locators.registration.lastNameInput).type(' ');
        cy.get(locators.registration.emailInput).type(' ');
        cy.get(locators.registration.passwordInput).type(' ');
        cy.get(locators.registration.passwordConfirmInput).type(' ');
        cy.get(locators.registration.termsCheckbox).check();
        cy.get(locators.registration.submitBtn).click();

    });

    it('click submit button', () => {
        cy.get('button').click();
    });

    it('register with wrong input for first name', () =>{
        cy.visit('/register')
        cy.get(locators.registration.firstNameInput).type('872');
        cy.get(locators.registration.lastNameInput).type('Jovic');
        cy.get(locators.registration.emailInput).type('test12345@test.com');
        cy.get(locators.registration.passwordInput).type('password1234');
        cy.get(locators.registration.passwordConfirmInput).type('password1234');
        cy.get(locators.registration.termsCheckbox).check();
        cy.get(locators.registration.submitBtn).click();
    });

    it('register with wrong input for last name', () =>{
        cy.visit('/register');
        cy.get(locators.registration.firstNameInput).type('Peric');
        cy.get(locators.registration.lastNameInput).type('%$#');
        cy.get(locators.registration.emailInput).type('test12345@test.com');
        cy.get(locators.registration.passwordInput).type('password1234');
        cy.get(locators.registration.passwordConfirmInput).type('password1234');
        cy.get(locators.registration.termsCheckbox).check();
        cy.get(locators.registration.submitBtn).click();
    });

    it('register with registered email', () =>{
        cy.visit('/register');
        cy.get(locators.registration.firstNameInput).type('Petar');
        cy.get(locators.registration.lastNameInput).type('Petrovic');
        cy.get(locators.registration.emailInput).type('nesto@mail.com');
        cy.get(locators.registration.passwordInput).type('pass1234');
        cy.get(locators.registration.passwordConfirmInput).type('pass1234');
        cy.get(locators.registration.termsCheckbox).check();
        cy.get(locators.registration.submitBtn).click();
    });


    it('register with email without sign @', () =>{
        cy.visit('/register');
        cy.get(locators.registration.firstNameInput).type('Ivan');
        cy.get(locators.registration.lastNameInput).type('Ilic');
        cy.get(locators.registration.emailInput).type('nestomail.com');
        cy.get(locators.registration.passwordInput).type('1234pass');
        cy.get(locators.registration.passwordConfirmInput).type('1234pass');
        cy.get(locators.registration.termsCheckbox).check();
        cy.get(locators.registration.submitBtn).click();
    });


    it('register with password with less than 8 characters', () =>{
        cy.visit('/register');
        cy.get(locators.registration.firstNameInput).type('Ivan');
        cy.get(locators.registration.lastNameInput).type('Ilic');
        cy.get(locators.registration.emailInput).type('nestomail.com');
        cy.get(locators.registration.passwordInput).type('12pass');
        cy.get(locators.registration.passwordConfirmInput).type('12pass');
        cy.get(locators.registration.termsCheckbox).check();
        cy.get(locators.registration.submitBtn).click();
    });


    it('register with password and confirmed password dont mach', () =>{
        cy.visit('/register');
        cy.get(locators.registration.firstNameInput).type('Ivan');
        cy.get(locators.registration.lastNameInput).type('Ilic');
        cy.get(locators.registration.emailInput).type('nestomail.com');
        cy.get(locators.registration.passwordInput).type('123pass');
        cy.get(locators.registration.passwordConfirmInput).type('12pass');
        cy.get(locators.registration.termsCheckbox).check();
        cy.get(locators.registration.submitBtn).click();
    });


    it('register with password and confirmed password with only letters', () =>{
        cy.visit('/register');
        cy.get(locators.registration.firstNameInput).type('Ivan');
        cy.get(locators.registration.lastNameInput).type('Ilic');
        cy.get(locators.registration.emailInput).type('nestomail.com');
        cy.get(locators.registration.passwordInput).type('nekipasvord');
        cy.get(locators.registration.passwordConfirmInput).type('nekipasvord');
        cy.get(locators.registration.termsCheckbox).check();
        cy.get(locators.registration.submitBtn).click();
    });

    it('register with invalid credentials', () =>{
        cy.visit('/register');
        cy.get(locators.registration.firstNameInput).type(faker.name.firstName());
        cy.get(locators.registration.lastNameInput).type(faker.name.lastName());
        cy.get(locators.registration.emailInput).type(faker.internet.email());
        cy.get(locators.registration.passwordInput).type(faker.internet.password());
        cy.get(locators.registration.passwordConfirmInput).type(faker.internet.password());
        cy.get(locators.registration.termsCheckbox).check();
        cy.get(locators.registration.submitBtn).click();
    });

    it('register with valid data', () =>{
        cy.visit('/register');
        cy.get(locators.registration.firstNameInput).type('I');
        cy.get(locators.registration.lastNameInput).type('Jovic');
        cy.get(locators.registration.emailInput).type('nestomije@mail.com');
        cy.get(locators.registration.passwordInput).type('nekipasvord123');
        cy.get(locators.registration.passwordConfirmInput).type('nekipasvord123');
        cy.get(locators.registration.termsCheckbox).check();
        cy.get(locators.registration.submitBtn).click();
    });

});