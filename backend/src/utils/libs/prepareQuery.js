import { config } from './config.js';

const attributes = {
  include: config.QUERY_INCLUDE_COLUMNS,
  exclude: config.QUERY_EXCLUDE_COLUMNS,
};

export const prepareQuery = (req, options) => {
  const toSearch = req?.query;
  const include = toSearch?.include
    ? toSearch?.include.split(';')
    : options?.includes
    ? options?.includes
    : config.QUERY_INCLUDE_COLUMNS;
  const exclude = toSearch?.exclude
    ? toSearch?.exclude.split(';')
    : options?.excludes
    ? options.excludes
    : config.QUERY_EXCLUDE_COLUMNS;
  const related = toSearch.related
    ? toSearch?.related.split(';')
    : options?.related;
  attributes.include = [...config.QUERY_INCLUDE_COLUMNS, ...include];
  attributes.exclude = [...config.QUERY_EXCLUDE_COLUMNS, ...exclude];
  const limit = Number(req?.query?.limit) || 100;
  const page = Number(req?.query?.page) || 1;
  const offset = limit * (page - 1);
  const paranoid = req?.query?.deleted === 'true' ? false : true;
  delete toSearch?.limit;
  delete toSearch?.page;
  delete toSearch?.deleted;
  delete toSearch?.exclude;
  delete toSearch?.include;
  delete toSearch?.related;
  return {
    where: toSearch,
    limit,
    offset,
    paranoid,
    attributes,
    include: related,
    subQuery: false,
    separate: false,
    required: false,
    right: false,
  };
};
