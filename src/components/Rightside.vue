<template>
  <div class="ask-question d-flex justify-content-center align-items-center">
    <button class="btn btn-primary">Ask A Question</button>
  </div>
</template>

<script>
export default {
  name: "Rightside",
};
</script>

<style scoped>
.ask-question {
  background-color: #fff;
  padding: 10px 1px;
  border-bottom: 2px solid var(--bottom-separator-color);
}

.btn {
  padding: 3px 20px !important;
  border-radius: 3px !important;
}
</style>
