<template>
  <div>
    <div class="parent">
      <div class="questions position-relative">
        <h6>Question</h6>
        <h3>21</h3>
      </div>
      <div class="answers position-relative">
        <h6>Answer</h6>
        <h3>71</h3>
      </div>
      <div class="best-answers position-relative">
        <h6>Best Answers</h6>
        <h3>15</h3>
      </div>
      <div class="users position-relative">
        <h6>Users</h6>
        <h3>24</h3>
      </div>
      <section class="buttons">
        <button class="popular-btn">Popular</button>
        <button class="answer-btn">Answers</button>
      </section>
    </div>
  </div>

  <section class="test">
    <div class="test-parent test-parent-separator">
      <div class="for-img">
        <img src="../assets/images/userImg.jpg" alt="" />
      </div>
      <div class="for-question">
        <h3>How to approach applying for a job at a company ...</h3>
        <span
          ><i class="fas fa-comment-alt fa-flip-horizontal"></i> 7 Answers</span
        >
      </div>
    </div>
    <div class="test-parent test-parent-separator">
      <div class="for-img">
        <img src="../assets/images/userImg.jpg" alt="" />
      </div>
      <div class="for-question">
        <h3>What is a programmer’s life like? Don't answer</h3>
        <span
          ><i class="fas fa-comment-alt fa-flip-horizontal"></i> 5 Answers</span
        >
      </div>
    </div>
    <div class="test-parent">
      <div class="for-img">
        <img src="../assets/images/userImg.jpg" alt="" />
      </div>
      <div class="for-question">
        <h3>Why are the British confused about us calling bread rolls ...</h3>
        <span
          ><i class="fas fa-comment-alt fa-flip-horizontal"></i> 5 Answers</span
        >
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
  flex-wrap: wrap;
  padding: 19px 19px 0px 19px;
  background-color: var(--questions-bg-widget);
  border-radius: 2px;
  border-bottom: 1px solid var(--separator-color);
}

.parent div {
  width: 50%;
  background-color: #fff;
  padding: 15px 0 0px 0;
  text-align: center;
  border: 1px solid var(--separator-color);
  border-radius: 2px;
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
  width: 1.5px;
  height: 45px;
  background-color: var(--main-blue-bg-text-color);
  left: 1px;
  top: 15.5px;
}

.answers h6,
.best-answers h6,
.users h6 {
  color: var(--widget-red-color);
  font-size: 12px;
  font-family: var(--arial-font-family);
  font-weight: 400 !important;
  letter-spacing: 0.5px;
}

.answers::after {
  content: "";
  position: absolute;
  width: 1px;
  height: 45px;
  background-color: var(--widget-red-color);
  right: 1px;
  top: 15.5px;
}

.best-answers h6 {
  color: var(--widget-green-color);
}

.best-answers::before {
  content: "";
  position: absolute;
  width: 1.5px;
  height: 45px;
  background-color: var(--widget-green-color);
  left: 1px;
  top: 15.5px;
}

.users h6 {
  color: var(--main-blue-bg-text-color);
}

.users::after {
  content: "";
  position: absolute;
  width: 1px;
  height: 45px;
  background-color: var(--main-blue-bg-text-color);
  right: 1px;
  top: 15.5px;
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
  position: relative;
  top: 1.5px;
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

/* Test Section */
.test {
  background-color: var(--white-text);
  /* border-bottom: 2px solid var(--bottom-separator-color); */
}

.test-parent {
  display: flex;
}

.test-parent-separator {
    position: relative;
}

.test-parent-separator::after {
  content: "";
  position: absolute;
  width: 86%;
  height: 0.5px;
  top: 100%;
  left: 7%;
  background-color: var(--bottom-separator-color);
}

.for-img {
  padding: 25px 17px 10px 19px;
  width: 25%;
}

.for-img img {
  border-radius: 50%;
  width: 100%;
}

.for-question {
  padding-bottom: 23px;
  padding-right: 20px;
}

.for-question h3 {
  font-size: 14px;
  font-weight: 700;
  font-family: var(--roboto-font-family);
  color: var(--ancor-color);
  padding: 17px 1px 0 0;
  line-height: 1.8;
}

.for-question span {
  font-size: 12px;
  color: var(--paragraph-color);
}

.for-question i {
  padding-left: 12px;
}
</style>
