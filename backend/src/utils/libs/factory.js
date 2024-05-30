import { prepareQuery } from './prepareQuery.js';
import { database } from '../../database/database.js';

const get = async (req, res, next, Model, options) => {
  const queryOptions = prepareQuery(req, options);
  console.log({ getOptions: options });
  console.log({ queryOptions });
  const data = await Model.findAll(queryOptions);
  if (data.length === 0)
    return next(res.json({ message: 'There are no posts' }));
  res.send({ data });
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
  // add,
  get,
  // rem,
  // rst,
  // upd,
};

export { factory };
