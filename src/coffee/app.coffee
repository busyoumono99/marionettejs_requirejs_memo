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
			return

		setMemoList: (list) ->
			@memoList = list
			return

		setRouter: ->
			@ctr = new Controller()
			@router = new Router {
				controller: @ctr
			}
			return

	app = new MemoApp()
	app.addRegions {
		main: '#main'
		edit: '#edit-container'
	}

	app.on 'start', ->
		app.setRouter()
		app.setMemoList(new MemoList())
		app.memoList.fetch().done( ->
			app.ctr.start({memoList: app.memoList})
			Backbone.history.start()
			return
		)
		return

	Window.app = app

