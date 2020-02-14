'use strict';


var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.createTable('Book', {
    columns: {
      id: { type: 'char', length: 36, autoIncrement: false, primaryKey: true },
      title: {type: 'varchar', length: 30},
      description: {type: 'text'},
      authorsFirstname: {type: 'varchar', length: 30},
      authorsLastname: {type: 'varchar', length: 30},
    },
    ifNotExists: true
  }, callback);
};

exports.down = function(db, callback) {
  return db.dropTable('Book', callback);
};

exports._meta = {
  "version": 1
};
