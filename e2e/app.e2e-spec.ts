import { BarnesNoblePage } from './app.po';

describe('barnes-noble App', () => {
  let page: BarnesNoblePage;

  beforeEach(() => {
    page = new BarnesNoblePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
