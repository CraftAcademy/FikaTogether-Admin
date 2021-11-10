describe("Admin can see a list of departments", () => {
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
  });

  describe("Departments are displayed in the data table", () => {
    it("is expected that the fika table is visible", () => {
      cy.get("[data-cy=departments-btn]").click();
      cy.get("[data-cy=department-table]")
        .should("be.visible")
        .within(() => {
          cy.contains("Department").should("be.visible");
          cy.contains("Average Fika Score").should("be.visible");
          cy.contains("HR")
            .should("be.visible")
            // .next()
            // .contains(4)
            // .should("be.visible");
        });
    });
  });
});

describe("Admin does not see a list of departments", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/api/fikas**", {
      fixture: "fikaList.json",
      statusCode: 200,
    });
    cy.intercept("GET", "**/api/departments**", {
      body: { message: "There are no departments in the database" },
      statusCode: 404,
    });
    cy.visit("/");
  });

  it("is expected to unsuccessfully display api response from departments", () => {
    cy.get("[data-cy=departments-btn]").click();
    cy.get("[data-cy=department-table]").within(() => {
      cy.contains("No rows").should("be.visible");
    });
  });
});
