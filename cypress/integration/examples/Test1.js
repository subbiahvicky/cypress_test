

//cypree code-called as spec file
describe('My First Suit', function()  {

    Cypress.Commands.add('login', (username, password) => {
        cy.visit('https://www.bobricksmart.com/')
      
        cy.get(':nth-child(3) > .mud-input-control > .mud-input-control-input-container > .mud-input > .mud-input-slot').type(username)
      
        // {enter} causes the form to submit
        cy.get(':nth-child(4) > .mud-input-control > .mud-input-control-input-container > .mud-input > .mud-input-slot').type(`${password}{enter}`, { log: false })
      
        // we should be redirected to /dashboard
      
      })
 
    it('Login Test with invalid credentials', function() {

        cy.login('buildingadmin@bobricks.com', 'Password@123f')
        cy.url().should('not.include', '/userdashboard')
        
      })

      it('Login Test with valid credentials', function() {
        cy.login('buildingadmin@bobricks.com', 'Password@123')
        cy.url().should('include', '/userdashboard')
      })

      it('Test emty building creation validations', function() {
        cy.login('buildingadmin@bobricks.com', 'Password@123')
        cy.url().should('include', '/userdashboard')
        cy.get('div.mud-layout.mud-drawer-open-responsive-md-left.mud-drawer-left-clipped-always:nth-child(5) aside.mud-drawer.mud-drawer-fixed.mud-drawer-pos-left.mud-drawer--open.mud-drawer--initial.mud-drawer-md.mud-drawer-clipped-always.mud-elevation-25.mud-drawer-responsive div.mud-drawer-content div.mud-navmenu > div.mud-nav-item.mud-ripple:nth-child(4)').click()
        cy.get('div.mud-layout.mud-drawer-open-responsive-md-left.mud-drawer-left-clipped-always:nth-child(5) div.mud-main-content div.mud-container.mud-container-maxwidth-false.mt-4 div.mud-table.mud-xs-table.mud-table-hover.mud-table-striped.mud-elevation-25:nth-child(3) div.mud-toolbar.mud-toolbar-gutters.mud-table-toolbar div.justify-center.mud-text-align-center div.mud-tooltip-root.mud-tooltip-inline:nth-child(1) button.mud-button-root.mud-button.mud-button-filled.mud-button-filled-primary.mud-button-filled-size-medium.mud-ripple.mud-button-disable-elevation.ma-n1 > span.mud-button-label').click()
        cy.get("button[type='submit']").click()

        const sentencesToCheck = [
          "Name is required!",
          "City is required!",
          "State is required!",
          "Zip is required!",
          "Country is required"
      ];

        cy.get("p[class='mud-input-helper-text mud-input-error']").each(($element, index, $list) => {

          //cy.log($element.text())
          cy.wait(2000)
          if(sentencesToCheck.includes($element.text()))
          {
          
          cy.log('validations present are....'+$element.text())
          
          } else {

            cy.log('validations not present are.....'+$element.text())
            

          }
        
          
  
      })
/*const sentencesToCheck = [
    "Name is required!",
    "City is required!",
    "State is required!",
    "Zip is required!",
    "Country is required!"
];

let count = 0;

for (let i = 0; i < webElements.length; i++) {
    const text = webElements[i].getText();
    cy.wrap(text).then((textValue) => {
      cy.log(`Text value: ${textValue}`);
    });
    if (sentencesToCheck.includes(text)) {
        count++;
    }
}*/
      })

    

      })

    
      
  