describe('Nexus', () => {
    it('Consulta de documento', () => {
        cy.visit('http://172.16.144.186/')
        cy.get('#email').type('luis.rufato')
        cy.get('#password').type('cmd@2025')
        cy.get(':nth-child(4) > .flex').click()
        cy.get('div.relative > .absolute').click()
        cy.get('#consultation').click()
        cy.get('.grid > :nth-child(1) > .w-full').type('146846')
        cy.get('.grid > :nth-child(2) > .w-full').type('1695')
        cy.get('.bg-gray-50.rounded-md > .grid > :nth-child(4) > div > .w-full').select('Boituva')
        cy.get('.flex > .bg-purple-950').click()
    });
});