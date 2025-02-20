describe('Nexus', () => {
    it('Entrega sem comprovante', () => {
        cy.visit('http://172.16.144.186/')
        cy.get('#email').type('luis.rufato')
        cy.get('#password').type('cmd@2025')
        cy.get(':nth-child(4) > .flex').click()
        cy.get('#reports').click()
        cy.get(':nth-child(3) > .block').click()
        cy.get('.bg-gray-50 > :nth-child(2) > .w-full').select('Boituva')
        cy.get(':nth-child(4) > .w-full').select('Entregue')
        cy.get(':nth-child(5) > .w-full').select('Sem Comprovante')
        cy.get(':nth-child(7) > .w-full').select('Transferência')
        cy.get('.space-x-2 > .flex').click()
    });
});