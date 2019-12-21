describe('logout from page', function() {
//Check other fields in the page
it('Check logout functionality', function() {
    cy.visit('http://localhost:8080')
        .get('input[placeholder="Enter Username"]')
        .type('dummytree')
        .get('input[placeholder="password"]')
        .type('test1')
        cy.contains('LOGIN').click()
        cy.contains('LOGOUT').click()
})
})