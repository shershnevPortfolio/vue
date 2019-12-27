<template>
    <Navigation></Navigation>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
export default {
  name: 'layout',
  props: {
    name: String,
    id: String
  },
  components: {
    Navigation
  }
}
</script>
