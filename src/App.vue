<template>
  <div id="app">
    <div>
      <b-navbar toggleable="sm" type="dark" variant="dark">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <b-navbar-brand>FacePass</b-navbar-brand>

        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav>
            <router-link class="nav-link" to="/home">Home</router-link>
            <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
            <router-link class="nav-link" to="/login">Connexion</router-link>
            <router-link class="nav-link" to="/about">A propos</router-link>
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
};
</script>

<style>
.nav-link{
  margin-left: 20px;
}
</style>
