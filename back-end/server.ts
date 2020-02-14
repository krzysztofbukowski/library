import { config } from 'dotenv';
config();

import express, { Express } from 'express';
import api from './api/api';
import { connect } from './db';

(async function main() {
  try {
    const connection = await connect();

    const app: Express = express();
    const port = process.env.NODE_PORT || 5000;
    const startTime = new Date().getTime();
    const version = require('../package.json').version;

    app.use('/api', api(startTime, version));

    app.listen(port, () => {
      console.info(`Server listening on port ${port}!`);
    });
  } catch (e) {
    console.error(e);
  }
})();
