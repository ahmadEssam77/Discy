<template>
  <div class="nav-wrapper">
    <div class="container d-flex">
      <div class="logo">
        <img src="../assets/images/logo.png" alt="" />
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
            <router-link to=""
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
          <input type="search" name="" id="" placeholder="Type Search Words" />
          <i class="fas fa-search icon-search"></i>
        </div>
      </div>
      <div class="login">
        <button class="sign-in">Sign In</button>
        <button class="sign-up">Sign Up</button>
      </div>
      <div class="lock">
        <i class="fas fa-lock"></i>
      </div>
    </div>
    <div class="hamburger-menu-wrapper">
      <div class="hamburger-menu"></div>
    </div>
  </div>
</template>

<script>
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

ul {
  padding-top: 17px;
}

a {
  color: var(--white-text);
  text-decoration: none;
  /* padding-top: 5.5px;
  padding-bottom: 8.5px;
  padding-left: 7.5px;
  padding-right: 7.5px; */
}

.hamburger-menu-wrapper {
  display: none;
}

.hamburger-menu {
  height: 2.5px;
  border-radius: 2px;
  width: 13px;
  background-color: var(--white-text);
  position: relative;
}

.hamburger-menu:after {
  content: "";
  position: absolute;
  width: 13px;
  background-color: var(--white-text);
  border-radius: 2px;
  height: 2.5px;
  top: 3px;
}

.hamburger-menu:before {
  content: "";
  position: absolute;
  width: 13px;
  background-color: var(--white-text);
  border-radius: 2px;
  height: 2.5px;
  bottom: 3px;
}

.home {
  padding-left: 20px;
  padding-right: 19px;
  font-weight: 700;
  font-size: 14px;
  font-family: var(--roboto-font-family);
}

.about,
.blog {
  padding-right: 25px;
  font-weight: 700;
  font-size: 14px;
  font-family: var(--roboto-font-family);
}

.contact {
  font-weight: 700;
  font-size: 14px;
  font-family: var(--roboto-font-family);
}

.active {
  background-color: var(--footer-bg);
  padding-top: 5.5px;
  padding-bottom: 8.5px;
  padding-left: 7.5px;
  padding-right: 7.5px;
  border-radius: 2px;
}

input {
  background-color: #202228;
  padding: 6px 5px 6px 10px;
  outline: none;
  border: none;
  border-radius: 3px;
  width: 230px;
  font-size: 12px;
  margin-right: 17px;
}

input::placeholder {
  font-size: 12px;
  font-family: var(--arial-font-family);
  font-style: italic;
  font-weight: 400;
  color: #7c7f85;
}

input:focus {
  color: #7c7f85;
}

/* Search icon */
i {
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
}

button {
  font-size: 14px;
  font-weight: 700;
  font-family: var(--roboto-font-family);
  color: var(--white-text);
  width: 103px;
  padding-top: 5px;
  padding-bottom: 5px;
}

.sign-in {
  background-color: var(--main-blue-bg-text-color);
  border-radius: 2px;
  border: none;
  margin-left: 21px;
  margin-right: 20px;
  transition: 0.5s;
  letter-spacing: 0.8px;
}

.sign-in:hover,
.sign-up:hover {
  background-color: var(--widget-red-color);
}

.sign-up {
  margin-right: 21px;
  border-radius: 2px;
  border: none;
  background-color: var(--btn-bg-gray);
  transition: 0.5s;
  letter-spacing: 0.8px;
}

/* Lock sign-in-up div */
.lock {
  display: none;
}

/* Media Query */
@media screen and (max-width: 800px) {
  .nav-wrapper {
    height: 84px !important;
  }

  .nav {
    border-left: none;
    border-right: none;
    display: none !important;
  }

  .hamburger-menu-wrapper {
    display: inline-block;
    position: relative;
    top: -41px;
    left: 20px;
    cursor: pointer;

    background-color: var(--navbar-bg);
    line-height: 18px;
    font-weight: 700;
    letter-spacing: 0.8px;
    padding: 12px 9px 15px;
    border-radius: 2px;
    transition: 0.5s;
  }

  .hamburger-menu-wrapper:hover {
    background-color: var(--footer-bg);
  }

  .login {
    display: none !important;
  }

  .lock {
    display: block !important;
    position: absolute;
    right: -2%;
    top: 22px;
  }

  .lock i {
    font-size: 20px;
  }

  .lock i:hover {
    color: var(--main-blue-bg-text-color);
    transition: 0.5s;
    cursor: pointer;
  }

  .logo {
    position: relative;
    left: 35%;
    bottom: 0px;
    padding-top: 20px;
    cursor: pointer;
    width: fit-content;
  }
}
</style>
