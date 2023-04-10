<template v-if="taskStore.allTask.length>0">
    <div v-for="task in taskStore.allTask" :key="task" :class="[taskContainer]" class="">
        <h3 :class="{ completed: task.isCompleted }" class="text-Wrapper overflow-hidden basis-3/4 break-words">{{ task.task
        }}</h3>
        <div>
            <button @click.once="task.isCompleted = !task.isCompleted"
                class="icon-wrapper bg-transparent border-none text-lg mt-0.5 mr-1.5" v-show="!task.isCompleted"> <i
                    class="fa-solid fa-check"></i></button>

            <button @click="editHandler(task)" class="icon-wrapper bg-transparent border-none text-lg mt-0.5 mr-1.5"
                v-show="!task.isCompleted"><i class="fa-solid fa-pen-to-square"></i></button>
            <button @click="deleteHandler(task)" class="icon-wrapper bg-transparent border-none text-lg mt-0.5 mr-1.5"><i
                    class="fa-solid fa-trash"></i></button>
        </div>
    </div>
</template>

<script setup>



import { useTaskStore } from '../stores/TaskStore';
import { defineEmits } from 'vue'
let emit = defineEmits(['edit'])
const taskStore = useTaskStore();
let taskContainer = 'task-container';
let deleteHandler = (task) => {
    let taskIndex = taskStore.allTask.indexOf(task)
    taskStore.allTask.splice(taskIndex, 1)
}
let editHandler = (task) => {
    taskStore.updatedTaskIndex = taskStore.allTask.indexOf(task)
    emit('edit')
}
</script>


<style  scoped>
/* .task-container {
    background-color: #fcf5f5;
    display: flex;
    height: auto;
    justify-content: space-between;
    margin-top: 6px;
    padding-left: 12px;
    border-bottom-left-radius: 25px;
    color: teal;
    font-size: 22px;
    max-width: 100%;
   

} */

/* .completed {
    text-decoration: line-through;
    text-decoration-thickness: 4px;
    text-decoration-color: black;
} */

/* .icon-wrapper {
    background-color: transparent; 
    border: none;
    font-size: large;
    margin-top: 8px;
    margin-right: 6px;
} */

/* .text-Wrapper {
    overflow: hidden;
    flex-basis: 70%;
    word-wrap: break-word;
} */
</style>