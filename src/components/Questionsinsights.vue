<template>
  <div class="parent py-4">
      <div class="questions position-relative">
          <h6>Question</h6>
          <h3>21</h3>
      </div>
      <div class="answers position-relative">
          <h6>Answer</h6>
          <h3>72</h3>
      </div>
      <div class="best-answers position-relative">
          <h6>Best</h6>
          <h3>14</h3>
      </div>
      <div class="users position-relative">
          <h6>Users</h6>
          <h3>12</h3>
      </div>
  </div>
</template>

<script>
export default {
    name: "Questionsinsights",
}
</script>

<style scoped>
.parent {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 10px;
    background-color: #F9F9F9;
    border-radius: 2px;
}
.parent div {
    width: 50%;
    background-color: #fff;
    padding: 5px;
    text-align: center;
    border: 1px solid #ccc;
}

.questions h6 {
    color: blue;
    font-size: 12px;
}

.questions::before {
    content: "";
    position:absolute;
    width: 2px;
    height: 40px;
    background-color: blue;
    left: 0px;
    top: 20px;
}

.answers h6{
    color: red;
    font-size: 12px;
}

.answers::after {
    content: "";
    position:absolute;
    width: 2px;
    height: 40px;
    background-color: red;
    right: 0px;
    top: 20px;
}

.best-answers h6 {
    color: green;
    font-size: 12px;
}

.best-answers::before {
    content: "";
    position:absolute;
    width: 2px;
    height: 40px;
    background-color: green;
    left: 0px;
    top: 20px;
}

.users h6 {
    color: blue;
    font-size: 12px;
}

.users::after {
    content: "";
    position:absolute;
    width: 2px;
    height: 40px;
    background-color: blue;
    right: 0px;
    top: 20px;
}
</style>