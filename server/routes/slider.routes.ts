import { Router } from 'express';
import { getSliders, createSliderImage, deleteSliderImage } from '../controllers/slider.controller';
import { upload } from '../controllers/note.controller';

const router = Router();

router.get('/', getSliders);
router.post('/', upload.array('images', 20), createSliderImage);
router.delete('/:id', deleteSliderImage);

export default router;
