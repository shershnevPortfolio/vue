<template>
  <div class="page-inner member-page-inner">
    <div class = "test2"></div>
    <div class="members">

      <template v-for="member in members">
        <!-- {{item.name}} -->
          <Member
            :name='member.name'
            :key="member.id"
            :id="member.id"
            >
          </Member>
      </template>
    </div>
    <Pagination :members='members'></Pagination>
    <Social></Social>
  </div>
</template>

<style lang="sass">
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
      perPage: 9,
      pages: []
    }
  }
}
</script>
