import express from 'express';
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export const getAllFeedbacks = async(req: express.Request, res: express.Response) => {
  try {

    const feedBacks = await prisma.feedbacks.findMany();

    return res.status(200).json(feedBacks);

  } catch (error) {
      console.log(error);
      res.status(400);
  }
}

export const updateFeedbacks = async(req: express.Request, res: express.Response) => {
  try {
      
      const {id} = req.params;
      const {comment} = req.body;

      const feedback = await prisma.feedbacks.findUnique({
        where: {
          id: Number(id)
        }
      });

      if (!feedback) {
        throw new Error(`Feedback with id ${id} not found.`);
      }

      const updatedFeedback = await prisma.feedbacks.update({
        where: {
          id: Number(id)
        },
        data: {
          comments: {
            push: comment
          }
        }
      });

      const notification = await prisma.notifications.create({
        data: {
          notification: `New comment on feedback ${feedback?.title}: ${comment}`,
          isRead: false,
          feedback: {
            connect: {
              id: Number(id)
            }
          }
        }
      });

      return res.status(200).json(updatedFeedback);
  
  } catch (error) {
      console.log(error);
      res.status(400);
  }
}

export const getFeedback = async(req: express.Request, res: express.Response) => {
  try {

    const {id} = req.params;

    const feedback = await prisma.feedbacks.findUnique({
      where: {
        id: Number(id)
      }
    });

    if (!feedback) {
      throw new Error(`Feedback with id ${id} not found.`);
    }

    return res.status(200).json(feedback);

  } catch (error) {
      console.log(error);
      res.status(400);
  }
}