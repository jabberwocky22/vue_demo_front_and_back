<template>
    <md-card class="md-card-example">
      <md-card-area md-inset>
        <md-card-media md-ratio="16:9">
          <img src="../assets/card-example.jpg" alt="Coffee House" />
        </md-card-media>

        <md-card-header>
          <h2 class="md-title">{{title}}</h2>
          <div class="md-subhead">
            <md-icon>location_on</md-icon>
            <span>{{location}}</span>
          </div>
        </md-card-header>

        <md-card-content>{{content}}</md-card-content>
      </md-card-area>

      <md-card-content>
        <h2 class="md-subheading">Target time</h2>
        <div class="card-reservation">
          <md-icon>access_time</md-icon>
          <div class="md-button-group">
            <md-button>{{target_time}}</md-button>
            <md-button>X hours remaining</md-button>
          </div>
        </div>
      </md-card-content>

      <md-card-actions>
        <!-- <md-button class="md-primary">Reserve</md-button> -->
        <md-button class="md-primary" @click.prevent="deletePost(_id)">Delete</md-button>
      </md-card-actions>
    </md-card>
</template>

<script>
export default {
  name: "card_component",
  props: ["title", "location", "content", "target_time", "_id"],
  methods: {
    deletePost(id) {
      let uri = `http://localhost:4000/todo_cardRoute/delete/${id}`;
      this.axios.delete(uri).then(() => {
        console.log(id);
        this.$emit("deleteToDoCard", id);
        // this.todo_cards.splice(this.todo_cards.indexOf(id), 1);
      });
    }
  }
};
</script>
