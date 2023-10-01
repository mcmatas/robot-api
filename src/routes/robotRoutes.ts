/*
    Path: '/api/robot'
*/
import express from 'express';
import { moveRobot } from '../controllers/robotController';
import { validateCommands } from '../middleware/validateCommands';

export const robotRouter = express.Router();

robotRouter.post('/move', validateCommands, moveRobot);
