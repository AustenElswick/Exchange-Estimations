describe('body', function(){
  it('sees if an input can be found and if there is an h3 containing current', function(){
    cy.visit('http://localhost:3000')
    cy.get('input').should('have.attr', 'type', 'checkbox')
    cy.get('h3').should('contain', 'Current')
  })
})
