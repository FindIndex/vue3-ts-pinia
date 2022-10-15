<template>
    <nav>
        <RouterLink to="/ffeeds">关注</RouterLink>
        <RouterLink to="/">推荐</RouterLink>
        <RouterLink to="/notes">笔记</RouterLink>
        <RouterLink to="/videos">视频</RouterLink>
        <RouterLink to="/activitys">活动</RouterLink>
    </nav>
    <RouterView />


</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
nav {
    a {
        padding: 0 10px;
        &.router-link-exact-active {
            color: red;
        }
    }
}
</style>