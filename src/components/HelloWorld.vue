<template>
  <div style="text-align: center;">
      <h1>{{msg}}</h1>
      <button @click="clickMe">戳我一下</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your New Project'
    }
  },
  props:['MsgFromFather'],
  methods: {
    clickMe:function() {
        // console.log(this.MsgFromFather)
        this.$emit('child-tell-me-sth',this.msg)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
