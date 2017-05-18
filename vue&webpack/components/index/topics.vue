<template>
	<div>
		<swiper></swiper>
		<pullrefresh></pullrefresh>
		<tabs></tabs>
	</div>
</template>
<script>
	import swiper from "../swiper.vue";
	import pullrefresh from "../pullrefresh.vue";
	import tabs from "../tabs.vue";
	export default {
		components:{
			swiper,
			pullrefresh,
			tabs,
		}
	}
</script>