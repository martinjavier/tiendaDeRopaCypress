describe('Search elements', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it('Search for elements with multiple results', () => {

        cy.search('phone');

        cy.fixture('searchResult').then((searchResult) => {
            cy.get(searchResult.result).should('contain', 'phone');
        })

    })

    it('Search for elements with no results', () => {
        // Usando el comando Search
        cy.search('querty');

        cy.fixture('searchResult').then((searchResult) => {
            cy.get(searchResult.message).should('contain', 'There is no product that matches the search criteria.');
        })

    })
})