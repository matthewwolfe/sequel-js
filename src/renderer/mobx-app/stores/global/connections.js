import { action, observable } from 'mobx';
import { SAVED_CONNECTIONS } from 'config/constants';
import { Connection } from 'mobx-app/stores/mysql';
import { storage } from 'utils/storage';

class Connections {
  @observable activeConnection = null;
  @observable initialized = false;
  @observable savedConnections = [];

  constructor() {
    this.initialize();
  }

  @action.bound
  async initialize() {
    const storageConnections = await storage.get(SAVED_CONNECTIONS);

    if (storageConnections) {
      this.savedConnections = storageConnections.map(
        data => new Connection(data),
      );
    }
  }

  @action.bound
  async deleteSavedConnection() {}

  @action.bound
  async saveConnection(data) {
    this.savedConnections.push(new Connection(data));
    await storage.set(SAVED_CONNECTIONS, this.savedConnections.toJS());
  }

  @action.bound
  async setActiveConnection(data) {
    this.activeConnection = new Connection(data);

    try {
      await this.activeConnection.connect();
    } catch (error) {
      this.activeConnection = null;
    }
  }

  async testConnection(data) {
    const connection = new Connection(data);
    return await connection.test();
  }
}

export default new Connections();
