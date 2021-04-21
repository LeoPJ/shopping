<template>
	<div id="app">
		<h1 class='title'>网上商城</h1>
		<p class="subtitle">
			<router-link to="/goodslist">商品列表</router-link>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<router-link to='/cart'>购物车({{myCount}})</router-link>
		</p>
		<router-view></router-view>
	</div>

</template>

<script>
	import {
		mapGetters
	} from 'vuex'
	export default {
		computed: {
			...mapGetters({
				myCount: 'getTotalCount'
			})
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	ol,
	ul {
		list-style: none;
	}

	a {
		text-decoration: none;
	}

	.title {
		margin-top: 20px;
		font-size: 50px;
		text-align: center;
		margin-bottom: 20px;
	}

	.subtitle {
		font-size: 25px;
		text-align: center;
		margin-bottom: 20px;
	}
</style>
