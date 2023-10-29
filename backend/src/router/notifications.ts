import express from 'express';

import {checkNewNotification, getAllNotifications, updateNotification, } from '../controller/notifications';

export default (router: express.Router) => {
  router.get("/notifications",getAllNotifications);
  router.patch("/notifications/:id",updateNotification);
  router.get("/notifications/check", checkNewNotification);
}