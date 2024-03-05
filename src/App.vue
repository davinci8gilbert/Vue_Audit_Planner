<template>
 <div id="app">
  <div>
    <router-view/>
  </div>
 </div>
</template>

<script>
export default {
  name: 'app',
  
}
</script>

<style>
#app {
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
