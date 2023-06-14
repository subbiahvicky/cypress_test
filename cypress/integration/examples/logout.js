

describe('Logout Page', function()  {
  beforeEach(() => {
    cy.login()

  })

  it('Logout page navigation', function() {
    cy.get('div:nth-child(2) div.MuiBox-root.css-83lbow header.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation0.MuiAppBar-root.MuiAppBar-colorInherit.MuiAppBar-positionFixed.mui-fixed.css-1l8n1ui-MuiPaper-root-MuiAppBar-root div.MuiToolbar-root.MuiToolbar-gutters.MuiToolbar-regular.css-118nniq-MuiToolbar-root > div.MuiButtonBase-root.MuiChip-root.MuiChip-outlined.MuiChip-sizeMedium.MuiChip-colorSecondary.MuiChip-clickable.MuiChip-clickableColorSecondary.MuiChip-outlinedSecondary.css-17cq09g-MuiButtonBase-root-MuiChip-root:nth-child(7)').click()
    cy.get('div.MuiBox-root.css-83lbow header.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation0.MuiAppBar-root.MuiAppBar-colorInherit.MuiAppBar-positionFixed.mui-fixed.css-1l8n1ui-MuiPaper-root-MuiAppBar-root div.MuiToolbar-root.MuiToolbar-gutters.MuiToolbar-regular.css-118nniq-MuiToolbar-root div.css-advny6-MuiPopper-root.MuiPopper-root:nth-child(8) div.MuiBox-root.css-0 div.MuiBox-root.css-4vejhq div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation0.css-n5s397-MuiPaper-root div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation16.MuiCard-root.css-1sq4td-MuiPaper-root-MuiCard-root div.scrollbar-container.ps.ps--active-x.ps--active-y div.MuiBox-root.css-ydieok > nav.MuiList-root.MuiList-padding.css-u0m5pp-MuiList-root').find('div.MuiButtonBase-root').eq('3').click();
    cy.url().should('include', '/login')
  })

  
})