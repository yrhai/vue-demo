<template>
	<div>
		<p>第二页</p>
	</div>
</template>
<script>
	module.exports = {
		mounted() {
			$("p").css("color", "red");
		}
	}
</script>