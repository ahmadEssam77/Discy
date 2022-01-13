<template>
  <div class="pt-5">
    <ul>
      <li><i class="fas fa-home"></i> Home</li>
      <li><i class="fas fa-folder"></i> Communities</li>
      <li>
        <i class="fas fa-book-open"></i> Questions
        <ul class="inner-ul">
          <li>New Questions</li>
          <li>Trending Questions</li>
          <li>Must read Questions</li>
          <li>Hot Questions</li>
        </ul>
      </li>
      <li><i class="fas fa-bullhorn"></i> Polls</li>
      <li><i class="fas fa-globe-americas"></i> Groups</li>
      <li><i class="fas fa-basketball-ball"></i> Add group</li>
      <li><i class="fas fa-tag fa-flip-horizontal"></i> Tags</li>
      <li><i class="fas fa-trophy"></i> Badges</li>
      <li><i class="fas fa-user-friends"></i> Users</li>
      <li><i class="fas fa-life-ring"></i> Help</li>
      <li><i class="fas fa-shopping-cart"></i> Buy Theme</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Leftside",
};
</script>

<style scoped>
/* div {
  top: 5%;
} */

ul {
  list-style: none;
  line-height: 2.5;
  padding-left: 0;
}

ul li {
  transition: 0.5s;
}

.inner-ul {
  padding-left: 2rem;
}

.inner-ul li {
  font-size: 12px;
  line-height: 2.5;
  color: gray;
  transition: 0.5s;
}

ul li:hover {
  color: blue;
}

.inner-ul li:hover {
  color: #000;
}
</style>
