define(['backbone', 'marionette', 'router/index', 'controllers/index', 'collections/memoList'], function(Backbone, Marionette, Router, Controller, MemoList) {
  'use strict';
  var MemoApp, app;
  MemoApp = Marionette.Application.extend({
    initialize: function(options) {
      console.log(options);
    },
    setMemoList: function(list) {
      this.memoList = list;
    },
    setRouter: function() {
      this.ctr = new Controller();
      this.router = new Router({
        controller: this.ctr
      });
    }
  });
  app = new MemoApp();
  app.addRegions({
    main: '#main',
    edit: '#edit-container'
  });
  app.on('start', function() {
    app.setRouter();
    app.setMemoList(new MemoList());
    app.memoList.fetch().done(function() {
      app.ctr.start({
        memoList: app.memoList
      });
      Backbone.history.start();
    });
  });
  return Window.app = app;
});
