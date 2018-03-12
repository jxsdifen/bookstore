<template>
  <div>
    主窗口Main
    <router-view/>
    
    <mt-tabbar>
      <mt-tab-item id="home">
        <router-link :to="{name: 'Home'}">
          首页
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="explorer">
        <router-link :to="{name: 'Explorer'}">
          分类
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="cart">
        <router-link :to="{name: 'Cart'}">
          购物车
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="my">
        <router-link :to="{name: 'My'}">
          我的
        </router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>
  
</template>

<script>
export default {
  name: 'Main',
  data(){
    return{

    }
  }
}
</script>

<style scoped>

</style>
