<template>
  <div id="app">
    <h1>Utilisation de vue router</h1>

    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/tasks">Task List</router-link></li>
      <li><router-link v-bind:to="'/user/' + checkID">Infos d'un user</router-link></li>
      <li><router-link to="/carte">Carte Open</router-link></li>
    </ul>
    <input type="number" v-model="checkID"/>


    <router-view></router-view>

    <div id="footer"><i>Footer de l'app</i></div>


  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      checkID : 0,
    }
  },

  computed: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
