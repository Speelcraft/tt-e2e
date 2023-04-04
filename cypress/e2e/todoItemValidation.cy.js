// Requirement 8 - A List Item can be added to a List with a simple form (one per List), consisting of an input field for a label, and an `Add` button
// Requirement 11 - A List Item status can be changed by clicking the associated checkbox
// Requirement 12 - Only complete List Items can be removed

describe('Item validation', () => {
    before(() => {
        //resets database
        cy.request('POST', 'http://localhost:4567/overwrite_database', [])
        cy.visit('')

        //create a dummy list named 'List for item 1'
        cy.createList('List for item 1')
    })

    beforeEach(() => {
        cy.visit('')
    })

    it('Verify item creation form', () => {
        //item creation form input field exists
        cy.get('[class="ListHeader"]')
            .contains('span', 'List for item 1')
            .parents('div[class="card"]')
            .find('input[placeholder="New item"]')
            .should('exist')

        //item creation form Add button exists
        cy.get('[class="ListHeader"]')
            .contains('span', 'List for item 1')
            .parents('div[class="card"]')
            .find('button[class="btn btn-outline-secondary"]')
            .should('have.text', 'Add')
    })

    it('Creates an item', () => {
        //creates an item named 'Item test 1'
        cy.createItem('List for item 1','Item test 1')
            
        //item created
        cy.validateItem('List for item 1', 'Item test 1')
    })

    //****  Skip the test - Requirement not used
    //****  Should be added on future version to cover more req
    it.skip('Verify that newly created items are not completed', () => {
        //creates an item named 'Item test 2'
        cy.createItem('List for item 1','Item test 2')

        //item are not completed
        cy.noCompletedItems('List for item 1')
    })

    it('Verify checkbox for mark an item as complete or incomplete', () => {
        //creates an item named 'Item checkbox test'
        cy.createItem('List for item 1','Item checkbox test')

        //mark checkbox to complete the item
        cy.completeItem('List for item 1', 'Item checkbox test')

        //mark checkbox to remove item completion
        cy.returnCompleteItem('List for item 1', 'Item checkbox test')
    })

    it('Can delete completed items', () => {
        //creates an item named 'Item to be deleted'
        cy.createItem('List for item 1','Item to be deleted')

        //mark checkbox to complete the item
        cy.completeItem('List for item 1', 'Item to be deleted')

        //deletes the item named 'Item to be deleted'
        cy.deleteItem('List for item 1', 'Item to be deleted')

        //item deleted
        cy.validateDeletedItem('List for item 1', 'Item to be deleted')

    })

    //****  Skip the test - Requirement not used
    //****  Should be added on future version to cover more req 
    it.skip('Can not create an item with existing item name on list', () => {
        //creates a list named 'List for item 2'
        cy.createList('List for item 2')

        //creates an item named 'Item with same name'
        cy.createItem('List for item 2','Item with same name')

        //creates another item named 'Item with same name'
        cy.createItem('List for item 2','Item with same name')

        //second item were not created
        cy.get('[class="ListHeader"]')
            .contains('span', 'List for item 2')
            .parents('div[class="card"]')
            .find('label[class="form-check-label"]')
            .filter(':contains("Item with same name")')
            .should('have.length', 1)
    })


})