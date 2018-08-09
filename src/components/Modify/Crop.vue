<template>
	<div>
		<img v-bind:src="cropped === '' ? original : cropped" width="100px" @click="toggleCroppie"/>
		<div class="croppie" v-if="croppie">
			<vue-croppie ref=croppieRef :enableOrientation="true" :viewport="{width:size.width,height:size.height}" :enableZoom="true"/>
			<button @click="crop">Crop</button>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';

export default {
	name: "Crop",
	props: ["image", "size"],
	mounted: function() {
		this.original = this.image;
	},
	data: function() {
		return {
			croppie: false,
			original: "",
			cropped: ""
		};
	},
	methods: {
		toggleCroppie: function() {
			this.croppie = !this.croppie;
			if (this.croppie === true) {
				let vm = this;
				Vue.nextTick(function() {
					vm.$refs.croppieRef.bind({
						url: vm.original
					});
				})
			}
		},
		crop: function() {
			let options = {
				format: 'jpeg'
			}
			this.$refs.croppieRef.result(options, (output) => {
				this.cropped = output;
				this.$emit("cropImage", this.cropped);
			});
		}
	},
	watch: {
		image: function(newVal) {
			this.original = newVal;
		}
	}
}
</script>

<style scoped>
.croppie {
	display: block;
	text-align: center
}
</style>
