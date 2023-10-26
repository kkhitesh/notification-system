import express from 'express';

import {getAllFeedbacks, updateFeedbacks, getFeedback} from '../controller/feedbacks';

export default (router: express.Router) => {
  router.get("/feedbacks",getAllFeedbacks);
  router.get("/feedbacks/:id",getFeedback);
  router.patch("/feedbacks/:id",updateFeedbacks);
}