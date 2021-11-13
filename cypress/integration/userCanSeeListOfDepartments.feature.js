describe("Admin can see a list of departments", () => {
  describe("Departments are displayed in the data table", () => {
    before(() => {
      cy.intercept("GET", "**/api/fikas**", {
        fixture: "fikaList.json",
        statusCode: 200,
      });
      cy.intercept("GET", "**/api/departments**", {
        fixture: "departmentList.json",
        statusCode: 200,
      });
      cy.intercept("POST", "**auth/sign_in", {
        fixture: "authenticationSuccess.json",
        headers: { uid: "user@email.com" },
      });
      cy.intercept("GET", "**auth/validate_token**", {
        fixture: "authenticationSuccess.json",
      });
      cy.visit("/");
      cy.get("[data-cy=email-input]").type("user@email.com");
      cy.get("[data-cy=password-input]").type("password");
      cy.get("[data-cy=btn-login]").click();
    });

    it("is expected that the fika table is visible", () => {
      cy.get("[data-cy=departments-btn]").click();
      cy.get("[data-cy=department-table]")
        .should("be.visible")
        .within(() => {
          cy.contains("Department").should("be.visible");
          cy.contains("Average Fika Score").should("be.visible");
          cy.contains("HR").should("be.visible");
        });
    });
  });

  describe("Admin does not see a list of departments", () => {
    before(() => {
      cy.intercept("GET", "**/api/fikas**", {
        fixture: "fikaList.json",
        statusCode: 200,
      });
      cy.intercept("GET", "**/api/departments**", {
        body: { message: "There are no departments in the database" },
        statusCode: 404,
      });
      cy.intercept("POST", "**auth/sign_in", {
        fixture: "authenticationSuccess.json",
        headers: { uid: "user@email.com" },
      });
      cy.intercept("GET", "**auth/validate_token**", {
        fixture: "authenticationSuccess.json",
      });
      cy.visit("/");
      cy.get("[data-cy=email-input]").type("user@email.com");
      cy.get("[data-cy=password-input]").type("password");
      cy.get("[data-cy=btn-login]").click();
    });

    it("is expected to unsuccessfully display api response from departments", () => {
      cy.get("[data-cy=departments-btn]").click();
      cy.get("[data-cy=department-table]").within(() => {
        cy.contains("No rows").should("be.visible");
      });
    });
  });
});
