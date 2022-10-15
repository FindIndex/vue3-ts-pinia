<template>
    <div>
        <hr>
        <h6> {{note.title}}</h6>
        <span @click="fav.removeNoteFav({noteId: note.id})" v-if="fav.noteFav.map(o=> o.id).includes(note.id)">⭐</span>
        <span @click="fav.addNoteFav({note})" v-else>♥</span>
        <hr>
    </div>
</template>

<script setup lang="ts">
import { useFavStore } from '@/stores/fav'
const fav = useFavStore()
defineProps({
    note: Object
})


</script>

<style lang="less" scoped>
h6 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
</style>