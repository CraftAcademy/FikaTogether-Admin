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
      cy.get("[data-cy=company-name]").type("Craft Academy")
      cy.get("[data-cy=company-email]").type("CraftAcademy@CraftAcademy.se")
      cy.get("[data-cy=register-interest-btn]").click()
    })
  });
});
