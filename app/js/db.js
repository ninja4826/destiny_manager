var squel = require('squel');
var sql = require('sql');
var fs = require('fs');
export var DB = function() {
    this.db = openDatabase('destiny_db', '0.1', 'Database for Destiny Loadouts', 2 * 1024 * 1024);

    var content = 'CREATE TABLE IF NOT EXISTS users (' +
        'id integer NOT NULL PRIMARY KEY,' +
        'name varchar(20) NOT NULL,' +
        'membershipType integer NOT NULL,' +
        'membershipId integer NOT NULL);' +
        'CREATE TABLE IF NOT EXISTS loadouts (' +
        'id integer NOT NULL PRIMARY KEY,' +
        'name varchar(20) NOT NULL,' +
        'head integer NOT NULL,' +
        'chest integer NOT NULL,' +
        'arms integer NOT NULL,' +
        'legs integer NOT NULL,' +
        'class_item integer NOT NULL,' +
        'primary_weap integer NOT NULL,' +
        'special_weap integer NOT NULL,' +
        'heavy_weap integer NOT NULL,' +
        'class integer NOT NULL,' +
        'user_id integer NOT NULL,' +
        'FOREIGN KEY (user_id) REFERENCES user (id));';
    this.db.transaction(function (tx) {
        tx.executeSql(content);
    });
};
DB.prototype = {
    execute: function(str) {
        this.db.transaction(function (tx) {
            tx.executeSql(str);
        });
    },
    search: function(str, func) {
        this.db.transaction(function(tx) {
            if (typeof func === 'undefined') {
                return tx.executeSql(str, [], function (tx, results) {
                    return results;
                });
            } else {
                tx.executeSql(str, [], func);
            }
        });
    },
    add: function(type, obj) {
        this.db.transaction(function(tx) {

        });
    }
};
