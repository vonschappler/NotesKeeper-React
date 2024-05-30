import {} from 'dotenv/config';
import express from 'express';
import cors from 'cors';
import * as routes from './src/routes/index.js';
import { database } from './src/database/database.js';

const PORT = process.env.PORT;
const HOST = process.env.HOST;

const app = express();

const db = await database.authenticate();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: '10kb' }));
app.use('/notes', routes.notesRouter);

app.listen(PORT, () => {
  console.log(`Server is runing on ${HOST}:${PORT}`);
});
