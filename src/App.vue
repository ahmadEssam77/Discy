<template>
  <Navbar />
  <Createnewaccount />
  <div class="container">
    <div class="row">
      <!-- Left -->
      <div class="col-md-2">
        <Leftside />
      </div>
      <!-- Middle -->
      <div class="col-md-7">
        <!-- <Home /> -->
        <router-view></router-view>
      </div>
      <!-- Right -->
      <div class="col-md-3">
        <Rightside />
        <!-- <Relatedquestions /> -->
      </div>
    </div>
  </div>
  <!-- <Upbutton /> -->
  <!-- Footer -->
  <!-- <Footer /> -->
</template>

<script>
import Createnewaccount from "./components/Createnewaccount.vue";
import Navbar from "./components/Navbar.vue";
import Rightside from "./components/Rightside.vue";
// import Home from "./components/Home.vue";
import Leftside from "./components/Leftside.vue";
// import Relatedquestions from "./components/Relatedquestions.vue";
// import Upbutton from "./components/Upbutton.vue";
// import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Rightside,
    // Home,
    Leftside,
    // Relatedquestions,
    // Upbutton,
    Createnewaccount,
    // Footer,
  },
};
</script>

<style>
@import "./assets/css/variables.css";
@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&family=Roboto:wght@400;700&display=swap");

body {
  background-color: var(--main-bg-color);
}

.container {
  max-width: 1200px !important;
}
</style>
