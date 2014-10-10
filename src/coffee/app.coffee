define [
	'backbone'
	'marionette'
	'collections/memoList'
], (Backbone, Marionette, MemoList) ->
	'use strict'

	MemoApp = Marionette.Application.extend
		initialize: (options) ->
			console.log options
			# @router = new AppRouter {
			# 	controller: new MemoController()
			# }
			return

	app = new MemoApp()

	app.on 'start', ->
		Backbone.history.start()
		return

	Window.app = app

