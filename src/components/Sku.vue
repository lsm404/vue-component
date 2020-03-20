<template>
  <div class="specification">
    <div class="specification-content">
      <div class="specification-title">{{$t('m.sku.GCOUNT')}}</div>
      <!-- 第一个规格配置 -->
      <div class="create-type">
        <div>
          <span>{{$t('m.sku.DESCRIPTION')}}</span>
          <input v-model="firstpecifiy"
                 type="text" />
        </div>
        <div class="specification-value">
          <p class="value-title">{{$t('m.sku.SPECIFICATIONS')}}</p>
          <div v-for="(item, index) in firstType"
               :key="index"
               class="value-con">
            <input v-model="firstpecifiyVal[index]"
                   @blur="addTypeList(item, firstpecifiyVal[index])"
                   type="text" />
            <i class="el-icon-delete"
               @click="removeType(index)"></i>
          </div>
          <div @click="addFirstType"
               class="addValue">{{$t('m.sku.ADDSPECVALUE')}}</div>
        </div>
      </div>

      <!-- 第二个规格配置 -->
      <div class="create-type">
        <div>
          <span>{{$t('m.sku.DESCRIPTION')}}</span>
          <input v-model="secondpecifiy"
                 type="text" />
        </div>
        <div class="specification-value">
          <p class="value-title">{{$t('m.sku.SPECIFICATIONS')}}</p>
          <div v-for="(item, index) in secondType"
               :key="index"
               class="value-con">
            <input v-model="secondpecifiyVal[index]"
                   @blur="addTypeSecList(item, secondpecifiyVal[index])"
                   type="text" />
            <i class="el-icon-delete"
               @click="removeSecType(index)"></i>
          </div>
          <div @click="addSecType"
               class="addValue">{{$t('m.sku.ADDSPECVALUE')}}</div>
        </div>
      </div>

      <!-- 第三个规格配置 -->
      <div class="create-type">
        <div>
          <span>{{$t('m.sku.DESCRIPTION')}}</span>
          <input v-model="thirdpecifiy"
                 type="text" />
        </div>
        <div class="specification-value">
          <p class="value-title">{{$t('m.sku.SPECIFICATIONS')}}</p>
          <div v-for="(item, index) in thirdType"
               :key="index"
               class="value-con">
            <input v-model="thirdpecifiyVal[index]"
                   @blur="addTypeThiList(item, thirdpecifiyVal[index])"
                   type="text" />
            <i class="el-icon-delete"
               @click="removeThiType(index)"></i>
          </div>
          <div @click="addThiType"
               class="addValue">{{$t('m.sku.ADDSPECVALUE')}}</div>
        </div>
      </div>

      <div class="specification-type">
        <div class="specification-type-border">
          <div class="type-title">
            <div class="first-type style-comment"
                 v-if="father.type.length">{{firstpecifiy}}</div>
            <div class="first-type style-comment"
                 v-if="son.type.length">{{secondpecifiy}}</div>
            <div class="first-type style-comment"
                 v-if="grandson.type.length">{{thirdpecifiy}}</div>
            <div class="first-type style-comment"
                 v-if="father.type.length">{{$t('m.sku.PRICE')}}</div>
            <div class="first-type style-comment"
                 v-if="father.type.length">{{$t('m.sku.REPERTORY')}}</div>
          </div>
          <div class="type-value"
               v-for="(item, index) in father.type"
               :key="index">
            <div class="type-value-con first-border">
              <div class="first-con style-comment">{{item}}</div>
            </div>
            <div v-if="!son.type.length"
                 class="all-fixed-type">
              <div class="side-type-fixed"> <input v-model="firstResult[index].price"
                       @blur="priceFirType()"
                       class="type-fixed" /></div>
              <div class="side-type-fixed"> <input v-model="firstResult[index].mount"
                       @blur="mountFirType()"
                       class="type-fixed" /></div>
            </div>
            <div>
              <div class="second-val"
                   v-for="(itemSec, indexSec) in son.type"
                   :key="indexSec">
                <div class="first-border"
                     style="display:flex;align-items: center;">
                  <div class="type-value-con style-comment">{{itemSec}}</div>
                </div>
                <div v-if="!grandson.type.length"
                     class="all-fixed-type">
                  <div class="side-type-fixed"> <input v-model="secondResult[indexSec].price"
                           @blur="priceSecType()"
                           class="type-fixed" /></div>
                  <div class="side-type-fixed"> <input v-model="secondResult[indexSec].mount"
                           @blur="mountSecType()"
                           class="type-fixed" /></div>
                </div>
                <div>
                  <div class="style-comment"
                       v-for="(itemThi, indexThi) in grandson.type"
                       :key="indexThi">
                    <div class="type-value-con style-comment">
                      <div>{{itemThi}}</div>
                    </div>
                    <div class="all-fixed-type">
                      <div class="side-type-fixed"> <input v-model="thirdResult[indexThi].price"
                               @blur="priceType()"
                               class="type-fixed" /></div>
                      <div class="side-type-fixed"> <input v-model="thirdResult[indexThi].mount"
                               @blur="mountType()"
                               class="type-fixed" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div v-if="!father.type.length" class="all-fixed-type">
            <div class="type-fixed"></div>
            <div class="type-fixed"></div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      firstpecifiy: '',
      firstpecifiyVal: [],
      father: {
        name: '',
        type: []
      },
      firstType: [],
      firstResult: [],
      secondpecifiy: '',
      secondpecifiyVal: [],
      son: {
        name: '',
        type: []
      },
      secondType: [],
      secondResult: [],
      thirdpecifiy: '',
      thirdpecifiyVal: [],
      grandson: {
        name: '',
        type: []
      },
      thirdType: [],
      thirdResult: [],
      firstValMount: 0,
      secValMount: 0,
      thrValMount: 0
    }
  },
  methods: {
    addFirstType () {
      if (this.firstValMount === 3) {
        this.$message(this.$t('m.dialog.SKUTIP'))
        return
      }
      this.firstValMount++
      this.firstType.push({})
      this.firstResult.push({})
    },
    removeType (val) {
      this.firstValMount--
      this.firstType.splice(val, 1)
      this.father.type.splice(val, 1)
    },
    addTypeList (item, value) {
      if (value) {
        this.father.name = this.firstpecifiy
        this.father.type = this.firstpecifiyVal
      }
    },
    addSecType () {
      if (this.secValMount === 3) {
        this.$message(this.$t('m.dialog.SKUTIP'))
        return
      }
      if (this.firstValMount <= 0) {
        this.$message(this.$t('m.dialog.OTHERSKUTIP'))
        return
      }
      this.secValMount++
      this.secondType.push({})
      this.secondResult.push({})
    },
    removeSecType (val) {
      this.secValMount--
      this.secondType.splice(val, 1)
      this.son.type.splice(val, 1)
    },
    addTypeSecList (item, value) {
      if (value) {
        this.son.name = this.secondpecifiy
        this.son.type = this.secondpecifiyVal
      }
    },
    addThiType () {
      if (this.thrValMount === 3) {
        this.$message(this.$t('m.dialog.SKUTIP'))
        return
      }
      if (this.secValMount <= 0) {
        this.$message(this.$t('m.dialog.OTHERSKUTIP'))
        return
      }
      this.thrValMount++
      this.thirdType.push({})
      this.thirdResult.push({})
    },
    removeThiType (val) {
      this.thrValMount--
      this.thirdType.splice(val, 1)
      this.grandson.type.splice(val, 1)
      this.thrValMount--
    },
    addTypeThiList (item, value) {
      if (value) {
        this.grandson.name = this.thirdpecifiy
        this.grandson.type = this.thirdpecifiyVal
      }
    },
    priceType () {
      this.firstpecifiyVal.forEach((firstItem) => {
        this.secondpecifiyVal.forEach((secondItem) => {
          this.thirdpecifiyVal.forEach((thirdItem, index) => {
            this.thirdResult[index].firstType = firstItem
            this.thirdResult[index].secondType = secondItem
            this.thirdResult[index].thirdType = thirdItem
          })
        })
      })
      console.log(this.thirdResult)
    },
    mountType () {
      this.firstpecifiyVal.forEach((firstItem) => {
        this.secondpecifiyVal.forEach((secondItem) => {
          this.thirdpecifiyVal.forEach((thirdItem, index) => {
            this.thirdResult[index].firstType = firstItem
            this.thirdResult[index].secondType = secondItem
            this.thirdResult[index].thirdType = thirdItem
          })
        })
      })
      console.log(this.thirdResult)
    },
    priceSecType () {
      this.firstpecifiyVal.forEach((firstItem) => {
        this.secondpecifiyVal.forEach((secondItem, index) => {
          this.secondResult[index].firstType = firstItem
          this.secondResult[index].secondType = secondItem
        })
      })
      console.log(this.thirdResult)
    },
    mountSecType () {
      this.firstpecifiyVal.forEach((firstItem) => {
        this.secondpecifiyVal.forEach((secondItem, index) => {
          this.secondResult[index].firstType = firstItem
          this.secondResult[index].secondType = secondItem
        })
      })
      console.log(this.thirdResult)
    },
    priceFirType () {
      this.firstpecifiyVal.forEach((firstItem, index) => {
        this.firstResult[index].firstType = firstItem
      })
      console.log(this.firstResult)
    },
    mountFirType () {
      this.firstpecifiyVal.forEach((firstItem, index) => {
        this.firstResult[index].firstType = firstItem
      })
      console.log(this.firstResult)
    }
  }
}
</script>

