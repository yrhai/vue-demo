<template>
	<div>
		<xarticle></xarticle>
		<xlist></xlist>
	</div>
</template>
<script>
	import xarticle from "./article/article.vue"
	import xlist from "./list/list.vue"
	export default {
		data: function() {
			return {}
		},
		components:{
			xarticle,
			xlist
		}
	}
</script>
<style scoped>

</style>