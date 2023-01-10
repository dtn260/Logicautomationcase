import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';

const pages = {
    login: LoginPage
}


Given(/^I want to navigate to (\w+) page$/, async (page: string) => {
    await pages[page].openPage()

});

When(/^I login with username and password (.*) $/, async() => {

    await LoginPage.loginAccountButton.click();
    await LoginPage.usernameTextField.click();
    await LoginPage.usernameTextField.addValue(username);
    await LoginPage.passwordTextField.addValue(password);
});

Then(/^I click on login button$/, async () => {
       await LoginPage.buttonLogin.click();
});

Then(/^I should see a flash message stating (.*)$/, async (message) => {
    await expect(SecurePage.shortPasswordAlert).toBeExisting();
    await expect(SecurePage.shortPasswordAlert).toHaveTextContaining(message);
});




