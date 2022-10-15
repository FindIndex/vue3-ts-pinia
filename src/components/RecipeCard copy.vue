<template>
    <div>
        <hr>
        <h6>RecipeCard {{r.n}}</h6>
        <span @click="removeRecipeFav({recipeId: r.id})" v-if="recipeFav.map(o=> o.id).includes(r.id)">⭐</span>
        <span @click="addRecipeFav({recipe: r})" v-else>♥</span>
        <hr>
    </div>
</template>

<script setup>

import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

defineProps({
    r: Object
})


const recipeFav = computed(() => store.state.recipeFav)


const addRecipeFav = ({ recipe }) => store.commit('addRecipeFav', { recipe })
const removeRecipeFav = ({ recipeId }) => store.commit('removeRecipeFav', { recipeId })

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