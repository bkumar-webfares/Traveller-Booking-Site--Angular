import { WebfaresPage } from './app.po';

describe('webfares App', function() {
  let page: WebfaresPage;

  beforeEach(() => {
    page = new WebfaresPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
