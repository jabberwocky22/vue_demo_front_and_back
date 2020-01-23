
<template>
  <div>
    <h1>Create new Du Information</h1>
    <form @submit.prevent="addDu">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>DuID:</label>
            <input type="text" class="form-control" v-model="du.DuID" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>SiteID:</label>
            <input type="text" class="form-control" v-model="du.SiteID" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>SiteName:</label>
            <input type="text" class="form-control" v-model="du.SiteName" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Programm:</label>
            <input type="text" class="form-control" v-model="du.Programm" />
          </div>
        </div>
      </div>
      <br />
      <div class="form-group">
        <button class="btn btn-primary">Create</button>
      </div>
    </form>
  </div>
</template>


<script>
export default {
  name: "du-creation",
  data() {
    return {
      du: {}
    };
  },
  methods: {
    addDu() {
      let uri = "http://localhost:4000/duinfo/add";
      this.axios
        .post(uri, this.du)
        .then(res => {
          this.$router.push({ name: "Duinfo" });
        })
        .catch(err => {
          console.warn(err.response);
        });
    }
  }
};
</script>