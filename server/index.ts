import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes';
import noteRoutes from './routes/note.routes';
import sliderRoutes from './routes/slider.routes';

import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5005;

app.use(cors());
app.use(express.json());

// Expose uploads directory publicly
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/notes', noteRoutes);
app.use('/api/sliders', sliderRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
