describe("Admin can create Fikas by clicking a button", () => {
  describe("successfully After create request is sent", () => {
    beforeEach(() => {
      cy.intercept("GET", "**/api/fikas**", {
        body: { message: "There are no fikas in the database" },
        statusCode: 404,
      });
      cy.intercept("POST", "**/api/fikas**", {
        body: { message: "Fikas successfully created" },
        statusCode: 201,
      });
      cy.intercept("GET", "**/api/fikas**", {
        fixture: "fikaList.json",
        statusCode: 200,
      });
      cy.visit("/");
      cy.window().its("store").invoke("dispatch", {
        type: "SET_CURRENT_USER",
        payload: true,
      });
      cy.get("[data-cy=submit-btn]").click();
    });

    it("is expected to render a button", () => {
      cy.get("[data-cy=submit-btn]").should("be.visible");
    });

    it("is expected to render a dateTime input", () => {
      cy.get("[data-cy=date-time-fika]").should("be.visible");
    });

    it("is expected that clicking the create fika button will display a message", () => {
      cy.wait(500);
      cy.get("[data-cy=submit-response-toast]").should(
        "contain.text",
        "Fikas successfully created"
      );
    });

    it("is expected that there will be five meeting in the table", () => {
      cy.get(".MuiDataGrid-virtualScrollerRenderZone")
        .children()
        .should("have.length", 5);
    });
  });

  describe("unsuccessfully", () => {
    beforeEach(() => {
      cy.intercept("GET", "**/api/fikas**", {
        body: { message: "There are no fikas in the database" },
        statusCode: 404,
      });
      cy.intercept("POST", "**/api/fikas**", {
        body: { message: "There are no participants in the database" },
        statusCode: 404,
      });
      cy.visit("/");
      cy.window().its("store").invoke("dispatch", {
        type: "SET_CURRENT_USER",
        payload: true,
      });
    });

    it.only("is expected to disable the button until a date and time is chosen", () => {
      cy.get("[data-cy=submit-btn]").should("be.disabled");
      cy.get("[data-cy=date-time-fika]").within(() => {
        cy.get("input:first").clear().type("17/11/2021 11:00");
      });
      cy.get("[data-cy=submit-btn]").should("not.be.disabled");
    });

    it("is expected to warn the user when no fikas are created", () => {
      cy.get("[data-cy=submit-btn]").click();
      cy.wait(500);
      cy.get("[data-cy=submit-response-toast]").within(() => {
        cy.contains("There are no participants in the database").should(
          "be.visible"
        );
      });
    });

    it("is expected to disable the button once the button has been clicked", () => {
      cy.get("[data-cy=submit-btn]").click();
      cy.get("[data-cy=submit-btn]").should("be.disabled");
    });
  });
});
