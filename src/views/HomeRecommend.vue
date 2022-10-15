<template>

    <!-- <van-button type="success">成功按钮</van-button> -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(banner,index) in banners" :key="index">
            <van-image width="100%" height="100" :src="banner.i" />
        </van-swipe-item>
    </van-swipe>

    <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <template v-for="item in recommends">
            <RecipeCard :r="item.r" v-if="item.type === 1" />
            <NoteCard :note="item.note" v-else-if="item.type === 3" />
            <!-- <DSPCard  v-else :dsp="dsp" /> -->
        </template>
    </van-list>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { getHomeRecommended } from '@/api'

import RecipeCard from '@/components/RecipeCard.vue'
import NoteCard from '@/components/NoteCard.vue'
// import DSPCard from '@/components/DSPCard.vue'

// 偏移量
let offset = ref(0)

let banners = ref([])
let recommends = ref([])



const getList = () => {
    getHomeRecommended({ offset: offset.value * 10 }).then((res) => {
        banners.value = res.data.result.banner
        recommends.value = [...recommends.value, ...res.data.result.list]
        // 
        nextTick(() => {
            offset.value++

            // 数据全部加载完成
            if (offset.value >= 5) {
                finished.value = true;
            }
        })
    }).finally(() => {
        nextTick(() => {
            loading.value = false;
        })

    })
}





// 获取数据

getList()



// 加载更多

const loading = ref(false);
const finished = ref(false);

const onLoad = () => {
    console.log('触底了', offset.value)
    // getList()
}
</script>

<style lang="scss" scoped>

</style>