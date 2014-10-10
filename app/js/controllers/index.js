define(['marionette', 'require', 'collections/memoList'], function(Marionette, require, MemoList) {
  'use strict';
  var Controller;
  Controller = Marionette.Controller.extend({
    memoList: new MemoList(),
    getApp: function() {
      return require('app');
    },
    home: function() {},
    add: function() {},
    edit: function(id) {
      var memo;
      memo = this.memoList.get(id);
      console.log(memo);
    }
  });
  return Controller;
});
