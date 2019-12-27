<template>
  <div id="app">
    <!-- <div style="width: 100px; height: 160px; background: white; position: absolute; top:0; right: 50px"></div> -->
    <Nav></Nav>
    <router-view/>
  </div>
</template>

<style lang="sass">
  @import './src/assets/index.sass'
  @import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
</style>
<script>
import Nav from '../src/components/Nav.vue'
export default {
  data () {
    return {
      classes: [

      ]
    }
  },
  methods: {
    test (test) {
      console.log(test)
    }

  },
  components: {
    Nav
  }

}
</script>
