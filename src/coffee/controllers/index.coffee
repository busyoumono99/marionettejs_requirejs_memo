define [
	'marionette'
	'require'
	'models/memo'
	'collections/memoList'
	'views/listView'
	'views/editView'
], (Marionette, require, Memo, MemoList, ListView, EditView) ->
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
			@getApp().edit.empty()
			return
		add: ->
			memo = new Memo(null, {
				collection: @getApp().memoList
			})
			editView = new EditView {
				model: memo
			}
			@getApp().edit.show editView
			return
		edit: (id) ->
			memo = @getApp().memoList.get(id)
			editView = new EditView {
				model: memo
			}
			@getApp().edit.show editView
			return
	Controller
