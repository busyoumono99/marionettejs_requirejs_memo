define(['marionette', 'require', 'collections/memoList', 'views/listView'], function(Marionette, require, MemoList, ListView) {
  'use strict';
  var Controller;
  Controller = Marionette.Controller.extend({
    getApp: function() {
      return require('app');
    },
    start: function(opt) {
      this.showMemoList(opt.memoList);
    },
    showMemoList: function(collection) {
      var memoListView;
      memoListView = new ListView({
        collection: collection
      });
      this.getApp().main.show(memoListView);
    },
    home: function() {},
    add: function() {},
    edit: function(id) {
      var memo;
      memo = this.getApp().memoList.get(id);
      console.log(this.getApp().memoList.length);
      console.log(memo);
    }
  });
  return Controller;
});
