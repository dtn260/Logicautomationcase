import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get flashAlert () {
        return $('#flash');
    }

    public get emailAlert(){
    return $('#signin-email-helper-text');
    }

      public get emailNotMatchAlert(){
        return $('#p.error-text_RAc9');
        }

         public get shortPasswordAlert(){
                return $('#signin-password-helper-text');
                }




}

export default new SecurePage();
