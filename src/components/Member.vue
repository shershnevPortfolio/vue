<template>
  <div class="member ">
    <img class="member__img" :src="require(`@/assets/img/members/member-${id}.png`)" alt="">
    <div class="member__info">
      <span>{{id + '.'}}</span>
      <span>{{name}}</span>
    </div>

  </div>
</template>
<style lang="sass">
    @import './src/assets/components/member.sass'
</style>

<script>

export default {

  name: 'member',
  props: {
    name: String,
    id: String
  }
}
</script>
