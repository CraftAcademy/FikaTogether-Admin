describe("A visitor can see information about FikaTogether when visiting the site", () => {
  beforeEach(() => {
    cy.visit("/", {
      onBeforeLoad(window) {
        Object.defineProperty(window.navigator, "language", {
          get: cy.stub().returns("en-GB").as("language"),
        });
      },
    });
  });

  it("is expected that the register interest section to visible", () => {
    cy.get("[data-cy=register-interest]").within(() => {
      cy.get("[data-cy=company-name]")
        .should("be.visible")
        .type("Craft Academy");
      cy.get("[data-cy=company-email]")
        .should("be.visible")
        .type("CraftAcademy@CraftAcademy.se");
      cy.get("[data-cy=register-interest-btn]").should("be.visible").click();
    });
  });

  it("is expected to show three categories", () => {
    cy.get("[data-cy=section-headers]").within(() => {
      cy.contains("What is FikaTogether?").should("be.visible");
      cy.contains("How does FikaTogether work?").should("be.visible");
      cy.contains("What are the benefits in using FikaTogether?").should(
        "be.visible"
      );
    });
  });

  it("is expected to show the about section", () => {
    cy.get("[data-cy=about-section]").should("be.visible");
    cy.get("[data-cy=what-section]").within(() => {
      cy.contains("What is FikaTogether?").should("be.visible");
    });
  });
});
