import { browser, element, By, $, $$ } from 'protractor'

export class BasePage {
    public URL
    public AllCategoris = element.all(By.css('a.list-group-item'))
    public MovieUpcoming = $$('app-upcoming>.jumbotron+div movie-card [title]')
    public MoviaPopularSeries = $$('app-root>.jumbotron+div movie-card [title]')
    
    
    open() {
        browser.get(this.URL)
    }
}