<template>
    <div>
        <input type="text" v-model="username">
        <input type="password" v-model="password">
        <input @click.prevent="loginHandler" type="submit" value="登录">
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const username = ref('')
const password = ref('')

const loginHandler = () => {
    // console.log('登录');

    // 模拟ajax请求 post方法携带账号密码  有一个结果 两种 1账号或者密码错误  2匹配有token
    setTimeout(() => {
        // 假设是ajax的结果
        let token = 'MaJ6bKsj'

        if (token) {
            // 登陆成功 保存token
            localStorage.setItem('token', token)
            // router.back() // 刚才的页面 me并没有进去
            router.replace(route.query.from)

        } else {
            // 账号密码错误
        }


    }, 3000);
}

</script>

<style lang="scss" scoped>

</style>