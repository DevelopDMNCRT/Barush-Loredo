import { Router } from 'express';
import { getNotes, getNoteById, createNote, updateNote, deleteNote, upload } from '../controllers/note.controller';

const router = Router();

router.get('/', getNotes);
router.get('/:id', getNoteById);
router.post('/', upload.array('images', 10), createNote);
router.put('/:id', upload.array('images', 10), updateNote);
router.delete('/:id', deleteNote);

export default router;
