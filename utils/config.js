'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

exports.default = {
	getConfig: function getConfig (ENV) {
		var PROD_CONFIG = {
			API_BASE: 'https://api.fas-doc.it'
		}

		var STAGING_CONFIG = {
			API_BASE: 'https://api.staging.fas-doc.it'
		}

		var DEV_CONFIG = {
			API_BASE: 'http://127.0.0.1:3000'
		}

		var CONFIG = void 0

		switch (ENV) {
		case 'production':
			CONFIG = PROD_CONFIG; break
		case 'staging':
			CONFIG = STAGING_CONFIG; break
		case 'remoteapi':
			CONFIG = STAGING_CONFIG; break
		default:
			CONFIG = DEV_CONFIG; break
		}

		CONFIG.locales = [
			{ code: 'en', name: 'ENG', iso: 'en-US', file: 'en-US.js' }
		]

		return CONFIG
	}
}
