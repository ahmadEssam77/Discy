<template>
  <div class="social-question">
    <div class="d-flex question-web">
      <div class="img-counter">
        <div
          class="user-img d-flex align-items-center justify-content-center position-relative"
        >
          <img src="../assets/images/userImg.jpg" alt="" />
          <!-- Img Hover -->
          <div
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
              <ul class="">
                <li><i class="fas fa-book-open"></i> Questions</li>
                <li>
                  <i
                    class="fas fa-comment-alt fa-flip-horizontal special-answer"
                  ></i>
                  Answers
                </li>
                <li><i class="fas fa-graduation-cap"></i> Best Answers</li>
                <li><i class="fab fa-bitbucket"></i> Points</li>
              </ul>
            </div>
            <button class="form-control">View Profile</button>
          </div>
        </div>
        <!-- Vote -->
        <div class="vote position-relative">
          <div class="arrow-up" @click="addCounter()"></div>
          <div class="vote-counter">{{ count }}</div>
          <div class="arrow-down" @click="decreaseCounter()"></div>
        </div>
      </div>
      <div class="the-main-question">
        <div class="d-flex align-items-center user-info">
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
        <div class="q-view-answer">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <span
                ><i class="fas fa-comment-alt fa-flip-horizontal"></i> 3
                Answers</span
              >
              <span class="views"><i class="fas fa-eye"></i> 10K Views</span>
            </div>
            <div><button class="">Answer</button></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Question Mobile -->
    <div class="question-mobile">
      <div class="wrap-img-counter-more">
        <div class="for-image">
          <img src="../assets/images/userImg.jpg" alt="" />
        </div>
        <div class="for-counter">
          <!-- Vote -->
          <div class="vote vote-2 position-relative">
            <div class="arrow-up" @click="addCounter()"></div>
            <div class="vote-counter">{{ count }}</div>
            <div class="arrow-down" @click="decreaseCounter()"></div>
          </div>
        </div>
        <div class="for-more">
          <div>
            <h4>Martin Hope</h4>
            <span class="tag tag-2">Enlightened</span>
            <p>
              <span class="asked">Asked:</span>
              <span class="date">April 19, 2018</span>
            </p>
            <p>
              <span class="in">In:</span> <span class="lang">Language</span>
            </p>
          </div>
        </div>
      </div>
      <div class="user-asked-mobile">
        <h5>
          Is this statement, “i see him last night” can be understood as “I saw
          him last night”?
        </h5>
        <p>
          In my local language (Bahasa Indonesia) there are no verb-2 or past
          tense form as time tracker. So, I often forget to use the past form of
          verb when speaking english. I saw him last night (correct) I see him
          last night ...
        </p>
        <div class="tags tags-mobile">
          <span>english</span>
          <span>language</span>
        </div>
        <div class="q-view-answer-mobile">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <span
                ><i class="fas fa-comment-alt fa-flip-horizontal"></i> 3
                Answers</span
              >
              <span class="views"><i class="fas fa-eye"></i> 10K Views</span>
            </div>
            <div><button class="">Answer</button></div>
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
      count: 529,
    };
  },
  methods: {
    addCounter() {
      return this.count++;
    },
    decreaseCounter() {
      return this.count--;
    },
  },
};
</script>

<style scoped>
.social-question {
  background-color: var(--white-text);
  padding: 30px;
  border-bottom: 0.5px solid var(--separator-color);
}

.img-counter {
  width: 10%;
}

