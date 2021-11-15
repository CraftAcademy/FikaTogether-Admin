describe("Admin can see a list of departments", () => {
  describe("successfully", () => {
    before(() => {
      cy.intercept("GET", "**/api/fikas**", {
        fixture: "fikaList.json",
        statusCode: 200,
      });
      cy.intercept("GET", "**/api/departments**", {
        fixture: "departmentList.json",
        statusCode: 200,
      });
      cy.visit("/", {
        onBeforeLoad(window) {
          Object.defineProperty(window.navigator, "language", {
            get: cy.stub().returns("en-GB").as("language"),
          });
        },
      });
      cy.window().its("store").invoke("dispatch", {
        type: "SET_CURRENT_USER",
        payload: true,
      });
      cy.get("[data-cy=departments-btn]").click();
      cy.get("[data-cy=department-table]").within(() => {
        cy.contains("HR").click();
      });
    });

    it("is expected that the employee table is visible", () => {
      cy.get("[data-cy=employee-table]")
        .should("be.visible")
        .within(() => {
          cy.contains("name").should("be.visible");
          cy.contains("Total Fika Score").should("be.visible");
        });
    });
  });
});
