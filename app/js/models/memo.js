define(['backbone'], function(Backbone) {
  'use strict';
  var Memo;
  Memo = Backbone.Model.extend({
    defaults: {
      title: '',
      content: ''
    },
    parse: function(response) {
      var result, _ref;
      result = null;
      if (((_ref = response.memos) != null ? _ref.Memo : void 0) != null) {
        result = response.memos.Memo;
      } else if (response.Memo != null) {
        result = response.Memo;
      } else {
        result = response;
      }
      return result;
    }
  });
  return Memo;
});
