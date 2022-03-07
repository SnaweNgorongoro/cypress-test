class Navigation {
    get registButton() {
        return cy.get("a[href='/register']")
    }

    clickRegisterButton() {
        this.registButton.click()
    }

}

export const navigation = new Navigation()