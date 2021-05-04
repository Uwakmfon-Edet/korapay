import LoginPage from '../cucumber-tests/login/LoginPage';

describe('Login to Internet Banking', () => {

    beforeEach(function () {
        cy.fixture('userCredentials').then(function (data) {
            this.data = data;
        })
    })

    it('Should login to Internet banking with valid credentials', function () {
        const loginPage = new LoginPage();
        cy.visit('https://80.248.0.83:3443/#/auth/login')
        cy.url().should("include", "login")
        loginPage.getUserID().type(this.data.userID)
        loginPage.getUserPassword().type(this.data.password)
        loginPage.getLoginButton().click()
    })

    it('Should enter token details', function () {
        const loginPage = new LoginPage();
        cy.get('h5').should('contain', 'Welcome')
        loginPage.getTokenInput().type(this.data.token)
        loginPage.getTokenSubmit().click()
        cy.get('div').should('contain', 'SAVINGS')
    })

})