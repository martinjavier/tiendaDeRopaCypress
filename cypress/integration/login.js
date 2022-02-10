describe('Login',() => {
    beforeEach(() => {
        cy.visit('/');
    })
    it('Login with an incorrect email', ()=>{
        cy.login('pepe@gmail.com','pepe');
        cy.verifyAlert('Warning: No match for E-Mail Address and/or Password.');        
    })
})