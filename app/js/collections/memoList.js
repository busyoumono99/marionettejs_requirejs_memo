define(['backbone', 'models/memo'], function(Backbone, Memo) {
  'use strict';
  var MemoList;
  MemoList = Backbone.Collection.extend({
    model: Memo,
    url: '../../data.basic_memo/memos',
    parse: function(response) {
      if (response.memos != null) {
        return response.memos;
      } else {
        return response;
      }
    }
  });
  return MemoList;
});
