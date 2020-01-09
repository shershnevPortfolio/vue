<template>
  <div class="social">
     <div class="social__blocks">
       <span class="social__text"> Подпишись</span>
        <a href="#" class="social__link social__link--weight">
          <img src="../assets/img/VK.png" alt="facebook">
           <span class="social__link-test" >Нравится 12 млн</span>
        </a>
    </div>
    <div class="social__blocks" >
         <span class="social__text"> Поделись с друзьями</span>
        <a href="#" class="social__link">
            <img src="../assets/img/VK.png" alt="vk">
        </a>
        <a href="#" class="social__link">
            <img src="../assets/img/facebook.png" alt="facebook">
        </a>
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
  @import './src/assets/components/social.sass'
</style>
