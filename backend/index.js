import {} from 'dotenv/config';
import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT;
const HOST = process.env.HOST;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: '10kb' }));

app.post('/', (req, res) => {
  const data = req.body;
  console.log(data);
  res.send({ data });
});

app.listen(PORT, () => {
  console.log(`Server is runing on ${HOST}:${PORT}`);
});
