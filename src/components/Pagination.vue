<template>
  <div class="pagination">{{members}}</div>
</template>

<script>
export default {

  name: 'member',
  props: {
    members: Array,
    id: String
  }
}
</script>
