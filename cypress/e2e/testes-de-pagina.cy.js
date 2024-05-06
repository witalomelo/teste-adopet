describe('Teste de páginas no Adopet', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })
    it('deve  clicar no botão ‘Ver pets disponíveis para adoção”', () => {
        cy.get('.button').click()     
       
    });

    it("deve testar os botão de home", ()=>{
       cy.get('.header__home').click()  

    })

    it("Deve testar os botão de mensagens", ()=>{
        cy.get('.header__message').click()  
    })

    it("Visita a página de /login do Adopet", ()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/login');
    })

    it("Visita a página de /home do Adopet", ()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    })

    it("Visita a página de /home do AdoPet e clique no botão “Falar com o responsável”", ()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
        cy.get('.header__message').click()  
    })
    
});
