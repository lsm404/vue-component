<template>
  <div class="menu">
    <el-col :span="12">
      <el-menu default-active="2"
               class="el-menu-vertical-demo"
               @open="handleOpen"
               @close="handleClose"
               background-color="#545c64"
               text-color="#fff"
               active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item index="1-4"
                        @click="toSku">Sku</el-menu-item>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3"
                      disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
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
    toSku () {
      this.$router.push('/index/sku')
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
}
</style>
