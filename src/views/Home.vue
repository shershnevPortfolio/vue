
<template>
  <div class="page-inner">
    <div class="content home">
      <pushTheLimit></pushTheLimit>
      <ImageBlock class="map" path='map.png'></ImageBlock>
    </div>
    <Social class="home__social"></Social>
  </div>
</template>

<script>

import ImageBlock from '../components/ImageBlock.vue'
import Social from '../components/Social.vue'
import pushTheLimit from '../components/pushTheLimit.vue'

export default {
  name: 'home',

  components: {
    ImageBlock,
    Social,
    pushTheLimit
  }
}
</script>
