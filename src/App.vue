<template>
	<div id="app">
		<NavBar @showModify="showModify" @showPreview="showPreview"/>
		<Modify v-show="modify" :data="data">modify</Modify>
		<Preview v-show="preview" :data="data">preview</Preview>
	</div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Modify from './components/Modify/Modify.vue'
import Preview from './components/Preview/Preview.vue'

export default {
	name: 'App',
	data: function() {
		return {
			modify: true,
			preview: false,
			data: {
				title: "",
				imgSize: {
					width: 96,
					height: 96
				},
				elements: [
				],
				background: "",
				customCSS: ""
			}
		}
	},
	methods: {
		showModify: function() {
			this.modify = true;
			this.preview = false;
		},
		showPreview: function() {
			this.modify = false;
			this.preview = true;
		}
	},
	components: {
		NavBar,
		Modify,
		Preview
	}
}
</script>

<style>
body {
	margin: 0px;
	background-color: #6D7993;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}



/* Alex Brush Font*/

/* latin-ext */
@font-face {
  font-family: 'Alex Brush';
  font-style: normal;
  font-weight: 400;
  src: local('Alex Brush Regular'), local('AlexBrush-Regular'), url(https://fonts.gstatic.com/s/alexbrush/v8/SZc83FzrJKuqFbwMKk6EhUvz7RlNiCY0GA.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Alex Brush';
  font-style: normal;
  font-weight: 400;
  src: local('Alex Brush Regular'), local('AlexBrush-Regular'), url(https://fonts.gstatic.com/s/alexbrush/v8/SZc83FzrJKuqFbwMKk6EhUXz7RlNiCY.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
</style>
