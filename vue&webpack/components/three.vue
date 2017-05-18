<!--html-->
<template>
	<div>
		<p>{{name}}</p>
		<p>哈哈哈</p>
	</div>
</template>
<!--js-->
<script>
	module.exports = {
		data:function(){
			return {
				name: "第三页"
			}
		},
		mounted() {
			$("p").css("color", "blue");
		}
	}
</script>
<!--css-->
<style scoped>
	p{
		font-size: 20px;
	}
</style>
