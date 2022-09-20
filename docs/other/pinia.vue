<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "./pinia";

export default defineComponent({
  setup() {
    /**
     * store 是一个用reactive 包裹的对象 , 不需要在getter 之后写.value
     * 但是，就像setup 中的props 一样，我们不能对其进行解构
     * */
    const store = useStore();

    return { store };
  },
});
</script>

<style scoped></style>
