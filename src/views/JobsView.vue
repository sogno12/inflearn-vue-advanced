<template>
<div>
  <list-item></list-item>

  <!--
  <ul class="news-list" v-for="item in jobs" v-bind:key="item.title">
    <li class="post">
      <div class="points">
      {{ item.points || 0 }}
      </div>
      <div>
        <p class="news-title">
          <a v-bind:href="item.url">
            {{ item.title }}
          </a>
        </p>
        <small class="link-text"> {{ item.time_ago }} by
        <!-- 방법1: <router-link v-bind:to="'/user' + item.user">{{ item.user }}</router-link>  -->
        <!-- 방법2: 
          <a :href="item.url">{{ item.domain }}</a>
        </small>
      </div>
      
    </li>
    
  </ul>
  -->
</div>
</template>

<script>
import ListItem from '../components/ListItem.vue'

export default {
  components:{
    ListItem
  },
}


// import { mapState } from 'vuex';

// export default {
//   computed: {
//     ...mapState({
//       jobs: state => state.jobs
//     })
//   },
//   created() {
//     this.$store.dispatch('FETCH_JOBS');
//   }

// }
</script>


<style scoped>

</style>