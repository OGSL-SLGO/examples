<script setup>
const props = defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
    <div>
        <input type="text" placeholder="Rechercher..." :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)" />
        <button v-show="modelValue" @click="$emit('update:modelValue', '')">X</button>
    </div>
</template>

<style lang="scss" scoped>
input {
    border: 3px solid #00adef;
    padding: 5px 10px;
    box-sizing: border-box;
    width: 100%;
    border-radius: 15px;
    outline: none;
    color: #6d8379;
    transition: all 200ms ease-out;
    line-height: 20px;
    font-size: 1em;

    &:hover {
        box-shadow: 0 0 6px rgb(35 173 255);
    }
}

button {
    position: absolute;
    border-radius: 5px;
    z-index: 2;
    border: none;
    height: 20px;
    cursor: pointer;
    color: white;
    background-color: #1e90ff;
    transform: translateX(-30px) translateY(8px);
}
</style>