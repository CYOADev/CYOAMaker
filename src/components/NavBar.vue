<template>
	<div class="nav-bar">
		<span @click="$emit('showModify')">Modify</span>
		<img id="logo" src="../assets/logo.png"/>
		<span @click="$emit('showPreview')">Preview</span>
	</div>
</template>

<script>
export default {
	name: 'NavBar',
}
</script>

<style scoped>
#logo {
	width: 96px;
}

.nav-bar {
	display: flex;
	width: 100%;
	background: #9099A2;
	align-items: center;
	justify-content: center;
}

.nav-bar > span {
	margin: 24px;
	color: #D5D5D5;
	font-size: 36px;
	font-family: "Alex Brush", cursive;
	cursor: pointer;
}
</style>
