<template>
  <div>
    <div class="add-search d-flex align-items-center justify-content-between">
      <div class="left-search">
        <a href="#"><i class="fas fa-search icon-search"></i> Search</a>
      </div>
      <div class="right-question">
        <a href="#"><i class="fas fa-question-circle"></i> Ask A Question</a>
      </div>
    </div>
    <div class="create-account">
      <div class="container">
        <div
          class="d-flex justify-content-between align-items-center change-dir"
        >
          <div class="left">
            <h3 class="">Share & grow the world's knowledge!</h3>
            <p>
              We want to connect the people who have knowledge to the people who
              need it, to bring together people with different perspectives so
              they can understand each other better, and to empower everyone to
              share their knowledge.
            </p>
          </div>
          <div class="right">
            <button @click="clickSignUp">Create A New Account</button>
          </div>
        </div>
      </div>

      <!-- No Parent bg 2 pop up I wrote it only once in Navbar -->

      <div class="parent-bg-2" @click="closeSignUp">
        <div class="first-wrapper" @click="stopPro($event)">
          <i @click="closeSignUp" class="fas fa-times close-sign"></i>
          <div class="wrapper">
            <div class="sign-in-left">
              <div class="inner">
                <h2>Sign Up</h2>
                <p>
                  Login to our social questions & Answers Engine to ask
                  questions answer people’s questions & connect with other
                  people.
                </p>
                <button>Have An Account? Sign In</button>
              </div>
            </div>
            <div class="login-right">
              <div class="inner">
                <div class="input-wrapper">
                  <label for="">Username<span class="asstrict">*</span></label>
                  <input type="text" name="" />
                  <i class="fas fa-user"></i>
                </div>
                <div class="input-wrapper">
                  <label for="">Email <span class="asstrict">*</span></label>
                  <input type="text" name="" />
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="input-wrapper">
                  <label for="">Password <span class="asstrict">*</span></label>
                  <input type="password" name="" />
                  <i class="fas fa-unlock"></i>
                </div>
                <div class="input-wrapper">
                  <label for=""
                    >Confirm Password <span class="asstrict">*</span></label
                  >
                  <input type="password" name="" />
                  <i class="fas fa-lock"></i>
                </div>
                <div class="reminder-wrapper">
                  <div>
                    <!-- <input type="checkbox" class="checkbox" name="" checked /> -->
                    <div class="checkbox"></div>
                    <label for=""
                      >By registering, you agree to the
                      <a href="#">Terms of Service</a> and
                      <a href="#">Privacy Policy .</a>
                      <span class="asstrict">*</span></label
                    >
                  </div>
                </div>
                <button>Signup</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
  },
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

.left {
  width: 50%;
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

/* SignUPPPPPPPPPPPPPPPPPPPPPPPPPP */

.parent-bg-2 {
  background-color: rgba(39, 41, 48, 0.95);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 333;
  display: none;
}

.parent-bg-2 .close-sign {
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: end;
  padding-bottom: 15px;
}

.parent-bg-2 .first-wrapper {
  width: 50.6%;
  margin: 0 auto;
  border-radius: 3px;
  position: relative;
  top: -500px;
  padding-top: 55px;
}

.parent-bg-2 .wrapper {
  display: flex;
  border-radius: 3px;
}

.parent-bg-2 .sign-in-left,
.parent-bg-2 .login-right {
  width: 50%;
}

.parent-bg-2 .sign-in-left {
  background-image: linear-gradient(
      to bottom,
      rgba(45, 111, 247, 0.52),
      rgba(45, 111, 247, 0.73)
    ),
    url("../assets/images/signup.png");
  background-size: cover;
  background-position: 100%;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}

.parent-bg-2 .login-right {
  background-color: var(--white-text);
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

.parent-bg-2 .sign-in-left .inner {
  padding: 60px;
}

.parent-bg-2 .login-right .inner {
  padding: 55px 60px;
}

.parent-bg-2 h2 {
  color: var(--white-text);
  font-size: var(--font-24);
  font-family: var(--roboto-font-family);
  font-weight: var(--weight-700);
  margin-bottom: 18px;
}

.parent-bg-2 p {
  color: var(--white-text);
  font-size: var(--font-14);
  font-family: var(--roboto-font-family);
  font-weight: var(--weight-400);
  margin-bottom: 90px;
  line-height: 1.7;
}

.parent-bg-2 .sign-in-left button,
.parent-bg-2 .login-right button {
  background-color: var(--navbar-bg);
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
}

.parent-bg-2 .sign-in-left button {
  margin-top: 190px;
}

.parent-bg-2 .login-right button {
  margin-top: 11px;
  background-color: var(--main-blue-bg-text-color);
  color: var(--white-text);
}

.parent-bg-2 .sign-in-left button:hover {
  background-color: var(--main-blue-bg-text-color);
}

.parent-bg-2 .login-right button:hover {
  background-color: var(--footer-text-color);
}

.parent-bg-2 .input-wrapper {
  margin-bottom: 16px;
  position: relative;
}

.parent-bg-2 .input-wrapper i {
  color: var(--btn-bg-gray);
  left: 10px;
  top: 70%;
  transform: translateY(-50%);
  font-size: 13px;
  position: absolute;
}

/* .parent-bg-2 .reminder-wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
} */

.parent-bg-2 .input-wrapper label,
.parent-bg-2 .reminder-wrapper label {
  color: var(--btn-bg-gray);
  font-family: var(--arial-font-family);
  font-size: 13px;
  font-weight: var(--weight-400);
}

.parent-bg-2 .reminder-wrapper .checkbox {
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

/* .parent-bg-2 .reminder-wrapper .checkbox::before {
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
} */

.parent-bg-2 .reminder-wrapper a {
  font-family: var(--arial-font-family);
  font-size: 13px;
  font-weight: var(--weight-400);
  color: var(--navbar-bg);
  text-decoration: none;
  transition: 0.5s;
}

.parent-bg-2 .reminder-wrapper a:hover {
  color: var(--main-blue-bg-text-color);
}

.parent-bg-2 .input-wrapper input {
  background-color: var(--white-text);
  border: 1px solid var(--separator-color);
  border-radius: 2px;
  padding-left: 28px;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 100%;
}

.parent-bg-2 .asstrict {
  color: red;
}

@media screen and (max-width: 768px) {
  .create-account {
    padding-bottom: 0;
    padding-top: 10px;
  }

  .change-dir {
    flex-direction: column;
    align-items: start !important;
    padding-left: 10px;
    padding-right: 10px;
  }

  .left,
  .right {
    width: 100%;
  }

  .right {
    margin-bottom: 18px;
  }

  .add-search {
    display: flex !important;
    background-color: var(--questions-bg-widget);
    padding: 10px;
    margin-bottom: 10px;
    margin-bottom: 0;
    padding: 17px 10px;
  }

  .add-search a {
    font-size: 14px;
    font-family: var(--roboto-font-family);
    color: var(--navbar-bg);
    text-decoration: none;
    transition: 0.5s;
  }

  .add-search a:hover {
    color: var(--main-blue-bg-text-color);
  }

  .left-search i {
    font-size: 11px;
    margin-right: 2px;
  }
  .right-question i {
    font-size: 13px;
  }

  h3 {
    padding-bottom: 5px;
    padding-top: 5px;
  }

  /* Pop up */
  .parent-bg-2 .first-wrapper {
    width: 90%;
  }

  .parent-bg-2 .login-right {
    width: 100%;
  }

  .parent-bg-2 .login-right .inner {
    padding: 15px;
  }

  .sign-in-left {
    display: none;
  }
}
</style>
