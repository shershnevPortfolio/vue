<template>
  <div class="pagination" style="color: white;">
      <button style="width:50px; height:20px;" @click="paginate('prev')"></button>
    <span style="margin-right: 4px">{{pages.join(' ')}}</span>
    <span v-if="pages.reverse()[0] != Math.ceil(members.length/perPage)">... {{Math.ceil(members.length/perPage)}}</span>
    <button style="width:50px; height:20px;" @click="paginate('next')"></button>
  </div>
</template>

<script>
export default {

  name: 'member',
  props: {
    members: Array,
    id: String,
    page: Number,
    perPage: Number,
    pages: Array
  },
  methods: {
    paginate: function (direction) {
      this.$emit(`${direction}`)
    }
  }
}
</script>
