<template>
  <div>
    <img :src="require(`@/assets/img/${path}`)" alt="">
  </div>
</template>

<script>

export default {

  name: 'member',
  props: {
    path: String
  }
}

</script>
