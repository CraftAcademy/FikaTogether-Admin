describe("User can see a list of Fikas", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.intercept("GET", "**api/", {
      fixture: "fikaList.json",
      statusCode: 200,
    });
  });

  describe("the upcoming Fikas", () => {
    it("is expected to display five different Fika meetings in a table", () => {
      cy.get("[data-cy=fika-table]").should("be.visible");
    });

    it("is expected that the table has the following columns", () => {
      cy.get(
        ".MuiDataGrid-columnHeaderWrapper"
      ).within(() => {
        cy.contains("ID");
        cy.contains("Goer_1");
        cy.contains("Goer_2");
        cy.contains("Date");
      });
    });
  });
});
