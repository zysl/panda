<template>
    <div id="app">
        <hello-world MsgFromFather="This is your father" v-on:child-tell-me-sth="listenToMyBoy"/>
        <ul>
            <h1>{{isVal}}</h1>
            <input type="text" v-model="isVal" :class="{isli:true,isInput:true}" v-on:keyup.enter="addNewItem">
            <li v-for="item in items" v-bind:class="{isli:true,isUnder:item.isFinished}" v-on:click="switchStatus(item)">{{item.name}} | {{item.sex}}</li>
        </ul>

        <p>child tell me : {{ childWords }}</p>
        <!-- <router-view/> -->
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Store from './localStore'

console.log(Store)
export default {
    components:{
        HelloWorld
    },
    data() {
        return {
          items:Store.fetch(),
          isVal:'',
          childWords:''
        }
    },
    methods:{
        switchStatus:function(item) {
            item.isFinished = !item.isFinished
        },

        addNewItem:function() {
            this.items.push({
                name:this.isVal,
                sex:'男',
                isFinished:true
            })
        },

        listenToMyBoy:function(msg) {
            this.childWords = msg
        }
    },

    watch:{
        items:{
            handler:function (items){
                Store.save(items)
            },
            deep:true
        }
    }
}
</script>

<style scoped>
h1 {
    text-align: center;
}

ul li {
    list-style: none;
}

.isInput {
    position: relative;
    margin-left: 50%;
    left: -100px;
    width: 200px;
    height: 35px;
    border-radius: 3px;
    border:1px solid #ddd;
}

.isInput:focus {
    outline: none;
}

.isli {
    text-align: center;
    cursor: pointer;
}

.isUnder {
    text-align: center;
    text-decoration: underline;
    color: #ff4400;
}
</style>
