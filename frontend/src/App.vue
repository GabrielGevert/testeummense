<template>
  <Navbar />
  <div id="app">
    <!-- <router-view /> -->
  </div>
</template> 

<script>
import Navbar from './components/NavBar.vue';
export default {
  components: {
    Navbar,
  },
  name: 'App'
}
</script>