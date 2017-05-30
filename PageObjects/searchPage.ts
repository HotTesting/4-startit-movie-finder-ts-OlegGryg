import { browser, element, By, $, $$ } from 'protractor'
import { BasePage } from './basePage'


export class SearchPage extends BasePage {
    public searhResults = $$('movies>.jumbotron+div movie-card')
    public searchField = $('input.form-control')
    public searchResultTitle = $$('movies>.jumbotron+div movie-card  [title]')
    public movieCards = $$('movie-card')
    public goButton = element(By.partialButtonText('Go'))
    public CopySearchResult = $$('orange-text')
    public URL = ''
    

    search(text: string) {
        this.typeIntoSearchField(text)
        browser.sleep(1500)
        this.goButton.click()
    }

    checkSearchResult() {
        return expect(this.searhResults.count()).toBe(0, 'Search results should not be empty')    
    }
        typeIntoSearchField(text: string) {
        this.searchField.sendKeys(text)
    }

    
}

    


//  submitSearch () {
//         this.searchField.submit()
//     }