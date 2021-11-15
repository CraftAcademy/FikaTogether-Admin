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
    });

    it("is expected that the department table is visible", () => {
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

  describe("unsuccessfully", () => {
    before(() => {
      cy.intercept("GET", "**/api/fikas**", {
        fixture: "fikaList.json",
        statusCode: 200,
      });
      cy.intercept("GET", "**/api/departments**", {
        body: { message: "There are no departments in the database" },
        statusCode: 404,
      });
      cy.visit("/");
      cy.window().its("store").invoke("dispatch", {
        type: "SET_CURRENT_USER",
        payload: true,
      });
    });

    it("is expected to unsuccessfully display api response from departments", () => {
      cy.get("[data-cy=departments-btn]").click();
      cy.get("[data-cy=department-table]").within(() => {
        cy.contains("No rows").should("be.visible");
      });
    });
  });
});
