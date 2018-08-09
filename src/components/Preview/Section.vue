<template>
	<div id="main">
		<h2>{{ data.title == "Img" ? "" : data.title }}</h2>
		<img :src="data.imgSrc"/>
		<br/>
		<div class="SectionContainer">
			<SubSection v-for="child in data.children" :data="child" :key="child.id"></SubSection>
		</div>
	</div>
</template>

<script>
import SubSection from "./SubSection.vue"

export default {
	name: "Section",
	props: ["data"],
	components: {
		SubSection
	}
}
</script>

<style scoped>
.SectionContainer {
	display: flex;
	flex-flow: row wrap;
	justify-content: space-around;
	align-items: stretch;
}
</style>
