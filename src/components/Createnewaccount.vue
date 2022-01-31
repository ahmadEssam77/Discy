<template>
  <div class="add-search d-flex align-items-center justify-content-between">
    <div class="left-search">
      <a href="#"><i class="fas fa-search icon-search"></i> Search</a>
    </div>
    <div class="right-question">
      <a href="#"><i class="fas fa-question-circle"></i> Ask A Question</a>
    </div>
  </div>
  <div class="create-account">
    <div
      class="container d-flex justify-content-between align-items-center change-dir"
    >
      <div class="left w-50">
        <h3 class="">Share & grow the world's knowledge!</h3>
        <p>
          We want to connect the people who have knowledge to the people who
          need it, to bring together people with different perspectives so they
          can understand each other better, and to empower everyone to share
          their knowledge.
        </p>
      </div>
      <div class="right">
        <button @click="clickSignUp">Create A New Account</button>
      </div>
    </div>

    <!-- No Parent bg 2 pop up I wrote it only once in Navbar -->
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "Createnewaccount",
  methods: {
    closeSignUp() {
      $(".parent-bg-2").fadeOut(400, function () {
        $(".first-wrapper").animate({ top: "-1000px" });
      });
    },
    clickSignUp() {
      $(".parent-bg-2").fadeIn(0, function () {
        $(".first-wrapper").animate({ top: "0px" });
      });
    },
    stopPro(e) {
      e.stopPropagation();
    },
  }
};
</script>

<style scoped>
.create-account {
  background-image: url(../assets/images/action.png);
  background-size: cover;
  padding-top: 56px;
  padding-bottom: 29px;
}

.left,
.right {
  font-family: var(--roboto-font-family);
}

.right {
  margin-bottom: 23px;
}

h3 {
  font-size: 22px;
  color: var(--white-text);
  font-family: var(--roboto-font-family);
  font-weight: 700;
  padding-bottom: 15px;
}

p {
  color: var(--questions-bg-widget);
  font-family: var(--roboto-font-family);
  line-height: 26px;
  margin-bottom: 20px;
}

button {
  border-radius: 2px;
  /* margin-right: 20px; */
  padding: 8px 40px;
  color: var(--white-text);
  border: none;
  background-color: var(--main-blue-bg-text-color);
  transition: 0.5s;
  font-size: 14px;
  font-weight: 700;
  transition: 0.5s;
  letter-spacing: 0.8px;
  width: 270px;
}

button:hover {
  background-color: var(--btn-bg-gray);
}

.add-search {
  display: none !important;
}
</style>
