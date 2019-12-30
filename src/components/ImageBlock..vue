<template>
  <div>
    <img :src="require(`@/assets/img/${path}`)" alt="">
  </div>
</template>

<style lang="sass">
</style>

<script>
export default {

  name: 'ImageBlock',
  props: {
    path: String
  }
}

</script>
