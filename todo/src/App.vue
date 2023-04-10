<template>
  <div class="todocontainer relative w-[40vw] h-104 border border-black p-2.5 rounded-[10px] bg-gray-200">

    <h1 id="hlo">Todo App</h1>
    <form @submit.prevent="inputHandler">
      <TaskForm inputStyle="taskInput" buttonStyle="taskbutton" button="Add" v-model="taskStore.taskValue" />
    </form>
    <div class="editBox bg-zinc-400 flex absolute justify-center items-center top-[-10px] right-[-10px] border border-black w-[110%] h-[110%] p-2.5 rounded-xl" v-show="taskStore.editField">
      <form @submit.prevent="updateHandler">
        <TaskForm inputStyle="updateInput" buttonStyle="updatebutton" button="Update" v-model="taskStore.updatedTask" />
      </form>
      <button class="icon-wrapper bg-transparent border-none absolute right-2.5 top-1"
        @click="taskStore.editField = !taskStore.editField">
        <i class="fa-solid fa-square-xmark w-6 h-6"></i>
      </button>

    </div>
   <div class="flex-col flex-nowrap overflow-scroll h-80 scrollbar-hide">
    <Display @edit="editHandler(task)" />
   </div>

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
/* .todocontainer{
  position: relative;
  width: 40vw;
  height: 50%;
  border: 1px solid black;
  padding: 10px;
  border-radius: 10px;
  background-color: #e7e4e4;
} */
/* .editBox {

  display: flex; 
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: #dfdada;
  width: 110%;
  height: 110%;
  border: 1px solid black;
  padding: 10px;
   border-radius: 10px;
  
} */

/* .icon-wrapper{
    background-color:transparent ;
    border: none;
    position: absolute; 
    top: 4px;
    right: 10px;
} */
/* .xIcon{
  width: 25px;
  height: 25px;
 
} */
</style>