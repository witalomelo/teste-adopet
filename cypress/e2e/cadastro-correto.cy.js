describe('Pagina de cadastro', () => {

  beforeEach(() => {
    cy.visit('https://adopet-frontend-iota.vercel.app/');
    cy.get('[data-test="register-button"]').click();
  })

  it('Deve preencher os campos do formulario corretamente para cadastrar um novo usuario', () =>{
    cy.cadastrar('carlos alberto', 'carlos@gmail.com','Senha123');
  })
})