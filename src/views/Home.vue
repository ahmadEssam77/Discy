<template>
  <!-- Questions filter -->
  <ul class="questions-filter">
    <li><a href="" class="active">Recent Questions</a></li>
    <li><a href="">Most Answered</a></li>
    <li><a href="">Bump Questions</a></li>
    <li><a href="">Answers</a></li>
    <li><a href="">Most Visited</a></li>
  </ul>
  <div class="questions-filter-select">
    <select name="" id="">
      <option value="Recent Questions">Recent Questions</option>
      <option value=" Most Answered">Most Answered</option>
      <option value="Bump Questions">Bump Questions</option>
      <option value="Answers">Answers</option>
      <option value="Most Visited">Most Visited</option>
    </select>
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
  background-color: var(--white-text);
  margin-bottom: 0;
  font-size: 14px;
  font-family: var(--roboto-font-family);
  font-weight: bold;
  padding-left: 2rem;
  border-bottom: 2px solid var(--bottom-separator-color);
}

a {
  text-decoration: none;
  color: #707885;
  padding-bottom: 29px;
  transition: 0.2s;
}

ul {
  list-style: none;
  padding: 10px 10px 0 10px;
}

ul li {
  display: inline-block;
  margin-right: 15px;
  padding-top: 20px;
  padding-bottom: 25px;
  border-bottom: 3.5px solid #fff;
}

ul a:hover {
  border-bottom: 3.5px solid var(--navbar-bg);
}

a:hover {
  color: var(--navbar-bg);
}

.active {
  color: var(--navbar-bg);
  border-bottom: 3.5px solid var(--navbar-bg);
}

.questions-filter-select {
  display: none;
}

/* Load more */
.load-more {
  background-color: #fff;
  padding: 20px;
}

/* Media query */
@media screen and (max-width: 800px) {
  .questions-filter {
    display: none;
  }

  .questions-filter-select {
    display: block;
    padding: 10px;
    background-color: var(--white-text);
  }

  select {
    padding: 10px;
    width: 100%;
    color: #677075;
    outline: none;
    font-size: 13px;
    border-color: var(--bottom-separator-color);
    font-family: var(--arial-font-family);
  }
}
</style>