<style lang="scss" scoped>
.specification {
  display: flex;
  justify-content: center;
  color: rgba(250,250,250,0.5);
  input {
    background: rgba(0, 0, 250, 0.8) !important;
    border: none;
    color: rgba(250,250,250,0.5);
    text-align: center;
  }
  .specification-content {
    min-width: 500px;
    height: 800px;
    .specification-title {
      margin-bottom: 20px;
    }
    .create-type {
      font-size: 12px;
      .specification-value {
        margin: 20px 0;
        .value-title,
        .value-con,
        .addValue {
          display: inline;
        }
      }
    }
    .specification-type {
      display: flex;
      justify-content: center;
      .specification-type-border {
        float: left;
        .style-comment {
          display: flex;
          justify-content: center;
        }
        .all-fixed-type {
          display: flex;
          justify-content: center;
          .side-type-fixed {
            width: 80px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .type-fixed {
            width: 60px;
            height: 20px;
            border: 1px solid #999;
          }
        }
        .type-title {
          display: flex;
          justify-content: center;
          .first-type {
            width: 80px;
          }
        }
        .type-value {
          display: flex;
          justify-content: center;
          .type-value-con {
            width: 80px;
            display: flex;
            align-items: center;
          }
          .first-border {
            border: 1px solid #999;
            margin: 0 0 -1px -1px;
          }
          .second-val {
            display: flex;
            justify-content: center;
          }
        }
      }
    }
  }
}
</style>
