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
      cy.get("[data-cy=fika-table]").children().should("have.length", 5)
    });

    it('is expected that the table has the following columns', () => {
      cy.get("[data-cy=fika-table]").within(() => {
        cy.get("data-cy=id").should("be.visible")
        cy.get("data-cy=goer_1").should("be.visible")
        cy.get("data-cy=goer_2").should("be.visible")
        cy.get("data-cy=date").should("be.visible")
      })
    });
  });
});
