<template>
  <div class="nav-container mb-3 text-menu">
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <div class="container">
        <div class="navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
          </ul>
          <div
            style="display: flex; flex-direction: row; justify-content: flex-end; align-items: center;"
          >
            <section v-if="!$auth.isAuthenticated" class="nav-item">
              <button
                v-if="!$auth.loading"
                class="btn btn-secondary btn-margin"
                @click.prevent="login"
              >Login</button>
              <button
                class="btn btn-secondary btn-margin"
                @click.prevent="login"
                v-if="$auth.loading && !$auth.isAuthenticated"
              >Checking profile..</button>
            </section>
            <section class="nav-item">
              <span v-if="$auth.isAuthenticated" class="d-inline-block">{{ $auth.user.name }}</span>
            </section>
            <section v-if="$auth.isAuthenticated && !$auth.loading" class="nav-item">
              <button class="btn btn-secondary m-4" href="#" @click.prevent="logout">Log out</button>
            </section>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout();
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style>
.text-menu section,
.text-menu ul li,
.text-menu button {
  font-size: 2rem;
  font-weight: bold;
}
</style>