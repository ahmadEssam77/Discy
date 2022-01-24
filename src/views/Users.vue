<template>
  <div>
    <div class="breadcrumb-wrapper">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/" class="text-decoration-none the-home"
              ><i class="fas fa-home pe-2"></i> Home</router-link
            >
          </li>
          <li
            class="breadcrumb-item active the-communities"
            aria-current="page"
          >
            Users
          </li>
        </ol>
      </nav>
      <div class="left">
        <select name="" id="">
          <option value="">Date Registered</option>
          <option value="">Name</option>
          <option value="">ID</option>
          <option value="">Questions</option>
          <option value="">Answers</option>
          <option value="">Best Answers</option>
          <option value="">Points</option>
          <option value="">Followers</option>
          <option value="">Posts</option>
          <option value="">Comments</option>
        </select>
        <div class="search position-relative">
          <input type="search" name="" id="" placeholder="Type to find..." />
          <i class="fas fa-search icon-search"></i>
        </div>
      </div>
    </div>
    <main></main>
  </div>
</template>

<script>
export default {
  name: "Users",
};
</script>

<style scoped>
div {
  background-color: var(--white-text);
}

.breadcrumb-wrapper {
  padding: 28px;
  border-bottom: 2px solid var(--separator-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.breadcrumb-wrapper .the-home {
  color: var(--ancor-color) !important;
  font-family: var(--arial-font-family);
  font-size: 13px;
  font-weight: 600;
  transition: 0.5s;
}

.breadcrumb-wrapper .the-home:hover {
  color: var(--main-blue-bg-text-color) !important;
}

.breadcrumb-wrapper .the-communities {
  font-family: var(--arial-font-family);
  color: var(--btn-bg-gray);
  font-size: 13px;
  font-weight: 600;
  padding-top: 4px;
}

select,
.search input {
  color: var(--community-color);
  cursor: pointer;
  padding: 11px 8px 11px 11px;
  outline: none;
  font-size: 13px;
  border: 1px solid #e4e5e6;
  font-family: var(--arial-font-family);
}

.search {
  display: inline-block;
}

.search input {
  cursor: text;
  margin-left: 10px;
  padding-right: 0;
}

.search i {
  position: absolute;
  color: var(--community-color);
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 14px;
}

main {
  background-color: var(--white-text);
  height: 1355px;
}
</style>
