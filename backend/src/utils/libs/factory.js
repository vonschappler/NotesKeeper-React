import { prepareQuery } from './prepareQuery.js';
import { database } from '../../database/database.js';

const get = async (req, res, next, Model, options) => {
  const queryOptions = prepareQuery(req, options);
  // console.log({ getOptions: options });
  // console.log({ queryOptions });
  const data = await Model.findAll(queryOptions);
  if (data.length === 0)
    return next(res.json({ message: 'There are no posts' }));
  res.send({ data });
};

const add = async (req, res, next, Model, options) => {
  const toInsert = req.body;
  const result = await Model.create(toInsert);

  if (!result) return next('Error adding note');
  return res.send(result);
};

const rem = async (req, res, next, Model, options) => {
  const toDelete = req.query;
  const result = await Model.destroy({ where: toDelete });
  console.log(result);
  if (!result) return next('Error deleting note');
  return res.send({ msg: 'Deleted' });
};

const upt = async (req, res, next, Model, options) => {
  const toEdit = req.query;
  const newData = req.body;
  console.log(toEdit);
  console.log(newData);
  const result = await Model.update(newData, { where: toEdit });
  console.log(result);
  if (!result) return next('Error updating note');
  res.send(result);
  // res.send('ok');
};

// const getById = async (req, res, next, Model, options) => {
//   const queryOptions = prepQuery(req, options);
//   // const tableName = Model.tableName;
//   const data = await Model.findById(queryOptions);
//   if (data.length === 0)
//     return next(res.json({ message: 'There are no posts' }));
//   res.send({ data });
// };

// const update = async (req, res, next, Model, options) => {
//   const queryOptions = prepQuery(req, options);
//   // const tableName = Model.tableName;
//   const data = await Model.update(data, queryOptions);
//   if (data.length === 0)
//     return next(res.json({ message: 'There are no posts' }));
//   res.send({ data });
// };

const factory = {
  add,
  get,
  rem,
  upt,
};

export { factory };
