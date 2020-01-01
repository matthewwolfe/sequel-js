import { observable } from 'mobx';

class Database {
  @observable name = '';

  constructor({ name }) {
    this.name = name;
  }
}

export default Database;
