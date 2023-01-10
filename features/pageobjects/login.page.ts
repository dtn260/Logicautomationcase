import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {


   public get acceptAlertButton()
      { return $("body > div.ReactModalPortal > div > div > div > div.cookie-notice__action_3NES_ > button > div") }

  public get loginAccountButton()
      { return $("#root > div > header > div.header__tab-actions_1qMxt > div > div.flex-row.actions_3bqPF > span.desktop-width-layout > button") }

  public get usernameTextField()
      { return $("#signin-email") }

 public get passwordTextField()
      { return $("#signin-password") }

 public get buttonLogin()
            { return $("#authentication-portal > div > div > div > div > div > form > button") }

 public get successLogin()
            { return $("#root > div > header > div.header__tab-actions_1qMxt > div > div.flex-row.actions_3bqPF > span.desktop-width-layout > div > a > span") }



    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async navigateToLogin () {
        await this.buttonLogin.click();

    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new LoginPage();
