

  describe('Forgotpassword Page', function()  {
  beforeEach(() => {
    cy.launchURL();

  })

  it('Forgot password screen navigation', function() {
   cy.get("a[href='/forgot-password']").click();
   cy.url().should('include', '/forgot-password')
   cy.get("a[href='/login']").click();
   cy.url().should('include', 'http://192.168.1.155:3000/login')
  })

  it('is emailtextbox & send button displayed on forgot password screen', function() {
    cy.get("a[href='/forgot-password']").click();
   cy.url().should('include', '/forgot-password')

   cy.get('#outlined-adornment-email-profileDetail').should('be.visible');
   cy.get('div.css-1g4e03w div.MuiGrid-root.MuiGrid-container.MuiGrid-direction-xs-column.css-t0v07t-MuiGrid-root div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-1idn90j-MuiGrid-root:nth-child(1) div.MuiGrid-root.MuiGrid-container.css-1dgaazi-MuiGrid-root div.MuiGrid-root.MuiGrid-item.css-3fd9z3-MuiGrid-root div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation12.MuiCard-root.css-1gq6ixi-MuiPaper-root-MuiCard-root div.MuiBox-root.css-1arlb8v div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-2.css-919fip-MuiGrid-root div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-1idn90j-MuiGrid-root:nth-child(3) form:nth-child(1) div.MuiBox-root.css-1yuhvjn > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-disableElevation.MuiButton-fullWidth.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-disableElevation.MuiButton-fullWidth.css-m3acsh-MuiButtonBase-root-MuiButton-root').should('be.visible');
  })

  it('is cosec logo present on forgotpassword screen', function() {
     cy.get("a[href='/forgot-password']").click();
   cy.url().should('include', '/forgot-password')
   cy.get('div.css-1g4e03w div.MuiGrid-root.MuiGrid-container.MuiGrid-direction-xs-column.css-t0v07t-MuiGrid-root div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-1idn90j-MuiGrid-root:nth-child(1) div.MuiGrid-root.MuiGrid-container.css-1dgaazi-MuiGrid-root div.MuiGrid-root.MuiGrid-item.css-3fd9z3-MuiGrid-root div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation12.MuiCard-root.css-1gq6ixi-MuiPaper-root-MuiCard-root div.MuiBox-root.css-1arlb8v div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-2.css-919fip-MuiGrid-root div.MuiGrid-root.MuiGrid-item.css-13i4rnv-MuiGrid-root:nth-child(1) a:nth-child(1) > img:nth-child(1)').should('be.visible');
  })
})