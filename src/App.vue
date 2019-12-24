<template>
  <div id="app">
    <div id="nav">
      <router-link class="nav__main-link nav__link"  to="/">Главная</router-link>
      <router-link class="nav__link" to="/competition">Конкурс</router-link>
      <router-link class="nav__link" to="/members">Участники</router-link>
      <router-link class="nav__link" to="/testdrive">Тест-драйв</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="sass">
  @import './src/assets/index.sass'
</style>
