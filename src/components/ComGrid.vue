<template>
  <div class="hello">
    <van-row type="flex" justify="center" style="height:100vh;">
      <van-col span="24">
        <van-nav-bar
            title="图片集"
            left-text="返回"
            left-arrow
            @click-left="onClickBack"
        />
        <van-grid :column-num="3">
            <van-grid-item
                v-for="(value, index) in images"
                :key="index"
                @click="onClick($event, index)"
            >
                <van-image width="30vw" height="30vh" fit="contain" :src="value"/>
            </van-grid-item>
        </van-grid>
      </van-col>
    </van-row>
  </div>
</template>

<script>

export default {
  name: 'ComGrid',
  props: ['imageIndex'],
  data(){
    return {
      images: [],
    }
  },

  methods: {
    onClick($event, index){
        window.console.log(index);
    },
    onClickBack(){
        this.$router.push('/com-hello/' + this.imageIndex);
    }
  },

  mounted(){    
      window.console.log("获取数据" + this.imageIndex);
    for(let i = 0;i < window.cwData.$imgs.length; i++){
        this.images.push(window.cwData.$imgBase + window.cwData.$imgs[i]);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
