describe("User can navigate through the app", () => {
  beforeEach(() => {
    cy.visit("/");
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
