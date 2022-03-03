describe('register case', () => {
    it('visit gallery app', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
    });

    it('click register button', () => {
        cy.get('a[href="/register"]').click()
    });

    it('register with all empty fields', () =>{
        cy.get('input[id="first-name"]').type(' ')
        cy.get('input[id="last-name"]').type(' ')
        cy.get('input[id="email"]').type(' ')
        cy.get('input[id="password"]').type(' ')
        cy.get('input[id="password-confirmation"]').type(' ')
        cy.get('[type="checkbox"]')

    });

    it('click submit button', () => {
        cy.get('button').click()
    });

    it('register with wrong input for first name', () =>{
        cy.get('input[id="first-name"]').type('872')
        cy.get('input[id="last-name"]').type('Jovic')
        cy.get('input[id="email"]').type('test12345@test.com')
        cy.get('input[id="password"]').type('password1234')
        cy.get('input[id="password-confirmation"]').type('password1234')
        cy.get('[type="checkbox"]').check()
    });

    it('click submit button', () => {
        cy.get('button').click()
    });

    it('register with wrong input for last name', () =>{
        cy.get('input[id="first-name"]').type('Peric')
        cy.get('input[id="last-name"]').type('%$#')
        cy.get('input[id="email"]').type('test12345@test.com')
        cy.get('input[id="password"]').type('password1234')
        cy.get('input[id="password-confirmation"]').type('password1234')
        cy.get('[type="checkbox"]').check()
    });

    it('click submit button', () => {
        cy.get('button').click()
    });

    it('register with registered email', () =>{
        cy.get('input[id="first-name"]').type('Petar')
        cy.get('input[id="last-name"]').type('Petrovic')
        cy.get('input[id="email"]').type('nesto@mail.com')
        cy.get('input[id="password"]').type('pass1234')
        cy.get('input[id="password-confirmation"]').type('pass1234')
        cy.get('[type="checkbox"]').check()
    });

    it('click submit button', () => {
        cy.get('button').click()
    });

    it('register with email without sign @', () =>{
        cy.get('input[id="first-name"]').type('Ivan')
        cy.get('input[id="last-name"]').type('Ilic')
        cy.get('input[id="email"]').type('nestomail.com')
        cy.get('input[id="password"]').type('1234pass')
        cy.get('input[id="password-confirmation"]').type('1234pass')
        cy.get('[type="checkbox"]').check()
    });

    it('click submit button', () => {
        cy.get('button').click()
    });

    it('register with password with less than 8 characters', () =>{
        cy.get('input[id="first-name"]').type('Ivan')
        cy.get('input[id="last-name"]').type('Ilic')
        cy.get('input[id="email"]').type('nestomail.com')
        cy.get('input[id="password"]').type('12pass')
        cy.get('input[id="password-confirmation"]').type('12pass')
        cy.get('[type="checkbox"]').check()
    });

    it('click submit button', () => {
        cy.get('button').click()
    });

    it('register with password and confirmed password dont mach', () =>{
        cy.get('input[id="first-name"]').type('Ivan')
        cy.get('input[id="last-name"]').type('Ilic')
        cy.get('input[id="email"]').type('nestomail.com')
        cy.get('input[id="password"]').type('123pass')
        cy.get('input[id="password-confirmation"]').type('12pass')
        cy.get('[type="checkbox"]').check()
    });

    it('click submit button', () => {
        cy.get('button').click()
    });

    it('register with password and confirmed password with only letters', () =>{
        cy.get('input[id="first-name"]').type('Ivan')
        cy.get('input[id="last-name"]').type('Ilic')
        cy.get('input[id="email"]').type('nestomail.com')
        cy.get('input[id="password"]').type('nekipasvord')
        cy.get('input[id="password-confirmation"]').type('nekipasvord')
        cy.get('[type="checkbox"]').check()
    });

    it('click submit button', () => {
        cy.get('button').click()
    });


    it('register with using unicode characters for last name', () =>{
        cy.get('input[id="first-name"]').type('I')
        cy.get('input[id="last-name"]').type('Jovic')
        cy.get('input[id="email"]').type('nestomije@mail.com')
        cy.get('input[id="password"]').type('nekipasvord123')
        cy.get('input[id="password-confirmation"]').type('nekipasvord123')
        cy.get('[type="checkbox"]').check()
    });

    it('click submit button', () => {
        cy.get('button').click()
    });

});