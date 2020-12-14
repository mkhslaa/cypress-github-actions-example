/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://google.com')
  })

  // https://on.cypress.io/interacting-with-elements

  it('should be on Google page', () => {
    cy.title().should('contain', 'Google')
  })
})
