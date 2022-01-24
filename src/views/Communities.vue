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
            Communities
          </li>
        </ol>
      </nav>
      <div class="left">
        <select name="" id="">
          <option value="">Popular</option>
          <option value="">Followers</option>
          <option value="">Name</option>
        </select>
        <div class="search position-relative">
          <input type="search" name="" id="" placeholder="Type to find..." />
          <i class="fas fa-search icon-search"></i>
        </div>
      </div>
    </div>
    <main>
      <div class="com-wrapper">
        <div class="left-wrapper">
          <div class="com-left">
            <div class="top">
              <h6><i class="fas fa-desktop"></i> Programs</h6>
            </div>
            <div class="bottom">
              <div class="followers">
                <i class="fas fa-user-friends"></i> 44 Followers
              </div>
            </div>
          </div>
        </div>
        <div class="right-wrapper">
          <div class="com-right">
            <div class="top">
              <h6><i class="fas fa-keyboard"></i> Programmers</h6>
            </div>
            <div class="bottom">
              <div class="followers">
                <i class="fas fa-user-friends"></i> 44 Followers
              </div>
            </div>
          </div>
        </div>
        <!-- 2 -->
        <div class="left-wrapper">
          <div class="com-left">
            <div class="top">
              <h6><i class="fas fa-desktop"></i> Programs</h6>
            </div>
            <div class="bottom">
              <div class="followers">
                <i class="fas fa-user-friends"></i> 44 Followers
              </div>
            </div>
          </div>
        </div>
        <div class="right-wrapper">
          <div class="com-right">
            <div class="top">
              <h6><i class="fas fa-keyboard"></i> Programmers</h6>
            </div>
            <div class="bottom">
              <div class="followers">
                <i class="fas fa-user-friends"></i> 44 Followers
              </div>
            </div>
          </div>
        </div>

        <!-- 3 -->
        <div class="left-wrapper">
          <div class="com-left">
            <div class="top">
              <h6><i class="fas fa-desktop"></i> Programs</h6>
            </div>
            <div class="bottom">
              <div class="followers">
                <i class="fas fa-user-friends"></i> 44 Followers
              </div>
            </div>
          </div>
        </div>
        <div class="right-wrapper">
          <div class="com-right">
            <div class="top">
              <h6><i class="fas fa-keyboard"></i> Programmers</h6>
            </div>
            <div class="bottom">
              <div class="followers">
                <i class="fas fa-user-friends"></i> 44 Followers
              </div>
            </div>
          </div>
        </div>

        <!-- 4 -->
        <div class="left-wrapper">
          <div class="com-left">
            <div class="top">
              <h6><i class="fas fa-desktop"></i> Programs</h6>
            </div>
            <div class="bottom">
              <div class="followers">
                <i class="fas fa-user-friends"></i> 44 Followers
              </div>
            </div>
          </div>
        </div>
        <div class="right-wrapper">
          <div class="com-right">
            <div class="top">
              <h6><i class="fas fa-keyboard"></i> Programmers</h6>
            </div>
            <div class="bottom">
              <div class="followers">
                <i class="fas fa-user-friends"></i> 44 Followers
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
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
  padding: 30px;
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

/* Main */
main {
  background-color: var(--white-text);
  height: 1355px;
}

.com-wrapper {
  display: flex;
  padding: 30px;
  flex-wrap: wrap;
}

.left-wrapper,
.right-wrapper {
  width: 50%;
}

.left-wrapper {
  padding-right: 15px;
  padding-bottom: 30px;
}

.right-wrapper {
  padding-left: 15px;
  padding-bottom: 30px;
}

.com-left,
.com-right {
  border: 1px solid #e4e5e6;
}

.top {
  padding: 15px 10px;
  border-bottom: 1px solid #e4e5e6;
  position: relative;
}

.top::after {
  content: "";
  position: absolute;
  width: 2px;
  height: 20px;
  background-color: var(--main-blue-bg-text-color);
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}

h6 {
  font-family: var(--roboto-font-family);
  color: var(--navbar-bg);
  font-size: 14px;
  font-weight: 700;
  padding-left: 7px;
}

i {
  padding-right: 7px;
}

.followers {
  width: fit-content;
  padding: 5px 10px;
  border: 1px solid #e4e5e6;
  border-radius: 2px;
  margin: 10px;
  color: var(--btn-bg-gray);
  font-size: 12px;
  font-weight: 400;
}

/* Media query */
@media screen and (max-width: 800px) {
  .breadcrumb-wrapper {
    padding: 10px;
    display: flex;
    align-items: start;
    flex-direction: column;
  }

  .com-wrapper {
    display: flex;
    padding: 5px;
    flex-direction: column;
  }

  .left-wrapper,
  .right-wrapper {
    width: 100%;
  }

  .left-wrapper {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .right-wrapper {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 0px;
    padding-bottom: 10px;
  }
}
</style>
