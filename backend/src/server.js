import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

app.use('/api/notes', notesRoutes);

app.listen(3000, async () => {
  await connectDB();
  console.log(`server started on http://localhost:${PORT}`);
});
