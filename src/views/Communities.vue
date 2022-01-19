<template>
  <div>
    <div class="breadcrumb-wrapper">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">Library</li>
        </ol>
      </nav>
    </div>
    <main></main>
  </div>
</template>

<script>
export default {
  name: "Communities",
};
</script>

<style scoped>
div {
  background-color: var(--white-text);
}

.breadcrumb-wrapper {
  padding: 15px;
  border-bottom: 2px solid var(--separator-color);
}

main {
  background-color: var(--white-text);
  height: 1355px;
}
</style>
