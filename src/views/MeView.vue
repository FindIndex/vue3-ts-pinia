<template>
    <div>
        我的
        <button @click="logoutHandler">注销登录</button>
    </div>
</template>

<script setup>

import axios from '@/api/request';
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
// const route = useRoute()

const logoutHandler = () => {
    window.localStorage.removeItem('token')
    // location.reload()
    router.push('/')

}


// 
// axios({
//     url: 'xinxi',
//     method: "GET",
//     headers: { 'token': localStorage.getItem('token') },
//     params: {
//         username: 'nick'
//     }
// })


axios.get('xinxi', {
    params: {
        username: 'nick'
    }
})
</script>

<style lang="less" scoped>

</style>