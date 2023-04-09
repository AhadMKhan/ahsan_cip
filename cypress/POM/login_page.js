class login_page {
    get user_name () {
        return cy.get('#login_userName')
    }

    get user_password () {
        return cy.get('#login_password')
    }

    get login_btn () {
        return cy.get("[type='submit']")
    }
}
export default login_page