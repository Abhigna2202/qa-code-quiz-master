describe('Check the details after login', function() {
    
    it('Check header section', function() {
        cy.visit('http://localhost:8080')
        .get('input[placeholder="Enter Username"]')
        .type('dummytree')
        .get('input[placeholder="password"]')
        .type('test1')
        cy.contains('LOGIN').click()
        cy.contains('div','Hello undefined') 
    })
    it('Check details', function() {
        cy.contains('div','Name') 
        //cy.contains('div',) 
        cy.contains('div','Favourite Fruit') 
        cy.contains('div','Mango') 
        cy.contains('div','Favourite Movie') 
        cy.contains('div','V for Vendetta') 
        cy.contains('div','Favourite Number')
        cy.contains('div','The last prime number') 
        
})
})