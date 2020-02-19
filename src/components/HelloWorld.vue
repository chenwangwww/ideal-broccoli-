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
      let self = this;
      window.cwData.$axios.get('/index.php?s=index/index/getDetail.html',{       // 还可以直接把参数拼接在url后边
        params:{
            code: index
        }
      }).then(function(res){
          let result = res.data;
          window.console.log(result);
          if(result.code === 1){
            window.cwData.$selectedIndex = index;
            window.cwData.detail.$prefix = result.data.prefix;
            window.cwData.detail.$count = result.data.count;
            self.$router.push('/com-grid/');
          }else{
            Toast(result.msg);   
          }
      }).catch(function (error) {
          window.console.log(error);
      });
    }
  },

  mounted(){
    for(let i = 0; i < window.cwData.$imgs.length; i++){
      this.images.push(window.cwData.$imgBase + window.cwData.$imgs[i]['url']);
    }

    this.$refs.swipe.swipeTo(window.cwData.$selectedIndex);
  },
  created(){
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
