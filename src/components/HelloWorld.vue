<template>
  <div class="hello">
    <h1>掘金面试总结附所有链接{{ msg }}</h1>
  </div>
</template>

<script>
import { debounce } from '@/units.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'https://juejin.im/post/5e8b163ff265da47ee3f54a6'
    }
  },
  methods: {
    debounce
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
