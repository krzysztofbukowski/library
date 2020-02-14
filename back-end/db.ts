import mysql, { Connection } from 'mysql';

let connection: Connection = null;

const connect = async (): Promise<Connection> => {
  if (connection && connection.state !== 'disconnected') {
    return Promise.resolve(connection);
  }

  return new Promise((resolve, reject) => {
    try {
      connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DBNAME,
        port: +process.env.DB_PORT,
      });

      connection.connect(err => {
        if (!!err) {
          reject(err);
        } else {
          resolve(connection);
        }
      });
    } catch (e) {
      reject(e);
    }
  });
};

export { connect };
