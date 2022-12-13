<script setup>
import { addAccents } from "@/utils/regex"

const props = defineProps({
    content: String,
    query: String
})

function highlightContent() {
    if (!props.query) return props.content;

    return props.content.replace(new RegExp(addAccents(props.query), "gi"), match => {
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