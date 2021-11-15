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
    cy.visit("/", {
      onBeforeLoad(window) {
        Object.defineProperty(window.navigator, "language", {
          get: cy.stub().returns("en-GB").as("language"),
        });
      },
    });
    cy.window().its("store").invoke("dispatch", {
      type: "SET_CURRENT_USER",
      payload: true,
    });
  });

  it("is expected to display a navbar and contain Departments, Events and About", () => {
    cy.get("[data-cy=departments-btn]")
      .should("be.visible")
      .and("have.text", "Departments");
    cy.get("[data-cy=language-btn]")
      .should("be.visible")
      .and("have.text", "Svenska");
    cy.get("[data-cy=contact-btn]")
      .should("be.visible")
      .and("have.text", "Contact");
  });

  it("is expected to display the correct url when at the Departments page", () => {
    cy.get("[data-cy=departments-btn]").click();
    cy.url().should("contain", "/departments");
  });

  it("is expected to display the correct url when at the about page", () => {
    cy.get("[data-cy=contact-btn]").click();
    cy.url().should("contain", "/contact");
  });

  it("is expected to chose the language of the browser on load", () => {
    cy.get("[data-cy=language-btn]").within(() => {
      cy.contains("Svenska").should("be.visible");
    });
  });
});

describe("When the language button is pressed", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/api/fikas**", {
      fixture: "fikaList.json",
      statusCode: 200,
    });
    cy.intercept("GET", "**api/departments**", {
      fixture: "departmentList.json",
      statusCode: 200,
    });
    cy.visit("/");
    cy.window().its("store").invoke("dispatch", {
      type: "SET_CURRENT_USER",
      payload: true,
    });
  });

  it("is expected to change language when language button is clicked", () => {
    cy.get("[data-cy=language-btn]").click();
    cy.get("[data-cy=language-btn]").within(() => {
      cy.contains("Svenska").should("be.visible");
    });
  });
});
