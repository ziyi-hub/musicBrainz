<template>
  <div v-if="id < userList.length">
    <h1>Page d'info du user</h1>
    <p>Cette page se trouve dans User.vue</p>

    <h3>L'ID du user est {{id}}</h3>

    <p>nom : {{userList[id].name}}</p>
    <p>métier : {{userList[id].job}}</p>
    <p>numéro de téléphone : {{userList[id].phone}}</p>
  </div>

  <div v-else>
    <p>Il n'y a pas utilisateur correspondant à l'ID {{id}}</p>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        userList : [
          {name: "Joe", job: "boulanger", phone: "0618935402"},
          {name: "Steve", job: "mécano", phone: "0618935402"},
          {name: "Guthrie", job: "ébéniste", phone: "0618935402"},
          {name: "Gary", job: "photographe", phone: "0618935402"},
          {name: "Paul", job: "informaticien", phone: "0618935402"}
        ]
      }
    },

    computed: {
      // On récrée en clair un paramètre de la route
      id(){
        return this.$route.params.user_id // ID de l'utillisateur
      }

    }
  }
</script>

<style>

</style>
