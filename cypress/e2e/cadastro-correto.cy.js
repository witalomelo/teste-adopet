describe("Pagina de Cadastro", () => {
  it("passes", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type("Ana de Jesus");
    cy.get('[data-test="input-email"]').type("ana@gmail.com");
    cy.get('[data-test="input-password"]').type("Senha@123");
    cy.get('[data-test="input-confirm-password"]').type("Senha@123");
    cy.get('[data-test="submit-button"]').click();
  });
});
