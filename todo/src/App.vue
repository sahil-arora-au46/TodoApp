<template>
  <div>
<header>
  <PlusIcon/>
  <b>Small Steps Make Big Change</b>
</header>
</div>
<h1>you have {{ taskStore.totalTask}} Task </h1>

<form @submit.prevent="inputHandler"><TaskForm v-model="taskStore.taskValue"/></form>
<div class="editBox" v-show="taskStore.editField" ><form @submit.prevent="updateHandler"><TaskForm class="edit-box-input" v-model="taskStore.updatedTask"/></form></div>
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
.editBox{
  display: flex;
  justify-content: center;
  align-items: center;
position: absolute;
top: 0;
background-color: #8f2c2c;
width: 100vw;
height: 100vh;
opacity: .4;

}

.edit-box-input{
width: 30vw;
}
body{
  position: relative;
}
</style>