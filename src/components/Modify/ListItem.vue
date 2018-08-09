<template>
	<div>
		<span class="title" @click="toggleDetail"><b>{{ data.title === "" ? "Title" : data.title }}</b>&nbsp;id: {{ data.id }}</span>
		<button style="float:right" @click="$emit('deleteSelf', data.id)">-</button>
		<div v-if="detail">
			<crop :image="data.imgSrc" :size="data.imgSize" @cropImage="cropImage"/>
			<div><input type="file" @change="uploadImg" accept=".png,.jpg"/></div>
			<div><input v-model="data.title" :placeholder="data.title === '' ? 'Title' : data.title"/></div>
			<div><input v-model="data.statement" placeholder="Statement"/></div>
			<div><textarea v-model="data.description" placeholder="Description" rows="4"/></div>
		</div>
	</div>
</template>

<script>
import Crop from "./Crop.vue"

export default {
	name: "ListItem",
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
			let reader = new FileReader();
			let vm = this.data;
			reader.onload = function(e) {
				vm.imgSrc = e.target.result;
			};
			reader.readAsDataURL(event.target.files[0]);
		},
		cropImage: function(data) {
			this.data.imgSrc = data;
		}
	},
	components: {
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
