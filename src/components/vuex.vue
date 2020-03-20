<template>
  <div class="vuex">
    <div class="star" v-for="(item, index) in test" :key="index">
    </div>
  </div>
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
    // font-size: 500px;
    .star{
        width:0px;height:0px;
        border-bottom:70px solid rgba(0,0,250,0.5);
        border-left:100px solid transparent;
        border-right:100px solid transparent;
        margin:100px auto;
        /*到这一步为止，得到的是一个向上的等腰三角形*/
        -webkit-transform: rotate(35deg);
        -ms-transform: rotate(35deg);
        -o-transform: rotate(35deg);
        transform: rotate(35deg);
        /*顺时针旋转35deg*/
        position:relative;
        &:before {
          content:"";
        width:0px;
        height:0px;
        border-bottom:70px solid rgba(0,0,250,0.5);
        border-left:30px solid transparent;
        border-right:30px solid transparent;
        /*伪类所添加的内容继承原来的样式也发生了顺时针旋转*/
        -webkit-transform: rotate(-35deg);
        -ms-transform: rotate(-35deg);
        -o-transform: rotate(-35deg);
        transform: rotate(-35deg);
        /*设置负值，就会逆时针旋转*/
        position:absolute;
        top:-45px;left:-65px;
        /*定位调整位置*/
        }
        &:after {
          content:"";
          width:0px;
          height:0px;
          position:absolute;
          border-bottom:70px solid rgba(0,0,250,0.5);
          border-left:100px solid transparent;
          border-right:100px solid transparent;
          -webkit-transform: rotate(-70deg);
          -ms-transform: rotate(-70deg);
          -o-transform: rotate(-70deg);
          transform: rotate(-70deg);
          top:3px;left:-105px;
        }
    }
  }
</style>
