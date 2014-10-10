define [
	'backbone'
	'marionette'
	'router/index'
	'controllers/index'
	'collections/memoList'
], (Backbone, Marionette, Router, Controller, MemoList) ->
	'use strict'

	MemoApp = Marionette.Application.extend
		initialize: (options) ->
			console.log options
			@router = new Router {
				controller: new Controller()
			}
			return

	app = new MemoApp()

	app.on 'start', ->
		Backbone.history.start()
		console.log app.router
		return

	Window.app = app

