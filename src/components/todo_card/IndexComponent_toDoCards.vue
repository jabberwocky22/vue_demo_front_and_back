// IndexComponent_toDoCards.vue

<template>
  <div class="panel panel-default">
    <indexHeader indexName="Todo Cards" url="todo_card_create"></indexHeader>
    <div class="cardPanel">
      <cardComponent
        class="item col-sm-12"
        v-for="todo_card in todo_cards"
        :key="todo_card._id"
        v-bind:title="todo_card.title"
        v-bind:location="todo_card.location"
        v-bind:content="todo_card.content"
        v-bind:target_time="todo_card.target_time"
        v-bind:_id="todo_card._id"
        @deleteToDoCard="refreshPage"
      ></cardComponent>
    </div>
  </div>
</template>

<script>
import cardComponent from "../Card_component.vue";
import indexHeader from "../IndexHeader.vue";

export default {
  components: {
    cardComponent,
    indexHeader
  },
  data() {
    return {
      todo_cards: []
    };
  },
  created() {
    let uri = "http://localhost:4000/todo_cardRoute";
    this.axios.get(uri).then(response => {
      this.todo_cards = response.data;
      for (let i = 0; i < this.todo_cards.length; i++) {
        const thisDate = new Date(this.todo_cards[i].target_time);
        this.todo_cards[i].target_time =
          thisDate.getFullYear().toString() +
          "-" +
          (thisDate.getMonth() + 1).toString() +
          "-" +
          thisDate.getDate().toString();
      }
    });
  },
  methods: {
    deletePost(id) {
      let uri = `http://localhost:4000/todo_cardRoute/delete/${id}`;
      this.axios.delete(uri).then(response => {
        // this.todo_cards.splice(this.todo_cards.indexOf(id), 1);
        // this.$router.push({ name: "todo_card" });
      });
    },
    refreshPage(variable) {
      console.log("called");
      this.todo_cards.splice(this.todo_cards.indexOf(variable), 1);
    }
  }
};
</script>

<style>
.cardPanel{
  column-count: 4;
}
</style>