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
    <main>
      <div class="user-main-wrapper">
        <div class="for-flex-layout">
          <div class="user-wrapper user-wrapper-one">
            <div>
              <img src="../assets/images/user.png" alt="" />
              <h6>Essam</h6>
              <span class="tag">Beginner</span>
            </div>
          </div>
          <div class="user-wrapper user-wrapper-two">
            <div>
              <img src="../assets/images/user.png" alt="" />
              <h6>Essam</h6>
              <span class="tag">Beginner</span>
            </div>
          </div>
          <div class="user-wrapper user-wrapper-three">
            <div>
              <img src="../assets/images/user.png" alt="" />
              <h6>Essam</h6>
              <span class="tag">Beginner</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 2 -->
      <div class="user-main-wrapper-two user-main-wrapper">
        <div class="for-flex-layout">
          <div class="user-wrapper user-wrapper-one">
            <div>
              <img src="../assets/images/user.png" alt="" />
              <h6>Essam</h6>
              <span class="tag">Beginner</span>
            </div>
          </div>
          <div class="user-wrapper user-wrapper-two">
            <div>
              <img src="../assets/images/user.png" alt="" />
              <h6>Essam</h6>
              <span class="tag">Beginner</span>
            </div>
          </div>
          <div class="user-wrapper user-wrapper-three">
            <div>
              <img src="../assets/images/user.png" alt="" />
              <h6>Essam</h6>
              <span class="tag">Beginner</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Pages -->
      <div class="pages-wrapper">
        <div class="layout">
          <div class="one">1</div>
          <div class="two">2</div>
          <div class="three">3</div>
          <div class="more">...</div>
          <div class="six">6</div>
          <div class="right-arrow"><i class="fas fa-angle-right"></i></div>
        </div>
      </div>
    </main>
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

.user-main-wrapper {
  padding: 30px;
}

.user-main-wrapper-two {
  padding-top: 0px;
}

.for-flex-layout {
  display: flex;
  justify-content: space-between;
}

.user-wrapper {
  text-align: center;
  width: 30%;
}

.user-wrapper div {
  border: 1px solid #e4e5e6;
  padding-top: 25px;
  padding-bottom: 50px;
}

.user-wrapper img {
  border-radius: 50%;
  width: 47%;
  margin-bottom: 20px;
  border: 2px solid var(--main-blue-bg-text-color);
  padding: 5px;
  cursor: pointer;
  transition: 1s;
}

.user-wrapper img:hover {
  border-color: #0d0e11;
}

.user-wrapper h6 {
  color: var(--main-blue-bg-text-color);
  font-family: var(--roboto-font-family);
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: 1s;
}

.user-wrapper h6:hover {
  color: #0d0e11;
}

.user-wrapper .tag {
  background-color: #0d0e11;
  color: var(--white-text);
  font-size: 11px;
  padding: 2px 4px 4px;
  border-radius: 1px;
  font-family: var(--arial-font-family);
}

/* pages */
.pages-wrapper {
  margin-right: 25px;
}

.layout {
  display: flex;
  justify-content: end;
}

.layout div {
  border: 1px solid #e4e5e6;
  margin-right: 7px;
  padding: 7px 15px;
  border-radius: 3px;
  transition: 0.5s;
  cursor: pointer;
  color: var(--btn-bg-gray);
  font-family: var(--arial-font-family);
  font-size: 14px;
  font-weight: 700;
}

.one {
  background-color: var(--main-blue-bg-text-color);
  color: #fff !important;
}

.layout div:hover {
  background-color: #0d0e11;
  color: #fff;
}

/* Media query */
@media screen and (max-width: 800px) {
  .breadcrumb-wrapper {
    padding: 10px;
    display: flex;
    align-items: start;
    flex-direction: column;
  }

  .for-flex-layout {
    /* display: flex;
    justify-content: space-between; */
    flex-wrap: wrap;
  }

  .user-wrapper {
    width: 100%;
    margin-bottom: 10px;
  }

  .user-wrapper img {
    width: 25%;
  }

  .pages-wrapper {
    margin-left: 25px;
  }

  .layout {
    justify-content: start;
  }
}
</style>
