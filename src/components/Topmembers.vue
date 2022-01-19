<template>
  <div>
    <section class="topmembers">
      <h3><i class="fas fa-user-friends"></i> Top Members</h3>
      <div class="user-widget">
        <div class="for-img">
          <img src="../assets/images/userImg.jpg" alt="" />
        </div>
        <div class="for-users">
          <h4>Martin Hope</h4>
          <span class="for-space">3 Questions</span><span>669 Points</span>
          <div class="tag">Enlightened</div>
        </div>
      </div>
      <div class="user-widget">
        <div class="for-img">
          <img src="../assets/images/userImg.jpg" alt="" />
        </div>
        <div class="for-users">
          <h4>Martin Hope</h4>
          <span class="for-space">3 Questions</span><span>669 Points</span>
          <div class="tag">Enlightened</div>
        </div>
      </div>
      <div class="user-widget">
        <div class="for-img">
          <img src="../assets/images/userImg.jpg" alt="" />
        </div>
        <div class="for-users">
          <h4>Martin Hope</h4>
          <span class="for-space">3 Questions</span><span>669 Points</span>
          <div class="tag">Enlightened</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Topmembers",
};
</script>

<style scoped>
h3, h4 {
  color: var(--ancor-color);
  font-family: var(--roboto-font-family);
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 18px;
  transition: 0.5s;
}

h3 {
  padding-top: 12px;
}

h4 {
  margin-bottom: 0px;
  color: var(--main-blue-bg-text-color);
}

h4:hover {
  color: var(--ancor-color);
  cursor: pointer;
}

i {
  margin-right: 10px;
}

.user-widget {
  display: flex;
  padding-bottom: 20px;
}

.for-img {
  padding-right: 20px;
}

.for-img img {
  border-radius: 50%;
  border: 1px solid var(--main-blue-bg-text-color);
  padding: 4px;
}

.for-users span {
  font-size: 12px;
  font-weight: 400;
  font-family: var(--arial-font-family);
  color: var(--btn-bg-gray);
  transition: 0.5s;
}

.for-users span:hover {
  cursor: pointer;
  color: var(--main-blue-bg-text-color);
}

.for-users .for-space {
  padding-right: 10px;
}

.tag {
  background-color: var(--badge-bg);
  color: var(--white-text);
  font-size: 11px;
  padding: 2px;
  font-weight: 400;
  font-family: var(--arial-font-family);
  width: fit-content;
  margin-top: 11px;
  margin-bottom: 15px;
}
</style>
