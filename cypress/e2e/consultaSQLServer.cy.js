/// <reference types="cypress" />

describe('testando', () => {

  it('Testando consulta no SQL Server', () => {

    //cy.sqlServer(`SELECT * from Video`).should('eq', 'Video 1 Leonardo')
    cy.sqlServerDB("SELECT * from Video")
      .then(result => cy.log(result))
  });

})