describe('Nexus', () => {
    it('Cargas em depósito', () => {
        cy.visit('http://172.16.144.186/')
        cy.get('#email').type('luis.rufato')
        cy.get('#password').type('cmd@2025')
        cy.get(':nth-child(4) > .flex').click()
        cy.get('#reports').click()
        cy.get(':nth-child(2) > .block').click()
        cy.get('.bg-gray-50 > :nth-child(2) > .w-full').select('Boituva')
        cy.get(':nth-child(4) > .w-full').select('Entregue')
        cy.get(':nth-child(5) > .w-full').select('Sem Comprovante')
        cy.get(':nth-child(7) > .w-full').select('Venda')
        cy.get('.space-x-2 > .flex').click()
        cy.scrollTo('1%', '99%')
        cy.wait(3000)
        cy.get('div.flex > :nth-child(4)').click()
    });
});