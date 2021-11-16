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

  describe("successfully", () => {
    beforeEach(() => {
      cy.get("[data-cy=departments-btn]").click();
      cy.get("[data-cy=department-table]").within(() => {
        cy.contains("HR").click();
      });
    });

    it("is expected to display a manage participants button", () => {
      cy.get("[data-cy=manage-participants-btn]").should("be.visible");
    });

    it("is expected to display an input form when clicked", () => {
      cy.get("[data-cy=manage-participants-btn]").click();
      cy.get("[data-cy=add-participant-form]").should("be.visible");
    });

    it.only("is expected that the form shows a message on submit", () => {
      cy.get("[data-cy=manage-participants-btn]").click();
      cy.get("[data-cy=name-input]").type("Ben Smith");
      // cy.get("[data-cy=email-input]").type("Ben@email.com");
      // cy.get("[data-cy=start-date-input]").within(() => {
      //   cy.get("input:first").clear().type("11/17/2021");
      // });
      // cy.get("[data-cy=management]").within(() => {
      //   cy.get("input:first").click();
      // });
      // cy.get("[data-cy=seniority-level]").click();
      // cy.contains("3").should("be.visible").click();
      cy.get("[data-cy=add-btn]").click();
      cy.wait(500);
      cy.get("[data-cy=submit-response-toast]").should(
        "contain.text",
        "Participant succesfully added"
      );
    });
  });
});
