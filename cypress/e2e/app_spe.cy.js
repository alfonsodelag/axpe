// cypress/integration/app_spec.cy.js
/* global cy */

describe("React Meetups App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display the main navigation", () => {
    cy.get('[data-test="navigation-header"]').should("be.visible");
    cy.contains("All Meetups").should("be.visible");
    cy.contains("Add New Meetup").should("be.visible");
    cy.contains("My Favorites").should("be.visible");
  });
});
