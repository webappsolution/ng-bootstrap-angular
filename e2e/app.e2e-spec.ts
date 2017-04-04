import { NgBootstrapAngularPage } from './app.po';

describe('ng-bootstrap-angular App', () => {
  let page: NgBootstrapAngularPage;

  beforeEach(() => {
    page = new NgBootstrapAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
