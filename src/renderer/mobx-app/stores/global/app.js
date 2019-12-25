import { action, observable } from 'mobx';

class App {
  @observable locale = 'en';

  @action.bound
  setLocale(locale) {
    this.locale = locale;
  }
}

export default new App();
