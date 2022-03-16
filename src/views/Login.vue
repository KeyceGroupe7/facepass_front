<template>
  <div id="login">
    <p>Connexion</p>
    <!-- connexion user  -->
    <b-container>
      <div 
        class="row text-center"
      >
        <button
        class="btn mt-2 col-5"
        :class="this.activeConnection"
      >
        Se connecter
      </button>
      <button
        class="btn mt-2 col-5"
        :class="this.activeSubscribe"
      >
        S'inscrire
      </button>

      </div>
      <div class="col-6 card shadow mx-auto">
        <h4 class="mt-2 mb-0">Connexion</h4>
        <hr>
        <b-form-group
        class=""
        id="input-group-1"
        label="Identifiant"
      >
        <b-form-input
          v-model="user.pseudo"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        class=""
        id="input-group-1"
        label="Mot de passe"
      >
        <b-form-input
          v-model="user.password"
          type="password"
          required
        ></b-form-input>
        <button
          class="btn btn-dark mt-2 w-100"
        >
          Connexion
        </button>
      </b-form-group>
      </div>
      <p>Vous n'avez pas de compte ? Inscrivez vous ici</p>
    </b-container>
    
  </div>
   
</template>

<script>

export default {
  name: "login",
  data() {
    return {
      user: {}
    }
  },
  mounted() {

  },
  methods: {

  },
  created() {
    // get des identifiants tout les 1sec
    // setInterval(() => this.getIdentifiants(), 1000);
  }
};
</script>

<style>

</style>
