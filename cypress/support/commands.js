// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Actual Commands are starts from here
Cypress.Commands.add('login', () => { 
    cy.visit('http://192.168.1.155:3000/dashboard')
    cy.get('div.css-1g4e03w div.MuiGrid-root.MuiGrid-container.MuiGrid-direction-xs-column.css-t0v07t-MuiGrid-root div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-1idn90j-MuiGrid-root:nth-child(1) div.MuiGrid-root.MuiGrid-container.css-1dgaazi-MuiGrid-root div.MuiGrid-root.MuiGrid-item.css-3fd9z3-MuiGrid-root div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation12.MuiCard-root.css-1gq6ixi-MuiPaper-root-MuiCard-root div.MuiBox-root.css-1arlb8v div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-2.css-919fip-MuiGrid-root div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-1idn90j-MuiGrid-root:nth-child(3) form:nth-child(1) div.MuiBox-root.css-1yuhvjn:nth-child(4) > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.css-10554ze-MuiButtonBase-root-MuiButton-root').click();
    cy.url().should('include', '/dashboard')
 })

 Cypress.Commands.add('launchURL', () => { 
    cy.visit('http://192.168.1.155:3000/dashboard')

 })