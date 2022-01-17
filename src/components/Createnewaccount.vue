<template>
    <div class="add-search d-flex align-items-center justify-content-between">
      <div class="left-search">
        <a href="#"><i class="fas fa-search icon-search"></i> Search</a>
      </div>
      <div class="right-question">
        <a href="#"><i class="fas fa-question-circle"></i> Ask A Question</a>
      </div>
    </div>
  <div class="create-account">
    <div
      class="container d-flex justify-content-between align-items-center change-dir"
    >
      <div class="left w-50">
        <h3 class="">Share & grow the world's knowledge!</h3>
        <p>
          We want to connect the people who have knowledge to the people who
          need it, to bring together people with different perspectives so they
          can understand each other better, and to empower everyone to share
          their knowledge.
        </p>
      </div>
      <div class="right">
        <button>Create A New Account</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Createnewaccount",
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
  /* margin-right: 20px; */
  padding: 8px 40px;
  color: var(--white-text);
  border: none;
  background-color: var(--main-blue-bg-text-color);
  transition: 0.5s;
  font-size: 14px;
  font-weight: 700;
  transition: 0.5s;
  letter-spacing: .8px;
  width: 270px;
}

button:hover {
  background-color: var(--btn-bg-gray);
}

.add-search {
  display: none !important;
}

@media screen and (max-width: 800px) {

  .create-account {
    padding: 15px 10px 0;
  }

  .left {
    width: 100% !important;
  }

  .right {
    margin-bottom: 8px;
  }

  .change-dir {
    flex-direction: column;
    align-items: flex-start !important;
  }

  button {
    margin-bottom: 7px;
  }

  .add-search {
    display: flex !important;
    background-color: var(--questions-bg-widget);
    padding: 18px 10px;
  }

  .add-search a {
    font-size: 14px;
    font-family: var(--roboto-font-family);
    color: var(--navbar-bg);
    text-decoration: none;
    font-weight: 400;
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
}
</style>
