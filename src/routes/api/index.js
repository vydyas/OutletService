import express from 'express';
import { outletRouter } from './outlets';

export const apiRouter = express.Router();
apiRouter.use('/findOutlet', outletRouter);
