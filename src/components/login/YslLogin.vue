<template>
	<div id="login" class="login">
		<p>
			<label>登录名<input type="text" placeholder="请输入登录名/手机号码"></label>
		</p>
		<p>
			<label>密&#12288;码<input type="text" placeholder="请输入密码"></label>
		</p>
		<p>	
			<a><i class="icon icon-checked"></i>记住密码</a>
			<a href="javascript:void(0)">快速注册</a>
		</p>
		
		<p>
			<button>点击登录</button>
		</p>

		<p>
			<label>--------▲第三方登录▲--------</label>
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

}
</script>

<style lang="less">
	@import './login.less';
</style>