<template>
  <Navbar />
  <!-- <div class="container"> -->
  <!-- <div class="row g-0"> -->
  <!-- Left -->
  <!-- <div class="col-md-2 offset-1">
        <Leftside />
      </div> -->
  <!-- Middle -->
  <!-- <div class="col-md-6">
        <Home />
      </div> -->
  <!-- Right -->
  <!-- <div class="col-md-2">
        <Rightside />
        <Questionsinsights />
        <Relatedquestions />
      </div>
    </div> -->
  <!-- </div> -->
  <Upbutton />
  <!-- Footer -->
  <!-- <Footer /> -->
</template>

<script>
import Navbar from "./components/Navbar.vue";
// import Rightside from "./components/Rightside.vue";
// import Home from "./components/Home.vue";
// import Questionsinsights from "./components/Questionsinsights.vue";
// import Leftside from "./components/Leftside.vue";
// import Relatedquestions from "./components/Relatedquestions.vue";
import Upbutton from "./components/Upbutton.vue";
// import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    // Rightside,
    // Home,
    // Leftside,
    // Questionsinsights,
    // Relatedquestions,
    Upbutton,
    // Footer,
  },
};
</script>

<style>
@import "./assets/css/variables.css";
body {
  background-color: var(--main-bg-color);
}

.container {
  max-width: 1200px !important;
}
</style>
