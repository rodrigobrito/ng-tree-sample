import { RecursivePage } from './app.po';

describe('recursive App', () => {
  let page: RecursivePage;

  beforeEach(() => {
    page = new RecursivePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
