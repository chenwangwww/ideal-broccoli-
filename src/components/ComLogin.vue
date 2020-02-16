<template>
  <div class="hello">
    <van-row type="flex" justify="center" align="center" style="height:100vh;width:100vw;background:lightgrey;">
      <van-col span="24">
        <van-row type="flex" justify="center">
          <van-image :src="icon" />
        </van-row>
        <van-field class="vanfield" v-model="account" label="账号"/>
        <van-field class="vanfield" v-model="password" type="password" label="密码"/>
        <van-row type="flex" justify="center">
          <van-button type="primary" @click="onLogin">登录</van-button>
        </van-row>
      </van-col>
    </van-row>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',

  data(){
    return {
      icon: require('../assets/logo.png'),
      account: '',
      password: ''
    }
  },

  methods: {
    onLogin(){
      window.cwData.$axios.get('/index.php?s=index/index/login.html',{       // 还可以直接把参数拼接在url后边
        params:{
            account: this.account,
            password: this.password
        }
      }).then(function(res){
          let result = res.data;
          window.console.log(result);
      }).catch(function (error) {
          window.console.log(error);
      });
    }
  },

  mounted(){
    
  },
  created(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vanfield{
    margin-bottom:5px;
}
</style>
