describe('Pagina de cadastro', () => {

  beforeEach(() => {
    cy.visit('https://adopet-frontend-iota.vercel.app/');
    cy.get('[data-test="register-button"]').click();
  })

  it('Deve preencher os campos do formulario corretamente para cadastrar um novo usuario', () =>{
    cy.get('[data-test="input-name"]').type('Carlos Alberto');
    cy.get('[data-test="input-email"]').type('carlosalberto@gmail.com');
    cy.get('[data-test="input-password"]').type('Senha123');
    cy.get('[data-test="input-confirm-password"]').type('Senha123');
    cy.get('[data-test="submit-button"]').click();
  })
})