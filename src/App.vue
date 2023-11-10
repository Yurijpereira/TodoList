<template>
  <div id="appContainer" class="container">
    <h1 class="title">To-Do List</h1>
    <TodoList />
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  components: {
    TodoList,
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  background-color: #112830;
}

.title {
  color: #112830;
  margin: 10px 0 20px 12px;
  font-size: 45px;
}

.container {
  width: 550px;
  max-height: 750px;
  margin: 0 auto;
  background-color: #14838d;
  padding: 15px;
  border-radius: 20px;
}

#app {
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 100px;
}
</style>