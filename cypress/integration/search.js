describe('Search elements', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it('Search for elements with multiple results', () => {

        cy.fixture('index').then((index) => {
            cy.get(index.searchInput).type('phone');
            cy.get(index.searchButton).click();
        });

        cy.fixture('searchResult').then((searchResult) => {
            cy.get(searchResult.result).should('contain', 'phone');
        })

    })

    it('Search for elements with no results', () => {

        cy.fixture('index').then((index) => {
            cy.get(index.searchInput).type('qwerty');
            cy.get(index.searchButton).click();
        });

        cy.fixture('searchResult').then((searchResult) => {
            cy.get(searchResult.message).should('contain', 'There is no product that matches the search criteria.');
        })

    })
})