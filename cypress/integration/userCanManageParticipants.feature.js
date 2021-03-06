describe("Admin can create and delete participants", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/api/fikas**", {
      fixture: "fikaList.json",
      statusCode: 200,
    });
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
      cy.intercept("POST", "**/api/participants**", {
        body: { message: "Participant succesfully added" },
        statusCode: 201,
      });

      cy.intercept("GET", "**/api/departments**", {
        fixture: "updatedDepartmentList.json",
        statusCode: 200,
      });

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

    describe("when a user fills out the form", () => {
      beforeEach(() => {
        cy.get("[data-cy=manage-participants-btn]").click();
        cy.get("[data-cy=name-input]").type("Ben Smith");
        cy.get("[data-cy=email-input]").type("Ben@email.com");
        cy.get("[data-cy=start-date-input]").within(() => {
          cy.get("input:first").clear().type("17/11/2021");
        });
        cy.get("[data-cy=management]").within(() => {
          cy.get("input:first").click();
        });
        cy.get("[data-cy=seniority-level]").click();
        cy.contains("3").click();
        cy.get("[data-cy=add-btn]").click();
        cy.wait(500);
      });
      it("is expected that the form shows a message on submit", () => {
        cy.get("[data-cy=submit-response-toast]").should(
          "contain.text",
          "Participant succesfully added"
        );
      });
      it("is expected that the added participant is in the table", () => {
        cy.get("[data-cy=participant-table]").within(() => {
          cy.contains("Ben Smith").scrollIntoView().should("be.visible");
        });
      });
    });
  });

  describe("unsuccessfully", () => {
    beforeEach(() => {
      cy.intercept("POST", "**/api/participants**", {
        body: { message: "Sorry that department does not exist" },
        statusCode: 422,
      });

      cy.get("[data-cy=departments-btn]").click();
      cy.get("[data-cy=department-table]").within(() => {
        cy.contains("HR").click();
      });
    });

    it("is expected to warn the user when the participant is not added", () => {
      cy.get("[data-cy=manage-participants-btn]").click();

      cy.get("[data-cy=add-btn]").click();
      cy.wait(500);
      cy.get("[data-cy=submit-response-toast]").should(
        "contain.text",
        "Sorry that department does not exist"
      );
    });
  });
});
