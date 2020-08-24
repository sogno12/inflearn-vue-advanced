<template> 
    <div class="user-container">
      <div>
        <i class="fas fa-user"></i>
      </div>
      <div class="user-description">
        <div>
          <slot name="username">
          <!-- 상위 컴포넌ㅌ에서 정의할 영역-->
          {{ info.id }}
          </slot>
        </div>
        <!-- <router-link :to="`/user/${userInfo.id}`">
          {{ userInfo.id }}
        </router-link> -->
        <div class="time">
          <slot name="time">{{ info.created }}</slot>
        </div>
        <div>
          <slot name="karma">{{ info.karma }}</slot>
        </div>
        
      </div>

      <!-- <div>
        <i class="fas fa-user"></i>
      </div>
      <div class="user-description">
        <div>{{ userInfo.id }}</div>
        <div class="time">
        {{ userInfo.created }}
        {{ userInfo.karma }}
        </div>
      </div> -->
    </div>
</template>

<script>
export default {
  //방법1
  props: {
    info : Object
  },
  computed: {
    userInfo(){
      return this.$store.state.user;
    }
  },

}
</script>

<style scopted>
.user-container{
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}

</style>