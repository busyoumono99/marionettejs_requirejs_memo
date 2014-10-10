define [
	'marionette'
	'require'
	'collections/memoList'
], (Marionette, require, MemoList) ->
	'use strict'

	Controller = Marionette.Controller.extend
		memoList: new MemoList()
		getApp: ->
			require 'app'
		home: ->
			return
		add: ->
			return
		edit: (id) ->
			memo = @memoList.get(id)
			console.log memo
			return
	Controller
