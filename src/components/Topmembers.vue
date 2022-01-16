<template>
  <div>
    <section class="position-relative">
      <!-- <div class="separator position-absolute"></div> -->
      <div class="row p-2">
        <div class="col-md-2 pb-3">
          <i class="fas fa-user-friends"></i>
        </div>
        <div class="col-md-10 pb-3">
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
            <span class="pe-2">3 Questions </span> <span>659 points</span>
            <div class="tag me-2">Enlightened</div>
          </div>
        </div>
      </div>
      <div class="row p-2">
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
            <span class="pe-2">3 Questions </span> <span>659 points</span>
            <div class="tag me-2">Enlightened</div>
          </div>
        </div>
      </div>
      <div class="row p-2">
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
            <span class="pe-2">3 Questions </span> <span>659 points</span>
            <div class="tag me-2">Enlightened</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h2 {
  font-size: 14px;
  font-family: var(--roboto-font-family);
  font-weight: 700;
  color: var(--ancor-color);
}

h4 {
  font-size: 14px;
  font-family: var(--roboto-font-family);
  font-weight: 700;
  color: var(--main-blue-bg-text-color);
  transition: 0.5s;
}

span {
  font-size: 12px;
  font-weight: 400;
  font-family: var(--arial-font-family);
  color: var(--btn-bg-gray);
}

span:hover {
  color: var(--main-blue-bg-text-color);
  cursor: pointer;
}

h4:hover {
  color: var(--ancor-color);
  cursor: pointer;
}

.user-img img {
  border-radius: 50%;
  border: 2px solid blue;
  padding: 3px;
  cursor: pointer;
  width: 400%;
}

.tag {
  background-color: var(--badge-bg);
  color: var(--white-text);
  font-size: 11px;
  padding: 2px;
  font-weight: 400;
  font-family: var(--arial-font-family);
  width: fit-content;
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
