<template>
  <footer>
    <div class="container">
      <div class="row pt-5 pb-5">
        <div class="col-md-3">
          <!-- <div class="d-flex">
            <div class="logo">
              <img src="../assets/images/logo-footer.png" alt="Logo" />
            </div>
            <div class="logo-footer-content text-light">
              Discy is a social questions & Answers Engine which will help you
              establis your community and connect with other people.
            </div>
          </div> -->
        </div>
        <div class="col-md-2">
          <div>
            <h6 class="pb-2 text-white">About us</h6>
            <ul>
              <li>Meet the team</li>
              <li>Blog</li>
              <li>About us</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
        <div class="col-md-2">
          <div>
            <h6 class="pb-2 text-white">Legal Stuff</h6>
            <ul>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
        <div class="col-md-2">
          <div>
            <h6 class="pb-2 text-white">Help</h6>
            <ul>
              <li>Knowledge Base</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
        <div class="col-md-3">
          <div>
            <h6 class="pb-2 text-white">Follow</h6>
            <div class="d-flex align-items-center icon-wrapper">
              <div class="text-center p-1 me-2">
                <i class="fab fa-facebook-f"></i>
              </div>
              <div class="text-center p-1 me-2">
                <i class="fab fa-twitter"></i>
              </div>
              <div class="text-center p-1 me-2">
                <i class="fab fa-linkedin-in"></i>
              </div>
              <div class="text-center p-1 me-2">
                <i class="fas fa-wifi"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  background-color: var(--footer-bg-color);
  /* background-color: #707885 */
}

footer ul {
  list-style: none;
  padding-left: 0;
}

footer li {
  color: #707885;
}

.icon-wrapper div {
  background-color: var(--SM-bg-icons);
  border-radius: 50%;
  width: 10%;
}

.icon-wrapper i {
  color: #e4e6e6;
}
</style>
