import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        goodsList:JSON.parse(localStorage.getItem('cartList') || '[]'), // 商品列表，刚开始为空
    },
    getters:{
        getTotalCount(state){
            let totalCount = 0
            state.goodsList.forEach(item=>{
                totalCount += item.num
            })

            return totalCount
        },
        getGoodsList(state){
			//return JSON.parse(this.$cookieStore.getCookie('shop'))
            return state.goodsList
        }
    },
    mutations:{
        addGoods(state,goods){
            const oldGoods = state.goodsList.find(item=>item.id === goods.id)
            
            if (oldGoods) { 
                 oldGoods.num += goods.num
            } else { 
                state.goodsList.push(goods)
            }
			
			
			this.$cookieStore.setCookie('shopping' , JSON.stringify(state.goodsList), '7d')
			
			// Vue.$cookies.set('shop', JSON.stringify(state.goodsList), '7d');
        }
    },
    actions:{
        asyncAddGoods(context,goods){
            setTimeout(() => {
                context.commit('addGoods',goods)
            }, 1000);
        }
    }
})

window.onbeforeunload = function(){
    window.localStorage.setItem('cartList',JSON.stringify(store.getters.getGoodsList))
}

export default store