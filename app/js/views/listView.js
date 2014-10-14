define(['marionette', 'views/memoView'], function(Marionette, MemoView) {
  'use strict';
  var ListView;
  ListView = Marionette.CollectionView.extend({
    el: '#memoList',
    childView: MemoView,
    initialize: function() {
      this.render();
    }
  });
  return ListView;
});
