<template>
	<div id="main" :style="{backgroundImage:data.background}">
		<h1>{{ data.title }}</h1>
		<Section v-for="element in data.elements" :data="element" :key="element.id"></Section>
	</div>
</template>

<script>
import Section from './Section.vue'

export default {
	name: "Preview",
	props: ["data"],
	components: {
		Section
	}
}
</script>

<style scoped>
#main {
	text-align: center;
}
</style>
