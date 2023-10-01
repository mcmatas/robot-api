import express from 'express';
import { robotRouter } from './routes/robotRoutes';
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/robot', robotRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
