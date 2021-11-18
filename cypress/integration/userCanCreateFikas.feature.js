describe("Admin can create Fikas by clicking a button", () => {
  describe("successfully after create request is sent", () => {
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
      cy.get("[data-cy=date-fika]").within(() => {
        cy.get("input:first").clear().type("18/11/2021");
      });
      cy.get("[data-cy=time-fika]").within(() => {
        cy.get("input:first").clear().type("11:00");
      });
      cy.get("[data-cy=submit-btn]").click();

    });

    it("is expected to render a button", () => {
      cy.get("[data-cy=submit-btn]").should("be.visible");
    });

    it("is expected to render a date input", () => {
      cy.get("[data-cy=date-fika]").should("be.visible");
    });

    it("is expected to render a time slot input", () => {
      cy.get("[data-cy=time-fika]").should("be.visible");
    });

    it("is expected that clicking the create fika button will display a message", () => {
      cy.wait(500);
      cy.get("[data-cy=submit-response-toast]").should(
        "contain.text",
        "Fikas successfully created"
      );
    });

    it("is expected that there will be five meetings in the table", () => {
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
      cy.get("[data-cy=date-fika]").within(() => {
        cy.get("input:first").clear().type("17/11/2021");
      });
      cy.get("[data-cy=time-fika]").within(() => {
        cy.get("input:first").clear().type("11:00");
      });
    });

    it("is expected to disable the button when the date is in the wrong format", () => {
      cy.get("[data-cy=date-fika]").within(() => {
        cy.get("input:first").clear().type("I am not a date");
      });
      cy.get("[data-cy=submit-btn]").should("be.disabled");
    });

    it("is expected to disable the button when the time is in the wrong format", () => {
      cy.get("[data-cy=time-fika]").within(() => {
        cy.get("input:first").clear().type("I am not a time");
      });
      cy.get("[data-cy=submit-btn]").should("be.disabled");
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
