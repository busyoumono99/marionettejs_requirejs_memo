define [
	'backbone'
	'models/memo'
], (Backbone, Memo) ->
	'use strict'

	MemoList = Backbone.Collection.extend
		model: Memo
		url: '../../data.basic_memo/memos'
		parse: (response) ->
			if response.memos?
				return response.memos
			else
				return response
	MemoList
