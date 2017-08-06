import { KabaddiPage } from './app.po';

describe('kabaddi App', () => {
  let page: KabaddiPage;

  beforeEach(() => {
    page = new KabaddiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
