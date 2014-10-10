define(['backbone', 'marionette', 'collections/memoList'], function(Backbone, Marionette, MemoList) {
  'use strict';
  var MemoApp, app;
  MemoApp = Marionette.Application.extend({
    initialize: function(options) {
      console.log(options);
    }
  });
  app = new MemoApp();
  app.on('start', function() {
    Backbone.history.start();
  });
  return Window.app = app;
});
