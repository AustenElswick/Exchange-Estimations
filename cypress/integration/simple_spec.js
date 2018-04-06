describe('testing my p2 project', function(){
    it('tests things', function(){
        cy.visit('http://localhost:3000')
        cy.get('header img').should('have.attr', 'src', './money.jpg')
        cy.get('input').should('have.attr', 'type', 'checkbox')
        cy.get('h1').should('contain', 'exchange')
        cy.get('h3').should('contain', 'Current')
    })
})