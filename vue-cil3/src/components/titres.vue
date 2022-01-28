<template>
  <div>
      <section v-if="errored">
        <p> Désolée, Nous n'avons pas accéder aux données du serveur pour le moment, réessayer plus tard </p>
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
                    <th>TITLE</th>
                    <th>ARTIST</th>
                    <th>BARCODE</th>
                    <th>TRACK LIST COUNT</th>
                    <th>DISAMBIGUATION</th>
                    <th>SCORE</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="data in datas">
                    <td>{{data.id}}</td>
                    <td>{{data.title}}</td>
                    <td>{{data.artist}}</td>
                    <td>{{data.barcode}}</td>
                    <td>{{data.count}}</td>
                    <td>{{data.disambiguation}}</td>
                    <td>{{data.score}}</td>
                  </tr>
              </tbody>
            </table>
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
            get("https://musicbrainz.org/ws/2/cdstub/?query=title:" + this.$route.params.nom_titre + "&fmt=json")
              .then(response => {
                this.datas = response.data.cdstubs
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

</style>
