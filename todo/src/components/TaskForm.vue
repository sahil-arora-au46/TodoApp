<template>
    <form @submit.prevent="inputHandler">
        <input type="text" placeholder="write what needs to be finished " v-model="taskStore.taskValue">
        <button>add</button>
       
    </form>

    
</template>

<script setup>
import {useTaskStore }from '../stores/TaskStore'
// import { defineProps } from 'vue';
// defineProps[{handler:{
// type :String,
// required :true,
// }}]
const taskStore = useTaskStore();
let inputHandler = ()=>{
taskStore.addTask(taskStore.taskValue)
taskStore.taskValue= ''
}
// function editHandler(taskObj){
// taskStore.editTask(taskObj)
// }
</script>

<style  scoped>

</style>