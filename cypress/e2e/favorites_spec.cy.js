// cypress/integration/favorites_spec.cy.js
/* global cy */

describe("Favorites Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/favorites");
  });

  it("should display favorites", () => {
    cy.contains("h1", "Favorites Page").should("be.visible");
  });
});
