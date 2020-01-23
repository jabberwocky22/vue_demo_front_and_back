// IndexComponent.vue

<template>
  <div>
    <!-- <h1>Du Info</h1>
    <div class="row">
      <div class="col-md-10"></div>
      <div class="col-md-2">
        <router-link :to="{ name: 'createDu' }" class="btn btn-primary">Create new Du</router-link>
      </div>
    </div> -->
    
    <indexHeader url = 'createDu' indexName = 'Du'/>

    <table class="table table-hover">
      <thead class="thead-dark">
        <tr>
          <th>DU ID</th>
          <th>Site ID</th>
          <th>Site Name</th>
          <th>Programm</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="du in dus" :key="du._id">
          <td>{{ du.DuID }}</td>
          <td>{{ du.SiteID }}</td>
          <td>{{ du.SiteName }}</td>
          <td>{{ du.Programm }}</td>
          <!-- <td>
            <router-link :to="{name: 'edit', params: { id: post._id }}" class="btn btn-primary">Edit</router-link>
          </td>-->
          <td>
            <button class="btn btn-danger" @click.prevent="deletePost(du._id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- <du-creation title="推荐" /> -->
  </div>
</template>

<script>
import indexHeader from "./IndexHeader.vue";

export default {
  components: {
    indexHeader
  },
  data() {
    return {
      dus: []
    };
  },
  created() {
    let uri = "http://localhost:4000/duinfo";
    this.axios.get(uri).then(response => {
      this.dus = response.data;
    });
  },
  methods: {
    deletePost(id) {
      let uri = `http://localhost:4000/duinfo/delete/${id}`;
      this.axios.delete(uri).then(response => {
        this.dus.splice(this.dus.indexOf(id), 1);
      });
    }
  }
};
</script>