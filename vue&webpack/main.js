//cnpm install jquery
var $ = require("jquery");
window.$ = $;

import "weui";

//cnpm install vue
import Vue from "vue";

//cnpm install vue-router
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//cnpm install vuex
import Vuex from 'vuex'
Vue.use(Vuex)

//使用muse-ui
//npm install --save muse-ui
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

//引入mui
require("./mui/css/mui.css")
window.mui = require("mui")

//组件
var index = require("./components/index.vue")
//主题
import topics from "./components/index/topics.vue"
//收藏
import collect from "./components/index/collect.vue"

//详情页
import detail from "./components/detail.vue"

var home = require("./components/home.vue")
var three = require("./components/three.vue")
var weui = require("./components/weui.vue")

var router = new VueRouter({
	routes:[{
		path:"/index",
		component:index,
		children:[{
			path:"topics",
			component:topics
		},{
			path:"collect",
			component:collect
		}]
	},{
		path:"/detail",
		component:detail
	},{
		path:"/home",
		component:home
	},{
		path:"/three",
		component:three
	}, {
		path: "/weui",
		component: weui
	}]
})

//状态管理
var store = new Vuex.Store({
	state: {
		exchange: "测试"
	},
	mutations: {
		setExchange(state, data) {
			state.exchange = data
		}
	},
	getters: {
		getExchange(state) {
			return state.exchange
		}
	}
});


new Vue({
	el:"#demo",
	template:`
		<router-view></router-view>
	`,
	router,
	store,
	data:{
		name:"yrh"
	},
})
