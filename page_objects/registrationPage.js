class registrationPage {
    get firstNameInput() {
        return cy.get("input[id='first-name']")
    }

    get lastNameInput() {
        return cy.get("input[id='last-name']")
    }

    get emailInput() {
        return cy.get("input[id='email']")
    }

    get passwordInput() {
        return cy.get("input[id='password']")
    }

    get passwordConfirmInput() {
        return cy.get("input[id='password-confirmation']")
    }

    get termsCheckbox() {
        return cy.get(":checkbox")
    }

    get submitBtn() {
        return cy.get("button")
    }


}