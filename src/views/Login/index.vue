<template>
  <div class="login">
    <!-- 顶部导航栏 -->
    <top-bar>
      <go-back slot="left" />
      <div class="center" slot="center">密码登录</div>
    </top-bar>
    <!-- 登录表单 -->
    <div class="form">
      <div class="form-item">
        <input
          type="text"
          v-model="user.username"
          placeholder="用户名"
          name="username"
        />
      </div>
      <div class="form-item password">
        <input
          :type="showPsd ? 'text' : 'password'"
          v-model="user.password"
          placeholder="密码"
          name="password"
        />
        <div class="show" :class="{ bg: showPsd }">
          abc ...
          <span @click="showBtn" class="show-btn" :class="animShowBtn"></span>
        </div>
      </div>
      <div class="form-item number">
        <input
          type="number"
          v-model="user.captcha_code"
          name="code"
          placeholder="验证码"
        />
        <div class="code">
          <img class="code-content" :src="code" />
          <span class="text">
            <p>看不清</p>
            <p @click="handCode">换一张</p>
          </span>
        </div>
      </div>
    </div>
    <div class="prompt">不知道为啥接口发送登录请求一直返回验证码超时</div>
    <div class="prompt">所以无法实现登录注册功能</div>
    <comp-button @click.native="loginClick" class="login-btn">
      登录
    </comp-button>
    <router-link class="rest" to="/forget">重置密码？</router-link>
  </div>
</template>

<script>
import GoBack from "components/GoBack";
import TopBar from "components/TopBar";
import CompButton from "components/Buttom";

import { requestCode, requestLogin } from "@/api";

export default {
  name: "Login",
  components: {
    GoBack,
    TopBar,
    CompButton,
  },
  created() {
    this.getCode();
  },
  data() {
    return {
      user: {
        username: "",
        password: "",
        captcha_code: "",
      },
      code: "",
      showPsd: false,
    };
  },
  computed: {
    animShowBtn() {
      if (this.showPsd) {
        return {
          "anim-right": "anim-right",
        };
      } else {
        return {
          "anim-left": "anim-left",
        };
      }
    },
  },
  methods: {
    // 请求验证码
    async getCode() {
      const { code } = await requestCode();
      this.code = code;
    },
    // 显示密码
    showBtn() {
      this.showPsd = !this.showPsd;
    },
    // 登录事件
    async loginClick() {
      // 验证表单
      const { username, password, captcha_code } = this.user;
      const result = await requestLogin(username, password, captcha_code);
      if (result.status === 0) {
        this.getCode();
      }
      console.log(result);
    },
    // 切换验证码
    handCode() {
      this.getCode();
    },
  },
};
</script>

<style lang="less" scoped>
@import "~assets/css/index.less";

.login {
  width: 100vw;
  height: 100vh;
  background: #f5f5f5;
  overflow: hidden;
}
.center {
  font-size: 18px;
  font-weight: 700;
  text-align: center;
}
.rest{
  width: 100%;
  text-align: right;
  font-size: 16px;
  color: #3190E8;
}
.form {
  border-top: 12px solid #ececec;
  .form-item {
    background: #fff;
    border-bottom: 1px solid #e4e4e4;
    input {
      outline: none;
      padding: 14px 18px;
      font-size: 14px;
      width: 100%;
      height: 50px;
      border: none;
    }
  }
}
.password {
  .fx-center();
  .show {
    position: relative;
    margin-right: 10px;
    width: 60px;
    height: 20px;
    text-align: center;
    font-size: 14px;
    border-radius: 20px;
    background: #ccc;
  }
}
.show-btn {
  position: absolute;
  left: 0;
  top: -20%;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #ececec;
}
.anim-enter-active {
  left: 0;
}
.anim-leave-active {
  right: 0;
}
.login-btn {
  margin: 0px 12px 24px 12px;
}
.prompt {
  padding: 5px 10px;
  font-size: 14px;
  color: red;
}
.number {
  display: flex;
  .code {
    display: flex;
    .code-content {
      width: 80px;
      .fx-center();
    }
  }
  .text {
    padding: 6px;
    width: 70px;
    font-size: 14px;
    p {
      margin: 3px;
      text-align: center;
    }
    p:nth-child(2) {
      color: #6578dc;
    }
  }
}
.anim-right {
  transform: translateX(30px);
  transition: all 0.5s;
}
.anim-left {
  left: 0;
  transition: all 0.5s;
}
.bg {
  color: #fff;
  background-color: #4cd964 !important;
}
</style>
