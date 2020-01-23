<template>
  <div class="container col-md-12">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/create" class="nav-link">Create Post</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/index" class="nav-link">Posts</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/duinfo" class="nav-link">Du Info</router-link>
        </li>
        <li class="nav-right-item">

        </li>
      </ul>
    </nav><br />
    <!-- <img  alt="Vue logo" src="./assets/logo.png"></img> -->
    <transition name="slide-fade">

        <router-view class = 'col-md-10 offset-md-1' ></router-view>

    </transition>
  </div>
</template>




<style>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all 0s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

<script>
  export default {
    name: 'app',
  }
</script>
