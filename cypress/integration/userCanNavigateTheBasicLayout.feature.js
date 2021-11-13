describe("User can navigate through the app", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/api/fikas**", {
      fixture: "fikaList.json",
      statusCode: 200,
    });
    cy.intercept("GET", "**api/departments**", {
      fixture: "departmentList.json",
      statusCode: 200,
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
  });

  it("is expected to display a navbar and contain Departments, Events and About", () => {
    cy.get("[data-cy=departments-btn]")
      .should("be.visible")
      .and("have.text", "Departments");
    cy.get("[data-cy=events-btn]")
      .should("be.visible")
      .and("have.text", "Events");
    cy.get("[data-cy=about-btn]")
      .should("be.visible")
      .and("have.text", "About");
  });

  it("is expected to display the correct url when at the Departments page", () => {
    cy.get("[data-cy=departments-btn]").click();
    cy.url().should("contain", "/departments");
  });

  it("is expected to display the correct url when at the event page", () => {
    cy.get("[data-cy=events-btn]").click();
    cy.url().should("contain", "/");
  });

  it("is expected to display the correct url when at the about page", () => {
    cy.get("[data-cy=about-btn]").click();
    cy.url().should("contain", "/about");
  });
});
