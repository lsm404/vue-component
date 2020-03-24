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
            <span>{{ $t('m.nav.HITOKURA') }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1" @click="toSku">sku</el-menu-item>
            <el-menu-item index="1-2" @click="tostar">star</el-menu-item>
            <el-menu-item index="1-3" @click="toVuex">vuex</el-menu-item>
            <el-menu-item index="1-3" @click="toDebounce">debounce</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2">
          <span slot="title">{{$t('m.nav.UNOPEN')}}</span>
        </el-menu-item>
        <el-menu-item index="3"
                      disabled>
          <span slot="title">{{$t('m.nav.UNOPEN')}}</span>
        </el-menu-item>
        <el-menu-item index="4">
          <span slot="title">{{$t('m.nav.UNOPEN')}}</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
import { debounce } from '@/units.js'
export default {
  name: 'menuu',
  data () {
    return {}
  },
  methods: {
    debounce,
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
    },
    // 跳转vuex的调用
    toVuex () {
      this.$router.push('/index/vuex')
    },
    // 跳转防抖节流
    toDebounce () {
      this.$router.push('/index/debounce')
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
  // 导航激活和选中状态
  .el-menu-item:focus,.el-menu-item:hover {
    color: rgba(0, 0, 250, 1) !important;
    background: none !important;
  }
}
</style>

<style>
  /* 导航激活和选中状态 */
  .el-submenu__title:focus,.el-submenu__title:hover {
    color: rgba(0, 0, 250, 1) !important;
    background: none !important;
  }
</style>
