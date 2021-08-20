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
          v-model="user.code"
          name="code"
          placeholder="验证码"
        />
        <div class="code">
          <span class="code-content">
            1233
          </span>
          <span class="text">
            <p>看不清</p>
            <p>换一张</p>
          </span>
        </div>
      </div>
    </div>
    <div class="prompt">温馨提示：未注册过的账号，登录时将自动注册</div>
  </div>
</template>

<script>
import GoBack from "components/GoBack";
import TopBar from "components/TopBar";

export default {
  name: "Login",
  components: {
    GoBack,
    TopBar,
  },
  data() {
    return {
      user: {
        username: "张三",
        password: "231",
        code: "12323",
      },
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
    showBtn() {
      this.showPsd = !this.showPsd;
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
