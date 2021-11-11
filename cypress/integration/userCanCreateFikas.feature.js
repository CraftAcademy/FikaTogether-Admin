describe("Admin can create Fikas by clicking a button", () => {
  describe("Before create request is sent", () => {
    beforeEach(() => {
      cy.intercept("GET", "**/api/fikas**", {
        body: { message: "There are no fikas in the database" },
        statusCode: 404,
      });

      cy.visit("/");
    });

    it("is expected to render a button", () => {
      cy.get("[data-cy=submit-btn]").should("be.visible");
    });

    it.only("is expected that a message is displayed when button is clicked", () => {
      cy.get("[data-cy=submit-btn]").click();
      cy.get("[data-cy=submit-response-toast]").should(
        "contain.text",
        "Your fikas are being scheduled"
      );
    });
  });
  describe("After create request is sent", () => {
    beforeEach(() => {
      cy.intercept("POST", "**/api/fikas**", {
        body: { message: 'Fikas successfully created'},
        statusCode: 201,
      });
      cy.visit("/");
      cy.get("[data-cy=submit-btn]").click();
      cy.intercept("GET", "**/api/fikas**", {
        fixture: "fikaList.json",
        statusCode: 200,
      });
    });
    it("is expected that a list of newly scheduled fikas are displayed after button is clicked", () => {
      cy.wait(100);
      cy.get("[data-cy=submit-response-toast]").should(
        "contain.text",
        "Your fikas are being scheduled"
      );
    });
    it("is expected that there will be five meeting in the table", () => {
      cy.get(".MuiDataGrid-virtualScrollerRenderZone")
        .children()
        .should("have.length", 5);
    });
  });
});
