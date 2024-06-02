import { Router } from 'express';
import { notesController as controller } from '../../controlers/index.js';

const notesRouter = Router();

notesRouter.get('/', controller.getNotes);
notesRouter.post('/', controller.addNote);
notesRouter.delete('/', controller.deleteNote);
notesRouter.patch('/', controller.updateNote);

// notesRouter.post('/', controller.addNotes);
// notesRouter.get('/:id', controller.getNoteById);
// notesRouter.delete('/:id', controller.deleteNoteById);

export { notesRouter };
