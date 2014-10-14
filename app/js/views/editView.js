define(['underscore', 'marionette', 'require', 'text!templates/edit.html'], function(_, Marionette, require, editTemp) {
  'use strict';
  var EditView;
  EditView = Marionette.ItemView.extend({
    template: _.template(editTemp),
    ui: {
      ipt_title: '#js-title',
      ipt_content: '#js-content'
    },
    events: {
      'click #saveBtn': 'onSave'
    },
    onSave: function() {
      console.log(this);
      this.model.save({
        title: this.ui.ipt_title.val().trim(),
        content: this.ui.ipt_content.val().trim()
      }).done((function(_this) {
        return function() {
          var app;
          app = require('app');
          app.memoList.add(_this.model, {
            merge: true
          });
        };
      })(this));
    }
  });
  return EditView;
});
