<template>
  <div>
<header>
  <b>Small Steps Make Big Change</b>
</header>
</div>
<h1>you have {{ taskStore.totalTask}} Task </h1>
<h1>{{taskStore.taskValue}},{{ taskStore.allTask}},{{ taskStore.editField  }},{{ taskStore.updatedTask  }}</h1>
<form @submit.prevent="inputHandler"><TaskForm v-model="taskStore.taskValue"/></form>
<form v-show="taskStore.editField" @submit.prevent="updateHandler"><TaskForm v-model="taskStore.updatedTask"/></form>
<Display @edit="editHandler(task)"/>

<div>
    <footer>
      "If you want to live a happy life, tie it to a goal, not to people or things." 
      Albert Einstein
    </footer>
  </div>
</template>

<script setup>
import {useTaskStore }from './stores/TaskStore'
import TaskForm from './components/TaskForm.vue'
import Display from './components/TaskDisplay.vue'
const taskStore = useTaskStore();
let inputHandler = ()=>{
    taskStore.addTask(taskStore.taskValue)
    taskStore.taskValue=''
    }
let editHandler = ()=>{
 
  taskStore.updatedTask = taskStore.allTask[taskStore.updatedTaskIndex].task
  taskStore.editField =! taskStore.editField
  console.log(taskStore.updatedTaskIndex ,'from app')
}
let updateHandler = ()=>{
  taskStore.allTask[taskStore.updatedTaskIndex].task = taskStore.updatedTask 
  taskStore.editField =! taskStore.editField
  taskStore.updatedTask = ''
}

</script>

<style scoped>

</style>