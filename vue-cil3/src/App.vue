<template>
  <div id="app">

    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link v-bind:to="'/artistes/' + input">Artistes</router-link></li>
      <li><router-link v-bind:to="'/titres/' + input">Titres</router-link></li>
    </ul>

    <input type="text" ref="input" v-model="input"/>

    <router-view></router-view>

    <div id="footer"><i>Footer</i></div>

  </div>
</template>

<script>
    export default {
      name: 'app',
      data () {
        return {
          input : null
        }
      }
    }
</script>

<style>
    #app 
    {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    }

    h1, h2 
    {
      font-weight: normal;
    }

    ul 
    {
      list-style-type: none;
      padding: 0;
    }

    li 
    {
      display: inline-block;
      margin: 0 10px;
    }

    a 
    {
      color: #42b983;
    }
    
    #footer{
        position: sticky;
        bottom: 0;
    }
</style>
