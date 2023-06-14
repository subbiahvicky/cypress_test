

describe('Prospects page', function()  {
  beforeEach(() => {
    cy.login()
  })

  it('Prospects page navigation', function() {
    cy.get('div.MuiBox-root.css-83lbow nav.MuiBox-root.css-rs0zx6 div.MuiDrawer-root.MuiDrawer-docked.css-1mqfhnx-MuiDrawer-docked div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation0.MuiDrawer-paper.MuiDrawer-paperAnchorLeft.MuiDrawer-paperAnchorDockedLeft.css-1rcxgiw-MuiPaper-root-MuiDrawer-paper div.scrollbar-container.ps.ps--active-y ul.MuiList-root.MuiList-padding.MuiList-subheader.css-p64g7a-MuiList-root:nth-child(3) a.MuiButtonBase-root.MuiListItemButton-root.MuiListItemButton-gutters.MuiListItemButton-root.MuiListItemButton-gutters.css-epupty-MuiButtonBase-root-MuiListItemButton-root:nth-child(5) div.MuiListItemText-root.css-1j7nhag-MuiListItemText-root > p.MuiTypography-root.MuiTypography-body1.css-19u81b4-MuiTypography-root').click()
    cy.url().should('include', '/prospects')
  })

  it('Prospects page title', function() {
    cy.get('div.MuiBox-root.css-83lbow nav.MuiBox-root.css-rs0zx6 div.MuiDrawer-root.MuiDrawer-docked.css-1mqfhnx-MuiDrawer-docked div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation0.MuiDrawer-paper.MuiDrawer-paperAnchorLeft.MuiDrawer-paperAnchorDockedLeft.css-1rcxgiw-MuiPaper-root-MuiDrawer-paper div.scrollbar-container.ps.ps--active-y ul.MuiList-root.MuiList-padding.MuiList-subheader.css-p64g7a-MuiList-root:nth-child(3) a.MuiButtonBase-root.MuiListItemButton-root.MuiListItemButton-gutters.MuiListItemButton-root.MuiListItemButton-gutters.css-epupty-MuiButtonBase-root-MuiListItemButton-root:nth-child(5) div.MuiListItemText-root.css-1j7nhag-MuiListItemText-root > p.MuiTypography-root.MuiTypography-body1.css-19u81b4-MuiTypography-root').click()
    cy.url().should('include', '/prospects')
    cy.title().should('eq', 'CoSec - Prospects')
  })

  it('Add Prospects tool tip', function() {
    cy.get('div.MuiBox-root.css-83lbow nav.MuiBox-root.css-rs0zx6 div.MuiDrawer-root.MuiDrawer-docked.css-1mqfhnx-MuiDrawer-docked div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation0.MuiDrawer-paper.MuiDrawer-paperAnchorLeft.MuiDrawer-paperAnchorDockedLeft.css-1rcxgiw-MuiPaper-root-MuiDrawer-paper div.scrollbar-container.ps.ps--active-y ul.MuiList-root.MuiList-padding.MuiList-subheader.css-p64g7a-MuiList-root:nth-child(3) a.MuiButtonBase-root.MuiListItemButton-root.MuiListItemButton-gutters.MuiListItemButton-root.MuiListItemButton-gutters.css-epupty-MuiButtonBase-root-MuiListItemButton-root:nth-child(5) div.MuiListItemText-root.css-1j7nhag-MuiListItemText-root > p.MuiTypography-root.MuiTypography-body1.css-19u81b4-MuiTypography-root').click()
    cy.url().should('include', '/prospects')
    cy.contains('ADD').trigger('mouseover') 
  .invoke('attr', 'title') 
  .then((tooltipText) => {
    cy.log(`Tooltip text: ${tooltipText}`)
    expect(tooltipText).to.equal('Add Prospect');
  })
  })

  it('Add Prospects navigation', function() {
    cy.get('div.MuiBox-root.css-83lbow nav.MuiBox-root.css-rs0zx6 div.MuiDrawer-root.MuiDrawer-docked.css-1mqfhnx-MuiDrawer-docked div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation0.MuiDrawer-paper.MuiDrawer-paperAnchorLeft.MuiDrawer-paperAnchorDockedLeft.css-1rcxgiw-MuiPaper-root-MuiDrawer-paper div.scrollbar-container.ps.ps--active-y ul.MuiList-root.MuiList-padding.MuiList-subheader.css-p64g7a-MuiList-root:nth-child(3) a.MuiButtonBase-root.MuiListItemButton-root.MuiListItemButton-gutters.MuiListItemButton-root.MuiListItemButton-gutters.css-epupty-MuiButtonBase-root-MuiListItemButton-root:nth-child(5) div.MuiListItemText-root.css-1j7nhag-MuiListItemText-root > p.MuiTypography-root.MuiTypography-body1.css-19u81b4-MuiTypography-root').click()
    cy.url().should('include', '/prospects')
    cy.contains('ADD').click();
    cy.url().should('include', '/prospects/add')
    cy.contains('CANCEL').click()
    cy.url().should('include', '/prospects')
  
  })
  it('verify Edit Prospects tool tip', function() {
    cy.get('div.MuiBox-root.css-83lbow nav.MuiBox-root.css-rs0zx6 div.MuiDrawer-root.MuiDrawer-docked.css-1mqfhnx-MuiDrawer-docked div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation0.MuiDrawer-paper.MuiDrawer-paperAnchorLeft.MuiDrawer-paperAnchorDockedLeft.css-1rcxgiw-MuiPaper-root-MuiDrawer-paper div.scrollbar-container.ps.ps--active-y ul.MuiList-root.MuiList-padding.MuiList-subheader.css-p64g7a-MuiList-root:nth-child(3) a.MuiButtonBase-root.MuiListItemButton-root.MuiListItemButton-gutters.MuiListItemButton-root.MuiListItemButton-gutters.css-epupty-MuiButtonBase-root-MuiListItemButton-root:nth-child(5) div.MuiListItemText-root.css-1j7nhag-MuiListItemText-root > p.MuiTypography-root.MuiTypography-body1.css-19u81b4-MuiTypography-root').click()
    cy.url().should('include', '/prospects')

     cy.get('div.MuiDataGrid-main').within(() => {
       // Find the first row in the Data Grid
       cy.get('.MuiDataGrid-row').first().within(() => {
         // Find the action button within the first row and click it
         cy.get("a[aria-label='EDIT']").trigger('mouseover') 
         .invoke('attr', 'aria-label') 
         .then((tooltipText) => {
           cy.log(`Tooltip text: ${tooltipText}`)
           expect(tooltipText).to.equal('EDIT');
         })
       });
     });
 
   })

 it('Edit Prospects navigation', function() {
    cy.get('div.MuiBox-root.css-83lbow nav.MuiBox-root.css-rs0zx6 div.MuiDrawer-root.MuiDrawer-docked.css-1mqfhnx-MuiDrawer-docked div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation0.MuiDrawer-paper.MuiDrawer-paperAnchorLeft.MuiDrawer-paperAnchorDockedLeft.css-1rcxgiw-MuiPaper-root-MuiDrawer-paper div.scrollbar-container.ps.ps--active-y ul.MuiList-root.MuiList-padding.MuiList-subheader.css-p64g7a-MuiList-root:nth-child(3) a.MuiButtonBase-root.MuiListItemButton-root.MuiListItemButton-gutters.MuiListItemButton-root.MuiListItemButton-gutters.css-epupty-MuiButtonBase-root-MuiListItemButton-root:nth-child(5) div.MuiListItemText-root.css-1j7nhag-MuiListItemText-root > p.MuiTypography-root.MuiTypography-body1.css-19u81b4-MuiTypography-root').click()
    cy.url().should('include', '/prospects')

    cy.get('div.MuiDataGrid-main').within(() => {
      // Find the first row in the Data Grid
      cy.get('.MuiDataGrid-row').first().within(() => {
        // Find the action button within the first row and click it
        cy.get("a[aria-label='EDIT']").click();
      });
    });
    cy.contains('CANCEL').click()
  
      })

      it('verify Deactivate Prospects tool tip', function() {
        cy.get('div.MuiBox-root.css-83lbow nav.MuiBox-root.css-rs0zx6 div.MuiDrawer-root.MuiDrawer-docked.css-1mqfhnx-MuiDrawer-docked div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation0.MuiDrawer-paper.MuiDrawer-paperAnchorLeft.MuiDrawer-paperAnchorDockedLeft.css-1rcxgiw-MuiPaper-root-MuiDrawer-paper div.scrollbar-container.ps.ps--active-y ul.MuiList-root.MuiList-padding.MuiList-subheader.css-p64g7a-MuiList-root:nth-child(3) a.MuiButtonBase-root.MuiListItemButton-root.MuiListItemButton-gutters.MuiListItemButton-root.MuiListItemButton-gutters.css-epupty-MuiButtonBase-root-MuiListItemButton-root:nth-child(5) div.MuiListItemText-root.css-1j7nhag-MuiListItemText-root > p.MuiTypography-root.MuiTypography-body1.css-19u81b4-MuiTypography-root').click()
        cy.url().should('include', '/prospects')
        cy.get('div.MuiDataGrid-main').within(() => {
          // Find the first row in the Data Grid
          cy.get('.MuiDataGrid-row').first().within(() => {
            // Find the action button within the first row and click it
            cy.get("button[aria-label='DEACTIVATE']").trigger('mouseover') 
            .invoke('attr', 'aria-label') 
            .then((tooltipText) => {
              cy.log(`Tooltip text: ${tooltipText}`)
              expect(tooltipText).to.equal('DEACTIVATE');
            })
          });
        });
    
      })

      it('Deactivate Prospects navigation ', function() {
    cy.get('div.MuiBox-root.css-83lbow nav.MuiBox-root.css-rs0zx6 div.MuiDrawer-root.MuiDrawer-docked.css-1mqfhnx-MuiDrawer-docked div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation0.MuiDrawer-paper.MuiDrawer-paperAnchorLeft.MuiDrawer-paperAnchorDockedLeft.css-1rcxgiw-MuiPaper-root-MuiDrawer-paper div.scrollbar-container.ps.ps--active-y ul.MuiList-root.MuiList-padding.MuiList-subheader.css-p64g7a-MuiList-root:nth-child(3) a.MuiButtonBase-root.MuiListItemButton-root.MuiListItemButton-gutters.MuiListItemButton-root.MuiListItemButton-gutters.css-epupty-MuiButtonBase-root-MuiListItemButton-root:nth-child(5) div.MuiListItemText-root.css-1j7nhag-MuiListItemText-root > p.MuiTypography-root.MuiTypography-body1.css-19u81b4-MuiTypography-root').click()
    cy.url().should('include', '/prospects')
        cy.get('div.MuiDataGrid-main').within(() => {
      // Find the first row in the Data Grid
        cy.get('.MuiDataGrid-row').first().within(() => {
        // Find the action button within the first row and click it
        cy.get("button[aria-label='DEACTIVATE']").click();
      });
    });
    cy.contains('Cancel').click()
    

  })
      })

      
    