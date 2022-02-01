<template>
  <!-- Questions filter -->
  <ul class="questions-filter">
    <li><a href="" class="active">Recent Questions</a></li>
    <li><a href="">Most Answered</a></li>
    <li><a href="">Bump Question</a></li>
    <li><a href="">Answers</a></li>
    <li><a href="">Most Visited</a></li>
    <li class="parent-more position-relative">
      <a href="" class="more"><i class="fas fa-ellipsis-h"></i></a>
      <span class="select-more">
        <span>Most Voted</span>
        <span> No Answers</span>
      </span>
    </li>
  </ul>
  <div class="questions-filter-select">
    <select name="" id="">
      <option value="Recent Questions">Recent Questions</option>
      <option value=" Most Answered">Most Answered</option>
      <option value="Bump Questions">Bump Question</option>
      <option value="Answers">Answers</option>
      <option value="Most Visited">Most Visited</option>
    </select>
  </div>
  <!-- Question component -->
  <Question />
  <!-- <Question />
  <Question />
  <Question />
  <Question />
  <Question /> -->
  <!-- Load more question -->
  <div class="load-more">
    <button class="form-control">Load More Questions</button>
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
  font-weight: 700;
  padding-left: 31px;
  border-bottom: 2px solid var(--bottom-separator-color);
}

a {
  text-decoration: none;
  color: #707885;
  padding-bottom: 28.4px;
  transition: 0.2s;
  border-bottom: 3.5px solid var(--white-text);
}

ul {
  list-style: none;
  padding: 8px 10px 0 10px;
}

ul li {
  display: inline-block;
  margin-right: 20px;
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

.more {
  color: var(--navbar-bg);
  position: relative;
  top: 3px;
  border-bottom: none;
}

.parent-more:hover .select-more {
  display: block;
}

.select-more {
  position: absolute;
  width: 110px;
  background-color: var(--white-text);
  display: none;
  color: #707885;
  font-size: 14px;
  font-family: var(--roboto-font-family);
  font-weight: 700;
  padding: 5px 10px;
  right: -10px;
  z-index: 20;
  top: 45px;
  border-radius: 2px;
  box-shadow: 0 0 5px rgb(0 0 0 / 20%);
  transition: 0.3s;
  text-align: center;
}

.select-more span:first-of-type {
  display: inline-block;
  padding-bottom: 7px;
}

.select-more span:hover {
  color: var(--navbar-bg);
  cursor: pointer;
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

.load-more button {
  background-color: var(--btn-bg-gray);
  color: var(--white-text);
  transition: 0.5s;
  border-radius: 2px;
  font-family: var(--roboto-font-family);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.8px;
  padding: 9px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.load-more button:hover {
  background-color: var(--main-blue-bg-text-color);
}

/* Media query */
@media screen and (max-width: 800px) {
  .questions-filter {
    display: none;
  }

  .questions-filter-select {
    display: block;
    padding: 15px;
    background-color: var(--white-text);
  }

  select {
    padding: 10px;
    width: 100%;
    color: #677075;
    outline: none;
    border-radius: 2px;
    font-size: 13px;
    border-color: var(--bottom-separator-color);
    font-family: var(--arial-font-family);
  }
}
</style>
