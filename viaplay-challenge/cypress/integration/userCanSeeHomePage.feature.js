describe("user can see the list of movies", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "https://content.viaplay.se/pc-se/serier/samtliga",
      response: "fixture:response.json",
    });
    cy.visit("/");
  });
  
  it("is expected to display header with the viaplay logo", () => {
    cy.get("#header").should("be.visible").within(()=>{
      cy.get("#logo").should("exist")
    })
  })
});
