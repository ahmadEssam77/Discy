<template>
  <Navbar />
  <div class="container">
    <div class="row">
      <!-- Left -->
      <div class="col-md-2 offset-1">
        <Leftside />
      </div>
      <!-- Middle -->
      <div class="col-md-6">
        <Home />
      </div>
      <!-- Right -->
      <div class="col-md-2">
        <Rightside />
        <Questionsinsights />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Rightside from "./components/Rightside.vue";
import Questionsinsights from "./components/Questionsinsights.vue";
import Home from "./components/Home.vue";
import Leftside from "./components/Leftside.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Rightside,
    Questionsinsights,
    Home,
    Leftside,
  },
};
</script>

<style>
@import "./assets/css/variables.css";
body {
  background-color: var(--main-bg-color);
}
</style>
