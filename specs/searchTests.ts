import { browser, element, By, Key, WebDriver, Browser } from 'protractor'
import { SearchPage } from '../PageObjects/searchPage' 
import {} from '../PageObjects/BasePage'

describe('SearchTest', function () {
    let searchPage = new SearchPage()

    beforeEach(() => {
        searchPage.open()
    })

    afterEach(() => {
        browser.manage().deleteAllCookies()
    })

    //Strings for check
    const number = '5';
    const wordEng = 'Logan';
    const wordRu = 'Логан'; 
    const upperCase = { query: 'LOGAN', result: 'logan' }
    const lowerCase = 'logan'
    const empty = '';
    const space = ' ';
    const symbolCase = '@#$%^&;.?,>|\/№"!()_{}[<~';
    const char = 'W'


    it('SearchNumber', () => {
        searchPage.search(number)
        browser.sleep(1500)
        searchPage.checkSearchResult
        searchPage.searchResultTitle.each((elem, indx) => {
            if (expect(elem.getText()).toContain(number)) {
                console.log('Doing assertion for element with index - ', indx)
            } else {
                console.log(elem)
            }
        })
    })

    it('SearchWordEng', () => {
        searchPage.search(wordEng)
        browser.sleep(1500)
        searchPage.checkSearchResult
        searchPage.searchResultTitle.each((elem, indx) => {
            if (expect(elem.getText()).toContain(wordEng)) {
                console.log('Doing assertion for element with index - ', indx)
            } else {
                console.log("This movie don't have" + wordEng + " - ", elem)
            }
        })
    })

    it('SearchWordRu', () => {
        searchPage.search(wordRu)
        browser.sleep(1500)
        searchPage.checkSearchResult
        searchPage.searchResultTitle.each((elem, indx) => {
            if (expect(elem.getText()).toContain(wordRu)) {
                console.log('Doing assertion for element with index - ', indx)
            } else {
                console.log("This movie don't have " + wordRu + " - ", elem)
            }
        })
    })

    it('SearchUpperCase', () => {
        searchPage.search(upperCase.query)
        browser.sleep(1500)
        searchPage.checkSearchResult
        searchPage.searchResultTitle.each((elem, indx) => {
            if (expect(elem.getText().then((text) => text.toLowerCase())).toContain(upperCase.result)) {
                console.log('Doing assertion for element with index - ', indx)
            } else {
                console.log("This movie don't have " + upperCase.result + " - ", elem)
            }
        })
    })


    it('SearchLowerCase', () => {
        searchPage.search(lowerCase)
        browser.sleep(1500)
        searchPage.checkSearchResult
        searchPage.searchResultTitle.each((elem, indx) => {
            if (expect(elem.getText()).toContain(lowerCase)) {
                console.log('Doing assertion for element with index - ', indx)
            } else {
                console.log("This movie don't have 'logan' - ", elem)
            }
        })
    })

    it('SearchEmpty', () => {
        searchPage.search(empty)
        browser.sleep(1500)
        searchPage.checkSearchResult
        searchPage.searchResultTitle.each((elem, indx) => {
            if (expect(elem.getText()).toContain(empty)) {
                console.log('Doing assertion for element with index - ', indx)
            } else {
                browser.sleep(2000)
                expect(searchPage.CopySearchResult.getText()).not.toContain('Search Results')
            }
        })
    })

    it('SearchSpace', () => {
        searchPage.search(space)
        browser.sleep(1500)
        searchPage.checkSearchResult
        searchPage.searchResultTitle.each((elem, indx) => {
            expect(elem.getText()).toContain(space)
        })
    })

    it('SearchSymbolCase', () => {
        searchPage.search(symbolCase)
        browser.sleep(1500)
        searchPage.checkSearchResult
        searchPage.searchResultTitle.each((elem, indx) => {
            if (expect(elem.getText()).toContain(symbolCase)) {
                console.log('Doing assertion for element with index - ', indx)
            } else {
                console.log("This movie don't have " + symbolCase + " - ", elem)
            }
        })
    })

    it('SearchChar', () => {
        searchPage.search(char)
        browser.sleep(1500)
        searchPage.checkSearchResult
        browser.sleep(1500)
        searchPage.searchResultTitle.each((elem, indx) => {
            if (expect(elem.getText()).toContain(char)) {
                console.log('Doing assertion for element with index - ', indx)
            } else {
                console.log("This movie don't have " + char + " - ", elem)
            }
        })
    })
})