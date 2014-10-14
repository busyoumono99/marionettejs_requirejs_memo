define(['backbone', 'marionette', 'router/index', 'controllers/index', 'collections/memoList'], function(Backbone, Marionette, Router, Controller, MemoList) {
  'use strict';
  var MemoApp, app;
  MemoApp = Marionette.Application.extend({
    initialize: function(options) {
      console.log(options);
      this.ctr = new Controller();
      this.router = new Router({
        controller: this.ctr
      });
    },
    setMemoList: function(list) {
      this.memoList = list;
    }
  });
  app = new MemoApp();
  app.addRegions({
    main: '#main',
    edit: '#edit-container'
  });
  app.on('start', function() {
    Backbone.history.start();
    app.ctr.start({
      memoList: app.memoList
    });
  });
  return Window.app = app;
});
