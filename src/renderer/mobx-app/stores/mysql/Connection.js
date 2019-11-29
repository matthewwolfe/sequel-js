import { observable } from 'mobx';
import mysql from 'mysql';

class Connection {
  @observable name = '';
  @observable host = '127.0.0.1';
  @observable username = '';
  @observable password = '';
  @observable database = '';
  @observable port = 3306;

  connection = null;

  constructor({ name, host, username, password, database, port }) {
    this.name = name;
    this.host = host;
    this.username = username;
    this.password = password;
    this.database = database;
    this.port = port;

    this.connection = mysql.createConnection({
      host: host,
      user: username,
      password: password,
      database: database,
      port: port,
    });
  }

  connect() {
    this.connection.connect();
  }

  ping() {
    return new Promise((resolve, reject) => {
      this.connection.ping(error => {
        if (error) {
          reject(false);
        }

        resolve(true);
      });
    });
  }

  query(sql, identifiers) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, identifiers, (error, results) => {
        if (error) {
          reject(error);
        }

        resolve(results);
      });
    });
  }

  async test() {
    this.connect();

    try {
      const isConnected = await this.ping();
      return isConnected;
    } catch (error) {
      return false;
    }
  }
}

export default Connection;
