import { DataTypes } from 'sequelize';
import { database } from '../../database.js';
import { v4 as uuid } from 'uuid';

const Notes = database.define('notes', {
  id: {
    type: DataTypes.UUID(),
    primaryKey: true,
    defaultValue: () => uuid(),
  },
  title: {
    type: DataTypes.STRING(100),
  },
  content: {
    type: DataTypes.STRING(500),
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: new Date(),
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: new Date(),
  },
  deletedAt: {
    type: DataTypes.DATE,
  },
});

export { Notes };
