<template>
  <div>
    <div class="parent">
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
      <section class="buttons">
        <button class="popular-btn">Popular</button>
        <button class="answer-btn">Answer</button>
      </section>
    </div>
  </div>

  <section class="test">
    <div class="row p-2 pt-3">
      <div class="col-md-2 p-3">
        <div class="d-flex align-items-center justify-content-center adjust-img">
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
      <hr>
    </div>
    <div class="row p-2">
      <div class="col-md-2 p-3">
        <div class="d-flex align-items-center justify-content-center adjust-img">
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
      <hr>
    </div>
    <div class="row p-2 last">
      <div class="col-md-2 p-3">
        <div class="d-flex align-items-center justify-content-center adjust-img">
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
  /* justify-content: center; */
  flex-wrap: wrap;
  padding: 20px 20px 0px 20px;
  background-color: var(--questions-bg-widget);
  border-radius: 2px;
  /* border-bottom: 2px solid var(--bottom-separator-color); */
}

.parent div {
  width: 50%;
  background-color: #fff;
  padding: 5px 0 5px 0;
  text-align: center;
  border: 1px solid #ccc;
}

.questions h6 {
  color: var(--main-blue-bg-text-color);
  font-size: 12px;
  font-family: var(--arial-font-family);
  font-weight: 400 !important;
}

.questions::before {
  content: "";
  position: absolute;
  width: 2px;
  height: 45px;
  background-color: var(--main-blue-bg-text-color);
  left: 0px;
  top: 12.5px;
}

.answers h6 {
  color: var(--widget-red-color);
  font-size: 12px;
  font-family: var(--arial-font-family);
  font-weight: 400 !important;
}

.answers::after {
  content: "";
  position: absolute;
  width: 2px;
  height: 45px;
  background-color: var(--widget-red-color);
  right: -1px;
  top: 12.5px;
}

.best-answers h6 {
  color: var(--widget-green-color);
  font-size: 12px;
  font-family: var(--arial-font-family);
  font-weight: 400 !important;
}

.best-answers::before {
  content: "";
  position: absolute;
  width: 2px;
  height: 45px;
  background-color: var(--widget-green-color);
  left: 0px;
  top: 12.5px;
}

.users h6 {
  color: var(--main-blue-bg-text-color);
  font-size: 12px;
  font-family: var(--arial-font-family);
  font-weight: 400 !important;
}

.users::after {
  content: "";
  position: absolute;
  width: 2px;
  height: 45px;
  background-color: var(--main-blue-bg-text-color);
  right: -1px;
  top: 12.5px;
}

h3 {
  font-size: 25px;
  font-family: var(--roboto-font-family);
  font-weight: 700;
}

/* End insights */

/* Section buttons */
.buttons {
  padding-top: 20px;
}

.buttons button {
  font-size: 13px;
  font-family: var(--roboto-font-family);
  font-weight: 400;
  background-color: var(--questions-bg-widget);
  border: none;
  border: 1px solid var(--separator-color);
  padding: 12px 10px;
  color: var(--btn-bg-gray);
  /* border-bottom: none;  */
}

.popular-btn {
  border-right: 0px !important;
  border-bottom: var(--white-text) !important;
  background-color: var(--white-text) !important;
  color: var(--ancor-color) !important;
}

.buttons button:hover {
  color: var(--main-blue-bg-text-color);
}

hr {
  width: 85%;
  margin: auto;
  margin-top: 15px;
  margin-bottom: 15px;
}

/* Test Section */
.test {
  background-color: var(--white-text);
  border-bottom: 2px solid var(--bottom-separator-color);
}

.last {
  margin-bottom: 20px;
}

section img {
  border-radius: 50%;
  width: 150%;
}

section h4 {
  font-size: 14px;
  font-weight: 700;
  font-family: var(--roboto-font-family);
  color: var(--ancor-color);
}

section span {
  font-size: 12px;
  color: var(--paragraph-color);
}

section span i {
  padding-left: 15px;
} 

.adjust-img {
  margin-top: -15px;
}

.adjust-img img {
  margin-left: 20px;
}
</style>
