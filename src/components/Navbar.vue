<template>
  <div>
    <div class="nav-wrapper">
      <div class="container d-flex">
        <div class="logo">
          <router-link to="/">
            <img src="../assets/images/logo.png" alt="Discy-Logo" />
          </router-link>
        </div>
        <div class="nav d-flex align-items-center justify-content-between">
          <ul class="d-flex list-unstyled">
            <li class="home">
              <router-link
                to="/"
                :class="{ active: checkLi == 1 }"
                @click="activeNavbar(1)"
                >Home</router-link
              >
            </li>
            <li class="about">
              <router-link
                to="about"
                :class="{ active: checkLi == 2 }"
                @click="activeNavbar(2)"
                >About Us</router-link
              >
            </li>
            <li class="blog">
              <router-link
                to=""
                :class="{ active: checkLi == 3 }"
                @click="activeNavbar(3)"
                >Blog</router-link
              >
            </li>
            <li class="contact">
              <router-link
                to="contact"
                :class="{ active: checkLi == 4 }"
                @click="activeNavbar(4)"
                >Contact Us</router-link
              >
            </li>
          </ul>
          <div class="search position-relative">
            <input
              type="search"
              name=""
              id=""
              placeholder="Type Search Words"
            />
            <i class="fas fa-search icon-search"></i>
          </div>
        </div>
        <div class="login">
          <button class="sign-in" @click="clickSignIn">Sign In</button>
          <button class="sign-up" @click="clickSignUp">Sign Up</button>
        </div>
      </div>
      <!-- Sign in pop-up -->
      <div class="parent-bg" @click="close">
        <div class="first-wrapper" @click="stopPro($event)">
          <i @click="close" class="fas fa-times close-sign"></i>
          <div class="wrapper">
            <div class="sign-in-left">
              <div class="inner">
                <h2>Sign In</h2>
                <p>
                  Login to our social questions & Answers Engine to ask
                  questions answer people’s questions & connect with other
                  people.
                </p>
                <button>Sign Up Here</button>
              </div>
            </div>
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

      <!-- Sign Up pop-up -->
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

    <!-- Nav bar for Mobile || Media query -->
    <div class="nav-wrapper-mobile">
      <!-- Hamburger Menu -->
      <div class="hamburger-menu-wrapper">
        <div class="hamburger-menu"></div>
      </div>
      <!-- Logo -->
      <div class="logo-mobile">
        <router-link to="/">
          <img src="../assets/images/logo.png" alt="Discy-Logo" />
        </router-link>
      </div>
      <!-- Lock -->
      <div class="lock">
        <i class="fas fa-lock"></i>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "Navbar",
  data() {
    return {
      checkLi: 1,
    };
  },
  methods: {
    activeNavbar(n) {
      this.checkLi = n;
    },
    close() {
      $(".parent-bg").fadeOut(400, function () {
        $(".first-wrapper").animate({ top: "-1000px" });
      });
    },
    closeSignUp() {
      $(".parent-bg-2").fadeOut(400, function () {
        $(".first-wrapper").animate({ top: "-1000px" });
      });
    },
    stopPro(e) {
      e.stopPropagation();
    },
    clickSignIn() {
      $(".parent-bg").fadeIn(0, function () {
        $(".first-wrapper").animate({ top: "0px" });
      });
    },
    clickSignUp() {
      $(".parent-bg-2").fadeIn(0, function () {
        $(".first-wrapper").animate({ top: "0px" });
      });
    },
  },
};
</script>

<style scoped>
/* Nav */
.nav-wrapper {
  background-color: var(--navbar-bg);
}

.logo {
  width: 201px;
  padding-top: 21px;
}

.nav {
  width: 702px;
  border-left: 1px solid #33353c;
  border-right: 1px solid #33353c;
}

.nav ul {
  padding-top: 14px;
  padding-left: 20px;
}

.nav ul li {
  padding-right: 12px;
}

/* Router-Link */
.nav a {
  color: var(--white-text);
  text-decoration: none;
  padding-top: 5.5px;
  padding-bottom: 8.5px;
  padding-left: 7.5px;
  padding-right: 7.5px;
  font-size: var(--font-14);
  font-weight: var(--weight-700);
  font-family: var(--roboto-font-family);
}

.active,
.nav a:hover {
  background-color: var(--footer-bg);
  border-radius: 2px;
}

.search input {
  background-color: #202228;
  padding: 6px 5px 6px 10px;
  outline: none;
  border: none;
  border-radius: 3px;
  width: 230px;
  font-size: var(--font-12);
  margin-right: 17px;
}

.search input::placeholder {
  font-size: 12px;
  font-family: var(--arial-font-family);
  font-style: italic;
  font-weight: var(--weight-400);
  color: var(--btn-bg-gray);
  opacity: 0.95;
}

.search input:focus {
  color: var(--btn-bg-gray);
}

/* Search icon */
.search i {
  position: absolute;
  color: var(--white-text);
  right: 28px;
  top: 7px;
  font-size: 14px;
}

.login {
  width: 270px;
  border-right: 1px solid #33353c;
  padding-top: 25px;
  padding-bottom: 28px;
  padding-left: 21px;
}

.login button {
  font-size: 14px;
  font-weight: var(--weight-700);
  font-family: var(--roboto-font-family);
  color: var(--white-text);
  width: 103px;
  padding-top: 5px;
  padding-bottom: 5px;
}

