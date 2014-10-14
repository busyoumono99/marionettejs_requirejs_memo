define [
	'backbone'
	'marionette'
	'router/index'
	'controllers/index'
	'collections/memoList'
	'views/listView'
], (Backbone, Marionette, Router, Controller, MemoList, ListView) ->
	'use strict'

	MemoApp = Marionette.Application.extend
		initialize: (options) ->
			console.log options
			@router = new Router {
				controller: new Controller()
			}
			@collection = new MemoList()
			@listView = new ListView({
				collection: @collection
			})
			return

	app = new MemoApp()

	app.on 'start', ->
		Backbone.history.start()
		console.log app.collection
		console.log app.listView
		# Window.app.collection.add({title:'test1', content:'test1'});
		# memo_test1 = Window.app.collection.at(0);
		# memo_test1.destroy();
		return

	Window.app = app

