<template>
  <div class="page-inner">
    <MapBlock></MapBlock>
    <Social></Social>
  </div>
</template>

<script>

import MapBlock from '../components/MapBlock.vue'
import Social from '../components/Social.vue'

export default {
  name: 'home',

  components: {
    MapBlock,
    Social
  }
}
</script>
