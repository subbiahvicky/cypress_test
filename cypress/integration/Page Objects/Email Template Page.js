export default class EmailTemplate{

click_emailtemplates(){
return  cy.get('div.MuiBox-root.css-83lbow nav.MuiBox-root.css-rs0zx6 div.MuiDrawer-root.MuiDrawer-docked.css-1mqfhnx-MuiDrawer-docked div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation0.MuiDrawer-paper.MuiDrawer-paperAnchorLeft.MuiDrawer-paperAnchorDockedLeft.css-1rcxgiw-MuiPaper-root-MuiDrawer-paper div.scrollbar-container.ps.ps--active-y ul.MuiList-root.MuiList-padding.MuiList-subheader.css-p64g7a-MuiList-root:nth-child(3) a.MuiButtonBase-root.MuiListItemButton-root.MuiListItemButton-gutters.MuiListItemButton-root.MuiListItemButton-gutters.css-epupty-MuiButtonBase-root-MuiListItemButton-root:nth-child(2) div.MuiListItemText-root.css-1j7nhag-MuiListItemText-root > p.MuiTypography-root.MuiTypography-body1.css-19u81b4-MuiTypography-root').click()
}

addbutton_tooltip_with_title(){
    
  return  cy.contains('ADD').trigger('mouseover') 
  .invoke('attr', 'title') 
  .then((tooltipText) => {
    cy.log(`Tooltip text: ${tooltipText}`)
    expect(tooltipText).to.equal('Add Email Template');
})
}

click_add_emailtemplate(){
    return cy.contains('ADD').click();
}
click_cancel(){
  return  cy.contains('CANCEL').click()
}
editbutton_email_template_tooltip(){
    cy.get('div.MuiDataGrid-main').within(() => {
        cy.get('.MuiDataGrid-row').first().within(() => {
        cy.get("a[aria-label='EDIT']").trigger('mouseover') 
            .invoke('attr', 'aria-label') 
            .then((tooltipText) => {
        cy.log(`Tooltip text: ${tooltipText}`)
              expect(tooltipText).to.equal('EDIT');
            })
          });
        });
}
click_edit_email_template(){
    cy.url().should('include', '/email-templates')
    cy.get('div.MuiDataGrid-main').within(() => {
      cy.get('.MuiDataGrid-row').first().within(() => {
        cy.get("a[aria-label='EDIT']").click();
      });
    });
}
deactivate_email_template_tooltip(){
    cy.get('div.MuiDataGrid-main').within(() => {
        cy.get('.MuiDataGrid-row').first().within(() => {
        cy.get("button[aria-label='DEACTIVATE']").trigger('mouseover') 
            .invoke('attr', 'aria-label') 
            .then((tooltipText) => {
        cy.log(`Tooltip text: ${tooltipText}`)
              expect(tooltipText).to.equal('DEACTIVATE');
            })
          });
        });
}

click_deactivate_email_template(){
    cy.url().should('include', '/email-templates')
    cy.get('div.MuiDataGrid-main').within(() => {
      cy.get('.MuiDataGrid-row').first().within(() => {
        cy.get("button[aria-label='DEACTIVATE']").click();
      });
    });
}
}
//export default EmailTemplate;
