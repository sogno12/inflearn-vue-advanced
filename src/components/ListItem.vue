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

export default {
    computed: {
      listItems() {
        return this.$store.state.list;
      }
        
    },
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