define [
	'underscore'
	'marionette'
	'require'
	'text!templates/memo.html'
], (_, Marionette, require, memoTemp) ->
	'use strict'

	MemoView = Marionette.ItemView.extend
		tagName: 'tr'
		className: 'view'
		template: _.template(memoTemp)
		events:
			'click .edit': 'onEdit'
			'dblclick': 'onEdit'
			'click .delete': 'onDelete'
		modelEvents:
			'change': 'render'
		getApp: ->
			require 'app'
		onEdit: ->
			@getApp().router.navigate @model.get('id') + '/edit', {trigger: true}
			return
		onDelete: ->
			@model.destroy()
			return
	MemoView
