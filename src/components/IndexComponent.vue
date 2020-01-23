// IndexComponent.vue

<template>
  <div class="panel panel-default">
    <!-- <div class="row">
      <h2 class="col-md-10 panel-heading">Posts</h2>
      <div class="col-md-2">
        <router-link :to="{ name: 'create' }" class="btn btn-primary">Create Post</router-link>
      </div>
    </div>
    <br /> -->

    <indexHeader  indexName = 'Post' url = 'create'></indexHeader>

    <table class="table table-hover">
      <thead class="thead-dark">
        <tr>
          <th>Title</th>
          <th>Body</th>
          <th>Actions</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post._id">
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>
          <td>
            <router-link :to="{name: 'edit', params: { id: post._id }}" class="btn btn-primary">Edit</router-link>
          </td>
          <td>
            <button class="btn btn-danger" @click.prevent="deletePost(post._id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>


import indexHeader from './IndexHeader.vue';

export default {
  components:{
    indexHeader
  },
  data() {
    return {
      posts: []
    };
  },
  created() {
    let uri = "http://localhost:4000/posts";
    this.axios.get(uri).then(response => {
      this.posts = response.data;
    });
  },
  methods: {
    deletePost(id) {
      let uri = `http://localhost:4000/posts/delete/${id}`;
      this.axios.delete(uri).then(response => {
        this.posts.splice(this.posts.indexOf(id), 1);
      });
    }
  }
};
</script>