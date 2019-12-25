import { observable } from 'mobx';
import mysql from 'mysql';
import { logger } from 'utils/logger';

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

  async connect() {
    return new Promise((resolve, reject) => {
      this.connection.connect(function(error) {
        if (error) {
          logger.error(`Error connecting to mysql: ${error.stack}`);
          reject();
        }

        resolve();
      });
    });
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

  toJSON() {
    return {
      name: this.name,
      host: this.host,
      username: this.username,
      password: this.password,
      database: this.database,
      port: this.port,
    };
  }
}

export default Connection;
