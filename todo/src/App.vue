<template>
 <div class="todocontainer">
   <!-- <div> -->
    <!-- <header>
      <PlusIcon />
      <b>Small Steps Make Big Change</b>
    </header>
  </div>
  <h1>you have {{ taskStore.totalTask }} Task </h1> -->
<h1  id="hlo">Todo App</h1>
  <form @submit.prevent="inputHandler">
    <TaskForm inputStyle="taskInput" buttonStyle="taskbutton" button="Add" v-model="taskStore.taskValue" />
  </form>
  <div class="editBox" v-show="taskStore.editField">
    <form @submit.prevent="updateHandler">
      <TaskForm inputStyle="updateInput" buttonStyle="updatebutton"  button="Update" v-model="taskStore.updatedTask" />
    </form>
    <button class="icon-wrapper" @click="taskStore.editField=!taskStore.editField" >
      <i class="fa-solid fa-square-xmark"></i>
    </button>
    
  </div>
  <Display @edit="editHandler(task)" />
<!-- 
  <div>
    <footer>
      "If you want to live a happy life, tie it to a goal, not to people or things."
      Albert Einstein
    </footer>
  </div> -->
 </div>
</template>

<script setup>
import { useTaskStore } from './stores/TaskStore'
import TaskForm from './components/TaskForm.vue'
import Display from './components/TaskDisplay.vue'
const taskStore = useTaskStore();
let inputHandler = () => {
  taskStore.addTask(taskStore.taskValue)
  taskStore.taskValue = ''
}
let editHandler = () => {

  taskStore.updatedTask = taskStore.allTask[taskStore.updatedTaskIndex].task
  taskStore.editField = !taskStore.editField
  console.log(taskStore.updatedTaskIndex, 'from app')
}
let updateHandler = () => {
  taskStore.allTask[taskStore.updatedTaskIndex].task = taskStore.updatedTask
  taskStore.editField = !taskStore.editField
  taskStore.updatedTask = ''
}

</script>

<style scoped>
.todocontainer{
  position: relative;
  width: 40vw;
  height: 50%;
  border: 1px solid black;
  padding: 10px;
  border-radius: 10px;
  background-color: #e7e4e4;
  opacity: .4;

}
.editBox {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top:0px;
  right:0px;
  background-color: #141111;
  width: 100%;
  height: 100%;
  border: 1px solid black;
  padding: 10px;
  border-radius: 10px;

  

}
.icon-wrapper{
    background-color:transparent ;
    border: none;
    color: white;
    position: absolute;
    top: 3px;
    right: 10px;
}

/* .edit-box-input {
  width: 30vw;
} */

</style>