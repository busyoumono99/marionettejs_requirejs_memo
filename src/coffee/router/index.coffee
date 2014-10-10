define [
	'marionette'
], (Marionette) ->
	'use strict'

	Router = Marionette.AppRouter.extend
		appRoutes:
			'': 'home'
			'create': 'add'
			':id/edit': 'edit'
	Router
