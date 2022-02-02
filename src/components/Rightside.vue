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
                <div class="my-alert">
                  <p>
                    <i class="fas fa-times khara-x"></i> You must login to ask question.
                  </p>
                </div>
                <label for=""
                  >Username or email <span class="asstrict">*</span></label
                >
                <input type="text" name="" />
                <i class="fas fa-user user"></i>
              </div>
              <div class="input-wrapper">
                <label for="">Password <span class="asstrict">*</span></label>
                <input type="password" name="" />
                <i class="fas fa-unlock unlock"></i>
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
        <div class="need-account">
          <p>Need An Account, <a href="#">Sign Up Here</a></p>
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

.ask-a-question button {
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
  /* background-color: var(--white-text); */
  width: 25%;
  margin: 0px auto;
  border-radius: 3px;
  position: relative;
  top: -500px;
  padding-top: 55px;
}

.parent-bg-3 .close-sign {
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: end;
  padding-bottom: 15px;
}

.parent-bg-3 .login-right {
  background-color: var(--white-text);
  border-radius: 3px;
  padding-top: 25px;
  padding-bottom: 25px;
}

.parent-bg-3 .login-right .inner {
  padding: 5px 30px 5px;
}

.parent-bg-3 .login-right button {
  background-color: var(--main-blue-bg-text-color);
  width: 100%;
  border: none;
  border-radius: 3px;
  padding: 10px;
  font-family: var(--roboto-font-family);
  letter-spacing: 0.8px;
  font-size: var(--font-14);
  transition: 0.5s;
  font-weight: var(--weight-700);
  color: var(--white-text);
  margin-top: 11px;
}

.parent-bg-3 .login-right button:hover {
  background-color: var(--footer-text-color);
}

.parent-bg-3 .input-wrapper {
  margin-bottom: 16px;
  position: relative;
}

.parent-bg-3 .input-wrapper .my-alert {
  background-color: #fee6e3;
  padding: 20px 0px;
  margin-bottom: 20px;
}

.parent-bg-3 .input-wrapper .my-alert p {
  color: #ec3827;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.8px;
  font-family: var(--roboto-font-family);
  margin: 0px;
}

.parent-bg-3 .input-wrapper .khara-x {
  font-size: 13px;
  padding-right: 10px;
  padding-left: 15px;
}

.parent-bg-3 .input-wrapper .user {
  color: var(--btn-bg-gray);
  left: 10px;
  top: 86%;
  transform: translateY(-50%);
  font-size: 13px;
  position: absolute;
}

.parent-bg-3 .input-wrapper .unlock {
  color: var(--btn-bg-gray);
  left: 10px;
  top: 70%;
  transform: translateY(-50%);
  font-size: 13px;
  position: absolute;
}

.parent-bg-3 .input-wrapper label,
.parent-bg-3 .reminder-wrapper label {
  color: var(--btn-bg-gray);
  font-family: var(--arial-font-family);
  font-size: 12px;
  font-weight: var(--weight-400);
}

.parent-bg-3 .reminder-wrapper .checkbox {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 1px solid #ccc;
  border-radius: 2px;
  margin-right: 10px;
  position: relative;
  top: 3px;
  cursor: pointer;
}

.parent-bg-3 .reminder-wrapper .checkbox::before {
  content: "\2713";
  font-size: 14px;
  height: 17px;
  display: block;
  position: absolute;
  top: -3px;
  right: 2px;
  text-align: center;
  font-family: var(--roboto-font-family);
  font-weight: var(--weight-700);
}

.parent-bg-3 .reminder-wrapper a {
  font-family: var(--arial-font-family);
  font-size: var(--font-12);
  font-weight: var(--weight-400);
  color: var(--navbar-bg);
  text-decoration: none;
  transition: 0.5s;
}

.parent-bg-3 .reminder-wrapper a:hover {
  color: var(--main-blue-bg-text-color);
}

.parent-bg-3 .input-wrapper input {
  background-color: var(--white-text);
  border: 1px solid var(--separator-color);
  border-radius: 2px;
  padding-left: 28px;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 100%;
}

.parent-bg-3 .reminder-wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.parent-bg-3 .asstrict {
  color: red;
}

.need-account {
  position: relative;
  top: 13px;
  text-align: center;
}

.need-account p,
.need-account a {
  font-family: var(--roboto-font-family);
  font-weight: var(--weight-700);
  font-size: 13px;
  color: var(--white-text);
}

.need-account a {
  text-decoration: none;
  color: var(--main-blue-bg-text-color);
}

.need-account a:hover {
  color: var(--white-text);
}
</style>
