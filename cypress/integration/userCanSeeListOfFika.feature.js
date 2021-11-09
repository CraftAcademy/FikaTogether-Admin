describe("User can see a list of Fikas", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.intercept("GET", "**api/", {
      fixture: "fikaList.json",
      statusCode: 200,
    });
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
      cy.get("data-cy=meeting-1").should("be.visble");
      cy.get("data-cy=meeting-2").should("be.visble");
      cy.get("data-cy=meeting-3").should("be.visble");
      cy.get("data-cy=meeting-4").should("be.visble");
      cy.get("data-cy=meeting-5").should("be.visble");
    });
  });
});
