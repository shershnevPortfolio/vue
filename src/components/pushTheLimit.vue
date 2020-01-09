<template>
  <div class="limit">
    <img :src="require(`@/assets/img/limit.png`)" alt="">
    <img :src="require(`@/assets/img/cars.png`)" alt="">
  </div>
</template>

<style lang="sass">
  @import './src/assets/components/social.sass'
</style>

<script>
export default {

  name: 'pushTheLimit',
  props: {
    path: String
  }
}

</script>
