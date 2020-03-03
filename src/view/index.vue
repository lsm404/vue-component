<template>
  <div>
    <el-button>默认按钮</el-button>
    <el-col :span="12">
      <h5>自定义颜色</h5>
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
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <!-- <el-menu-item index="1-4-1">选项1</el-menu-item> -->
          </el-submenu>
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
// import HelloWorld from '@/components/HelloWorld'
// import Sku from '@/components/Sku'
export default {
  methods: {
    handleOpen (key, keyPath) {
      this.$router.push('/#/sku')
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
</style>
