/*
    Path: '/api/robot'
*/
import express from 'express';
import { moveRobot } from '../controllers/robotController';

export const robotRouter = express.Router();

robotRouter.post('/move', moveRobot);
