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
                <th>id</th>
                <th>score</th>
                <th>count</th>
                <th>title</th>
                <th>artist</th>
                <th>barcode</th>
                <th>disambiguation</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="data in search">
                <th>{{data.id}}</th>
                <th>{{data.score}}</th>
                <th>{{data.count}}</th>
                <th>{{data.title}}</th>
                <th>{{data.artist}}</th>
                <th>{{data.barcode}}</th>
                <th>{{data.disambiguation}}</th>
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
        info : null,
      }
    },

    watch: {
      '$route': 'fetchData'
    },

    methods: {
      fetchData: function () {

      }
    },

    computed : {
      search(){
        if (this.$route.params.nom_titre != null) {
          return this.info
        }else{
          this.created()
        }
      },

      created(){
        axios.
        get("https://musicbrainz.org/ws/2/cdstub/?query=title:" + this.$route.params.nom_titre + "&fmt=json")
          .then(response => {
            this.info = response.data.cdstubs
          })
          .catch(error => {
            this.errored = true;
          })
          .finally(() => this.loading = false );
      }

    },

  }
</script>

<style>

</style>
