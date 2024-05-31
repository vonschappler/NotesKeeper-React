import { Notes } from '../../database/models/index.js';

import * as utils from '../../utils/index.js';

const getNotes = (req, res, next) => utils.factory.get(req, res, next, Notes);
const addNote = (req, res, next) => utils.factory.add(req, res, next, Notes);

const notesController = {
  getNotes,
  addNote,
};

export { notesController };
