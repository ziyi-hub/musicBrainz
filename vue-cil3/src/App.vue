<template>
  <div id="app">

    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link v-bind:to="'/artistes/' + input">Artistes</router-link></li>
      <li><router-link v-bind:to="'/titres/' + input">Titres</router-link></li>
    </ul>

    <input type="text" ref="input" v-model="input"/>

    <router-view></router-view>

    <div id="footer"><i>@musicBrainz-2021/2022</i></div>

  </div>
</template>

<script>
/**
  * App.vue
  * @author : Tania OLIVIA, Ziyi WANG
  */
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
      font-size: 1.8em;
    }

    li 
    {
      display: inline-block;
      margin: 0 10px;
    }
    
    input{
        width: 30em;
        padding: 10px 20px;
        margin: 20px 0;
        font-size: 1.2em;
    }

    a 
    {
      color: #42b983;
    }
    
    #footer{
        position: fixed;
        bottom: 0;
        background-color: black;
        color: white;
        width: 100%;
        padding: 20px 0;
        font-size: 20px;
    }
    
    a:hover{
        color: red;
        font-weight: bold;
        text-decoration: none;
    }
</style>