.the-main-question {
  width: 90%;
  margin-left: 5px;
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

.user-info {
  margin-bottom: 4px;
}

.name,
.for-more h4 {
  font-size: 14px;
  color: var(--main-blue-bg-text-color);
  letter-spacing: 0.8px;
  font-weight: 700;
  transition: 1s;
  font-family: var(--roboto-font-family);
  margin-right: 10px;
  cursor: pointer;
}

.for-more h4 {
  display: inline-block;
}

.for-more p {
  margin: 0px;
}

.name:hover,
.for-more h4:hover {
  color: var(--navbar-bg);
}

.tag {
  background-color: var(--badge-bg);
  color: var(--white-text);
  font-size: 11px;
  padding: 1px 4px 1px;
  margin-right: 15px;
  margin-left: 5px;
  border-radius: 1px;
  font-family: var(--arial-font-family);
  text-transform: capitalize;
}

.tag-2 {
  padding: 2px 4px 4px;
}

.question-date span,
.language span,
.for-more .asked,
.for-more .in {
  color: var(--btn-bg-gray);
  font-size: 11px;
  font-weight: 400;
  font-family: var(--arial-font-family);
  position: relative;
  bottom: 3px;
}

.question-date .date,
.language .lang,
.for-more .date,
.for-more .lang {
  color: var(--main-blue-bg-text-color);
  cursor: pointer;
  font-size: 11px;
  font-weight: 400;
  font-family: var(--arial-font-family);
  margin-right: 15px;
  transition: 0.5s;
}

.for-more .date,
.for-more .lang {
  position: relative;
  bottom: 2px;
}

.question-date .date:hover,
.language .lang:hover,
.for-more .date:hover,
.for-more .lang:hover {
  color: var(--navbar-bg);
}

.user-asked h5,
.user-asked-mobile h5 {
  transition: 1s;
  font-size: 19px;
  font-weight: 700;
  line-height: 27px;
  color: var(--navbar-bg);
  transition: 0.5s;
  font-family: var(--roboto-font-family);
  cursor: pointer;
}

.user-asked-mobile h5 {
  padding-top: 8px;
}

.user-asked h5:hover,
.user-asked-mobile h5:hover {
  color: var(--main-blue-bg-text-color);
}

.user-description p,
.user-asked-mobile p {
  margin-bottom: 17.5px;
  font-size: 15px;
  line-height: 30px;
  font-family: var(--roboto-font-family);
  color: var(--footer-text-color);
  padding-top: 8px;
}

.tags {
  margin-bottom: 30px;
}

.tags-mobile {
  margin-bottom: 5px;
}

.q-view-answer, .q-view-answer-mobile {
  padding: 15px;
  border-radius: 2px;
  background-color: var(--footer-bg-question);
}

.q-view-answer-mobile {
  margin-top: 15px;
}

.tags span,
.q-view-answer span,
.q-view-answer-mobile span {
  border: 1px solid var(--separator-color);
  background-color: var(--white-text);
  padding: 5px 6px 5px;
  margin-right: 7px;
  font-family: var(--arial-font-family);
  font-size: 11px;
  color: var(--btn-bg-gray);
  font-weight: 400;
  cursor: pointer;
  border-radius: 2px;
  transition: 0.5s;
}

.q-view-answer span, .q-view-answer-mobile span {
  padding: 8px 10px;
}

.q-view-answer i, .q-view-answer-mobile {
  margin-right: 12px;
}

.q-view-answer .views, .q-view-answer-mobile .views {
  cursor: text;
}

.q-view-answer button, .q-view-answer-mobile button {
  background-color: var(--navbar-bg);
  border-radius: 2px;
  font-family: var(--arial-font-family);
  font-size: 14px;
  letter-spacing: 0.8px;
  font-weight: 700;
  padding: 3px 12px 6px 13px;
  color: var(--white-text);
  border: none;
  transition: 0.5s;
}

.q-view-answer button:hover,
.q-view-answer-mobile button:hover {
  background-color: var(--main-blue-bg-text-color);
}

.tags span:hover {
  background-color: var(--main-blue-bg-text-color);
  color: var(--white-text);
  border-color: var(--main-blue-bg-text-color);
}

.user-img:hover .user-popup {
  display: block;
}

/* User Popup */
.user-popup {
  z-index: 100;
  top: 100%;
  width: 300px;
  display: none;
  transition: 0.5s;
}

.user-popup h3 {
  font-size: 15px;
  font-weight: 700;
  padding-top: 10px;
  font-family: var(--roboto-font-family);
  color: var(--main-blue-bg-text-color);
  cursor: pointer;
  transition: 0.5s;
}

.user-popup h3:hover {
  color: var(--navbar-bg);
}

.user-popup p {
  font-family: var(--arial-font-family);
  font-size: 12px;
  font-weight: 400;
  color: var(--btn-bg-gray);
}

.user-popup ul {
  list-style: none;
  background-color: var(--profile-bg);
  padding: 15px;
  text-align: start !important;
  font-size: 12px;
  border-radius: 2px;
  line-height: 2;
}

.user-popup ul li {
  color: var(--btn-bg-gray);
}

.user-popup ul i {
  padding-right: 10px;
}

.user-popup ul .special-answer {
  padding-right: 0px;
  padding-left: 10px;
}

.user-popup img {
  width: 30%;
}

.user-popup button {
  background-color: var(--main-blue-bg-text-color);
  transition: 0.5s;
  font-family: var(--roboto-font-family);
  color: var(--white-text);
}

.user-popup button:hover {
  background-color: var(--widget-red-color);
}

.vote .arrow-up {
  width: 0;
  height: 1px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  cursor: pointer;
  position: absolute;
  top: 48px;
  left: 17px;

  border-bottom: 9px solid #677075;
}

.vote .arrow-down {
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  position: absolute;
  top: 110px;
  left: 17px;
  cursor: pointer;

  border-top: 9px solid #677075;
}

.vote .vote-counter {
  position: absolute;
  left: 7px;
  top: 70px;
  color: #677075;
  font-family: var(--roboto-font-family);
  font-size: 20px;
  font-weight: 700;
}

/* Question mobile */

.question-mobile {
  display: none;
}

.vote-2 {
  bottom: 51px;
  left: 12px;
}

.wrap-img-counter-more {
  display: flex;
}

.wrap-img-counter-more img {
  width: 100%;
  border-radius: 50%;
  border: 2px solid var(--main-blue-bg-text-color);
  padding: 3px;
  cursor: pointer;
}

.for-more {
  margin-left: 70px;
}

@media screen and (max-width: 768px) {
  .social-question {
    padding: 15px;
  }

  .question-web {
    display: none !important;
  }

  .question-mobile {
    display: block;
  }
}
</style>
