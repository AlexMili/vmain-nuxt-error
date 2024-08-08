<script setup lang="ts">
    const items = ref<any>([]);
    const { data } = await useFetch("http://127.0.0.1/api/items", {
        server: true,
    });
    items.value = data.value;
</script>
<template>
    <div v-for="item in items">{{ item?.id }}</div>
</template>
