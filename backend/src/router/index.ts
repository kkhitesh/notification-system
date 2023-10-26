import express from 'express';

import feedbacks from './feedbacks';

const router = express.Router();

export default(): express.Router => {
  feedbacks(router);
  return router;
}