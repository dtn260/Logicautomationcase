/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page

    */
    public openPage() {
        return browser.url(`https://nl.tommy.com/`)
    }
}
