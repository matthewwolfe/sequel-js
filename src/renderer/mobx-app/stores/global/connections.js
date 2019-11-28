import { action, observable } from 'mobx';
import { Connection } from 'mobx-app/stores/mysql';

class Connections {
  @observable connections = [];

  activeConnection = null;

  @action.bound
  saveConnection(data) {
    this.connections.push(new Connection(data));
  }

  @action.bound
  setActiveConnection(connection) {
    this.activeConnection = connection;
  }
}

export default new Connections();
