define(['backbone', 'marionette', 'router/index', 'controllers/index', 'collections/memoList'], function(Backbone, Marionette, Router, Controller, MemoList) {
  'use strict';
  var MemoApp, app;
  MemoApp = Marionette.Application.extend({
    initialize: function(options) {
      console.log(options);
      this.router = new Router({
        controller: new Controller()
      });
    }
  });
  app = new MemoApp();
  app.on('start', function() {
    Backbone.history.start();
    console.log(app.router);
  });
  return Window.app = app;
});
