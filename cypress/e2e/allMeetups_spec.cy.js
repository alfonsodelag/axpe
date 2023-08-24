// cypress/integration/allMeetups_spec.cy.js
/* global cy */

describe("All Meetups Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should display all meetups", () => {
    cy.contains("h1", "All Meetups").should("be.visible");
  });
});
