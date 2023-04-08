<template>
  <div>
<header>
  <b>Small Steps Make Big Change</b>
</header>
</div>
<h1>you have {{ taskStore.totalTask}} Task </h1>
<TaskForm />
<Display />

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


</script>

<style scoped>

</style>