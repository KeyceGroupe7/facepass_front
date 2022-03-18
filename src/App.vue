<template>
  <div id="app">
    <div>
      <b-navbar toggleable="sm" type="dark" variant="dark">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <b-navbar-brand>FacePass</b-navbar-brand>

        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav class="col-12">
            <router-link class="nav-link" to="/home">Home</router-link>
            <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
            <router-link class="nav-link" to="/about">A propos</router-link>
            <router-link class="ml-auto nav-link" to="/login" v-if="this.$route.name !== 'Dashboard'">Connexion</router-link>

          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "app",
  data() {
    return {

    }
  },
  mounted() {
  },
  methods:{

  }
};
</script>

<style>
h1, h2, h3, h4, h5, h6{
  font-family: 'Maven Pro', sans-serif;
  font-weight: bold!important;
}

.nav-link{
  margin-left: 20px;
}

.relative{
  position: relative;
}
</style>
