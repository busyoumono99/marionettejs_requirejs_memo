define [
	'marionette'
	'views/memoView'
], (Marionette, MemoView) ->
	'use strict'

	ListView = Marionette.CollectionView.extend
		el: '#memoList'
		childView: MemoView
		initialize: ->
			@render()
			return
	ListView

