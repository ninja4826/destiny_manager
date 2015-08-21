import { DB } from './js/db';
var squel = require('squel');
var App = function() {
    this.db = new DB();
};

App.prototype = {
    init: function() {
        this.setEventListeners();
        this.refreshLoadoutList();
    },
    setEventListeners: function() {

    },
    refreshLoadoutList: function() {
        var loadouts;
        this.db.search(squel.select().from('loadout'), function(tx, results) {
            loadouts = results;
        });
        console.log(loadouts);
    }
};
app = new App();
