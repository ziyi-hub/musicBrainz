<template>
  <div>
    <h1>List des artistes</h1>
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
                    <th>NAME</th>
                    <th>DATE OF BIRTH</th>
                    <th>GENDER</th>
                    <th>COUNTRY</th>
                    <th>CITY</th>
                    <th>DISAMBIGUATION</th>
                    <th>TAGS</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="data in datas">
                    <td>{{data.id}}</td>
                    <td>{{data.name}}</td>
                    <td>{{data.name}}</td>
                    <td>{{data.gender}}</td>
                    <td>{{data[0].area.name}}</td>
                    <td>{{data[0].begin-area.name}}</td>
                    <td>{{data.disambiguation}}</td>
                    <td>{{data.tags}}</td>
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
      '$route': 'fetchData'
    },

    methods: {
      fetchData: function () {
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

</style>
