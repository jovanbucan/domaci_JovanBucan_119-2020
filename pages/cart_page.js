class CartPage {
  visit() {
    cy.visit('https://www.saucedemo.com/cart.html')
  }

  verifyProductInCart(productName) {
    cy.contains('.cart_item', productName).should('exist')
  }
}

export default CartPage