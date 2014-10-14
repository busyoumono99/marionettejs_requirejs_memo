define(['backbone', 'marionette', 'router/index', 'controllers/index', 'collections/memoList', 'views/listView'], function(Backbone, Marionette, Router, Controller, MemoList, ListView) {
  'use strict';
  var MemoApp, app;
  MemoApp = Marionette.Application.extend({
    initialize: function(options) {
      console.log(options);
      this.router = new Router({
        controller: new Controller()
      });
      this.collection = new MemoList();
      this.listView = new ListView({
        collection: this.collection
      });
    }
  });
  app = new MemoApp();
  app.on('start', function() {
    Backbone.history.start();
    console.log(app.collection);
    console.log(app.listView);
  });
  return Window.app = app;
});
