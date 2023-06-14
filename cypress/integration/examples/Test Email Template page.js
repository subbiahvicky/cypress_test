import EmailTemplate from "../Page Objects/Email Template Page"

describe('Email Template page', function () {

  const emailtemplate = new EmailTemplate();
  beforeEach(() => {
    cy.login()
  })

  it('Email templates page navigation', function () {
    emailtemplate.click_emailtemplates()
    cy.url().should('include', '/email-templates')
  })

  it('verify Email template page title', function () {
    emailtemplate.click_emailtemplates()
    cy.url().should('include', '/email-templates')
    cy.title().should('eq', 'CoSec - Email Templates')
  });

  it('verify Add Email templates tool tip', function () {
    emailtemplate.click_emailtemplates()
    cy.url().should('include', '/email-templates')
    emailtemplate.addbutton_tooltip_with_title()

  })

  it('Add Email templates navigation ', function () {
    emailtemplate.click_emailtemplates()
    cy.url().should('include', '/email-templates')
    emailtemplate.click_add_emailtemplate()
    cy.url().should('include', '/email-templates/add')
    emailtemplate.click_cancel()
    cy.url().should('include', '/email-templates')
  })

  it('verify Edit Email templates tool tip', function () {
    emailtemplate.click_emailtemplates()
    cy.url().should('include', '/email-templates')
    emailtemplate.editbutton_email_template_tooltip()

  })

  it('Edit Email templates navigation ', function () {
    emailtemplate.click_emailtemplates()
    emailtemplate.click_edit_email_template()
    emailtemplate.click_cancel
  })

  it('verify Deactivate Email templates tool tip', function () {
    emailtemplate.click_emailtemplates()
    cy.url().should('include', '/email-templates')
    emailtemplate.deactivate_email_template_tooltip()
  })

  it('Deactivate Email templates navigation ', function () {
    emailtemplate.click_emailtemplates()
    emailtemplate.click_deactivate_email_template()
   // emailtemplate.click_cancel()
   cy.get('div.MuiDialog-root.MuiModal-root.css-zw3mfo-MuiModal-root-MuiDialog-root:nth-child(3) div.MuiDialog-container.MuiDialog-scrollPaper.css-hz1bth-MuiDialog-container:nth-child(3) div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation24.MuiDialog-paper.MuiDialog-paperScrollPaper.MuiDialog-paperWidthSm.css-iwph65-MuiPaper-root-MuiDialog-paper div.MuiDialogActions-root.MuiDialogActions-spacing.css-6aihwk-MuiDialogActions-root button.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeSmall.MuiButton-textSizeSmall.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeSmall.MuiButton-textSizeSmall.css-uqgs94-MuiButtonBase-root-MuiButton-root:nth-child(2) > span:nth-child(1)').click()
  })
})



