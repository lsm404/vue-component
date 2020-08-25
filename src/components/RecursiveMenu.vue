<template>
  <div>
    <div class="wrap">
      <div class="menu-wrap">
        <div class="menu-item" v-for="menuItem in data" :key="menuItem.id">
          <span class="menu-title" @click="clickItem(menuItem._child)">{{menuItem.name}}</span>
            <div v-if="item.length > 0 && item[0].father_id === menuItem.id">
              <recursive-menu :data="item" />
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'recursive-menu',
  data () {
    return {
      item: []
    }
  },
  mounted () {
    console.log('son', this.data)
  },
  props: {
    data: {
      type: Array
    }
  },
  watch: {
    data: {
      deep: true,
      handler (val, old) {
        this.data = val
        console.log('data-watch', this.data)
      }
    }
  },
  methods: {
    clickItem (menuItem) {
      console.log({menuItem})
      if (menuItem) {
        this.item = menuItem
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  margin-left: 20px;
  .menu-wrap {
    .menu-item {

      .menu-title {
        color: red;
      }
    }
  }
}
</style>
