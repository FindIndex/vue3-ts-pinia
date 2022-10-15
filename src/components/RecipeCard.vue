<template>
    <div>
        <hr>
        <h6>RecipeCard {{r.n}}</h6>
        <span @click="fav.removeRecipeFav({recipeId: r.id})" v-if="fav.recipeFav.map(o=> o.id).includes(r.id)">⭐</span>
        <span @click="fav.addRecipeFav({recipe: r})" v-else>♥</span>
        <hr>
    </div>
</template>

<script setup lang="ts">
import { useFavStore } from '@/stores/fav'
const fav = useFavStore()

console.log('=====fav', fav);


defineProps({
    r: Object
})




</script>

<style lang="less" scoped>
div {
    height: 100px;

    h6 {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
}
</style>