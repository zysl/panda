<template>
	<div id="login" class="login">
		<p>
			<label>登录名<input type="text" placeholder="请输入登录名/手机号码" @blur="blurValid('username')" v-model="username"></label><em>{{isUser}}</em>
		</p>
		<p>
			<label>密&#12288;码<input type="text" placeholder="请输入密码"  @blur="blurValid('password')" v-model="password"></label><em>{{isPwd}}</em>
		</p>
		<p>	
			<a v-on:click="remeberPwd"><i v-bind:class="{'icon':true,'icon-checked':checked}"></i>记住密码</a>
			<a href="javascript:void(0)" v-on:click="fastRegister">快速注册</a>
		</p>
		
		<p>
			<button @click="submitLogin">点击登录</button>
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
	data() {
		return {
			msg:'个人注册',
			isFlag:true,
			checked:false,
			isUser:'',
			isPwd:'',
			username:'',
			password:'',
			isUserFlag:false,
			isPsdFlag:false,
			account:1
		}
	},
	methods:{
		fastRegister:function() {
			this.$emit('change',this.msg)
			this.$emit('holdShow',this.isFlag)
		},

		remeberPwd:function() {
			this.checked = !this.checked;
		},	

		/**
		 * [blurValid 验证身份信息]
		 * @param  {[type]} type [验证类型]
		 * @return {[type]}      [true/false]
		 */
		blurValid:function(type) {

			//输入登录名验证
			if(type == 'username') {
				if(this.username == '') {
					this.isUser = '请输入登录名';
					this.isUserFlag = false
				}else {
					if(this.username != '18375338537') {
						this.isUser = '登录名输入有误';
						this.isUserFlag = false
					}else {
						this.isUser = '';
						this.isUserFlag = true
					}
				}
			}else {

				//输入密码验证
				if(this.password == '') {
					this.isPwd = '请输入密码';
					this.isPsdFlag = false
				}else {
					if(this.password != '123456') {

						//输入次数验证
						if(this.account == 4) {
							this.isPwd = '已经输入超过3次，请重新修改密码';
						}else {
							this.isPwd = '密码不正确，请重新输入';
							this.isPsdFlag = false;
							this.account++;
						}
						
					}else {
						this.isPwd = '';
						this.isPsdFlag = true
					}
				}
			}
		},

		submitLogin:function() {
			if(this.isUserFlag != true || this.isPsdFlag != true) {
				alert('请检查登录信息');
			}else {

			}
		}
	}
}
</script>

<style lang="less">
	@import './login.less';
</style>