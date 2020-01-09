<template>
    <div class="page-inner competition">
      <div class="competition__main">
        <!-- <pushTheLimit></pushTheLimit> -->
        <!-- limit.png -->
        <div class="competition__wrapper">
          <ImageBlock class="competition__limit" path='limit.png'></ImageBlock>
          <h1 class="competition__title">
              СНОУБОРД
          </h1>
          <ImageBlock class="cars" path='cars.png'></ImageBlock>
        </div>
        <ImageBlock class="map--weight" path='map-big.png'></ImageBlock>
      </div>
      <Social></Social>
  </div>
</template>
<style lang="sass">
  @import  './src/assets/view/competition.sass'
  @import  './src/assets/components/mapBlock.sass'
</style>

<script>
// @ is an alias to /src

import ImageBlock from '../components/ImageBlock.vue'
// import pushTheLimit from '../components/pushTheLimit.vue'
import Social from '../components/Social.vue'

export default {
  name: 'competition',

  components: {
    ImageBlock,
    Social
    // pushTheLimit
  }
}
</script>
