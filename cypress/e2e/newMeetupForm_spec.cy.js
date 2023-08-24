// cypress/e2e/newMeetupForm_spec.cy.js
/* global cy */

describe("NewMeetupForm E2E Tests", () => {
  beforeEach(() => {
    // Assuming the form is accessible at this URL
    cy.visit("http://localhost:3000/add-new-meetup");
  });

  it("should render the NewMeetupForm correctly", () => {
    cy.get("form").should("be.visible");
    cy.get('input[id="title"]').should("be.visible");
    cy.get('input[id="image"]').should("be.visible");
    cy.get('input[id="address"]').should("be.visible");
    cy.get('textarea[id="description"]').should("be.visible");
    cy.get("button").contains("Add Meetup").should("be.visible");
  });

  it("should fill out the form and submit", () => {
    cy.get('input[id="title"]').type("Sample Meetup");
    cy.get('input[id="image"]').type(
      "https://s3-eu-west-1.amazonaws.com/blog-ecotree/blog/0001/01/ad46dbb447cd0e9a6aeecd64cc2bd332b0cbcb79.jpeg",
    );
    cy.get('input[id="address"]').type("123 Sample St, Sample City");
    cy.get('textarea[id="description"]').type(
      "This is a sample meetup description for testing purposes.",
    );

    cy.get("form").submit();
  });
});
