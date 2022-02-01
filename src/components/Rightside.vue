<template>
  <section>
    <div class="text-center ask-a-question">
      <button @click="clickSignUp">Ask A Question</button>
    </div>
    <!-- Ask a question -->
    <div class="parent-bg-3" @click="closeSignUp">
      <div class="first-wrapper" @click="stopPro($event)">
        <i @click="closeSignUp" class="fas fa-times close-sign"></i>
        <div class="wrapper">
          <div class="login-right">
            <div class="inner">
              <div class="input-wrapper">
                <label for=""
                  >Username or email <span class="asstrict">*</span></label
                >
                <input type="text" name="" />
                <i class="fas fa-user"></i>
              </div>
              <div class="input-wrapper">
                <label for="">Password <span class="asstrict">*</span></label>
                <input type="password" name="" />
                <i class="fas fa-unlock"></i>
              </div>
              <div class="reminder-wrapper">
                <div>
                  <!-- <input type="checkbox" class="checkbox" name="" checked /> -->
                  <div class="checkbox"></div>
                  <label for="">Remember Me!</label>
                </div>
                <div>
                  <a href="">Forget password?</a>
                </div>
              </div>
              <button>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Questionsinsights />
    <Topmembers />
    <Trendingtags />
  </section>
</template>

<script>
import Questionsinsights from "./Questionsinsights.vue";
import Topmembers from "./Topmembers.vue";
import Trendingtags from "./Trendingtags.vue";
import $ from "jquery";

export default {
  name: "Rightside",
  methods: {
    closeSignUp() {
      $(".parent-bg-3").fadeOut(400, function () {
        $(".first-wrapper").animate({ top: "-1000px" });
      });
    },
    clickSignUp() {
      $(".parent-bg-3").fadeIn(0, function () {
        $(".first-wrapper").animate({ top: "0px" });
      });
    },
    stopPro(e) {
      e.stopPropagation();
    },
  },
  components: {
    Questionsinsights,
    Topmembers,
    Trendingtags,
  },
};
</script>

<style scoped>
section {
  position: sticky;
  top: 10px;
}

.ask-a-question {
  background-color: var(--white-text);
  border-bottom: 2px solid var(--bottom-separator-color);
  padding: 18px;
}

button {
  border-radius: 2px;
  padding: 9px 12px 9px;
  color: var(--white-text);
  border: none;
  background-color: var(--main-blue-bg-text-color);
  transition: 0.5s;
  font-size: 14px;
  font-weight: 700;
  font-family: var(--roboto-font-family);
  transition: 0.5s;
  letter-spacing: 0.8px;
  width: 230px;
  margin-bottom: 2.5px;
}

button:hover {
  background-color: var(--btn-bg-gray);
}


/* PopUp */
.parent-bg-3 {
  background-color: rgba(39, 41, 48, 0.95);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 333;
  display: none;
}

.parent-bg-3 .first-wrapper {
  background-color: var(--white-text);
  width: 25%;
  margin: 90px auto;
  border-radius: 3px;
  position: relative;
  top: -500px;
  padding-top: 55px;
}
</style>
