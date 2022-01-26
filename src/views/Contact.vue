<template>
  <div>
    <div class="breadcrumb-wrapper">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/" class="text-decoration-none the-home"
              ><i class="fas fa-home pe-2"></i> Home</router-link
            >
          </li>
          <li
            class="breadcrumb-item active the-communities"
            aria-current="page"
          >
            Contact Us
          </li>
        </ol>
      </nav>
    </div>
    <main>
      <div class="form-header">
        <h4 @click="test">
          <i class="fab fa-telegram-plane pe-3"></i>Contact Us
        </h4>
        <p>
          We understand the importance of approaching each work integrally and
          believe in the power of simple and easy communication. Feel free to
          contact us for any questions or if you need any help or services !
          Please provide a detailed explanation of your problem.
        </p>
      </div>
      <!-- The form -->
      <form action="">
        <div class="wrapper">
          <div class="name">
            <label for="name">Name</label>
            <i class="far fa-id-card form-icons"></i>
            <input type="text" name="name" id="" />
          </div>
          <div class="email">
            <label for="email">Email</label>
            <i class="fas fa-envelope form-icons"></i>
            <input type="email" name="email" id="" />
          </div>
        </div>
        <div class="wrapper">
          <div class="phone">
            <label for="">Phone</label>
            <i class="fas fa-phone form-icons"></i>
            <input type="text" name="" id="" />
          </div>
          <div class="subject">
            <i class="far fa-newspaper form-icons"></i>
            <label for="subject">Subject</label>
            <input type="text" name="" id="" />
          </div>
        </div>
        <div class="message">
          <label for="message">Your Message</label>
          <i class="fas fa-pen icon-message form-icons"></i>
          <textarea name="message" id="" cols="30" rows="10"></textarea>
        </div>
        <div class="submit">
          <input type="submit" />
        </div>
      </form>
    </main>
  </div>
</template>

<script>
// import $ from "jquery";

export default {
  name: "Contact",
};
</script>

<style scoped>
div {
  background-color: var(--white-text);
}

.breadcrumb-wrapper {
  padding: 30px;
  border-bottom: 2px solid var(--separator-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.breadcrumb-wrapper .the-home {
  color: var(--ancor-color) !important;
  font-family: var(--arial-font-family);
  font-size: 13px;
  font-weight: 600;
  transition: 0.5s;
}

.breadcrumb-wrapper .the-home:hover {
  color: var(--main-blue-bg-text-color) !important;
}

.breadcrumb-wrapper .the-communities {
  font-family: var(--arial-font-family);
  color: var(--btn-bg-gray);
  font-size: 13px;
  font-weight: 600;
  padding-top: 4px;
}

main {
  background-color: var(--white-text);
  height: 1355px;
}

.form-header {
  padding: 30px;
  padding-bottom: 5px;
}

.form-header h4 {
  color: var(--ancor-color);
  font-family: var(--roboto-font-family);
  font-size: var(--font-14);
  font-weight: var(--weight-700);
}

.form-header i {
  font-size: 17px;
}

.form-header p {
  font-family: var(--roboto-font-family);
  font-size: var(--font-14);
  font-weight: var(--weight-400);
  color: var(--footer-text-color);
}

form {
  padding: 30px;
  padding-top: 0;
}

label {
  display: block;
  color: var(--footer-text-color);
  font-weight: var(--weight-400);
  font-size: var(--font-12);
  font-family: var(--arial-font-family);
}

.wrapper {
  display: flex;
  margin-bottom: 25px;
}

.name,
.email,
.phone,
.subject {
  width: 50%;
  position: relative;
}

.message {
  position: relative;
}

.name,
.phone {
  padding-right: 15px;
}

input {
  width: 100%;
  border-radius: 3px;
  border: 1px solid var(--separator-color);
  padding: 6px;
  outline: none;
  padding-left: 25px;
}

.form-icons {
  position: absolute;
  top: 50%;
  left: 2%;
  transform: translateY(10%);
  color: var(--community-color);
  font-size: var(--font-12);
}

.icon-message {
  top: 12%;
}

textarea {
  width: 100%;
  border-radius: 3px;
  border: 1px solid #ccc;
  padding: 10px;
  outline: none;
  padding-left: 35px;
  /*   resize: none; */
}

.submit,
.message {
  margin-top: 25px;
}

.submit input {
  cursor: pointer;
  background-color: #2d6ff7;
  color: #fff;
  border: none;
  font-family: var(--roboto-font-family);
  font-size: var(--font-14);
  font-weight: var(--weight-700);
  padding: 10px;
  letter-spacing: 0.8px;
  transition: 0.5s;
}

.submit input:hover {
  background-color: var(--btn-bg-gray);
}

@media screen and (max-width: 600px) {
  .wrapper {
    flex-direction: column;
  }

  .name,
  .email,
  .phone,
  .subject {
    width: 100%;
  }

  .name,
  .phone {
    padding-right: 0px;
    margin-bottom: 10px;
  }

  .submit,
  .message,
  .email,
  .subject {
    margin-top: 10px;
  }
}
</style>
