class HomePage {
    visit() {
      cy.visit('https://www.saucedemo.com/inventory.html')
    }
  
    addToCart(productName) {
      cy.contains('.inventory_item_name', productName)
        .parent()
        .contains('button', 'Add to cart')
        .click()
    }
  }
  
  export default HomePage