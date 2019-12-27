<template>
  <div class="page-inner member-page-inner">
    <div class = "test2"></div>
    <span @click="update()">asddddddddd</span>
    <div class="members">
      <template v-for="member in paginatedMembers">
        <!-- {{item.name}} -->
          <Member
            :name='member.name'
            :key="member.id"
            :id="member.id"
            >
          </Member>
      </template>
       <Pagination
      @next ='nextPage'
      @prev ='prevPage'
      :members='members'
      :page='page'
      :pages='pages'
      :perPage='perPage'
    >
    </Pagination>
    </div>

    <Social></Social>
  </div>
</template>

<style  lang="sass">
 @import './src/assets/view/members.sass'
</style>

<script>
// @ is an alias to /src
import Member from '../components/Member.vue'
import Social from '../components/Social.vue'
import Pagination from '../components/Pagination.vue'
export default {
  name: 'members',
  components: {
    Member,
    Social,
    Pagination
  },
  data () {
    return {
      members: [
        { id: '1', name: 'Михаил Варопаев' },
        { id: '2', name: 'Альбина Джанабаева' },
        { id: '3', name: 'Алексей Воробьев' },
        { id: '4', name: 'Марина Алфёрова' },
        { id: '5', name: 'Kseniya Lagutina' },
        { id: '6', name: 'Иван Потапов' },
        { id: '7', name: 'Инна Васильева' },
        { id: '8', name: 'Alya Boyarkina ' },
        { id: '9', name: 'Karina Berdnikova ' },
        { id: '10', name: 'Екатирина Балуева' },
        { id: '11', name: 'Mariya Beloshkurskaya' },
        { id: '12', name: 'Alya Boyarkina ' }

      ],
      page: 1,
      perPage: 12,
      pages: []
    }
  },
  computed: {
    paginatedMembers: function () {
      return this.members.slice((this.page * this.perPage) - this.perPage, this.page * this.perPage)
    }
  },
  mounted () {
    this.getPages()
  },

  methods: {
    nextPage () {
      if (Math.ceil(this.members.length / this.perPage) > this.page) {
        this.page++
        this.getPages()
      }
    },
    prevPage () {
      if (this.page > 1) {
        this.page--
        this.getPages()
      }
    },

    // troubles in this method
    getPages () {
      this.pages = []
      for (let i = 0; i < 3; i++) {
        if ((this.page + i) < this.members.length / this.perPage) {
          this.pages.push(` ${this.page + i}`)
        }
      }
    },

    update () {
      this.$emit('update')
    }
  }

}
</script>
