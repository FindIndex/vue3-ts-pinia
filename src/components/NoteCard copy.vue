<template>
    <div>
        <hr>
        <h6> {{note.title}}</h6>
        <span @click="removeNoteFav({noteId: note.id})" v-if="noteFav.map(o=> o.id).includes(note.id)">⭐</span>
        <span @click="addNoteFav({note})" v-else>♥</span>
        <hr>
    </div>
</template>

<script setup>
import { computed } from 'vue'
// import { useStore } from 'vuex'
// const store = useStore()


defineProps({
    note: Object
})

// const noteFav = computed(() => store.state.noteFav)


// const addNoteFav = ({ note }) => store.commit('addNoteFav', { note })
// const removeNoteFav = ({ noteId }) => store.commit('removeNoteFav', { noteId })
</script>

<style lang="less" scoped>
h6 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
</style>