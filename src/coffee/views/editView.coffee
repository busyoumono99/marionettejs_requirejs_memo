define [
	'underscore'
	'marionette'
	'require'
	'text!templates/edit.html'
], (_, Marionette, require, editTemp) ->
	'use strict'

	EditView = Marionette.ItemView.extend
		template: _.template editTemp
		ui:
			ipt_title: '#js-title'
			ipt_content: '#js-content'
		events:
			'click #saveBtn': 'onSave'
		onSave: ->
			console.log @
			@model.save({
				title: @ui.ipt_title.val().trim()
				content: @ui.ipt_content.val().trim()
			}).done =>
				app = require 'app'
				app.memoList.add @model, {merge: true}
				return
			return

	EditView
