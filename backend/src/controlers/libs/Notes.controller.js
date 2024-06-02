import { Notes } from '../../database/models/index.js';

import * as utils from '../../utils/index.js';

const getNotes = (req, res, next) =>
  utils.factory.get(req, res, next, Notes, {
    order: {
      createdAt: 'asc',
    },
  });
const addNote = (req, res, next) => utils.factory.add(req, res, next, Notes);
const deleteNote = (req, res, next) => utils.factory.rem(req, res, next, Notes);
const updateNote = (req, res, next) =>
  utils.factory.upt(req, res, next, Notes, { returning: true });
const notesController = {
  getNotes,
  addNote,
  deleteNote,
  updateNote,
};

export { notesController };
