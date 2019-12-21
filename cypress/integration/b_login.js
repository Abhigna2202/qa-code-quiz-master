describe('login with username and password', function() {
    
    it('Login with username and signin', function() {
        cy.visit('http://localhost:8080')
        .get('input[placeholder="Enter Username"]')
        .type('dummytree')
        .get('input[placeholder="password"]')
        .type('test1')
        cy.contains('LOGIN').click()
        
    })
  })