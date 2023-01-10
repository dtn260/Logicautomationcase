import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].openPage()

});

When(/^I accept alert on page$/, async () => {
    await LoginPage.acceptAlertButton.click();
});


Then(/^I login with (.*) and (.+)$/, async (username, password) => {

    await LoginPage.loginAccountButton.click();
    await LoginPage.usernameTextField.click();
    await LoginPage.usernameTextField.addValue(username);
    await LoginPage.passwordTextField.addValue(password);
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.emailAlert).toBeExisting();
    await expect(SecurePage.emailAlert).toHaveTextContaining(message);
});




