<template>
  <div class="hello">
    <van-row type="flex" justify="center" style="height:100vh;">
      <van-col span="24">
        <van-sticky>
          <van-nav-bar
              title="图片集"
              left-text="返回"
              left-arrow
              @click-left="onClickBack"
          />
        </van-sticky>
        <van-grid :column-num="3">
            <van-grid-item
                v-for="(value, index) in images"
                :key="index"
                @click="onClick($event, index)"
            >
                <van-image width="27vw" height="27vh" fit="contain" :src="value"/>
            </van-grid-item>
        </van-grid>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: 'ComGrid',

  data(){
    return {
      images: [],
    }
  },

  methods: {
    onClick($event, index){
      window.cwData.$selectedDetailIndex = index;
      window.console.log(window.pageYOffset);
      window.cwData.$gridYOffset = window.pageYOffset;
      this.$router.push('/com-detail');
    },

    onClickBack(){
        this.$router.push('/com-hello');       
    }
  },

  mounted(){    
    for(let i = 1; i <= window.cwData.detail.$count; i++){
      this.images.push(window.cwData.$imgBase + '/' + window.cwData.detail.$prefix + '/' + i + ".jpg");
    }
  
    window.setTimeout(function(){ window.scrollTo(0, window.cwData.$gridYOffset); }, 100);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
