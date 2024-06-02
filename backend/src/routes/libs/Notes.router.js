import { Router } from 'express';
import { notesController as controller } from '../../controlers/index.js';

const notesRouter = Router();

notesRouter.get('/', controller.getNotes);
notesRouter.post('/', controller.addNote);
notesRouter.delete('/', controller.deleteNote);
notesRouter.patch('/', controller.updateNote);

export { notesRouter };
