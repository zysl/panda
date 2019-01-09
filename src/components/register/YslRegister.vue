<template>
  <div id="register" class="register">
        <p>
            <label>手机号<input type="text" placeholder="请输入手机号码"></label><em></em>
        </p>
   
        <p>
            <label>验证码<input type="text" placeholder="请输入验证码"><span>获取验证码</span></label><em></em>
        </p>
        
        <p>
            <label>用户名<input type="text" placeholder="请输入用户名"></label><em></em>
        </p>

        <p>
            <label>密&#12288;码<input type="text" placeholder="请输入密码"></label><em></em>
        </p>
        <p>
            <span>已有账号，</span><a href="javaScript:void(0)" class="glogin" v-on:click="goLogin">去登录</a>
        </p>
        <p>
            <button>点击注册</button>
        </p>
        <p>
            <i v-bind:class="{'icon':true,'icon-checked':checked}" v-on:click="remeberFile"></i><span class="read">请认真阅读《</span><a class="file" href="javascript:void(0)">注册协议</a><span>》</span>
        </p>
  </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props:['changeTitle'],
    data () {
      return {
        checked:true,
        isFlag:true,
        msg:'个人登录'
      }
    },
    props:['MsgFromFather'],
    methods: {
        remeberFile:function() {
            this.checked = !this.checked;
        },

        goLogin:function() {
            this.$emit('registerShow',this.isFlag)
            this.$emit('change',this.msg)
        }
    }
}
</script>

<style lang="less">
    @import './register.less';
</style>
