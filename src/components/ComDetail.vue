<template>
  <div class="com-detail">
    <van-row type="flex" justify="center" style="height:100vh;">
      <van-col span="24">
        <van-sticky>
            <van-nav-bar
                title=""
                left-text="返回"
                left-arrow
                @click-left="onClickBack"
            />
        </van-sticky>
        <van-swipe style="height: 100vh;" vertical :autoplay="3000" @change="onChange" ref="swipe">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <van-image width="100vw" height="100vh" fit="contain" :src="image" />
          </van-swipe-item>
          <div slot="indicator">
            
          </div>
        </van-swipe>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { Toast } from 'vant';

export default {
  name: 'ComDetail',

  data(){
    return {
      images:[]
    }
  },

  methods: {
    onChange(index){
      Toast('当前 Swipe 索引：' + index);     
    },

    onClickBack(){
        this.$router.push('/com-grid');
    }
  },

  mounted(){
    for(let i = 1; i <= window.cwData.detail.$count; i++){
      this.images.push(window.cwData.$imgBase + '/' + window.cwData.detail.$prefix + '/' + window.cwData.detail.$prefix + i + ".png");
    }

    this.$refs.swipe.swipeTo(window.cwData.$selectedDetailIndex);
  },

  created(){
       
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
