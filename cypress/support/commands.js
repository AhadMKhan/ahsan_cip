import login_page from "../POM/login_page"
import home_page from "../POM/home_page"
import 'cypress-file-upload'

const login_page_obj = new login_page()
const home_page_obj = new home_page()

Cypress.Commands.add('login_app', () => {
    cy.fixture('./login_data.json').then((login_data) => {
        login_page_obj.user_name.type(login_data.username)
        login_page_obj.user_password.type(login_data.user_pass)
        login_page_obj.login_btn.click()
    })
})

Cypress.Commands.add('clear_session_storage', () => {
    cy.window().then((win) => {
      win.sessionStorage.clear()
    })
  })