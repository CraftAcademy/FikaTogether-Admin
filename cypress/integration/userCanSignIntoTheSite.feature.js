describe("A login view render on site load", () => {
  beforeEach(() => {
    cy.intercept("POST", "**api/auth/sign_in", {
      fixture: "authenticationSuccess.json",
      headers: { uid: "user@email.com" },
    });
    cy.intercept("GET", "**api/auth/validate_token**", {
      fixture: "authenticationSuccess.json",
    });
    
    cy.visit("/", {
      onBeforeLoad(window) {
        Object.defineProperty(window.navigator, "language", {
          get: cy.stub().returns("en-GB").as("language"),
        });
      },
    });
  });

  it("is expected to have two input fields and a submit button", () => {
    cy.get("[data-cy=sign-in-form]").children().should("have.length", 3);
  });

  describe("when the sign in is successful", () => {
    beforeEach(() => {
      cy.get("[data-cy=email-input]").type("user@email.com");
      cy.get("[data-cy=password-input]").type("password");
      cy.get("[data-cy=btn-login]").click();
    });

    it("is expected to display a success message and go to the app", () => {
      cy.get("[data-cy=sign-in-toast]").within(() => {
        cy.contains("Login Successful").should("be.visible");
      });
      cy.get("[data-cy=fika-table]").should("be.visible");
    });
  });

  describe("when sign in is not successful", () => {
    beforeEach(() => {
      cy.intercept("POST", "**api/auth/sign_in", {
        statusCode: 401,
        fixture: "authenticationFailure.json",
      });
      cy.intercept("GET", "**api/auth/validate_token**", {
        statusCode: 401,
        fixture: "authenticationFailure.json",
      });
      cy.visit("/");
      cy.get("[data-cy=email-input]").type("user@email.com");
      cy.get("[data-cy=password-input]").type("wrong password");
      cy.get("[data-cy=btn-login]").click();
    });

    it("is expected to display an error message", () => {
      cy.get("[data-cy=sign-in-toast]").within(() => {
        cy.contains("Invalid login credentials. Please try again.").should(
          "be.visible"
        );
      });
    });
  });
});
