<template>
  <div>
      <h1>Liste des titres : "{{this.$route.params.nom_titre}}"</h1>
      <section v-if="errored">
        <p> Désolée, Nous n'avons pas accéder aux données du serveur pour le moment, réessayer plus tard </p>
      </section>

      <section v-else>
        <div v-if="loading">
          <spinner></spinner>
        </div>
        <div v-else>
          <div v-if="datas.length">
            <table class="table table-bordered table-striped text-right">
              <thead>
                  <tr class="table-dark">
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>ARTIST</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="data in datas">
                    <td><router-link v-bind:to="'/titre/' + data.id">{{data.id}}</router-link></td>
                    <td>{{data.title}}</td>
                    <td><router-link v-bind:to="'/artiste/' + data.artist">{{data.artist}}</router-link></td>
                  </tr>
              </tbody>
            </table>
          </div>
          <div v-else>
            <h1 style="color: green">Désolée, nous n'avons pas trouver des données correspondantes</h1>
          </div>
        </div>
      </section>
  </div>
</template>

<script>
import axios from 'axios'
import Spinner from "./spinner.vue";

  export default{

    components: { Spinner },

    data () {
      return {
        errored : false,
        loading : true,
        datas : null
      }
    },

    watch: {
      '$route': 'fetchData'
    },

    methods: {
      fetchData: function () {
          axios.
            get("https://musicbrainz.org/ws/2/cdstub/?query=title:" + this.$route.params.nom_titre.trim() + "&fmt=json")
              .then(response => {
                this.datas = response.data.cdstubs;
              })
              .catch(error => {
                this.errored = true;
              })
              .finally(() => this.loading = false );
      }
    },

    computed : {

    },

  }
</script>

<style>
    table{
        margin: 50px 0;
        font-size: 1.2em;
    }
    
    div h1{
        margin: 50px 0;
    }
</style>
