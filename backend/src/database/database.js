import { Sequelize } from 'sequelize';


// FOR DEVELOPMENT

// const DB_NAME = process.env.DB_NAME;
// const DB_USER = process.env.DB_USER;
// const DB_PASS = process.env.DB_PASS;
// const DB_HOST = process.env.DB_HOST;
// const DB_PORT = Number(process.env.DB_PORT);
// const DB_DLCT = process.env.DB_DLCT;
// const database = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
//   host: DB_HOST,
//   port: DB_PORT,
//   dialect: DB_DLCT,
//   logging: (msg) => console.log(msg),
//   dialectOptions: {
//     dataStrings: true,
//     typeCast: true,
//     useUTC: true,
//     },
//   },
//   timezone: '-3:00',
// });





// FOR PRODUCTION
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

