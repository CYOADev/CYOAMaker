<template>
	<div id="main" :style="{width:data.imgSize.width}">
		<img :src="data.imgSrc"/>
		<h3>{{ data.title }}</h3>
		<span>{{ data.description }}</span>
	</div>
</template>

<script>
export default {
	name: "Section",
	props: ["data"]
}
</script>

<style scoped>
#main {
	word-wrap: break-word;
}
</style>
