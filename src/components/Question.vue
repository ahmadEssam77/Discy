<template>
  <div class="social-question">
    <div class="d-flex">
      <div class="img-counter">
        <div
          class="user-img d-flex align-items-center justify-content-center position-relative"
        >
          <img src="../assets/images/userImg.jpg" alt="" />
          <!-- <div
            class="user-popup position-absolute bg-white p-3 text-center rounded-1"
          >
            <div>
              <img src="../assets/images/userImg.jpg" alt="" />
            </div>
            <h3>Martin Hope</h3>
            <p>
              <i class="fas fa-map-marker-alt"></i> <span>Damita, Egypt</span>
            </p>
            <div>
              <ul class="rounded-1">
                <li><i class="fas fa-book-open pe-2"></i> Questions</li>
                <li>
                  <i class="fas fa-comment-alt fa-flip-horizontal ps-2"></i>
                  Answers
                </li>
                <li><i class="fas fa-graduation-cap pe-2"></i> Best Answers</li>
                <li><i class="fab fa-bitbucket pe-2"></i> Points</li>
              </ul>
            </div>
            <button class="btn btn-primary form-control">View Profile</button>
          </div> -->
        </div>
        <!-- <div class="vote d-flex align-items-center justify-content-center">
          <div>
            <span @click="addCounter"><i class="fas fa-sort-up"></i></span>
            <p class="mb-0 counter-wrapper">
              <input type="text" name="" v-model="counter" id="" readonly />
            </p>
            <span @click="decreaseCounter"
              ><i class="fas fa-sort-down"></i
            ></span>
          </div>
        </div> -->
      </div>
      <div class="the-main-question">
        <div class="d-flex align-items-center">
          <div class="name">Martin Hope</div>
          <div class="tag">Enlightened</div>
          <div class="question-date">
            <span>Asked:</span><span class="date"> April 19, 2018</span>
          </div>
          <div class="language">
            <span>In:</span><span class="lang"> Language</span>
          </div>
        </div>
        <div class="user-asked">
          <h5>
            Is this statement, “i see him last night” can be understood as “I
            saw him last night”?
          </h5>
        </div>
        <div class="user-description">
          <p>
            In my local language (Bahasa Indonesia) there are no verb-2 or past
            tense form as time tracker. So, I often forget to use the past form
            of verb when speaking english. I saw him last night (correct) I see
            him last night ...
          </p>
        </div>
        <div class="tags">
          <span>english</span>
          <span>language</span>
        </div>
        <div class="q-view-answer mt-4">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <span
                ><i class="fas fa-comment-alt fa-flip-horizontal me-2"></i> 4
                Answers</span
              >
              <span class="views"
                ><i class="fas fa-eye me-2"></i> 9K Views</span
              >
            </div>
            <div><button class="btn btn-dark">Answer</button></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Question",
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addCounter() {
      return this.counter++;
    },
    decreaseCounter() {
      return this.counter--;
    },
  },
};
</script>

<style scoped>
.social-question {
  background-color: var(--white-text);
  padding: 28px;
  border-bottom: 0.5px solid var(--separator-color);
}

.img-counter {
  width: 10%;
}

.the-main-question {
  width: 90%;
}

.user-img {
  width: 70%;
}

.user-img img {
  width: 100%;
  border-radius: 50%;
  border: 2px solid var(--main-blue-bg-text-color);
  padding: 3px;
  cursor: pointer;
}

.name {
  font-size: 14px;
  color: var(--main-blue-bg-text-color);
  letter-spacing: 0.8px;
  font-weight: 700;
  transition: 1s;
  font-family: var(--roboto-font-family);
  margin-right: 10px;
  cursor: pointer;
}

.name:hover {
  color: var(--navbar-bg);
}

.tag {
  background-color: var(--badge-bg);
  color: var(--white-text);
  font-size: 11px;
  padding: 1px 4px 2px;
  margin-right: 15px;
  margin-left: 5px;
  border-radius: 1px;
  font-family: var(--arial-font-family);
  text-transform: capitalize;
}

.question-date span,
.language span {
  color: var(--btn-bg-gray);
  font-size: 11px;
  font-weight: 400;
  font-family: var(--arial-font-family);
}

.question-date .date,
.language .lang {
  color: var(--main-blue-bg-text-color);
  cursor: pointer;
  font-size: 11px;
  font-weight: 400;
  font-family: var(--arial-font-family);
  margin-right: 15px;
  transition: 0.5s;
}

.question-date .date:hover,
.language .lang:hover {
  color: var(--navbar-bg);
}

.user-asked h5 {
  transition: 1s;
  font-size: 19px;
  font-weight: 700;
  line-height: 27px;
  color: var(--navbar-bg);
  transition: 0.5s;
  cursor: pointer;
}

.user-asked h5:hover {
  color: var(--main-blue-bg-text-color);
}

.user-description p {
  margin-bottom: 20px;
  font-size: 15px;
  line-height: 30px;
  font-family: var(--roboto-font-family);
  color: var(--footer-text-color);
}

.tags span,
.q-view-answer span {
  border: 1px solid #ccc;
  background-color: #fff;
  padding: 5px;
  margin-right: 7px;
  font-size: 11px;
  border-radius: 2px;
  color: gray;
  cursor: pointer;
  transition: 0.5s;
}

.q-view-answer {
  padding: 15px;
  background-color: #f5f5f5;
}

.q-view-answer .views {
  cursor: text;
}

.btn {
  padding: 1px 10px 3px !important;
  border-radius: 2px !important;
  transition: 1s !important;
}

/* Vote */
.vote {
  height: 170px;
}

.vote p {
  font-size: 20px;
  text-align: center;
}

.vote i {
  font-size: 25px;
  cursor: pointer;
}

.vote .counter-wrapper input {
  border: none;
  width: 40px;
}

.vote .counter-wrapper input:focus {
  outline: none;
}

.tags span:hover {
  background-color: blue;
  color: #fff;
  border-color: blue;
}

.user-img:hover .user-popup {
  /* opacity: 1; */
  display: block;
}

/* User Popup */
.user-popup {
  z-index: 100;
  top: 100%;
  width: 300px;
  display: none;
  /* opacity: 0; */
  transition: 0.5s;
}

.user-popup h3 {
  font-size: 17px;
  padding-top: 10px;
}

.user-popup ul {
  list-style: none;
  background-color: var(--profile-bg);
  padding: 10px;
  text-align: start !important;
  font-size: 12px;
}

.user-popup img {
  width: 30%;
}
</style>
