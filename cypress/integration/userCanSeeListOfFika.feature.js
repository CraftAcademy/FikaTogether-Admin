describe("User can see a list of Fikas", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/api/fikas**", {
      fixture: "fikaList.json",
      statusCode: 200,
    });
    cy.visit("/");
  });

  describe("the upcoming Fikas", () => {
    it("is expected that the Fika table will be visible", () => {
      cy.get("[data-cy=fika-table]").should("be.visible");
    });

    it("is expected that the table has the following columns", () => {
      cy.get(".MuiDataGrid-columnHeaderWrapper").within(() => {
        cy.contains("ID");
        cy.contains("Participant 1");
        cy.contains("Participant 2");
        cy.contains("Date");
      });
    });

    it("is expected that there will be five meeting in the table", () => {
      cy.get(".MuiDataGrid-virtualScrollerRenderZone")
        .children()
        .should("have.length", 5);
    });
  });
});
