// cypress/integration/favorites_spec.cy.js
/* global cy */

describe("Meetup App", () => {
  it("should favorite an item and see it in the favorites section", () => {
    // Visit the AllMeetupsPage
    cy.visit("http://localhost:3000/");

    // Click on the "Add to favorites" button of the first meetup
    cy.get('[data-test="meet-up-item"]').first().find("button").click();

    // Wait for 2 seconds (2000 milliseconds) before navigating
    cy.wait(1000);

    // Check if the "My Favorites" link exists
    cy.get('[data-test="favorites-link"]').should("exist");

    // Click on the "My Favorites" link to navigate to the favorites section
    cy.get('[data-test="favorites-link"]').click();

    cy.get('[data-test="meet-up-item"]').should("exist");
  });
});
