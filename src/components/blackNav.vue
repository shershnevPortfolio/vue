<template>
  <div id="nav" class="nav members-nav" >
        <router-link class="members-nav__link nav__link"  to="/" >Главная</router-link>
        <router-link class="members-nav__link nav__link" to="/competition">Конкурс</router-link>
        <router-link class="members-nav__link nav__link" to="/members">Участники</router-link>
        <router-link class="members-nav__link nav__link" to="/testdrive">Тест-драйв</router-link>
        <span style="color: red"></span>
    </div>
</template>

<script>
export default {
  name: 'blackNav',
  props: {
    name: String,
    id: String
  }
}
</script>
