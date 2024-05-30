require('dotenv').config();

const DB_DLCT = process.env.DB_DLCT;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;
const DB_PASS = process.env.DB_PASS;
const DB_USER = process.env.DB_USER;
const DB_DLCT_PROD = process.env.DB_DLCT_PROD;
const DB_HOST_PROD = process.env.DB_HOST_PROD;
const DB_NAME_PROD = process.env.DB_NAME_PROD;
const DB_PASS_PROD = process.env.DB_PASS_PROD;
const DB_USER_PROD = process.env.DB_USER_PROD;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASS,
    database: `${DB_NAME}`,
    host: DB_HOST,
    dialect: DB_DLCT,
    migrationStorage: 'sequelize',
    migrationStorageTableName: 'Migrations',
    seederStorage: 'sequelize',
    seederStorageTableName: 'Seeders',
  },
  test: {
    username: DB_USER,
    password: DB_PASS,
    database: `${DB_NAME}`,
    host: DB_HOST,
    dialect: DB_DLCT,
    migrationStorage: 'sequelize',
    migrationStorageTableName: 'Migrations',
    seederStorage: 'sequelize',
    seederStorageTableName: 'Seeders',
  },
  production: {
    username: DB_USER_PROD,
    password: DB_PASS_PROD,
    database: DB_NAME_PROD,
    host: DB_HOST_PROD,
    dialect: DB_DLCT_PROD,
    migrationStorage: 'sequelize',
    migrationStorageTableName: 'Migrations',
    seederStorage: 'sequelize',
    seederStorageTableName: 'Seeders',
  },
};
