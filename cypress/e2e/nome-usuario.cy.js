
describe('Api Adopet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5ZjgyNmI0Zi0xYjVlLTQ0MzEtOGNiMC04YzVkMjllNDY3MTIiLCJhZG9wdGVyTmFtZSI6IkFuYSBkZSBKZXN1cyIsImlhdCI6MTcxNTA2OTE3NSwiZXhwIjoxNzE1MzI4Mzc1fQ.5Urd_QhQzCIgw1cdXR4v3KsQ8Lsn1XtH6iH1RRBb3cM`
      
            it('Nome do perfil', () => {
                cy.request({
                    method: 'GET' ,
                    url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/0dd7ead6-eb41-45dd-8a75-03b02285bbe7',
                    headers: { authorization }
                   
                }).then((res) => {
                    expect(res.status).to.be.equal(200)
                    expect(res.body).is.not.empty
                    expect(res.body).to.have.property('perfil')
                expect(res.body.perfil.nome).to.be.equal('ana')
                                 
                })
            })
        })
  