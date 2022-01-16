<template>
  <div>
    <section class="position-relative">
      <!-- <div class="separator position-absolute"></div> -->
      <div class="row p-2">
        <h2 class="pt-2">
          <i class="fas fa-tag fa-flip-horizontal ps-3"></i> Trending Tags
        </h2>
        <div class="tags-wrapper">
          <a href="">analytics</a>
          <a href="">british</a>
          <a href="">company</a>
          <a href="">computer</a>
          <a href="">developers</a>
          <a href="">django</a>
          <a href="">employee</a>
          <a href="">employer</a>
          <a href="">english</a>
          <a href="">facebook</a>
          <a href="">french</a>
          <a href="">google</a>
          <a href="">interview</a>
          <a href="">javascript</a>
          <a href="">language</a>
          <a href="">life</a>
          <a href="">php</a>
          <a href="">programmer</a>
          <a href="">program</a>
          <a href="">salary</a>
          <a href="">university</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  padding: 10px !important;
}

h2 {
  font-size: 14px;
  font-weight: 700;
  font-family: var(--roboto-font-family);
  color: var(--ancor-color);
}

.tags-wrapper a {
  text-decoration: none;
  color: var(--paragraph-color);
  background-color: var(--white-text);
  border: 1px solid var(--separator-color);
  padding: 2px 5px;
  border-radius: 1px;
  margin: 0 2px 5px 5px;
  font-size: 11px;
  font-weight: 400;
  font-family: var(--arial-font-family);
  transition: 0.5s;
  display: inline-block;
}

.tags-wrapper a:hover {
  background-color: var(--main-blue-bg-text-color);
  color: var(--white-text);
  border-color: var(--main-blue-bg-text-color);
}
</style>
