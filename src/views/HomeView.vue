<script setup lang="ts">
import TheWelcome from "../components/TheWelcome.vue";
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()


console.log(counter);


const clickHandler = () => {
  counter.increment()
  // counter.count++
}

</script>

<template>
  <main>
    <h1>home page</h1>
    <h2>pinia {{counter.count}} -{{counter.doubleCount}}</h2>
    <button @click="clickHandler">++</button>
    <TheWelcome msg="123" />
  </main>
</template>
