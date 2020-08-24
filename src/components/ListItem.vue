<template>
  <div>
  <ul class="news-list" v-for="item in listItems" v-bind:key="item.title">
    <li class="post">
      <div class="points">
      {{ item.points || 0 }}
      </div>
      <div>
        <!-- 타이틀 영역 -->
        <p class="news-title">
            <template v-if="item.domain"> <!--domain값 여부-->
                <a v-bind:href="item.url">
                    {{ item.title }}
                </a>
            </template>
            <template v-else>
                <router-link v-bind:to="`/item/${item.id}`">
                    {{ item.title }}
                </router-link>
            </template>
        </p>
        <small class="link-text"> {{ item.time_ago }} by
        <!-- 방법1: <router-link v-bind:to="'/user' + item.user">{{ item.user }}</router-link>  -->
        <!-- 방법2: -->
          <router-link class="link-text" v-if="item.user" v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link> 
          <a :href="item.url" v-else>{{ item.domain }}</a>
        </small>
      </div>
      
    </li>
    
  </ul>
</div>
</template>

<script>
import { mapState, } from 'vuex'

export default {
    computed: {
        listItems(){
            const name = this.$route.name;
            if( name === 'news'){
               return this.$store.state.news;
            }else if (name === 'ask') {
                return this.$store.state.ask;
            }else if (name === 'jobs'){
                return this.$store.state.jobs;
            }
        },
        ...mapState({
        news: state => state.news
        })
    },
  created() {
    // console.log(this.$route);
    const name = this.$route.name;
    if( name === 'news'){
        this.$store.dispatch('FETCH_NEWS');
    }else if (name === 'ask') {
        this.$store.dispatch('FETCH_ASK');
    }else if (name === 'jobs'){
        this.$store.dispatch('FETCH_JOBS');
    }

  }
}
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points{
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #41b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}

</style>