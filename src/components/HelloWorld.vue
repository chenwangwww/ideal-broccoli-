<template>
  <div class="hello">
    <van-row type="flex" justify="center" style="height:100vh;">
      <van-col span="24">
        <van-swipe style="height: 100vh;" vertical :autoplay="3000" @change="onChange" ref="swipe">
          <van-swipe-item v-for="(image, index) in images" :key="index" @click="onClick($event, index)">
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
  name: 'HelloWorld',

  props: ['imageIndex'],

  data(){
    return {
      images: []
    }
  },

  methods: {
    onChange(index){
      Toast('当前 Swipe 索引：' + index);     
    },

    onClick($event, index){
      this.$router.push('/com-grid/' + index);
    }
  },

  mounted(){
    for(let i = 1;i < 6; i++){
      this.images.push(require("../assets/beauty0" +i + ".jpg"));
    }
    this.$refs.swipe.swipeTo(this.imageIndex);
  },
  created(){
    Toast('获取数据：' + this.imageIndex);   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
