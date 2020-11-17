// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '~/assets/styles.scss'

import DefaultLayout from '~/layouts/Default.vue'
import Header from '~/layouts/Header.vue'
import Hero from '~/components/Hero.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('Header', Header)
  Vue.component('Hero', Hero)

}

