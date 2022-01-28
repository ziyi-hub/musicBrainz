<template>
  <div>
    <h1>Artist</h1>
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
                    <th>TYPE</th>
                    <th>DATE OF BIRTH</th>
                    <th>GENDER</th>
                    <th>COUNTRY</th>
                    <th>DISAMBIGUATION</th>
                    <th>SCORE</th>
                  </tr>
              </thead>
              <tbody>
                <tr v-if="datas">
                    <td>{{datas.id}}</td>
                    <td>{{datas.name}}</td>
                    <td>{{datas.type}}</td>
                    <td>{{datas['life-span'].begin}}</td>
                    <td>{{datas.gender}}</td>
                    <td>{{datas.country}}</td>
                    <td>{{datas.disambiguation}}</td>
                    <td>{{datas.score}}</td>
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
      $route: 'infoData'
    },

    methods: {
      
    },

    computed : {

    },
    
    created() {
        axios.
            get("https://musicbrainz.org/ws/2/artist/?query=arid:" + this.$route.params.id_artiste + "&fmt=json")
              .then(response => {
                console.log(response);

                this.datas = response.data.artists[0];
                console.log(this.datas);
     
              })
              .catch(error => {
                this.errored = true;
              })
              .finally(() => this.loading = false );
      }

}
</script>

<style>

</style>
