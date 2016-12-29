import { browser, element, by } from 'protractor';

export class AapcPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('hz-root h1')).getText();
  }
}
