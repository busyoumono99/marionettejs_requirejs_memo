define(['marionette', 'require', 'models/memo', 'collections/memoList', 'views/listView', 'views/editView'], function(Marionette, require, Memo, MemoList, ListView, EditView) {
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
    home: function() {
      this.getApp().edit.empty();
    },
    add: function() {
      var editView, memo;
      memo = new Memo(null, {
        collection: this.getApp().memoList
      });
      editView = new EditView({
        model: memo
      });
      this.getApp().edit.show(editView);
    },
    edit: function(id) {
      var editView, memo;
      console.log(this.getApp().memoList.length);
      memo = this.getApp().memoList.get(id);
      editView = new EditView({
        model: memo
      });
      this.getApp().edit.show(editView);
    }
  });
  return Controller;
});
