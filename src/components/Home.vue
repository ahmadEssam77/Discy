<template>
  <div class="questions-filter">
      <ul>
          <li>Recent Questions</li>
          <li>Most Answered</li>
          <li>Bump Questions</li>
          <li>Answers</li>
          <li>Most Visited</li>
      </ul>
  </div>
</template>

<script>
export default {
    name: "Home",
}
</script>

<style scoped>
.questions-filter {
    background-color: #fff;
    /* padding: 10px; */
    /* border-bottom: 1px solid var(--bottom-separator-color); */
    border: 2px solid red;
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

</style>