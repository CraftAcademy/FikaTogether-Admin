describe("User can see a list of Fikas", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/api/fikas**", {
      fixture: "fikaList.json",
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

  describe("successfully", () => {
    it("is expected that the Fika table will be visible", () => {
      cy.get("[data-cy=fika-table]").should("be.visible");
    });

    it("is expected that the table has the following columns properties", () => {
      cy.get(".MuiDataGrid-columnHeaderWrapper").within(() => {        
        cy.contains("Participant 1").should("be.visible");
        cy.contains("Participant 2").should("be.visible");
        cy.contains("Date").should("be.visible");
      });
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
      cy.visit("/");
      cy.window().its("store").invoke("dispatch", {
        type: "SET_CURRENT_USER",
        payload: true,
      });
    });

    it("is expected that no fika event will be displayed", () => {
      cy.get("[data-cy=fika-table]").within(() => {
        cy.contains("No rows").should("be.visible");
      });
    });
  });
});
