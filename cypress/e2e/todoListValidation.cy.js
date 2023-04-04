// Requirement 2 - A new List can be added with a simple form consisting of a text input field for its name, and an `Add` button
// Requirement 5 - A List can be removed using an `X` button in the List header

describe('List validations', () => {
    before(() => {
        //resets database
        cy.request('POST', 'http://localhost:4567/overwrite_database', [])
    })

    beforeEach(() => {
        cy.visit('')
    })

    it('Input and Add button exists', () => {
        //list creation form input field exists
        cy.get('input[placeholder="New list"]')
            .should('exist')

        //list creation form Add button exists
        cy.get('input[placeholder="New list"]')
            .parents('[class="mb-3 input-group"]')
            .find('button')
            .should('have.text', 'Add')
    })

    it('Creates a list', () => {
        //creates a list named 'List test 1'
        cy.createList('List test 1')

        //list created
        cy.validateList('List test 1')
    })

    //****  Skip the test - Requirement not used
    //****  Should be added on future version to cover more req
    it.skip('Verify that newly created list has no items', () => {
        //creates a list named 'List test 2'
        cy.createList('List test 2')

        //list created has no items
        cy.noItemsOnList('List test 2')
    })

    it('Deletes a list with no items', () => {
        //creates a list named 'List to be deleted'
        cy.createList('List to be deleted')

        //deletes the list named 'List to be deleted'
        cy.deleteList('List to be deleted')

        //list deleted
        cy.validateDeletedList('List to be deleted')
    })

    //****  Skip the test - Requirement not used
    //****  Should be added on future version to cover more req       
    it.skip('Deletes a list with items not completed', () => {
        //creates a list named 'List to be deleted 2'
        cy.createList('List to be deleted 2')

        //creates an item named 'Dummy item not completed'
        cy.createItem('List to be deleted 2', 'Dummy item not completed')

        //there are no completed items
        cy.noCompletedItems('List to be deleted 2')

        //deletes the list named 'List to be deleted 2'
        cy.deleteList('List to be deleted 2')

        //list deleted
        cy.validateDeletedList('List to be deleted2')
    })

    //****  Skip the test - Requirement not used
    //****  Should be added on future version to cover more req        
    it.skip('Deletes a list with completed items', () => {
        //creates a list named 'List to be deleted 3'
        cy.createList('List to be deleted 3')

        //creates an item named 'Dummy item completed'
        cy.createItem('List to be deleted 3', 'Dummy item completed')

        //completes the item 
        cy.completeItem('List to be deleted 3', 'Dummy item completed')

        //there are at list 1 completed items
        cy.hasCompletedItems('List to be deleted 3')

        //deletes the list named 'List to be deleted 3'
        cy.deleteList('List to be deleted 3')

        //list deleted
        cy.validateDeletedList('List to be deleted3')

    })

    //****  Skip the test - Requirement not used
    //****  Should be added on future version to cover more req         
    it.skip('Can not create a list with existing list name', () => {
        //creates a list named 'List with same name'
        cy.createList('List with same name')

        //creates another list named 'List with same name' again
        cy.createList('List with same name')

        //second list were not created
        cy.get('[class="ListHeader"]')
            .filter(':contains("List with same name")')
            .should('have.length', 1)
    })

})