<template>
	<div>
		<span class="title" @click="toggleDetail"><b>{{data.title === "" ? "Title" : data.title}}</b></span>
		<button style="float:right" @click="addChild">+</button>
		<button style="float:right" @click="$emit('deleteSelf', data.id)">-</button>
		<div v-if="detail">
			<crop :image="data.imgSrc" :size="data.imgSize" @cropImage="cropImage"/>
			<div><input type="file" @change="uploadImg" accept=".png,.jpg"/></div>
			<div><input v-model="data.title" :placeholder="data.title === '' ? 'Title' : data.title" :disabled="data.title == 'Img'"/></div>
			<div><textarea v-model="data.description" placeholder="Description" rows="4"/></div>
		</div>
		<ul>
			<li is="ListItem" v-for="child in data.children" :data="child" :key="child.id" @deleteSelf="deleteChild"/>
		</ul>
	</div>
</template>

<script>
import ListItem from "./ListItem.vue";
import Crop from "./Crop.vue"

let listID = 0;

export default {
	name: "HeaderItem",
	props: ["data"],
	data: function() {
		return {
			detail: false
		};
	},
	methods: {
		toggleDetail: function() {
			this.detail = !this.detail;
		},
		uploadImg: function(event) {
			this.data.title = "Img";
			let reader = new FileReader();
			let vm = this.data;
			reader.onload = function(e) {
				vm.imgSrc = e.target.result;
			};
			reader.readAsDataURL(event.target.files[0]);
		},
		addChild: function() {
			this.data.children.push({
				id: listID++,
				imgSrc: "",
				imgSize: this.data.imgSize,
				title: "",
				description: "",
				statement: ""
			});
		},
		deleteChild: function(id) {
			this.$delete(this.data.children, this.data.children.findIndex((elem) => {return elem.id === id;}));
		},
		cropImage: function(data) {
			this.data.imgSrc = data;
		}
	},
	components: {
		ListItem,
		Crop
	}
}
</script>

<style scoped>
.title {
	font-size: 24px;
}

textarea {
	width: 50%;
	height: 100%;
}
</style>
