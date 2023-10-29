import express from 'express';

import feedbacks from './feedbacks';
import notifications from './notifications';

const router = express.Router();

export default(): express.Router => {
  feedbacks(router);
  notifications(router);
  return router;
}