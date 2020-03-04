<template>
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
</template>

<script>
import Menu from '@/components/Menuu'
// import Sku from '@/components/Sku'
export default {
  name: 'index',
  methods: {
    toIndex () {
      this.$router.push('/')
    }
  },
  components: {
    Menu
  }
}
</script>

<style lang="scss" scoped>
.content {
  width: 1200px;
  height: 100vh;
  overflow: hidden;
  position: relative;
  left: 50%;
  margin-left: -600px;
  .to-index {
    position: fixed;
    top: 50px;
    right: 20px;
  }
}
</style>
