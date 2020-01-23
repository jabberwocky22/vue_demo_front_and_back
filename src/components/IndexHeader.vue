<template>
  <div class="panel panel-default">
    <div class="row">
      <h2 class="col-md-10 panel-heading">{{indexName}}</h2>
      <div class="col-md-2">
        <router-link :to="{ name: url }" class="btn btn-primary">Create new {{indexName}}</router-link>
      </div>
    </div>
    <br />
  
  </div>
</template>

<script>
export default {
  name: "indexHeader",
  props: ["indexName", "url"]
};
</script>
