<template>
  <div id="app" >
    <!-- <component  :is="navigation"></component> -->
    <component :is="layout"></component>
    <router-view/>
  </div>
</template>

<style lang="sass">
  @import './src/assets/index.sass'
  @import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
</style>
<script>
import mainNav from '../src/components/mainNav.vue'
import blackNav from '../src/components/blackNav.vue'
export default {
  components: {
    mainNav, blackNav
  },
  computed: {
    layout () {
      return this.$route.meta.nav
    }
  }

}
</script>
