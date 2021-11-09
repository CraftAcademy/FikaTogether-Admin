describe("User can browse through the app", () => {
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
});
