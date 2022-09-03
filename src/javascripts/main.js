import './reactApp.jsx';
import my from './my.js';
import '../stylesheets/main.scss';

import Vue from 'Vue';
import VueApp from './VueApp.vue';

new Vue({
  el:'#vue-root',
  render:(h) => h(VueApp),
});

console.log("webpack");
my();