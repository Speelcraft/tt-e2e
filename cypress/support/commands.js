Cypress.Commands.add('titleValidation', (title) => {
    cy.title().should('be.equal', title)
})

Cypress.Commands.add('createList', (listName) => {
    cy.get('input[placeholder="New list"]')
        .type(listName)
        .parents('[class="mb-3 input-group"]')
        .find('button')
        .click()
})

Cypress.Commands.add('validateList', (listName) => {
    cy.get('[class="ListHeader"]')
        .contains('span', listName)
        .should('exist')
})

Cypress.Commands.add('createItem', (listName, itemName) => {
    cy.get('[class="ListHeader"]')
        .contains('span', listName)
        .parents('div[class="card"]')
        .find('input[placeholder="New item"]')
        .type(itemName)
        .parents('div[class="mb-3 input-group"]')
        .find('button[class="btn btn-outline-secondary"]')
        .click()
})

Cypress.Commands.add('deleteList', (listName) => {
    cy.get('[class="ListHeader"]')
        .contains('span', listName)
        .parents('div[class="card-header"]')
        .find('button[class="btn btn-danger btn-sm"]')
        .should('have.text', 'X')
        .click()
})

Cypress.Commands.add('validateItem', (listName, itemName) => {
    cy.get('[class="ListHeader"]')
        .contains('span', listName)
        .parents('div[class="card"]')
        .find('label[class="form-check-label"]')
        .should('have.text', itemName)
})

Cypress.Commands.add('completeItem', (listName, itemName) => {
    cy.get('[class="ListHeader"]')
        .contains('span', listName)
        .parents('div[class="card"]')
        .find('div[class="list-group list-group-flush"]')
        .contains('label', itemName)
        .parents('div[class="form-check"]')
        .find('input')
        .click()
        .parents('div[class="ToDoListItem list-group-item"]')
        .find('span[class="DeleteItem"]', { timeout: 6000 })
        .should('have.text', '[delete this item]')
})

Cypress.Commands.add('returnCompleteItem', (listName, itemName) => {
    cy.get('[class="ListHeader"]')
    .contains('span', listName)
    .parents('div[class="card"]')
    .find('div[class="list-group list-group-flush"]')
    .contains('label', itemName)
    .parents('div[class="form-check"]')
    .find('input')
    .click()
    .wait(6000)
    .parents('div[class="ToDoListItem list-group-item"]')
    .find('span[class="DeleteItem"]')
    .should('not.exist')    
})

Cypress.Commands.add('deleteItem', (listName, itemName) => {
    cy.get('[class="ListHeader"]')
    .contains('span', listName)
    .parents('div[class="card"]')
    .find('div[class="list-group list-group-flush"]')
    .contains('label', itemName)
    .parents('div[class="ToDoListItem list-group-item"]')
    .find('span[class="DeleteItem"]')
    .should('have.text', '[delete this item]')
    .click()
})

Cypress.Commands.add('noCompletedItems', (listName) => {
    cy.get('[class="ListHeader"]')
    .contains('span', listName)
    .parents('div[class="card"]')
    .find('span[class="DeleteItem"]')
    .should('have.length', 0)    
})

Cypress.Commands.add('hasCompletedItems', (listName) => {
    cy.get('[class="ListHeader"]')
    .contains('span', listName)
    .parents('div[class="card"]')
    .find('span[class="DeleteItem"]')
    .should('not.have.length', 0)  
})

Cypress.Commands.add('noItemsOnList', (listName) => {
    cy.get('[class="ListHeader"]')
    .contains('span', listName)
    .parents('div[class="card"]')
    .find('div[class="ToDoListItem list-group-item"]')
    .should('have.length', 0)
})

Cypress.Commands.add('validateDeletedList', (listName) => {
    cy.contains('span', listName)
    .should('not.exist')       
})

Cypress.Commands.add('validateDeletedItem', (listName, itemName) => {
    cy.get('[class="ListHeader"]')
    .contains('span', listName)
    .parents('div[class="card"]')
    .find('div[class="list-group list-group-flush"]')
    .contains('label', itemName)
    .should('not.exist')    
})

//Cypress.Commands.add('', () => {
//})