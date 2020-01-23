<template>
  <div class="">
  <md-card class="md-card-example">
    <md-card-area md-inset>
      <md-card-media md-ratio="16:9">
        <img src="../assets/card-example.jpg" alt="Coffee House">
      </md-card-media>

      <md-card-header>
        <h2 class="md-title">Coffee House</h2>
        <div class="md-subhead">
            <md-icon>location_on</md-icon>
          <span>Chatswood</span>
        </div>
      </md-card-header>

      <md-card-content>
        Illy Coffee served with a complimentary Leonidas Belgian Chocolate with all beverages.
      </md-card-content>
    </md-card-area>

    <md-card-content>
      <h2 class="md-subheading">Target time</h2>
      <div class="card-reservation">
        <md-icon>access_time</md-icon>
        <div class="md-button-group">
          <md-button>5:30PM</md-button>
          <md-button>3 hours remaining</md-button>
        </div>
      </div>
    </md-card-content>

    <md-card-actions>
      <md-button class="md-primary">Reserve</md-button>
    </md-card-actions>
  </md-card>
    <div class="col-md-8">
      <div class="card card-default">
        <div class="card-header">Home Component</div>

        <div class="card-body">I'm the Home Component component.</div>


      </div>
    </div>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
};
</script>
<style>
.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}

.md-card-example .md-subhead .md-icon {
  width: 16px;
  min-width: 16px;
  height: 16px;
  font-size: 16px !important;
}
.md-card-example .md-subhead span {
  vertical-align: middle;
}
.md-card-example .card-reservation {
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.md-card-example .card-reservation .md-icon {
  margin: 8px;
}
.md-card-example .md-button-group {
  display: flex;
}
.md-card-example .md-button-group .md-button {
  min-width: 60px;
  border-radius: 2px;
}
</style>
