<template>
	<div class="app">
		<nuxt :class="'page ' + $route.name"/>
	</div>
</template>

<style lang="css">
@import 'muse-ui/dist/muse-ui.css';
</style>

<style lang="scss">
@import "../assets/scss/custom_vars.scss";
@import "~monomer-css/scss/monomer.scss";
@import "../assets/scss/style.scss";
</style>

<script>
import Vue from 'vue'
import Vuex from 'vuex'

// eslint-disable-next-line
import en from 'vee-validate/dist/locale/en.js'
// eslint-disable-next-line
import VeeValidate, { Validator } from 'vee-validate'

import * as svgicon from 'vue-svgicon'
import 'vue-svgicon/dist/polyfill'

import MuseUI from 'muse-ui'
Vue.use(MuseUI)
Vue.use(Vuex)

const vvConfig = { enableAutoClasses: true, locale: 'en', events: 'blur', errorBagName: 'vErrors' }
Vue.use(VeeValidate, vvConfig)

Vue.use(svgicon, { tagName: 'svgicon' })

Vue.config.productionTip = false

export default {
	head () {
		return {
			title: this.$t('home.SEO.title'),
			meta: [
				{ hid: 'description', name: 'description', content: this.$t('home.SEO.desc') },
				{ hid: 'keywords', name: 'keywords', content: this.$t('home.SEO.keywords') },
				{ hid: 'og:url', property: 'og:url', content: this.$store.state.baseUrl },
				{ hid: 'og:image', property: 'og:image', content: this.$store.state.baseUrl + this.$t('home.SEO.img') },
				{ hid: 'og:title', property: 'og:title', content: this.$t('home.SEO.title') },
				{ hid: 'og:description', property: 'og:description', content: this.$t('home.SEO.desc') },

				{ hid: 'twitter:title', property: 'twitter:title', content: this.$t('home.SEO.title') },
				{ hid: 'twitter:description', property: 'twitter:description', content: this.$t('home.SEO.desc') },
				{ hid: 'twitter:image', property: 'twitter:image', content: this.$store.state.baseUrl + this.$t('home.SEO.img') }
			],
			link: [
				{ rel: 'canonical', href: this.$store.state.baseUrl }
			]
		}
	},
	mounted () {
		this.setVeeValidateLocale(this.$i18n.loadedLanguages[0] || 'en')
		this.$i18n.onLanguageSwitched = (oldLocale, newLocale) => { this.setVeeValidateLocale(newLocale) }
	},
	methods: {
		setVeeValidateLocale (locale) {
			const lang = require('vee-validate/dist/locale/' + locale + '.js')
			this.$validator.localize(locale, lang)
		}
	}
}
</script>
