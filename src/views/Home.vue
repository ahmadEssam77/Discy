<template>
  <!-- Questions filter -->
  <div class="questions-filter">
    <ul>
      <li>Recent Questions</li>
      <li>Most Answered</li>
      <li>Bump Questions</li>
      <li>Answers</li>
      <li>Most Visited</li>
    </ul>
  </div>
  <!-- Question component -->
  <Question />
  <Question />
  <Question />
  <Question />
  <Question />
  <!-- Load more question -->
  <div class="load-more">
    <button class="btn btn-secondary form-control">Load more questions</button>
  </div>
</template>

<script>
import Question from "../components/Question.vue";

export default {
  name: "Home",
  components: {
    Question,
  },
};
</script>

<style scoped>
.questions-filter {
  background-color: #fff;
  /* padding: 10px; */
  /* border-bottom: 1px solid var(--bottom-separator-color); */
  /* border: 2px solid red; */
}

ul {
  list-style: none;
  padding: 10px 10px 0 10px;
}

ul li {
  display: inline-block;
  margin-right: 15px;
  cursor: pointer;
  padding-top: 20px;
  padding-bottom: 30px;
  border-bottom: 3px solid #fff;
}

ul li:hover {
  border-bottom: 3px solid #333;
}

/* Load more */
.load-more {
  background-color: #fff;
  padding: 20px;
}
</style>
