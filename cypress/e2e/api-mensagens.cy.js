describe('Api Adopet', () => {
    const tempoEsperado = Math.random() * 1000
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5ZjgyNmI0Zi0xYjVlLTQ0MzEtOGNiMC04YzVkMjllNDY3MTIiLCJhZG9wdGVyTmFtZSI6IkFuYSBkZSBKZXN1cyIsImlhdCI6MTcxNTA2OTE3NSwiZXhwIjoxNzE1MzI4Mzc1fQ.5Urd_QhQzCIgw1cdXR4v3KsQ8Lsn1XtH6iH1RRBb3cM`

    //Atenção, o token possui um prazo de validade. Dessa forma, você deverá realizar o login e copiar o toker presente no Local Storage do seu navegador.
     
     it('Mensagens da API', () => {
            cy.request({
             method: 'GET' ,
             url: 'https://adopet-api-i8qu.onrender.com/mensagem/11643cd6-7112-415b-95d2-07904b0d1a1c',
             headers: { authorization }
                   
                }).then((res) => {
                    expect(res.status).to.be.equal(200)
                    expect(res.body).is.not.empty
                    expect(res.body).to.have.property('msg')
                    expect(res.duration).to.be.lte(tempoEsperado)
                                 
                })
    })
})