<template>
  <div id="nav">
        <router-link class="nav__main-link nav__link"  to="/" >Главная</router-link>
        <router-link class="nav__link" to="/competition">Конкурс</router-link>
        <router-link class="nav__link" to="/members">Участники</router-link>
        <router-link class="nav__link" to="/testdrive">Тест-драйв</router-link>
    </div>
</template>

<script>
export default {
  name: 'navigation',
  props: {
    name: String,
    id: String
  }
}
</script>
