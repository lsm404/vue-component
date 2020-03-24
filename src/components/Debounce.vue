<template>
  <div>
    <el-button type="primary" @click="debounce">防抖</el-button>
    <el-button type="primary" @click="throttle">节流</el-button>
    <input />
  </div>
</template>
<script>
import { debounce, throttle } from '@/units.js'
export default {
  name: 'Debounce',
  methods: {
    debounce () {
      console.log('1')
      debounce(this.common, 1000)
      // window.addEventListener(this.debounce, debounce(this.common, 1000))
    },
    throttle () {
      throttle(this.common, 5000)
    },
    common () {
      console.log('哈，调用了')
    }
  },
  mounted () {
    window.addEventListener('keyup', debounce(this.common, 1000))
  }
}
</script>
