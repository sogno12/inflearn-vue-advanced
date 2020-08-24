<template> 
    <div class="user-container">
      <div>
        <i class="fas fa-user"></i>
      </div>
      <div class="user-description">
        <div>
          <slot name="username">
          <!-- 상위 컴포넌트에서 정의할 영역-->
          {{ info.id }}
          </slot>
        </div>
        <div class="time">
          <slot name="time">{{ info.created }}</slot>
          <slot name="karma">{{ info.karma }}</slot>
        </div>
        
      </div>
    </div>
</template>

<script>
export default {
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