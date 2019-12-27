<template>
  <div class="pagination" style="color: white;">
      <button class="pagination__button" @click="paginate('prev')"><i class="fas fa-angle-left pagination__angle"></i></button>
    <div>
      <template
        v-for="page in pages"
      >
          <span class="pagination__page" :key="page">{{page}}</span>

      </template>
    </div>

    <span>
      <span   v-if="pages.reverse()[0] < Math.ceil(members.length/perPage)  " class="pagination__page pagination__page--test">...</span>
      <span  class="pagination__page ">{{Math.ceil(members.length/perPage)}}</span>
    </span>
    <button class="pagination__button" @click="paginate('next')"><i class="fas fa-angle-right pagination__angle"></i></button>
  </div>
</template>
<style lang="sass">
  @import './src/assets/components/pagination.sass'
</style>
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
