<script setup>
import { createTextSearchRegex } from "@/utils/regex"

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

<template>
    <span v-html="highlightContent()"></span>
</template>

<style scoped>
:deep(.highlighted-text) {
    background: yellow;
}
</style>