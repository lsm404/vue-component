<template>
  <recursive-menu :data="data"  @change="activeIdsChange" />
</template>

<script>

import data from '@/assets/json/menu.json'
import RecursiveMenu from '@/components/RecursiveMenu'

export default {
  name: 'recursive',
  components: {
    RecursiveMenu
  },
  data () {
    return {
      data: []
      //  json数据
    }
  },
  mounted () {
    this.data = data
    console.log({data})
  },
  methods: {
    activeIdsChange () {
      console.log('change')
    }
  }
}
</script>
