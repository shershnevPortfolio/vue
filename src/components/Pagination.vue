<template>
  <div class="pagination" style="color: white;">
      <button style="width:50px; height:20px;" @click="paginate('prev')"></button>
    <span>{{page}} / {{Math.ceil(members.length/perPage)}}</span>
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
    perPage: Number
  },
  methods: {
    paginate: function (direction) {
      this.$emit(`${direction}`)
    }
  }
}
</script>
