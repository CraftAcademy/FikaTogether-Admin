describe("User can navigate through the app", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("is expected to display a navbar and contain Home, Events and About", () => {
    cy.get("[data-cy=home-btn]").should("be.visible").and("have.text", "Home");
    cy.get("[data-cy=events-btn]")
      .should("be.visible")
      .and("have.text", "Events");
    cy.get("[data-cy=about-btn]")
      .should("be.visible")
      .and("have.text", "About");
  });

  it('is expected to display the correct url when at the home page', () => {
    cy.get("[data-cy=home-btn]").click()
    cy.url().should("contain", "/")    
  });

  it('is expected to display the correct url when at the event page', () => {
    cy.get("[data-cy=events-btn]").click()
    cy.url().should("contain", "/events")    
  });

  it('is expected to display the correct url when at the about page', () => {
    cy.get("[data-cy=about-btn]").click()
    cy.url().should("contain", "/about")    
  });
});
