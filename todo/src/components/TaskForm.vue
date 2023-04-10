<template>
    
        <input :class= "inputStyle"  type="text" placeholder="write what needs to be finished " :value="modelValue" @input="$emit('update:modelValue',$event.target.value)">
        <button :class="buttonStyle">{{ button}}</button>
       
    

    
</template>

<script setup>

import { defineProps,defineEmits} from 'vue';
defineProps(['modelValue','button','inputStyle','buttonStyle']);
defineEmits(['uptade:modelValue'])
// let props = defineProps(['a','b'])

</script>
<script>
export default {
  inheritAttrs: false
}
</script>
<style  scoped>
.taskInput{
  width: 86%;
  height: 20%;
  padding: 5px;
  border-top-left-radius: 5PX;
  border-bottom-left-radius: 5PX;
  /* background-color: #a81616; */
  color: black !important; 
}
.taskbutton{
  padding: 5px;
  border-top-RIGHT-radius: 5PX;
  border-bottom-right-radius: 5PX;
  background-color: #0c6ad6;
  color: white;
}
.updateInput{
  width: 70%;
  height: 40px;
  border-top-left-radius: 10PX;
  border-bottom-left-radius: 10PX;
}
.updatebutton{
  height: 44px;
  border-top-RIGHT-radius: 10PX;
  border-bottom-right-radius: 10PX;
}
</style>