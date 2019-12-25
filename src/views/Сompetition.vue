<template>
    <div class="page-inner competition">
      <div class="competition__main">
        <h1 class="competition__title">
            СНОУБОРД
        </h1>
        <MapBlock class="map--weight" path='map-big.png'></MapBlock>
      </div>
      <Social></Social>
  </div>
</template>
<style lang="sass">
  @import  './src/assets/view/competition.sass'
</style>

<script>
// @ is an alias to /src

import MapBlock from '../components/MapBlock.vue'
import Social from '../components/Social.vue'

export default {
  name: 'competition',

  components: {
    MapBlock,
    Social
  }
}
</script>
