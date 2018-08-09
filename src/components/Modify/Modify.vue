<template>
	<div id="main">
		<span>title: </span><input v-model="data.title" placeholder="Title"/><br/><br/><br/><br/>
		<span>imageWidth:&nbsp;&nbsp;</span><input v-model.number="data.imgSize.width" placeholder="image width" type="number"/><br/>
		<span>imageHeight: </span><input v-model.number="data.imgSize.height" placeholder="image height" type="number"/><br/><br/><br/><br/>
		<span>Add Section</span>&nbsp;&nbsp;<button @click="addElem">+</button>
		<HeaderItem v-for="element in data.elements" :data="element" :key="element.id" @deleteSelf="deleteElem"/><br/><br/><br/><br/>
		<span>Background: </span><input type="file" @change="uploadImg" accept=".png,.jpg"/><br/><br/>
		<br/><br/><input v-model="data.customCSS" placeholder="custom CSS"/>
	</div>
</template>

<script>
import HeaderItem from './HeaderItem.vue';
import Crop from './Crop.vue'

let headerID = 0;

export default {
	name: "Modify",
	props: ["data"],
	methods: {
		addElem: function() {
			this.data.elements.push({
				id: headerID++,
				title: "",
				description: "",
				imgSrc: "",
				imgSize: this.data.imgSize,
				children: []
			});
		},
		deleteElem: function(id) {
			this.$delete(this.data.elements, this.data.elements.findIndex((elem) => {return elem.id === id;}));
		},
		uploadImg: function(event) {
			let reader = new FileReader();
			let vm = this.data;
			reader.onload = function(e) {
				vm.background = e.target.result;
			};
			reader.readAsDataURL(event.target.files[0]);
		}
	},
	components: {
		HeaderItem,
		Crop
	}
}
</script>

<style scoped>
#main {
	padding: 80px;
}
</style>
