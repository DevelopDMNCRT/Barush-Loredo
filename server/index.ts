import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes';
import noteRoutes from './routes/note.routes';
import sliderRoutes from './routes/slider.routes';
import authRoutes from './routes/auth.routes';

import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5005;

app.use(cors({
  origin: true, // Allow all origins
  credentials: true,
}));
app.use(express.json());

// Expose uploads directory publicly
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/notes', noteRoutes);
app.use('/api/sliders', sliderRoutes);

if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app;
