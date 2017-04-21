import { StatePage } from './app.po';

describe('state App', () => {
  let page: StatePage;

  beforeEach(() => {
    page = new StatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
