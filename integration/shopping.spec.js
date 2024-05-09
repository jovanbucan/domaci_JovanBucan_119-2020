import CartPage from "../pages/cart_page"
import HomePage from "../pages/home_page"
import LoginPage from "../pages/login_page"


describe('Login and Add to Cart', () => {
  const loginPage = new LoginPage()
  const homePage = new HomePage()
  const cartPage = new CartPage()

  beforeEach(() => {
    loginPage.visit()
  })

  it('should login with valid credentials and add product to cart', () => {
    loginPage.login('standard_user', 'secret_sauce')
    cy.url().should('include', '/inventory.html')

    homePage.addToCart('Sauce Labs Backpack')
    cartPage.visit()
    cartPage.verifyProductInCart('Sauce Labs Backpack')
  })
})
