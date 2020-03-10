<template>
  <div class="menu">
    <el-col :span="12">
      <el-menu
              background-color="rgba(0,250,0,0)"
               class="el-menu-vertical-demo"
               text-color="rgba(250,250,250,0.5)"
               @open="handleOpen"
               @close="handleClose"
               active-text-color="#ff0">
        <el-submenu index="1">
          <template slot="title">
            <span>一库</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1" @click="toSku">sku</el-menu-item>
            <el-menu-item index="1-2" @click="tostar">star</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2">
          <span slot="title">未开放</span>
        </el-menu-item>
        <el-menu-item index="3"
                      disabled>
          <span slot="title">未开放</span>
        </el-menu-item>
        <el-menu-item index="4">
          <span slot="title">未开放</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
export default {
  name: 'menuu',
  data () {
    return {}
  },
  methods: {
    handleOpen (key, keyPath) {
    },
    // 跳转sku组件
    toSku () {
      this.$router.push('/index/sku')
    },
    // 跳转星星canvas组件
    tostar () {
      this.$router.push('/index/star')
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  width: 150px;
  float: left;
  overflow: hidden;
  .el-col-12 {
    width: 100%;
  }
  .el-menu {
    background: none;
    width: 100%;
  }
  .el-menu-item:focus,.el-menu-item:hover {
    color: rgba(0, 0, 250, 1) !important;
    background: none !important;
  }
}
</style>

<style>
  .el-submenu__title:focus,.el-submenu__title:hover {
    color: rgba(0, 0, 250, 1) !important;
    background: none !important;
  }
</style>
