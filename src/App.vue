<template>
  <div id="appContainer" class="container">
    <h1>To-Do List</h1>
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

.container {
  max-width: 400px;
  margin: 0 auto;
}

#app {
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 60px;
}
</style>