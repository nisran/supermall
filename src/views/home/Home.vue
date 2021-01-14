<template>
    <div id="home">
<!--        替换相应的slot-->
        <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
        <HomeSwiper :banners="banners"/>
        <recommend-view :recommends="recommends"/>
        <feature-view/>
    </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import { getHomeMultiData } from "../../network/home"

export default {
    name: "Home",
    components: {
        RecommendView,
        NavBar,
        HomeSwiper,
        FeatureView
    },
    data() {
        return{
            banners: [],
            recommends:[]
        }
    },
    created() {
    //            获取多个数据
        getHomeMultiData().then(res =>{
            console.log(res)
            //箭头函数没有this，得往上找
            this.banners = res.data.banner.list
            this.recommends = res.data.recommend.list
        })
    }
}
</script>

<style scoped>
    #home {
        padding-top: 44px;
    }

    .home-nav{
        background-color: var(--color-tint);
        color: #fff;

        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9;
    }
</style>
