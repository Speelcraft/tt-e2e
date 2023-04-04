describe.only('Home ToDo application', () => {
    beforeEach(() => {
        cy.visit('')
    })

    it('Verify page title', () => {
        cy.titleValidation('ToDo Lists')
    })

})