describe('header', function(){
    it('should have an image and an h1 containing exchange', function(){
        cy.visit('http://localhost:3000')
        cy.get('header img').should('have.attr', 'src', './money.jpg')
        cy.get('h1').should('contain', 'exchange')
        
    })
})
