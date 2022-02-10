Cypress.Commands.add('login', (email,password) => {
    cy.fixture('login').then((login)=>{
        // Select Login section
        cy.get(login.menu).click();
        cy.get(login.option).click();
        // Input email
        cy.get(login.email).type(email);
        // Input password
        cy.get(login.password).type(password);
        // Click on Login button
        cy.get(login.button).click();
    })
})

Cypress.Commands.add('verifyAlert', (message) => {
    cy.fixture('login').then((login) =>{
        // Verify error message
        cy.get(login.alert).should('contain',message);
    })
})