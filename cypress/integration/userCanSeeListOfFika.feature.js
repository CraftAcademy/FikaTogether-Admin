describe("User can see a list of Fikas", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/api/fikas**", {
      fixture: "fikaList.json",
      statusCode: 200,
    });
    cy.visit("/");
  });

  describe("Displays the upcoming Fikas events", () => {
    it("is expected that the Fika table will be visible", () => {
      cy.get("[data-cy=fika-table]").should("be.visible");
    });

    it("is expected that the table has the following columns properties", () => {
      cy.get(".MuiDataGrid-columnHeaderWrapper").within(() => {
        cy.contains("ID").should("be.visible");
        cy.contains("Participant 1").should("be.visible");
        cy.contains("Participant 2").should("be.visible");
        cy.contains("Date").should("be.visible");
      });
    });

    it("is expected that there will be five meeting in the table", () => {
      cy.get(".MuiDataGrid-virtualScrollerRenderZone")
        .children()
        .should("have.length", 5);
    });
  });

  describe("When events can not be displayed", () => {
    beforeEach(() => {
      cy.intercept("GET", "**/api/fikas**", {
        body: { message: "There are no fikas in the database" },
        statusCode: 404,
      });
      cy.visit("/");
    });

    it.only("is expected that no fika event will be displayed", () => {
      cy.get("[data-cy=fika-table]").within(() => {
        cy.contains("No rows").should("be.visible");
      });
    });
  });
});
