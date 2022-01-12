<template>
  <div class="social-question">
    <div class="row">
      <div class="col-md-2">
        <div
          class="user-img d-flex align-items-center justify-content-lg-center position-relative"
        >
          <img src="../assets/images/userImg.jpg" alt="" />
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
          </div>
        </div>
        <div class="vote d-flex align-items-center justify-content-center">
          <div>
            <span @click="addCounter"><i class="fas fa-sort-up"></i></span>
            <p class="mb-0 counter-wrapper">
              <input type="text" name="" v-model="counter" id="" readonly />
            </p>
            <span @click="decreaseCounter"
              ><i class="fas fa-sort-down"></i
            ></span>
          </div>
        </div>
      </div>
      <div class="col-md-10">
        <div class="d-flex align-items-center py-1">
          <div class="name me-2">Martin Hope</div>
          <div class="tag me-2">Enlightened</div>
          <div class="question-date me-2">
            <span>Asked:</span><span class="date"> April 19, 2018</span>
          </div>
          <div class="language me-2">
            <span>In:</span><span class="lang"> Language</span>
          </div>
        </div>
        <div class="user-asked">
          <h5>
            Question .. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo ullam numquam molestiae vero at quia?
          </h5>
        </div>
        <div>
          <p>
            Answer .. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Placeat, natus consectetur quasi saepe numquam similique tempora
            amet voluptas facilis. Optio...
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
  background-color: #fff;
  padding: 20px;
  border-bottom: 0.5px #ccc solid;
}

.name {
  font-size: 14px;
  color: blue;
}

.tag {
  background-color: #eeb78f;
  color: #fff;
  font-size: 12px;
  padding: 2px;
}

.question-date,
.language {
  font-size: 12px;
}

.question-date span,
.language span {
  color: darkgray;
}

.question-date .date,
.language .lang {
  color: blue !important;
}

.user-img img {
  border-radius: 50%;
  border: 2px solid blue;
  padding: 3px;
  cursor: pointer;
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

/* Related hovering */
.user-asked h5 {
  transition: 1s;
}

/* Hovering */
.user-asked h5:hover {
  cursor: pointer;
  color: blue;
}

.tags span:hover {
  background-color: blue;
  color: #fff;
  border-color: blue;
}

.btn:hover {
  background-color: blue;
  border-color: blue !important;
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
