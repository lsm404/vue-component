<template>
  <div>
    <div class="wrap">
      <div class="menu-wrap">
        <div class="menu-item" :style="indent" v-for="menuItem in data" :key="menuItem.id">
          <span class="menu-title" @click="clickItem(menuItem._child)">{{menuItem.name}}</span>
            <div v-if="item.length > 0 && item[0].father_id === menuItem.id">
              <recursive-menu :data="item" :depth="depth + 1" />
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
  computed: {
    indent () {
      return {transform: `translate(${this.depth * 50}px)`}
    }
  },
  mounted () {
    console.log('son', this.data)
  },
  props: {
    data: {
      type: Array
    },
    depth: {
      type: Number,
      default: 0
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
  text-align: left;
  .menu-wrap {
    margin: 18px 0;

    .menu-item {
      margin-bottom: 10px;
      text-align: left;

      .menu-title {
        color: red;
      }
    }
  }
}
</style>
