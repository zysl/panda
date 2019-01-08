<template>
	<div id="login" class="login">
		<p>
			<label>登录名<input type="text" placeholder="请输入登录名/手机号码"></label>
		</p>
		<p>
			<label>密&#12288;码<input type="text" placeholder="请输入密码"></label>
		</p>
		<p>	
			<a v-on:click="remeberPwd"><i v-bind:class="{'icon':true,'icon-checked':checked}"></i>记住密码</a>
			<a href="javascript:void(0)" v-on:click="fastRegister">快速注册</a>
		</p>
		
		<p>
			<button>点击登录</button>
		</p>

		<p>
			<a href="javascript:void(0)">忘记密码?</a>
		</p>

		<p>
			<label>-第三方登录-</label>
		</p>

		<p>
			<ul>
				<li>
					<img src="~@/assets/images/icon/QQ.png" alt="">
					<span>qq</span>
				</li>
				<li>
					<img src="~@/assets/images/icon/weixin.png" alt="">
					<span>微信</span>
				</li>
				<li>
					<img src="~@/assets/images/icon/weibo.png" alt="">
					<span>微博</span>
				</li>
			</ul>
		</p>
	</div>
</template>

<script>
export default {
	props:['registerTitle','isLoginShow','isRegisterShow'],
	data() {
		return {
			msg:'个人注册',
			isFlag:true,
			checked:false
		}
	},

	methods:{
		fastRegister:function() {
			this.$emit('change',this.msg)
			this.$emit('holdShow',this.isFlag)
		},

		remeberPwd:function() {
			this.checked = !this.checked;
		}
	}
}
</script>

<style lang="less">
	@import './login.less';
</style>