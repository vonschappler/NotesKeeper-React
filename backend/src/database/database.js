import { Sequelize } from 'sequelize';

// const DB_NAME = process.env.DB_NAME ?? 'keeper_pg';
// const DB_USER = process.env.DB_USER ?? 'postgres';
// const DB_PASS = process.env.DB_PASS ?? 'postgres';
// const DB_HOST = process.env.DB_HOST ?? 'localhost';
// const DB_PORT = Number(process.env.DB_PORT) ?? 5432;
// const DB_DLCT = process.env.DB_DLCT ?? 'postgres';
const DB_NAME_PROD = process.env.DB_NAME_PROD;
const DB_USER_PROD = process.env.DB_USER_PROD;
const DB_PASS_PROD = process.env.DB_PASS_PROD;
const DB_HOST_PROD = process.env.DB_HOST_PROD;
const DB_PORT_PROD = Number(process.env.DB_PORT_PROD);
const DB_DLCT_PROD = process.env.DB_DLCT_PROD;

/**
 * @instance database
 * @type {Sequelize}
 *
 */
const database = new Sequelize(DB_NAME_PROD, DB_USER_PROD, DB_PASS_PROD, {
  host: DB_HOST_PROD,
  port: DB_PORT_PROD,
  dialect: DB_DLCT_PROD,
  ssl: true,
  logging: (msg) => console.log(msg),
  dialectOptions: {
    dataStrings: true,
    typeCast: true,
    useUTC: true,
    ssl: {
      required: true,
      rejectUnauthorized: false,
      ca: '../../ca.pem',
    },
  },
  timezone: '-3:00',
});

export { database };
