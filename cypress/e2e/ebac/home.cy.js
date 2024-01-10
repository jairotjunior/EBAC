///<reference types="cypress" />

describe('Terá que incluir, alterar e remover os dados da agenda', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    
    it('Inclusão dos dados', () => {
        cy.get('input[type="text"]').type('Jairo')
        cy.get('input[type="email"]').type('jairotjunior@email.com')
        cy.get('input[type="tel"]').type('11952042554')
        cy.get('.adicionar').click()
    })

    it('Alteração dos dados já incluso do primeiro elemento', () => {
        cy.get('.edit').last().click()
        cy.get('input[type="text"]').clear().type('João')
        cy.get('input[type="email"]').clear().type('joao@email.com')
        cy.get('input[type="tel"]').clear().type('1196398345')
        cy.get('.alterar').click()
    })

    it('Remover dados já inseridos', () => {
        cy.get('.delete').last().click()
    })
})