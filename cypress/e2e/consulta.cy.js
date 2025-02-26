describe('Nexus', () => {
    it('Consulta de documento', () => {
        cy.visit('http://172.16.144.186/')
        cy.get('#email').type('luis.rufato')
        cy.get('#password').type('cmd@2025')
        cy.get(':nth-child(4) > .flex').click()
        cy.get('div.relative > .absolute').click()
        cy.get('#consultation').click()
        cy.get('.grid > :nth-child(1) > .w-full').type('140068')
        cy.get('.flex > .bg-purple-950').click()
        cy.wait(2000)
        cy.get('.bg-gray-600').click()
        cy.wait(1000)
        cy.scrollTo('99%', '1%')
    });
});