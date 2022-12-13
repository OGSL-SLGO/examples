<script setup>
const props = defineProps({
    content: String,
    query: String
})

function highlightContent() {
    if (!props.query) return props.content;

    return props.content.replace(new RegExp(props.query, "gi"), match => {
        return '<span class="highlighted-text">' + match + '</span>';
    });
}
</script>

<template>
    <div v-html="highlightContent()"></div>
</template>

<style scoped>
:deep(.highlighted-text) {
    background: yellow;
}
</style>