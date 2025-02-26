describe('Nexus', () => {
    it('Solicitação de acesso', () => {
        cy.visit('http://172.16.144.186/access-request')
        cy.get('#name').type('Luis Fernando Rufato')
        cy.get('#email').type('luis.rufato@comandologistica.com.br')
        cy.get('#companyname').type('Comando Log')
        cy.get('#requestType').select('TI')
        cy.get('#password').type('cmd@2025')
        cy.get('.px-6').click()
    });
});