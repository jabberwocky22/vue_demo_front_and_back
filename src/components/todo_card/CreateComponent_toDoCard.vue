
<template>
  <div>
    <h1>Create new todo card</h1>
    <form @submit.prevent="addDu">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Ttile:</label>
            <input type="text" class="form-control" v-model="todo_card.title" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Location:</label>
            <input type="text" class="form-control" v-model="todo_card.location" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Content:</label>
            <input type="text" class="form-control" v-model="todo_card.content" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Target time:</label>
            <h3>Date</h3>
            <md-datepicker v-model="todo_card.target_time" />
            <!-- <div class="value">value: {{todo_card.target_time}}</div> -->
          </div>
        </div>
      </div>
      <input type="file" @change="uploadImage" name="image" id="image" accept="image/*" />
      <br />
      <div class="form-group">
        <button class="btn btn-primary">Create</button>
      </div>
    </form>
  </div>
</template>


<script>
export default {
  name: "todo_card_creation",
  data() {
    return {
      todo_card: {},
      imagePath: "",
      productSpect: ""
    };
  },
  methods: {
    addDu() {
      // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      let data = {
        imagePath: this.imagePath,
        productSpect: this.productSpect
      };

      this.axios.post("/path/to/save", data);
      //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      let uri = "http://localhost:4000/todo_cardRoute/add";
      this.axios
        .post(uri, this.todo_card)
        .then(res => {
          this.$router.push({ name: "todo_card" });
        })
        .catch(err => {
          console.warn(err.response);
        });
    },
    uploadImage(e) {
      let img = e.target.files[0];
      let fd = new FormData();

      fd.append("image", img);

      this.axios.post("/upload-image", fd).then(resp => {
        this.imagePath = resp.data.path;
      });
    }
  }
};
</script>