import { WebComponentsPOCPage } from './app.po';

describe('web-components-poc App', () => {
  let page: WebComponentsPOCPage;

  beforeEach(() => {
    page = new WebComponentsPOCPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
