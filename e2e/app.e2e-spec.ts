import { AapcPage } from './app.po';

describe('aapc App', function() {
  let page: AapcPage;

  beforeEach(() => {
    page = new AapcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('hz works!');
  });
});
