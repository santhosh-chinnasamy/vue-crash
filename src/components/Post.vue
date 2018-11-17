<template>
    <div class="container">
        <table class="table table-stripped mt-4">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">title</th>
      <th scope="col">body</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="post in posts" :key="post.id">
      <th>{{post.id}}</th>
      <td>{{post.title}}</td>
      <td>{{post.body}}</td>
    </tr>
  </tbody>
</table>

<!-- <div class="container-fluid">
 <div class="row">
    <div class="col-md-12">{{post.body}}</div>
</div> 
<br>
<div class="row" v-for="post in posts" :key="post.id">
  <div class="col-sm-12">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{post.title}}</h5>
        <p class="card-text">{{post.body}}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <br>
  </div>
</div>
</div> -->


</div> 

</template>

<script>
import axios from "axios";
export default {
  name: "PostExample",
  data() {
    return {
      posts: []
    };
  },

  created() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(posts => {
      this.posts = posts.data;
      // console.log(this.posts);
    });
  }
};
</script>

<style>
</style>
