<template>
  <div class="nav-wrapper">
    <div class="container">
      <div class="row position-relative">
        <!-- Logo 2 col-->
        <div
          class="col-md-2 d-flex align-items-center justify-content-start main-logo"
        >
          <div class="">
            <a href="#">
              <img src="../assets/images/logo.png" alt="Logo" />
            </a>
          </div>
        </div>
        <!-- Navbar and search 7 col -->
        <div class="col-md-7 middle">
          <!-- Navbar bootstrap component -->
          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link my-active" aria-current="page" href="#"
                      >Home</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">About Us</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Blog</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Contact Us</a>
                  </li>
                </ul>
                <form class="d-flex position-relative">
                  <input
                    class="form-control nav-search"
                    type="search"
                    placeholder="Type Search Words"
                    aria-label="Search"
                  />
                  <i class="fas fa-search icon-search"></i>
                </form>
              </div>
            </div>
          </nav>
        </div>
        <!-- Login 3 col-->
        <div class="col-md-3 d-flex align-items-center lock-wrapper">
          <div class="login">
            <button class="my-btn in">Sign In</button>
            <button class="my-btn up">Sign Up</button>
          </div>
          <div class="lock">
            <i class="fas fa-lock"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
/* Nav Wrapper */
.nav-wrapper {
  background-color: var(--navbar-bg);
  padding: 17px 0;
}

/* Middle section in navbar */
.middle {
  border-left: 1px solid #33353c;
  border-right: 1px solid #33353c;
}

.nav-link {
  color: var(--white-text) !important;
  padding-top: 3px;
  padding-bottom: 3px;
  font-size: 14px;
  font-weight: bold;
  transition: 0.5s;
  margin-right: 0.5rem;
  font-family: var(--roboto-font-family);
}

.nav-link:hover {
  background-color: var(--footer-bg);
}

.my-active {
  background-color: var(--footer-bg);
}

.nav-search {
  background-color: #202228;
  padding: 7px;
  outline: none;
  border: none;
  border-radius: 3px;
  width: 232px;
  font-size: 12px;
}

.nav-search::placeholder {
  font-size: 12px;
  padding-left: 7px;
  font-family: var(--arial-font-family);
  font-style: italic;
}

.nav-search:focus {
  color: #7c7f85;
  outline: none;
  box-shadow: none !important;
}

.icon-search {
  position: absolute;
  color: var(--white-text);
  right: 12px;
  top: 8px;
}

/* Buttons - Login */
.my-btn {
  border-radius: 2px;
  margin-right: 15px;
  padding: 3px 25px;
  color: var(--white-text);
  border: none;
  font-family: var(--roboto-font-family);
  transition: 0.5s;
}

.my-btn:hover {
  background-color: var(--widget-red-color);
}

.in {
  background-color: var(--main-blue-bg-text-color);
}

.up {
  background-color: var(--btn-bg-gray);
}

.lock {
  color: var(--white-text);
  cursor: pointer;
  display: none;
}

/* Media Query */
@media screen and (max-width: 800px) {
  .main-logo {
    width: 50%;
    position: absolute;
    left: 30%;
  }

  .middle {
    width: 15%;
    border: none;
    position: relative;
    left: -5%;
  }

  .lock-wrapper {
    width: 15%;
  }

  .login {
    display: none !important;
  }

  .lock {
    display: block !important;
    position: absolute;
    right: 5%;
  }

  .lock:hover {
    color: var(--main-blue-bg-text-color);
  }

  .navbar button {
    border: none;
  }
}
</style>
