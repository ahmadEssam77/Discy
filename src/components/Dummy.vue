<template>
  
</template>

<script>
export default {

}
</script>

<style>

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
  right: 24.7%;
  top: 8%;
  font-size: 18px;
  cursor: pointer;
}

.parent-bg .first-wrapper {
  width: 50.6%;
  margin: auto;
  margin-top: 89px;
  border-radius: 3px;
  position: relative;
  top: -1000px;
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

.parent-bg .inner {
  padding: 60px;
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
  margin-bottom: 75px;
  line-height: 1.7;
}

.parent-bg .sign-in-left button {
  background-color: var(--navbar-bg);
  width: 100%;
  border: none;
  border-radius: 3px;
  padding: 10px;
  font-family: var(--roboto-font-family);
  letter-spacing: 0.8px;
  font-size: var(--font-14);
  font-weight: var(--weight-700);
}

.parent-bg .input-wrapper {
  margin-bottom: 15px;
  position: relative;
}

.parent-bg .input-wrapper i {
  color: var(--btn-bg-gray);
  left: 10px;
  top: 70%;
  transform: translateY(-50%);
  font-size: 13px;
}

.parent-bg .input-wrapper label,
.parent-bg .reminder-wrapper label {
  color: var(--btn-bg-gray);
  font-family: var(--arial-font-family);
  font-size: var(--font-12);
  font-weight: var(--weight-400);
}

.parent-bg .reminder-wrapper a {
  font-family: var(--arial-font-family);
  font-size: var(--font-12);
  font-weight: var(--weight-400);
  color: var(--navbar-bg);
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
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
}

.parent-bg .reminder-wrapper {
  display: flex;
  justify-content: space-between;
}

.parent-bg .reminder-wrapper .checkbox {
  width: 15px;
}

.parent-bg .login-right button {
  background-color: var(--main-blue-bg-text-color);
  width: 100%;
  border: none;
  border-radius: 3px;
  padding: 10px;
  font-family: var(--roboto-font-family);
  letter-spacing: 0.8px;
  font-size: var(--font-14);
  font-weight: var(--weight-700);
  margin-top: 11px;
}

.parent-bg .asstrict {
  color: red;
}

</style>