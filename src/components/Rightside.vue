<template>
  <div class="text-center">
    <button class="">Ask A Question</button>
  </div>
  <Questionsinsights />
  <Topmembers />
  <Trendingtags />
</template>

<script>
import Questionsinsights from "./Questionsinsights.vue";
import Trendingtags from "./Trendingtags.vue";
import Topmembers from "./Topmembers.vue";

export default {
  name: "Rightside",
  components: {
    Trendingtags,
    Questionsinsights,
    Topmembers,
  },
};
</script>

<style scoped>
div {
  background-color: var(--white-text);
  border-bottom: 2px solid var(--bottom-separator-color);
  padding: 20px;
}

button {
  border-radius: 2px;
  padding: 10px 50px;
  color: var(--white-text);
  border: none;
  background-color: var(--main-blue-bg-text-color);
  transition: 0.5s;
  font-size: 14px;
  font-weight: bold;
  transition: 0.5s;
  width: 235px;
}

/* Media query */
@media screen and (max-width: 800px) {
  div {
    display: none;
  }
}
</style>
