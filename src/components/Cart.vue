<template>
	<div style="margin-left:30px;">
		<el-table :data="cartList" style="width: 100%;" stripe>
			<el-table-column prop="name" label="商品名" width="280"></el-table-column>
			<el-table-column v-if="false" label="图片" width="180">
				<template slot-scope="prop">
					<img class="icon" :src="prop.row.url" alt>
				</template>
			</el-table-column>
			<el-table-column label="数量" width="280">
				<template slot-scope="prop">
					<el-input-number v-model="prop.row.num" size="small" :min="1" label="描述文字"></el-input-number>
				</template>
			</el-table-column>
			<el-table-column prop="price" label="单价" width="280"></el-table-column>
			<el-table-column label="总价" width="280">
				<template slot-scope="prop">{{prop.row.num*prop.row.price}}</template>
			</el-table-column>
			<el-table-column label="操作" width="235">
				<template slot-scope="prop">
					<el-button type="danger" @click="deleteGoods(prop.row.id)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>


		<!-- 总价 -->
		<p style="margin-top:10px;margin-bottom: 10px;">总价: {{totalPrice}}</p>
		<!-- 结算 -->
		<el-button style="margin-top:10px;margin-bottom:10px;background-color: crimson;" type='success' @click='clearAllCart'>清空购物车</el-button>
		<el-button style="margin-top:10px;margin-bottom:10px;background-color: crimson;" type='success'>结算</el-button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				cartList: [],
			};
		},

		computed: {
			totalPrice() {
				let price = 0
				this.cartList.forEach(item => {
					price += item.num * item.price;
				});

				return price
			}
		},
		created() {
			this.cartList = this.$store.getters.getGoodsList;
		},
		methods: {
			deleteGoods(id) {
				const index = this.cartList.findIndex(item => item.id === id);

				this.cartList.splice(index, 1);
			},
			clearAllCart() {
				this.cartList.splice(0, this.cartList.length);
			}
		}
	};
</script>
<style>
.el-table__row>td {
  border: none;
}

.el-table::before {
  height: 0px;
}
</style>
