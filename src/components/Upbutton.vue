<template>
  <div>
    <button @click="goToTop" class="to-top">
      <i class="fas fa-chevron-up"></i>
    </button>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "Upbutton",
  methods: {
    goToTop() {
      window.scrollTo(0, 0);
      // alert("I'm working");
    },
  },
  created() {
    window.onscroll = function () {
      if (window.scrollY > 100) {
        $(".to-top").fadeIn(500);
      } else {
        $(".to-top").fadeOut(500);
      }
    };
  },
};
</script>

<style scoped>
.to-top {
  position: fixed;
  bottom: 2.7%;
  right: 1.3%;
  /* right: -5%; */
  color: #fff;
  background-color: var(--main-blue-bg-text-color);
  border: 1px solid var(--main-blue-bg-text-color);
  border-radius: 2px;
  padding: 7px 12px;
  display: none;
}

.to-top:hover {
  transform: translateY(-7px);
  background-color: black;
  border-color: black;
}

.to-top i {
  font-weight: var(--weight-400);
}

@media screen and (max-width: 768px) {
  .to-top {
    right: 4.5%;
  }
}
</style>
