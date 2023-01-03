<template>
    <span v-html="highlightContent()"></span>
</template>

<script setup>
const props = defineProps({
    content: String,
    highlightRegex: RegExp
})

function highlightContent() {
    if (!props.highlightRegex) return props.content;

    return props.content.replace(props.highlightRegex, match => {
        return '<span class="highlighted-text">' + match + '</span>';
    });
}
</script>

<style scoped>
:deep(.highlighted-text) {
    background: yellow;
}
</style>