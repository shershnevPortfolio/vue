<template>
  <div class="social">
    <span class="social__text"> Поделись с друзьями</span>
    <div class="social__blocks" >
        <div class="social__link">
            <img src="../assets/img/VK.png" alt="facebook">
        </div>
        <div class="social__link">
              <img src="../assets/img/facebook.png" alt="facebook">
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Social',
  props: {
    msg: String
  }
}

</script>
<style lang="sass">
  @import './src/assets/social.sass'
</style>
