import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';

import router from "./router";

const app = express();

app.use(cors());

app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
  console.log('Server is listening on port 8080');
});

app.use('/api/', router());

