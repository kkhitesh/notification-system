import express from 'express';
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export const getAllNotifications = async(req: express.Request, res: express.Response) => {
  try {

    const notifications = await prisma.notifications.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    return res.status(200).json(notifications);

  } catch (error) {
      console.log(error);
      res.status(400);
  }
}

export const updateNotification = async(req: express.Request, res: express.Response) => {
  try {
      
      const {id} = req.params;
      const {isRead} = req.body;

      const notification = await prisma.notifications.findUnique({
        where: {
          id: Number(id)
        }
      });

      if (!notification) {
        throw new Error(`Notification with id ${id} not found.`);
      }

      const updatedNotification = await prisma.notifications.update({
        where: {
          id: Number(id)
        },
        data: {
          isRead: isRead
        }
      });

      return res.status(200).json(updatedNotification);
  
  } catch (error) {
      console.log(error);
      res.status(400);
  }
}

export const checkNewNotification = async(req: express.Request, res: express.Response) => {
  try {

    const notifications = await prisma.notifications.findMany({
      where: {
        isRead: false
      }
    });

    if (notifications.length > 0) {
      return res.status(200).json(true);
    } else {
      return res.status(200).json(false);
    }

  } catch (error) {
      console.log(error);
      res.status(400);
  }
}
