<template>
  <div id="appContainer" class="container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
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
  margin: 10px 0 20px 15px;
  font-size: 45px;
}

.container {
  width: 560px;
  max-height: 750px;
  margin: 0 auto;
  background-color: #14838d;
  padding: 20px 10px 15px 8px;
  border-radius: 20px;
}

#app {
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 100px;
}
</style>