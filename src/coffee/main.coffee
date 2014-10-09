'use strict'

require.config
	paths:
		jquery:			'../bower_components/jquery/dist/jquery'
		underscore:		'../bower_components/underscore/underscore'
		backbone:		'../bower_components/backbone/backbone'
		marionette:		'../bower_components/marionette/lib/backbone.marionette'
		text:			'../bower_components/requirejs-text/text'
		bootstrap:		'../bower_components/bootstrap/dist/js/bootstrap'
	shim:
		bootstrap:
			deps: ['jquery']
			exports: 'Bootstrap'

require [
	'marionette'
	'bootstrap'
], (Marionette) ->
	app = new Marionette.Application()
	app.on 'start', ->
		console.log 'app start'
	app.start()
	return
