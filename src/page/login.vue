<template>
  	<div class="login_page fillcontain">
	  	<transition name="form-fade" mode="in-out">
	  		<section class="form_contianer" v-show="showLogin">
		  		<div class="manage_tip">
		  			<p>后台管理系统</p>
		  		</div>
		    	<el-form :model="loginForm" :rules="rules" ref="loginForm">
					<el-form-item prop="username">
						<el-input v-model="loginForm.username" placeholder="用户名"><span>dsfsf</span></el-input>
					</el-form-item>
					<el-form-item prop="password">
						<el-input type="password" placeholder="密码" v-model="loginForm.password"></el-input>
					</el-form-item>
					<el-form-item>
				    	<el-button type="primary" @click="login()" class="submit_btn">登陆</el-button>
				  	</el-form-item>
            <el-form-item>
				    	<el-button type="primary" @click="register()" class="submit_btn">注册</el-button>
            </el-form-item>
				</el-form>
				<!-- <p class="tip">温馨提示：</p> -->
				<!-- <p class="tip">未登录过的新用户，自动注册</p> -->
				<!-- <p class="tip">注册过的用户可凭账号密码登录</p> -->
	  		</section>
	  	</transition>
  	</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
      },
      showLogin: false,
    }
  },
  mounted() {
    this.showLogin = true;
  },
  computed: {
    ...mapState(['count']),
  },
  methods: {
      login:function(){
        console.log("login form:",this.loginForm)
          this.$http.post('user/login',this.loginForm)
          .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })
      },
      register:()=>{
        console.log("register")
        console.log("count:",this.count)        
      }
  },
  watch: {
  }
}
</script>

<style lang="less" scoped>
@import "../style/mixin.less";

.login_page {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.manage_tip {
  position: absolute;
  width: 100%;
  top: -100px;
  left: 0;
  p {
    font-size: 34px;
    font-family: 'Microsoft YaHei UI';
    color: #000;
  }
}
.form_contianer {
  .wh(320px, 290px);
  .ctp(320px, 210px);
  padding: 25px;
  border-radius: 5px;
  text-align: center;
  background-color: #fff;
  -webkit-box-shadow: 0 0 10px rgba(185, 201, 201, 0.5);
  -moz-box-shadow: 0 0 10px rgba(185, 201, 201, 0.5);
  box-shadow: 0 0 10px rgba(185, 201, 201, 0.5);
  .submit_btn {
    width: 100%;
    font-size: 16px;
  }
}
.tip {
  font-size: 12px;
  color: #808080;
}
.form-fade-enter-active,
.form-fade-leave-active {
  transition: all 1s;
}
.form-fade-enter,
.form-fade-leave-active {
  transform: translate3d(0, -50px, 0);
  opacity: 0;
}
</style>

