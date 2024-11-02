<script lang="ts">
</script>

<template>
    <div>
        <h1>Home Page</h1>
        <RouterLink :to="{ name: '/projects/[id]', params: { id: 1 } }" >Projects 1</RouterLink>
        Hello brother how are you?
    </div>
</template>

<style lang="css">
</style>
