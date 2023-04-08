<template v-if="taskStore.allTask.length>0">
    <div v-for="task in taskStore.allTask" :key="task" :class="[taskContainer]">
        <h3 :class="{completed:task.isCompleted}">{{ task.task}}</h3>
       <div>
        <button @click.once="task.isCompleted=!task.isCompleted"  class="icon-wrapper" v-show="!task.isCompleted"> <i class="fa-solid fa-check"></i></button>
        
       <button  @click="editHandler(task)" class="icon-wrapper" v-show="!task.isCompleted"><i class="fa-solid fa-pen-to-square"></i></button>
        <button @click="deleteHandler(task)" class="icon-wrapper"><i class="fa-solid fa-trash"></i></button>
       </div>
    </div>
</template>

<script setup>



import {useTaskStore} from '../stores/TaskStore';
import {defineEmits} from 'vue'
let emit =defineEmits(['edit'])
const taskStore = useTaskStore();
let taskContainer = 'task-container';
let deleteHandler=(task)=>{
let taskIndex = taskStore.allTask.indexOf(task)
taskStore.allTask.splice(taskIndex,1)
}
let editHandler = (task)=>{
     taskStore.updatedTaskIndex = taskStore.allTask.indexOf(task)
    emit('edit')
}
</script>
<script>
export default {
  inheritAttrs: false
}
</script>

<style  scoped>
.task-container{
    background-color: #a7a3a3;
    display:flex;
    justify-content: space-between;
    margin-top: 2px;
    
}
.completed{
    text-decoration:line-through;
    text-decoration-thickness: 4px;
}
.icon-wrapper{
    background-color:transparent ;
    border: none;
}
</style>