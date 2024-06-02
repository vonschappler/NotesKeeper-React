import { prepareQuery } from './prepareQuery.js';

const get = async (req, res, next, Model, options) => {
  const queryOptions = prepareQuery(req, options);
  const data = await Model.findAll({
    ...queryOptions,
    order: [['createdAt', 'DESC']],
  });
  if (data.length === 0)
    return next(res.json({ message: 'There are no posts' }));
  res.send({ data });
};

const add = async (req, res, next, Model, options) => {
  const toInsert = req.body;
  const result = await Model.create(toInsert);
  if (!result) return next('Error adding note');
  return res.send({ message: 'Note added successfuly' });
};

const rem = async (req, res, next, Model, options) => {
  const toDelete = req.query;
  const result = await Model.destroy({ where: toDelete });
  if (!result) return next('Error deleting note');
  return res.send({ message: 'Note deleted successfuly' });
};

const upt = async (req, res, next, Model, options) => {
  const toEdit = req.query;
  const newData = req.body;
  const result = await Model.update(newData, { where: toEdit }, options);
  if (!result) return next('Error updating note');
  return res.send({ message: 'Note updated successfuly' });
};

const factory = {
  add,
  get,
  rem,
  upt,
};

export { factory };
