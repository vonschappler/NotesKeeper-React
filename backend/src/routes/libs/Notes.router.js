import { Router } from 'express';
import { notesController as controller } from '../../controlers/index.js';

const notesRouter = Router();

notesRouter.get('/', controller.getNotes);
// notesRouter.post('/', controller.addNotes);
// notesRouter.get('/:id', controller.getNoteById);
// notesRouter.patch('/:id', controller.updateNote);
// notesRouter.delete('/', controller.deleteAllNotes);
// notesRouter.delete('/:id', controller.deleteNoteById);

export { notesRouter };
