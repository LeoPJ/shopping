<template>
	<div class="dashboard-container">
		<el-row gutter="10">
			<el-col v-for="item in fruitList" :key="item.id" span="4">
				<el-card :body-style="{ padding: '8px' }">
				<img :src="item.url" class="image">
				<p class="headtext">商品名: {{item.name}}</p>
				<p class="mytext">¥ {{item.price}}</p>
				<el-button @click="add2Cart(item)" style="margin-top:10px;" type="success" round>加入购物车</el-button>
			</el-card>
			</el-col>
		</el-row>
	</div>
</template>
<script>
	import {
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				fruitList: [{
						id: 10001,
						num: 1,
						url: "http://img.cuper.top/html20210420194112.jpg",
						name: "切尔西",
						price: 50
					},
					{
						id: 10002,
						num: 1,
						url: "http://img.cuper.top/html20210420194113.jpg",
						name: "多特蒙德",
						price: 45
					},
					{
						id: 10003,
						num: 1,
						url: "http://img.cuper.top/html20210420194114.jpg",
						name: "巴塞罗那",
						price: 80
					},
					{
						id: 10004,
						num: 1,
						url: "http://img.cuper.top/html20210420194115.jpg",
						name: "曼联",
						price: 60
					},
					{
						id: 10005,
						num: 1,
						url: "http://img.cuper.top/html20210420194939.jpg",
						name: "曼城",
						price: 100
					}
				]
			};
		},
		// 方法
		methods: {
			...mapMutations({
				add2Cart: 'addGoods'
			})
		}
	};
</script>
<style>
	.dashboard {
		&-container {
			margin: 30px;
		}

		&-text {
			font-size: 30px;
			line-height: 46px;
		}
	}

	.el-row {
		margin-left: 30px;
		margin-right: 30px;
		margin-top: 20px;
	}

	.el-col {
		border-radius: 4px;
	}

	.image {
		width: 100%;
	}

	.mytext {
		font-size: 16px;
		word-wrap: break-word;
	}

	.headtext {
		font-size: 20px;
		font-weight: bolder;
	}

	.box-card {
		display: inline-block;
		height: auto;
		float: left;
		width: 100%;
	}

	.demo {
		display: inline-block;
		width: 85%;
		height: 85%;
		line-height: 100px;
		border-radius: 5px;
		overflow: hidden;
		background: #fff;
		position: relative;
		box-shadow: 3px 3px 3px rgba(90, 90, 90, 51);
		margin-top: 20px;
	}

	.demo:hover {
		display: block;
	}
</style>
