<script setup>
import { createTextSearchRegex } from "@/utils/regex"

const props = defineProps({
    content: String,
    query: String
})

function highlightContent() {
    if (!props.query) return props.content;

    return props.content.replace(createTextSearchRegex(props.query), match => {
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