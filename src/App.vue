<template>
    <div id="app">
        <p class="form-title">个人登录</p>
        <ysl-login></ysl-login>
        <p class="form-bottom">&copy;南京黎阳工作室{{newYear}}-{{endYear}}</p>
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
            newYear:'',
            endYear:''
        }
    },

    methods:{
        getYear:function() {
            const _t = new Date(),
            _y = _t.getFullYear();

            this.newYear = Number(_y) - 1;

            this.endYear = Number(_y) + 2;
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
    