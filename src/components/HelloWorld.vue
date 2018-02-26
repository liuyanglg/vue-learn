<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button @click="add()">点击{{counter}}</el-button>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'

const http = axios.create({
  baseURL: 'http://localhost:8081',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With',
    'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
  },
})


export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      counter: 0
    }
  },

  methods: {
    add: function () {
      this.counter++
      let params={
        username:'admin',
        password:'admin'
      }
      console.log(this.counter)
      http.post('/user/login',params)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
