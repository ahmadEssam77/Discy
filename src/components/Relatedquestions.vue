<template>
  <div>
    <!-- Related Questions -->
    <section class="position-relative">
      <div class="separator position-absolute"></div>
      <div class="row bg-light p-2">
        <div class="col-md-2 pt-5 pb-3">
          <!-- <i class="fas fa-question"></i> -->
        </div>
        <div class="col-md-10 pt-5 pb-3">
          <!-- <h2 class="">Related Questions</h2> -->
        </div>
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
    <!-- Top members -->
    <!-- <section class="position-relative">
      <div class="separator position-absolute"></div>
      <div class="row bg-light p-2">
        <div class="col-md-2 pt-5 pb-3">
          <i class="fas fa-user-friends"></i>
        </div>
        <div class="col-md-10 pt-5 pb-3">
          <h2 class="">Top members</h2>
        </div>
        <div class="col-md-2">
          <div
            class="user-img d-flex align-items-center justify-content-center"
          >
            <img src="../assets/images/userImg.jpg" alt="" />
          </div>
        </div>
        <div class="col-md-9 offset-1">
          <div>
            <h4>Martin Hope</h4>
            <span>3 Questions 659 points</span>
            <div class="tag me-2">Enlightened</div>
          </div>
        </div>
      </div>
      <div class="row bg-light p-2">
        <div class="col-md-2">
          <div
            class="user-img d-flex align-items-center justify-content-center"
          >
            <img src="../assets/images/userImg.jpg" alt="" />
          </div>
        </div>
        <div class="col-md-9 offset-1">
          <div>
            <h4>Martin Hope</h4>
            <span>3 Questions 659 points</span>
            <div class="tag me-2">Enlightened</div>
          </div>
        </div>
      </div>
      <div class="row bg-light p-2">
        <div class="col-md-2">
          <div
            class="user-img d-flex align-items-center justify-content-center"
          >
            <img src="../assets/images/userImg.jpg" alt="" />
          </div>
        </div>
        <div class="col-md-9 offset-1">
          <div>
            <h4>Martin Hope</h4>
            <span>3 Questions 659 points</span>
            <div class="tag me-2">Enlightened</div>
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script>
export default {
  name: "Relatedquestions",
};
</script>

<style scoped>
.separator {
  width: 112%;
  height: 2px;
  background-color: #e1e3e3;
  left: -6%;
  top: 5%;
}

h2 {
  font-size: 15px;
}

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

/* Member */
/* .user-img img {
  border-radius: 50%;
  border: 2px solid blue;
  padding: 3px;
  cursor: pointer;
  width: 400%;
}

.tag {
  background-color: #eeb78f;
  color: #fff;
  font-size: 12px;
  padding: 2px;
  width: fit-content;
  margin-top: 15px;
  margin-bottom: 15px;
} */
</style>
