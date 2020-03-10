<template>
  <div class="body-screen">
    <div class="star-back">
      <Star />
    </div>
    <div class="content">
      <Menu></Menu>
      <router-view></router-view>
      <div class="to-index">
        <el-button type="warning"
                  icon="el-icon-star-off"
                  @click="toIndex"
                  circle></el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menuu'
import Star from '@/components/stars'
export default {
  name: 'index',
  methods: {
    toIndex () {
      this.$router.push('/')
    }
  },
  components: {
    Menu,
    Star
  }
}
</script>

<style lang="scss" scoped>
.body-screen {
  position: relative;
  .star-back {
    width: 100vw;
    height: 100vh;
  }
  .content {
    width: 1200px;
    height: 100vh;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -600px;
    padding-top: 100px;
    .to-index {
      position: fixed;
      top: 50px;
      right: 20px;
    }
  }
}
</style>
