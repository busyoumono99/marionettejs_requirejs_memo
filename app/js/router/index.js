define(['marionette'], function(Marionette) {
  'use strict';
  var Router;
  Router = Marionette.AppRouter.extend({
    appRoutes: {
      '': 'home',
      'create': 'add',
      ':id/edit': 'edit'
    }
  });
  return Router;
});
