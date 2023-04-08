import { defineStore} from 'pinia';
import {ref,computed} from 'vue'
export const useTaskStore = defineStore('taskStore',()=>
{
const allTask = ref([{
    task: 'create todo app',
    isCompleted:false
}])   

const taskValue = ref('')
const editField = ref(false)
const totalTask = computed(()=>allTask.value.length)  //getter
const addTask = (task)=>{
    let taskObj = {
        task,
        isCompleted :false,
    }
   allTask.value.push(taskObj)
};

// const editTask = (odlvalue,newvalue)=> {
//    for(let i=0;i<allTask.value.length;i++){
//     if(odlvalue===allTask.value[i].task){
//         allTask.value[i].task = newvalue
//     }
//    }

// };
const inputHandler = ()=>{
    addTask(taskValue.value)
    taskValue.value= ''
    };

return {
    allTask,addTask,totalTask,taskValue,editField,inputHandler
}
})