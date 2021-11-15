describe("Admin can see a list of departments", () => {
  beforeEach(() => {
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
  });

  describe("successfully", () => {
    it("is expected that the participant table is visible", () => {
      cy.get("[data-cy=department-table]").within(() => {
        cy.contains("HR").click();
      });
      cy.get("[data-cy=participant-table]")
        .should("be.visible")
        .within(() => {
          cy.contains("Name").should("be.visible");
          cy.contains("Fika Score").should("be.visible");
        });
      cy.get(".MuiDataGrid-virtualScrollerRenderZone")
        .children()
        .should("have.length", 6);
    });

    it("is expected that changing department renders new participants", () => {
      cy.get("[data-cy=departments-btn]").click();
      cy.get("[data-cy=department-table]").within(() => {
        cy.contains("Production").click();
      });
      cy.get(".MuiDataGrid-virtualScrollerRenderZone")
        .children()
        .should("have.length", 2);
    });
  });

  describe("unsuccessfully", () => {
    it("is expected that a toast will be displayed", () => {
      cy.get("[data-cy=departments-btn]").click();
      cy.get("[data-cy=department-table]").within(() => {
        cy.contains("Marketing").click();
      });
      cy.get("[data-cy=participant-table]").within(() => {
        cy.contains("No rows").should("be.visible");
      });
    });
  });
});
