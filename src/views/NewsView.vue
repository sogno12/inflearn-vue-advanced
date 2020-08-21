<template>
  <div>
      <div v-for="user in news" v-bind:key="user.title">{{ user.title }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      news: state => state.news
    })
  },
  created() {
    // fetchNewsList()
    //   .then(response => this.users = response.data)
    //   .catch()

    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>

<style>

</style>