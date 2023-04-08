import { defineStore} from 'pinia';
import {ref,computed} from 'vue'
export const useTaskStore = defineStore('taskStore',()=>
{
const allTask = ref([{
    task: 'create todo app',
    isCompleted:false
}])   

const taskValue = ref('hi');
const editField = ref(false);
const updatedTask = ref('');
const updatedTaskIndex = ref(null)
const totalTask = computed(()=>allTask.value.length)  //getter
const addTask = (task)=>{
    let taskObj = {
        task,
        isCompleted :false,
    }
   allTask.value.push(taskObj)
};


const inputHandler = ()=>{
    addTask(taskValue.value)
    taskValue.value= ''
    };

return {
    allTask,addTask,totalTask,taskValue,editField,inputHandler,updatedTask,updatedTaskIndex
}
})