.login .sign-in {
  background-color: var(--main-blue-bg-text-color);
  border-radius: 2px;
  border: none;
  margin-right: 20px;
  transition: 0.5s;
  letter-spacing: 0.8px;
}

.login .sign-in:hover,
.login .sign-up:hover {
  background-color: var(--widget-red-color);
}

.login .sign-up {
  border-radius: 2px;
  border: none;
  background-color: var(--btn-bg-gray);
  transition: 0.5s;
  letter-spacing: 0.8px;
}

.nav-wrapper-mobile {
  display: none;
}

/* Mobile Screen */
.hamburger-menu {
  height: 4px;
  border-radius: 2px;
  width: 22px;
  background-color: var(--white-text);
  position: relative;
}

.hamburger-menu:after {
  content: "";
  position: absolute;
  width: 22px;
  background-color: var(--white-text);
  border-radius: 2px;
  height: 4px;
  top: 5.5px;
}

.hamburger-menu:before {
  content: "";
  position: absolute;
  width: 22px;
  background-color: var(--white-text);
  border-radius: 2px;
  height: 4px;
  bottom: 5px;
}

/* Sign in Popup-Animation */
.parent-bg {
  background-color: rgba(39, 41, 48, 0.95);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 333;
  display: none;
}

.parent-bg .close-sign {
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: end;
  padding-bottom: 15px;
}

.parent-bg .first-wrapper {
  width: 50.6%;
  margin: 0 auto;
  border-radius: 3px;
  position: relative;
  top: -500px;
  padding-top: 55px;
}

.parent-bg .wrapper {
  display: flex;
  border-radius: 3px;
}

.parent-bg .sign-in-left,
.parent-bg .login-right {
  width: 50%;
}

.parent-bg .sign-in-left {
  background-image: linear-gradient(
      to bottom,
      rgba(45, 111, 247, 0.52),
      rgba(45, 111, 247, 0.73)
    ),
    url("../assets/images/signin.png");
  background-size: cover;
  background-position: 100%;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}

.parent-bg .login-right {
  background-color: var(--white-text);
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

.parent-bg .sign-in-left .inner {
  padding: 60px;
}

.parent-bg .login-right .inner {
  padding: 55px 60px;
}

.parent-bg h2 {
  color: var(--white-text);
  font-size: var(--font-24);
  font-family: var(--roboto-font-family);
  font-weight: var(--weight-700);
  margin-bottom: 18px;
}

.parent-bg p {
  color: var(--white-text);
  font-size: var(--font-14);
  font-family: var(--roboto-font-family);
  font-weight: var(--weight-400);
  margin-bottom: 90px;
  line-height: 1.7;
}

.parent-bg .sign-in-left button,
.parent-bg .login-right button {
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

.parent-bg .login-right button {
  margin-top: 11px;
  background-color: var(--main-blue-bg-text-color);
  color: var(--white-text);
}

.parent-bg .sign-in-left button:hover {
  background-color: var(--main-blue-bg-text-color);
}

.parent-bg .login-right button:hover {
  background-color: var(--footer-text-color);
}

.parent-bg .input-wrapper {
  margin-bottom: 16px;
  position: relative;
}

.parent-bg .input-wrapper i {
  color: var(--btn-bg-gray);
  left: 10px;
  top: 70%;
  transform: translateY(-50%);
  font-size: 13px;
  position: absolute;
}

.parent-bg .input-wrapper label,
.parent-bg .reminder-wrapper label {
  color: var(--btn-bg-gray);
  font-family: var(--arial-font-family);
  font-size: 13px;
  font-weight: var(--weight-400);
}

.parent-bg .reminder-wrapper .checkbox {
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

.parent-bg .reminder-wrapper .checkbox::before {
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

.parent-bg .reminder-wrapper a {
  font-family: var(--arial-font-family);
  font-size: var(--font-12);
  font-weight: var(--weight-400);
  color: var(--navbar-bg);
  text-decoration: none;
  transition: 0.5s;
}

.parent-bg .reminder-wrapper a:hover {
  color: var(--main-blue-bg-text-color);
}

.parent-bg .input-wrapper input {
  background-color: var(--white-text);
  border: 1px solid var(--separator-color);
  border-radius: 2px;
  padding-left: 28px;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 100%;
}

.parent-bg .reminder-wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.parent-bg .asstrict {
  color: red;
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

/* Media Query */
@media screen and (max-width: 800px) {
  .nav-wrapper {
    /* height: 84px !important; */
    display: none;
  }

  .nav {
    border-left: none;
    border-right: none;
    display: none !important;
  }

  .nav-wrapper-mobile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10px;
    background-color: var(--navbar-bg);
    padding-right: 20px;
  }

  .lock i {
    color: var(--white-text);
    font-size: 20px;
    cursor: pointer;
    transition: 0.5s;
  }

  .lock i:hover {
    color: var(--main-blue-bg-text-color);
  }

  .hamburger-menu-wrapper {
    cursor: pointer;
    background-color: var(--navbar-bg);
    font-weight: 700;
    letter-spacing: 0.8px;
    padding: 17px 10px;
    border-radius: 2px;
    transition: 0.5s;
  }

  .hamburger-menu-wrapper:hover {
    background-color: var(--footer-bg);
  }
}
</style>
