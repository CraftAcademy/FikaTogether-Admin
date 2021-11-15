describe("Admin can create and delete participants", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/api/departments**", {
      fixture: "departmentList.json",
      statusCode: 200,
    });
    cy.visit("/");
    cy.window().its("store").invoke("dispatch", {
      type: "SET_CURRENT_USER",
      payload: true,
    });
  });

  describe('successfully', () => {
    beforeEach(() => {
      cy.get("[data-cy=departments-btn]").click();
      cy.get("[data-cy=department-table]").within(() => {
        cy.contains("HR").click();
      });
    });

    it.only('is expected to display a manage participants button', () => {
      cy.get('[data-cy=manage-participants-btn').should('be.visible')
    });

    it('is expected to display an input form when clicked', () => {
      cy.get('[data-cy=manage-participants-btn').click()
      cy.get('[data-cy=participant-input-form]').should('be.visible')
    });
  });
});
