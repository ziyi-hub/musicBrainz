<template>
  <div>
    <h1>Liste des artistes : "{{this.$route.params.nom_artiste}}"</h1>
    <section v-if="errored">
        <p> Désolée, nous n'avons pas accéder aux données du serveur pour le moment, réessayer plus tard </p>
      </section>

      <section v-else>
        <div v-if="loading">
          <spinner></spinner>
        </div>
        <div v-else>
          <div>
            <table class="table table-striped text-right">
              <thead>
                  <tr>
                    <th>ID</th>
                    <th>NAME</th>
                  </tr>
              </thead>
              <tbody>
                <tr v-for="data in datas">
                    <td><router-link v-bind:to="'/artiste/' + data.id">{{data.id}}</router-link></td>
                    <td>{{data.name}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
  </div>
</template>

<script>
import axios from 'axios';
import Spinner from "./spinner.vue";

export default {

    components: { Spinner },

    data () {
      return {
        errored : false,
        loading : true,
        datas : null
      }
    },

    watch: {
      $route: "fetchData"
    },

    methods: {
        fetchData() {
              axios.
                get("https://musicbrainz.org/ws/2/artist/?query=artist:" + this.$route.params.nom_artiste + "&fmt=json")
                  .then(response => {
                    this.datas = response.data.artists;
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
    a:hover{
        background-color: rgba(0,0,0, 0.5);
        color: red;
        text-decoration: none;
    }
</style>
