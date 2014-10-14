define [
	'marionette'
	'require'
	'collections/memoList'
	'views/listView'
], (Marionette, require, MemoList, ListView) ->
	'use strict'

	Controller = Marionette.Controller.extend
		getApp: ->
			require 'app'
		start: (opt)->
			@showMemoList opt.memoList
			return

		showMemoList: (collection) ->
			memoListView = new ListView {
				collection: collection
			}
			@getApp().main.show memoListView
			return

		home: ->
			return
		add: ->
			return
		edit: (id) ->
			memo = @getApp().memoList.get(id)
			console.log @getApp().memoList.length
			console.log memo
			return
	Controller
