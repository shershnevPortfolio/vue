<template>
  <div>
    <img :src="require(`@/assets/img/${path}`)" alt="">
  </div>
</template>

<script>

export default {

  name: 'mapBlock',
  props: {
    path: String
  }
}

</script>
