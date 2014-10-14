define(['backbone', 'marionette', 'router/index', 'controllers/index', 'collections/memoList'], function(Backbone, Marionette, Router, Controller, MemoList) {
  'use strict';
  var MemoApp, app, ctr;
  ctr = new Controller();
  MemoApp = Marionette.Application.extend({
    initialize: function(options) {
      console.log(options);
      this.memoList = new MemoList();
      this.memoList.fetch();
      this.router = new Router({
        controller: ctr
      });
    }
  });
  app = new MemoApp();
  app.addRegions({
    main: '#main'
  });
  app.on('start', function() {
    Backbone.history.start();
    console.log(app);
    ctr.start({
      memoList: app.memoList
    });
  });
  return Window.app = app;
});
