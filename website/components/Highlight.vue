<script setup>
const props = defineProps({
    content: String,
    query: String
})

function highlightContent() {
    if (!this.props.query) return this.props.content;

    return this.props.content.replace(new RegExp(this.props.query, "gi"), match => {
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