<template>
  <div>
    <h1 v-if="datas">Information de "{{datas.title}}"</h1>
    <section v-if="errored">
      <p> Désolée, Nous n'avons pas accéder aux données du serveur pour le moment, réessayer plus tard </p>
    </section>

    <section v-else>
      <div v-if="loading">
        <spinner></spinner>
      </div>
      <div v-else>
        <div v-if="datas">
          <table class="table table-bordered table-striped text-right">
            <thead>
              <tr class="table-dark">
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
              <tr v-if="datas">
                <td>{{datas.id}}</td>
                <td>{{datas.title}}</td>
                <td><router-link v-bind:to="'/artiste/' + datas.artist">{{datas.artist}}</router-link></td>
                <td>{{datas.barcode}}</td>
                <td>{{datas.count}}</td>
                <td>{{datas.disambiguation}}</td>
                <td>{{datas.score}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else>
          <h1 style="color: green;">Désolée, nous n'avons pas trouver des données correspondantes</h1>
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

  methods: {

  },

  computed : {

  },

/**
 * Recherche un titre du CD sur Musicbrainz à l'aide d'id
 * @constant : id_titre (string) id de titre du CD
 * @return : datas (object) infos structurées d'un titre du CD
 */
  created() {
    axios.
      get("https://musicbrainz.org/ws/2/cdstub/?query=discid:" + this.$route.params.id_titre + "&fmt=json",
      { headers: { 'user-agent': 'TDMusicBrainzOliviaWang/1.0 (taniaolivia9@gmail.com, ziyiwang1027@gmail.com)' } })
        .then(response => {
          this.datas = response.data.cdstubs[0];
        })
        .catch(error => {
          this.errored = true;
        })
        .finally(() => this.loading = false );
  }

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
