import { FormationAngularPage } from './app.po';

describe('formation-angular App', () => {
  let page: FormationAngularPage;

  beforeEach(() => {
    page = new FormationAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
