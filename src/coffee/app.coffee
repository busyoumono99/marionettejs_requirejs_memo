define [
	'backbone'
	'marionette'
	'router/index'
	'controllers/index'
	'collections/memoList'
], (Backbone, Marionette, Router, Controller, MemoList) ->
	'use strict'

	ctr = new Controller()
	MemoApp = Marionette.Application.extend
		initialize: (options) ->
			console.log options
			@memoList = new MemoList()
			@memoList.fetch()
			@router = new Router {
				controller: ctr
			}
			return

	app = new MemoApp()
	app.addRegions {
		main: '#main'
		edit: '#edit-container'
	}

	app.on 'start', ->
		Backbone.history.start()
		console.log app
		ctr.start({memoList: app.memoList})
		# console.log(Window.app.memoList.add({title:'test1', content:'test1', id:100}));
		return

	Window.app = app

