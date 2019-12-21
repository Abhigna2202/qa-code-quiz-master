describe('First', function() {
    
    //visits the webpage home
    it('Visit First page', function() {
      cy.visit('http://localhost:8080')
    })
    
    //checking for qa.code-quiz.dev division of the page
    it('Check Header', function() {
        cy.contains('div','qa.code-quiz.dev') 
    })

    // checking the placeholders for username and password
    it('place holders username and login check', function() {
        cy.get('input:first').should('have.attr', 'placeholder', 'Enter Username')
        cy.get('input:last').should('have.attr', 'placeholder', 'password')
    })

    //checks the login button
    it('Check login button', function() {
        cy.contains('LOGIN').click
    })

    //checks other text on the page.
    it('Check other text on page', function() {
        cy.contains('If you do not have an account, contact an admin')
    })
  })