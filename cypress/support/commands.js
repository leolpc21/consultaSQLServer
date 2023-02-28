Cypress.Commands.add('sqlServerDB', (query) => {
  if (!query) {
    throw new Error('Query must be set');
  }

  cy.task('sqlServerDB', query).then(response => {
    let result = [];

    const flatten = r => Array.isArray(r) && r.length === 1 ? flatten(r[0]) : r;

    if (response) {
      for (let i in response) {
        result[i] = [];
        for (let c in response[i]) {
          result[i][c] = response[i][c].value;
        }
      }
      result = flatten(result);
    } else {
      result = response;
    }

    return result;
  });
});