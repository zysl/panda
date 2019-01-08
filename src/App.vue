<template>
    <div id="app">
        <p class="form-title">{{registerTitle}}</p>
        <ysl-login v-show="isLoginShow" v-bind:register="registerTitle" v-on:change="changeTitle" v-on:holdShow="showHide"></ysl-login>
        <ysl-register v-show="isRegisterShow"></ysl-register>
        <p class="form-bottom">&copy;南京黎阳工作室{{newYear}}-{{endYear}}</p>
        <!-- <router-view/> -->
    </div>
</template>

<script>
import YslLogin from '@/components/login/YslLogin'
import YslRegister from '@/components/register/YslRegister'

export default {
    components:{
        YslLogin,
        YslRegister
    },

    data() {
        return {
            registerTitle:"个人登录",
            newYear:'',
            endYear:'',
            isLoginShow:true,
            isRegisterShow:false
        }
    },

    methods:{

        //获取首页底部时间
        getYear:function() {
            const _t = new Date(),
            _y = _t.getFullYear();
            this.newYear = Number(_y) - 1;
            this.endYear = Number(_y) + 2;
        },

        //修改父组件的头部信息
        changeTitle:function(msg) {
            this.registerTitle = msg;
        },
        
        showHide:function(flag) {
            this.isLoginShow = !flag;
            this.isRegisterShow = flag;
        }
    },

    mounted(){   
        this.getYear();
    }
}
</script>

<style  lang="less">
    @import './app.less';
</style>
    