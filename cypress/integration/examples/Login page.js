

describe('Login Page', function()  {
      beforeEach(() => {
       cy.launchURL();

      })

      it('Is Cosec Logo Displayed', function() {
        cy.get('div.css-1g4e03w div.MuiGrid-root.MuiGrid-container.MuiGrid-direction-xs-column.css-t0v07t-MuiGrid-root div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-1idn90j-MuiGrid-root:nth-child(1) div.MuiGrid-root.MuiGrid-container.css-1dgaazi-MuiGrid-root div.MuiGrid-root.MuiGrid-item.css-3fd9z3-MuiGrid-root div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation12.MuiCard-root.css-1gq6ixi-MuiPaper-root-MuiCard-root div.MuiBox-root.css-1arlb8v div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-2.css-919fip-MuiGrid-root div.MuiGrid-root.MuiGrid-item.css-13i4rnv-MuiGrid-root:nth-child(1) a:nth-child(1) > img:nth-child(1)').should('be.visible');
      })

      it('Is Remember me Displayed', function() {
        cy.get('div.css-1g4e03w div.MuiGrid-root.MuiGrid-container.MuiGrid-direction-xs-column.css-t0v07t-MuiGrid-root div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-1idn90j-MuiGrid-root:nth-child(1) div.MuiGrid-root.MuiGrid-container.css-1dgaazi-MuiGrid-root div.MuiGrid-root.MuiGrid-item.css-3fd9z3-MuiGrid-root div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation12.MuiCard-root.css-1gq6ixi-MuiPaper-root-MuiCard-root div.MuiBox-root.css-1arlb8v div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-2.css-919fip-MuiGrid-root div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-1idn90j-MuiGrid-root:nth-child(3) form:nth-child(1) div.MuiStack-root.css-kpwk9i-MuiStack-root:nth-child(3) label.MuiFormControlLabel-root.MuiFormControlLabel-labelPlacementEnd.css-j204z7-MuiFormControlLabel-root span.MuiTypography-root.MuiTypography-body1.MuiFormControlLabel-label.css-102lq7w-MuiTypography-root > span:nth-child(1)').should('be.visible');
      })

      it('Is Forgot Password Displayed', function() {
        cy.get('div.css-1g4e03w div.MuiGrid-root.MuiGrid-container.MuiGrid-direction-xs-column.css-t0v07t-MuiGrid-root div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-1idn90j-MuiGrid-root:nth-child(1) div.MuiGrid-root.MuiGrid-container.css-1dgaazi-MuiGrid-root div.MuiGrid-root.MuiGrid-item.css-3fd9z3-MuiGrid-root div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation12.MuiCard-root.css-1gq6ixi-MuiPaper-root-MuiCard-root div.MuiBox-root.css-1arlb8v div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-2.css-919fip-MuiGrid-root div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-1idn90j-MuiGrid-root:nth-child(3) form:nth-child(1) div.MuiStack-root.css-kpwk9i-MuiStack-root:nth-child(3) a.MuiTypography-root.MuiTypography-subtitle1.css-fzo8ss-MuiTypography-root > span:nth-child(1)').should('be.visible');
      })

      it('Is Emailtextbox Displayed', function() {
        cy.get('#outlined-adornment-email-profileDetail').should('be.visible');
      })

      it('Is Passwordtextbox Displayed', function() {
        cy.get('#outlined-adornment-password').should('be.visible');
      })
      it('Is Loginbutton Displayed', function() {
        cy.get('div.css-1g4e03w div.MuiGrid-root.MuiGrid-container.MuiGrid-direction-xs-column.css-t0v07t-MuiGrid-root div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-1idn90j-MuiGrid-root:nth-child(1) div.MuiGrid-root.MuiGrid-container.css-1dgaazi-MuiGrid-root div.MuiGrid-root.MuiGrid-item.css-3fd9z3-MuiGrid-root div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation12.MuiCard-root.css-1gq6ixi-MuiPaper-root-MuiCard-root div.MuiBox-root.css-1arlb8v div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-2.css-919fip-MuiGrid-root div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-1idn90j-MuiGrid-root:nth-child(3) form:nth-child(1) div.MuiBox-root.css-1yuhvjn:nth-child(4) > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.css-10554ze-MuiButtonBase-root-MuiButton-root').contains('LOGIN').should('be.visible');
      })

      it('Login Test with valid credentials', function() {
        cy.login();
      })
      })

    
      
  