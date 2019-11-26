import mysql from 'mysql';

class Connection {
  constructor({ host, user, password, database }) {
    this.host = host;
    this.user = user;
    this.password = password;
    this.database = database;

    this.connection = mysql.createConnection({
      host: host,
      user: user,
      password: password,
      database: database,
    });
  }

  connect() {
    this.connection.connect();
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
}

export default Connection;
