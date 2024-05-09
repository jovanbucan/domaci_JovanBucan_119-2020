class LoginPage {
  visit() {
    cy.visit('https://www.saucedemo.com/')
  }

  login(username, password) {
    cy.get('iframe').should('be.visible').then((iframe) => {
      cy.wrap(iframe).iframe().find('#user-name').should('be.visible').type(username)
      cy.wrap(iframe).iframe().find('#password').should('be.visible').type(password)
      cy.wrap(iframe).iframe().find('#login-button').should('be.visible').click()
    })
  }
}

export default LoginPage
