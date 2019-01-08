<template>
    <div id="app">
        <p class="form-title">登录表单</p>
        <ysl-login></ysl-login>
        
        <!-- <router-view/> -->
    </div>
</template>

<script>
import YslLogin from '@/components/login/YslLogin'

export default {
    components:{
        YslLogin
    },

    data() {
        return {
        }
    }
}
</script>

<style  lang="less">
    @import './app.less';
</style>
