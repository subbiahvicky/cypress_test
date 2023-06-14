import rgbHex from 'rgb-hex';

//Execution pending
describe('Email Hystory page', function()  {
  beforeEach(() => {
    cy.login()
  })

  it('Email Hystory navigation', function() {
    cy.get('div.MuiBox-root.css-83lbow nav.MuiBox-root.css-rs0zx6 div.MuiDrawer-root.MuiDrawer-docked.css-1mqfhnx-MuiDrawer-docked div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation0.MuiDrawer-paper.MuiDrawer-paperAnchorLeft.MuiDrawer-paperAnchorDockedLeft.css-1rcxgiw-MuiPaper-root-MuiDrawer-paper div.scrollbar-container.ps.ps--active-y ul.MuiList-root.MuiList-padding.MuiList-subheader.css-p64g7a-MuiList-root:nth-child(3) a.MuiButtonBase-root.MuiListItemButton-root.MuiListItemButton-gutters.MuiListItemButton-root.MuiListItemButton-gutters.css-epupty-MuiButtonBase-root-MuiListItemButton-root:nth-child(9) div.MuiListItemText-root.css-1j7nhag-MuiListItemText-root > p.MuiTypography-root.MuiTypography-body1.css-19u81b4-MuiTypography-root').click()
    cy.url().should('include', '/notifications')
  })

  it('Email Hystory page title', function() {
    cy.get('div.MuiBox-root.css-83lbow nav.MuiBox-root.css-rs0zx6 div.MuiDrawer-root.MuiDrawer-docked.css-1mqfhnx-MuiDrawer-docked div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation0.MuiDrawer-paper.MuiDrawer-paperAnchorLeft.MuiDrawer-paperAnchorDockedLeft.css-1rcxgiw-MuiPaper-root-MuiDrawer-paper div.scrollbar-container.ps.ps--active-y ul.MuiList-root.MuiList-padding.MuiList-subheader.css-p64g7a-MuiList-root:nth-child(3) a.MuiButtonBase-root.MuiListItemButton-root.MuiListItemButton-gutters.MuiListItemButton-root.MuiListItemButton-gutters.css-epupty-MuiButtonBase-root-MuiListItemButton-root:nth-child(9) div.MuiListItemText-root.css-1j7nhag-MuiListItemText-root > p.MuiTypography-root.MuiTypography-body1.css-19u81b4-MuiTypography-root').click()
    cy.url().should('include', '/notifications')
    cy.title().should('eq', 'CoSec - Notifications')
  })

})