<template>
  <div class="parent py-4">
    <div class="questions position-relative">
      <h6>Question</h6>
      <h3>21</h3>
    </div>
    <div class="answers position-relative">
      <h6>Answer</h6>
      <h3>72</h3>
    </div>
    <div class="best-answers position-relative">
      <h6>Best</h6>
      <h3>14</h3>
    </div>
    <div class="users position-relative">
      <h6>Users</h6>
      <h3>12</h3>
    </div>
  </div>
  <section class="">
    <div>
      <button class="btn">Popular</button>
      <button class="btn">Answers</button>
    </div>
    <div class="row bg-light p-2">
      <div class="col-md-2">
        <div class="d-flex align-items-center justify-content-center">
          <img src="../assets/images/userImg.jpg" alt="" />
        </div>
      </div>
      <div class="col-md-10">
        <div>
          <h4>How to approach applying for a job at a company ...</h4>
          <span
            ><i class="fas fa-comment-alt fa-flip-horizontal"></i> 7
            Answers</span
          >
        </div>
      </div>
      <hr class="mt-4" />
    </div>
    <div class="row bg-light p-2">
      <div class="col-md-2">
        <div class="d-flex align-items-center justify-content-center">
          <img src="../assets/images/userImg.jpg" alt="" />
        </div>
      </div>
      <div class="col-md-10">
        <div>
          <h4>How to approach applying for a job at a company ...</h4>
          <span
            ><i class="fas fa-comment-alt fa-flip-horizontal"></i> 7
            Answers</span
          >
        </div>
      </div>
      <hr class="mt-4" />
    </div>
    <div class="row bg-light p-2">
      <div class="col-md-2">
        <div class="d-flex align-items-center justify-content-center">
          <img src="../assets/images/userImg.jpg" alt="" />
        </div>
      </div>
      <div class="col-md-10">
        <div>
          <h4>How to approach applying for a job at a company ...</h4>
          <span
            ><i class="fas fa-comment-alt fa-flip-horizontal"></i> 7
            Answers</span
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Questionsinsights",
};
</script>

<style scoped>
/* Insights */
.parent {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 2px;
}
.parent div {
  width: 50%;
  background-color: #fff;
  padding: 5px;
  text-align: center;
  border: 1px solid #ccc;
}

.questions h6 {
  color: blue;
  font-size: 12px;
}

.questions::before {
  content: "";
  position: absolute;
  width: 2px;
  height: 40px;
  background-color: blue;
  left: 0px;
  top: 20px;
}

.answers h6 {
  color: red;
  font-size: 12px;
}

.answers::after {
  content: "";
  position: absolute;
  width: 2px;
  height: 40px;
  background-color: red;
  right: 0px;
  top: 20px;
}

.best-answers h6 {
  color: green;
  font-size: 12px;
}

.best-answers::before {
  content: "";
  position: absolute;
  width: 2px;
  height: 40px;
  background-color: green;
  left: 0px;
  top: 20px;
}

.users h6 {
  color: blue;
  font-size: 12px;
}

.users::after {
  content: "";
  position: absolute;
  width: 2px;
  height: 40px;
  background-color: blue;
  right: 0px;
  top: 20px;
}

/* Section */
section img {
  border-radius: 50%;
  width: 220%;
}

section h4 {
  font-size: 12px;
}

section span {
  font-size: 12px;
  color: var(--paragraph-color);
}

section span i {
  padding-left: 15px;
}

/* Btn */
.btn {
  background-color: var(--profile-bg) !important;
  border: 1px solid #ddd;
  border-radius: 1px !important;
  padding-top: 10px !important;
  padding-bottom: 10px !important;
}
</style>
