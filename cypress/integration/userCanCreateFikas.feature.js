describe("Admin can create Fikas by clicking a button", () => {
  describe.only("After create request is sent", () => {
    beforeEach(() => {
      cy.intercept("GET", "**/api/fikas**", {
        body: { message: "There are no fikas in the database" },
        statusCode: 404,
      });
      cy.intercept("POST", "**/api/fikas**", {
        body: { message: "Fikas successfully created" },
        statusCode: 201,
      });
      cy.visit("/");
      cy.intercept("GET", "**/api/fikas**", {
        fixture: "fikaList.json",
        statusCode: 200,
      });
      cy.get("[data-cy=submit-btn]").click();
    });

    it("is expected to render a button", () => {
      cy.get("[data-cy=submit-btn]").should("be.visible");
    });

    it("is expected that clicking the create fika button will display a message", () => {
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
