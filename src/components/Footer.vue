<template>
  <footer class="py-5">
    <div class="container">
      <div class="row py-5">
        <div class="col-md-4 d-flex align-items-center">
          <div class="d-flex">
            <div class="logo">
              <img src="../assets/images/logo-footer.png" alt="Logo" />
            </div>
            <div class="logo-footer-content">
              Discy is a social questions & Answers Engine which will help you
              establis your community and connect with other people.
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <div>
            <h6 class="pb-2">About us</h6>
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
            <h6 class="pb-2">Legal Stuff</h6>
            <ul>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
        <div class="col-md-2">
          <div>
            <h6 class="pb-2">Help</h6>
            <ul>
              <li>Knowledge Base</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
        <div class="col-md-2">
          <div>
            <h6 class="pb-2">Follow</h6>
            <div class="d-flex align-items-center icon-wrapper">
              <div class="text-center me-2">
                <i class="fab fa-facebook-f"></i>
              </div>
              <div class="text-center me-2">
                <i class="fab fa-twitter"></i>
              </div>
              <div class="text-center me-2">
                <i class="fab fa-linkedin-in"></i>
              </div>
              <div class="text-center me-2">
                <i class="fas fa-wifi"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="last-footer">
        <p class="pt-5">&copy; 2022 Discy. All Right Reserved</p>
        <p>With Love by <span>2code</span></p>
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
  background-color: var(--footer-bg);
  /* background-color: #707885 */
}

.logo-footer-content {
  font-size: 13px;
  font-weight: 400;
  font-family: var(--roboto-font-family);
  color: var(--footer-text-color);
  padding-left: 10px;
  width: 75%;
}

h6 {
  font-weight: 700;
  font-size: 14px;
  font-family: var(--roboto-font-family);
  color: var(--white-text);
}

footer ul {
  list-style: none;
  padding-left: 0;
}

footer li {
  color: var(--footer-text-color);
  font-size: 13px;
  font-weight: 400;
  font-family: var(--roboto-font-family);
  transition: 0.5s;
}

footer li:hover {
  color: var(--main-blue-bg-text-color);
  cursor: pointer;
}

.icon-wrapper div {
  background-color: var(--SM-bg-icons);
  border-radius: 50%;
  width: 10%;
}

.icon-wrapper i {
  transition: 0.5s;
}

.icon-wrapper div {
  width: 30px;
  height: 30px;
  transition: 0.5s;
}

.icon-wrapper div:hover {
  cursor: pointer;
  background-color: var(--main-blue-bg-text-color);
}

.icon-wrapper div:hover i {
  color: var(--white-text);
}

.icon-wrapper i {
  color: #7c7f85;
  font-size: 12px;
  font-weight: 400;
}

.last-footer {
  border-top: 0.2px solid rgba(255, 255, 255, 0.5);
}

.last-footer p {
  font-size: 13px;
  font-weight: 400;
  font-family: var(--roboto-font-family);
  color: var(--footer-text-color);
  text-align: center;
  line-height: 0.5;
}

.last-footer span {
  color: var(--main-blue-bg-text-color);
}

.last-footer span:hover {
  color: var(--white-text);
  cursor: pointer;
}

@media screen and (max-width: 800px) {
  .logo-footer-content {
    width: 95%;
  }
}
</style>
