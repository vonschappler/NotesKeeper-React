import { Sequelize } from 'sequelize';

const DB_NAME = process.env.DB_NAME ?? 'keeper_pg';
const DB_USER = process.env.DB_USER ?? 'postgres';
const DB_PASS = process.env.DB_PASS ?? 'postgres';
const DB_HOST = process.env.DB_HOST ?? 'localhost';
const DB_PORT = Number(process.env.DB_PORT) ?? 5432;
const DB_DLCT = process.env.DB_DLCT ?? 'postgres';

/**
 * @instance database
 * @type {Sequelize}
 *
 */
const database = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: DB_DLCT,
  logging: (msg) => console.log(msg),
  dialectOptions: {
    dataStrings: true,
    typeCast: true,
    useUTC: true,
  },
  timezone: '-3:00',
});

export { database };
