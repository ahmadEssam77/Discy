<template>
  <div class="nav-wrapper">
    <div class="container">
      <div class="row">
        <!-- Logo -->
        <div
          class="col-md-2 offset-1 d-flex align-items-center justify-content-start"
        >
          <img src="../assets/images/logo.png" alt="Logo" />
        </div>
        <div class="col-md-6 middle">
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
                    <a class="nav-link active" aria-current="page" href="#"
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
                <form class="d-flex">
                  <input
                    class="form-control me-2 nav-search"
                    type="search"
                    placeholder="Type Search Words"
                    aria-label="Search"
                  />
                </form>
              </div>
            </div>
          </nav>
        </div>
        <!-- Login -->
        <div
          class="col-md-2 d-flex align-items-center justify-content-center login"
        >
          <div class="d-flex align-items-center justify-content-center">
            <button class="btn btn-primary me-3">Sign In</button>
            <button class="btn btn-secondary">Sign Up</button>
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
.nav-wrapper {
  background-color: var(--main-nav-ng-color);
}

.row div {
  padding: 5px 0;
}

/* Middle section in nav */
.middle {
  padding-right: 5px;
  padding-left: 5px;
  border-left: 1px solid #33353c;
  border-right: 1px solid #33353c;
}

.nav-link {
  color: #fff !important;
}

.active {
  background-color: var(--active-nav-bg-color);
  color: #fff;
}

.nav-search {
  background-color: var(--active-nav-bg-color);
  padding: 5px;
  outline: none;
  border: 1px solid var(--active-nav-bg-color);
  border-radius: 2px;
}

.nav-search:focus {
  color: yellow;
  outline: none;
  box-shadow: none !important;
}

/* Login section in nav */
.login {
  border-right: 1px solid #33353c;
}

.btn {
  padding: 3px 20px !important;
  border-radius: 3px !important;
}
</style>
