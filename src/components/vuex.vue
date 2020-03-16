<template>
  <div class="vuex">{{test}}</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Vuex',
  computed: {
    ...mapState(['test'])
  }
}
</script>

<style lang="scss">
  .vuex {
    font-size: 500px;
  }
</style>
