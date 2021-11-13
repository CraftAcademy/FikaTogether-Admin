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
      cy.intercept("POST", "**auth/sign_in", {
        fixture: "authenticationSuccess.json",
        headers: { uid: "user@email.com" },
      });
      cy.intercept("GET", "**auth/validate_token**", {
        fixture: "authenticationSuccess.json",
      });
      cy.intercept("GET", "**/api/fikas**", {
        fixture: "fikaList.json",
        statusCode: 200,
      });
      cy.visit("/");
      cy.get("[data-cy=email-input]").type("user@email.com");
      cy.get("[data-cy=password-input]").type("password");
      cy.get("[data-cy=btn-login]").click();
      cy.get("[data-cy=submit-btn]").click();
    });

    it("is expected to render a button", () => {
      cy.get("[data-cy=submit-btn]").should("be.visible");
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
      cy.intercept("POST", "**auth/sign_in", {
        fixture: "authenticationSuccess.json",
        headers: { uid: "user@email.com" },
      });
      cy.intercept("GET", "**auth/validate_token**", {
        fixture: "authenticationSuccess.json",
      });
      cy.visit("/");
      cy.get("[data-cy=email-input]").type("user@email.com");
      cy.get("[data-cy=password-input]").type("password");
      cy.get("[data-cy=btn-login]").click();
      cy.get("[data-cy=submit-btn]").click();
    });

    it("is expected to warn the user when no fikas are created", () => {
      cy.wait(500);
      cy.get("[data-cy=submit-response-toast]").within(() => {
        cy.contains("There are no participants in the database").should(
          "be.visible"
        );
      });
    });

    it("is expected to disable the button once the button has been clicked", () => {
      cy.get("[data-cy=submit-btn]").should("be.disabled");
    });
  });
});
