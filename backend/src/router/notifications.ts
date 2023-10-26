import express from 'express';

import {getUnreadNotifications, updateNotification, } from '../controller/notifications';

export default (router: express.Router) => {
  router.get("/notifications",getUnreadNotifications);
  router.patch("/notifications/:id",updateNotification);
}