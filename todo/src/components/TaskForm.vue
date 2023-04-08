<template>
    
        <input type="text" placeholder="write what needs to be finished " :value="modelValue" @input="$emit('update:modelValue',$event.target.value)">
        <button>add</button>
       
    

    
</template>

<script setup>
// import {useTaskStore }from '../stores/TaskStore'
import { defineProps,defineEmits} from 'vue';
defineProps(['modelValue']);
defineEmits(['uptade:modelValue'])
// const taskStore = useTaskStore();
// const emitHandler = (event)=>{
    
// }

// function editHandler(taskObj){
// taskStore.editTask(taskObj)
// }
</script>

<style  scoped>

</style>