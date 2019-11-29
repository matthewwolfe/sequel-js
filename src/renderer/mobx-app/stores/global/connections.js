import { action, observable } from 'mobx';
import { Connection } from 'mobx-app/stores/mysql';

class Connections {
  @observable savedConnections = [];

  activeConnection = null;

  @action.bound
  saveConnection(data) {
    this.savedConnections.push(new Connection(data));
  }

  @action.bound
  setActiveConnection(connection) {
    this.activeConnection = connection;
  }

  async testConnection(data) {
    const connection = new Connection(data);
    return await connection.test();
  }
}

export default new Connections();
