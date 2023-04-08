<template>
    
        <input v-bind="$attrs" type="text" placeholder="write what needs to be finished " :value="modelValue" @input="$emit('update:modelValue',$event.target.value)">
        <button>add</button>
       
    

    
</template>

<script setup>

import { defineProps,defineEmits} from 'vue';
defineProps(['modelValue','class','button']);
defineEmits(['uptade:modelValue'])

</script>
<script>
export default {
  inheritAttrs: false
}
</script>
<style  scoped>

</style>