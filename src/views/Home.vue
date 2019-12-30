
<template>
  <div class="page-inner">
    <div class="content">
      <pushTheLimit></pushTheLimit>
      <MapBlock path='map.png'></MapBlock>
    </div>
    <Social ></Social>
  </div>
</template>

<script>

import MapBlock from '../components/MapBlock.vue'
import Social from '../components/Social.vue'
import pushTheLimit from '../components/pushTheLimit.vue'

export default {
  name: 'home',

  components: {
    MapBlock,
    Social,
    pushTheLimit
  }
}
</script>
