<template>
  <div>
    <button><i class="fas fa-chevron-up"></i></button>
  </div>
</template>

<script>
export default {
  name: "Upbutton",
};
</script>

<style scoped>
button {
  position: fixed;
  bottom: 2.5%;
  right: 1.5%;
  color: #fff;
  background-color: blue;
  border: 1px solid blue;
  border-radius: 2px;
  padding: 5px 13px;
}

button:hover {
  transform: translateY(-7px);
  background-color: black;
  border-color: black;
}
</style>
