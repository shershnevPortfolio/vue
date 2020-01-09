<template>
  <div>
    <img :src="require(`@/assets/img/${path}`)" alt="">
  </div>
</template>

<style lang="sass">
  @import './src/assets/components/social.sass'
</style>

<script>
export default {

  name: 'imageBlock',
  props: {
    path: String
  }
}

</script>
