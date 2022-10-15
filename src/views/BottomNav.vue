<template>
    <nav>

        <RouterLink to="/">首页</RouterLink>
        <RouterLink to="/cate">分类</RouterLink>
        <RouterLink to="/list">清单</RouterLink>
        <RouterLink to="/fav">收藏</RouterLink>
        <RouterLink to="/me">我的</RouterLink>
    </nav>

    <RouterView />
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
nav {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;

    a {
        &.router-link-exact-active {
            color: red;
        }
    }

}
</style>