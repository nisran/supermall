<template>
    <swiper>
        <SwiperItem v-for="item in banners">
            <a :href="item.link">
                <img :src="item.image">
            </a>
        </SwiperItem>
    </swiper>
</template>

<script>
//默认不需要写index
import {Swiper, SwiperItem} from "../../../components/common/swiper"

export default {
    name: "HomeSwiper",
    props: {
        banners: {
            type: Array,
            default() {
                return []
            }
        }
    },
    components: {
        Swiper,
        SwiperItem
    }
}
</script>

<style scoped>

</style>