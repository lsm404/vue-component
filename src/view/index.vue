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
      <div class="chang-language">
        <el-button type="warning"
                  icon="el-icon-star-off"
                  @click="changeLanguage"
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
    },

    // 切换语言
    changeLanguage () {
      let lang = localStorage.getItem('locale') || 'zh-CN'

      if (lang === 'zh-CN') {
        lang = 'en-US'
        this.$i18n.locale = lang
      } else {
        lang = 'zh-CN'
        this.$i18n.locale = lang
      }
      localStorage.setItem('locale', lang)
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
    height: calc(100vh - 100px);
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -600px;
    padding-top: 100px;
    text-align: center;
    .to-index {
      position: fixed;
      top: 50px;
      right: 20px;
    }
    .chang-language {
      position: fixed;
      top: 100px;
      right: 20px;
    }
  }
}
</style>
