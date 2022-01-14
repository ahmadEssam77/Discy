<template>
  <div class="p-5 create-account">
    <div class="add-search d-flex align-items-center justify-content-between">
      <div class="left-search">
        <a><i class="fas fa-search icon-search"></i> Search</a>
      </div>
      <div class="right-question">
        <a><i class="fas fa-question-circle"></i> Ask A Question</a>
      </div>
    </div>
    <div
      class="container d-flex justify-content-between align-items-center change-dir"
    >
      <div class="left w-50">
        <h3 class="pb-3">Share & grow the world's knowledge!</h3>
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
  background-image: url(../assets/images/laptop.jpg);
  background-position: 100% 100%;
  background-size: cover;
}

.left,
.right {
  font-family: "Roboto", sans-serif;
}

h3 {
  font-size: 22px;
  color: var(--white-text);
}

p {
  color: var(--questions-bg-widget);
}

button {
  border-radius: 2px;
  margin-right: 20px;
  padding: 8px 50px;
  color: var(--white-text);
  border: none;
  background-color: var(--main-blue-bg-text-color);
  transition: 0.5s;
  font-size: 14px;
  font-weight: bold;
  transition: 0.5s;
}

button:hover {
  background-color: var(--btn-bg-gray);
}

.add-search {
  display: none !important;
}

@media screen and (max-width: 800px) {
  .create-account {
    padding: 0px !important;
  }

  .left {
    width: 100% !important;
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
    padding: 20px 10px;
    margin-bottom: 10px;
  }

  .add-search a {
      font-size: 14px;
      font-family: "Roboto", sans-serif;
  }
}
</style>
