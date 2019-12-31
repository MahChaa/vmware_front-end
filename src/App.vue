<template>
  <v-app id="app">
      <v-content>
<!--          TODO: Check transition between routes-->
          <transition mode="out-in" appear>
              <router-view />
          </transition>
      </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
#app {
  font-family: "Roboto", Avenir, Helvetica, Arial, sans-serif;
  /*-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;*/
}
</style>
