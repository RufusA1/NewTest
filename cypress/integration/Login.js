/// <reference types="cypress" />

it('LoginTest', function(){

    cy.visit('https://dev.pace.africa/')

    cy.get(':nth-child(2) > a > .mb-0').click()

    cy.get(':nth-child(3) > .form-control').type('joseph.abios123@gmail.com')

    cy.get(':nth-child(4) > .form-control').type('password')

    cy.get('.btn').click()



})