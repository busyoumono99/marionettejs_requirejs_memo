define(['underscore', 'marionette', 'require', 'text!templates/memo.html'], function(_, Marionette, require, memoTemp) {
  'use strict';
  var MemoView;
  MemoView = Marionette.ItemView.extend({
    tagName: 'tr',
    className: 'view',
    template: _.template(memoTemp),
    events: {
      'click .edit': 'onEdit',
      'dblclick': 'onEdit',
      'click .delete': 'onDelete'
    },
    modelEvents: {
      'change': 'render'
    },
    getApp: function() {
      return require('app');
    },
    onEdit: function() {
      this.getApp().router.navigate(this.model.get('id') + '/edit', {
        trigger: true
      });
    },
    onDelete: function() {
      this.model.destroy();
    }
  });
  return MemoView;
});
