<template>
  <div class="text-center">
    <button class="">Ask A Question</button>
  </div>
  <Questionsinsights />
  <Topmembers />
  <!-- <Trendingtags /> -->
</template>

<script>
import Questionsinsights from "./Questionsinsights.vue";
import Topmembers from "./Topmembers.vue";
// import Trendingtags from "./Trendingtags.vue";

export default {
  name: "Rightside",
  components: {
    Questionsinsights,
    Topmembers,
    // Trendingtags,
  },
};
</script>

<style scoped>
div {
  background-color: var(--white-text);
  border-bottom: 2px solid var(--bottom-separator-color);
  padding: 18px;
  /* padding-bottom: 0; */
}

button {
  border-radius: 2px;
  padding: 9px 12px 9px;
  color: var(--white-text);
  border: none;
  background-color: var(--main-blue-bg-text-color);
  transition: 0.5s;
  font-size: 14px;
  font-weight: 700;
  font-family: var(--roboto-font-family);
  transition: 0.5s;
  letter-spacing: 0.8px;
  width: 230px;
  margin-bottom: 2.5px;
}

button:hover {
  background-color: var(--btn-bg-gray);
}

/* Media query */
@media screen and (max-width: 800px) {
  div {
    display: none;
  }
}
</style>
