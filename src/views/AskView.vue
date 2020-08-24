<template>
<div>
  <list-item></list-item>

  <!-- <ul class="news-list" v-for="item in fetchedAsk" v-bind:key="item.title">
    <li class="post">
      <div class="points">
      {{ item.points }}
      </div>
      <div>
        <p class="news-title">
          <router-link v-bind:to="`/item/${item.id}`">
        {{ item.title }}
          </router-link>
        </p>
        <small class="link-text"> {{ item.time_ago }} by
        <!-- 방법1: <router-link v-bind:to="'/user' + item.user">{{ item.user }}</router-link>  -->
        <!-- 방법2: 
          <router-link class="link-text" v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link> 
        </small>
      </div>
    </li>
  </ul>-->
</div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
import { mapGetters } from 'vuex'

export default {
  components:{
    ListItem
  },
  // computed: {
  //   ...mapGetters([
  //     'fetchedAsk'
  //   ])
    
  //   // #방법3.
  //   // ...mapGetters({
  //   //   fetchedAsk : 'fetchedAsk'
  //   // }),

  //   // #방법2.
  //   // ...mapState({
  //   //   ask: state => state.ask

  //   // #방법1
  //   // ask(){
  //   //   return this.$store.state.ask;
  //   // }
  // },
  // created() {
  //   this.$store.dispatch('FETCH_ASK');
  // }

}
</script>

<style scoped>

</style>