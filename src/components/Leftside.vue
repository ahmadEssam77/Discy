<template>
  <div class="left-side">
    <ul>
      <li>
        <router-link
          to="/"
          @click="activate(1)"
          :class="{ myActive: active == 1 }"
          ><i class="fas fa-home pe-2"></i> Home</router-link
        >
      </li>
      <li>
        <router-link
          to="/communities"
          @click="activate(2)"
          :class="{ myActive: active == 2 }"
          ><i class="fas fa-folder pe-2"></i> Communities</router-link
        >
      </li>
      <li>
        <router-link to="" class="questions" @click="hideList"
          ><i class="fas fa-book-open pe-2"></i> Questions</router-link
        >
        <ul class="questions-list">
          <li><router-link to="">New Questions</router-link></li>
          <li><router-link to="">Trending Questions</router-link></li>
          <li><router-link to="">Must read Questions</router-link></li>
          <li><router-link to="">Hot Questions</router-link></li>
        </ul>
      </li>
      <li>
        <router-link
          to="/polls"
          @click="activate(3)"
          :class="{ myActive: active == 3 }"
          ><i class="fas fa-bullhorn pe-2"></i> Polls</router-link
        >
      </li>
      <li>
        <router-link
          to="/groups"
          @click="activate(4)"
          :class="{ myActive: active == 4 }"
          ><i class="fas fa-globe-americas pe-2"></i> Groups</router-link
        >
      </li>
      <li>
        <router-link
          to=""
          @click="activate(5)"
          :class="{ myActive: active == 5 }"
          ><i class="fas fa-basketball-ball pe-2"></i> Add group</router-link
        >
      </li>
      <li>
        <router-link
          to=""
          @click="activate(6)"
          :class="{ myActive: active == 6 }"
          ><i class="fas fa-tag fa-flip-horizontal ps-2"></i> Tags</router-link
        >
      </li>
      <li>
        <router-link
          to=""
          @click="activate(7)"
          :class="{ myActive: active == 7 }"
          ><i class="fas fa-trophy pe-2"></i> Badges</router-link
        >
      </li>
      <li>
        <router-link
          to="/users"
          @click="activate(8)"
          :class="{ myActive: active == 8 }"
          ><i class="fas fa-user-friends pe-2"></i> Users</router-link
        >
      </li>
      <li>
        <router-link
          to="/help"
          @click="activate(9)"
          :class="{ myActive: active == 9 }"
          ><i class="fas fa-life-ring pe-2"></i> Help</router-link
        >
      </li>
      <li>
        <router-link
          to=""
          @click="activate(10)"
          :class="{ myActive: active == 10 }"
          ><i class="fas fa-shopping-cart pe-2"></i> Buy Theme</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
// import $ from "Jquery";

export default {
  name: "Leftside",
  data() {
    return {
      active: 1,
    };
  },
  methods: {
    hideList() {
      const questionsList = document.querySelector(".questions-list");
      if (questionsList.style.display == "none") {
        questionsList.style.display = "block";
      } else {
        questionsList.style.display = "none";
      }
    },
    activate(n) {
      this.active = n;
    },
  },
};
</script>

<style scoped>
.left-side {
  padding-top: 40px;
}

.myActive {
  color: var(--main-blue-bg-text-color);
}

/* Router link vue js */
a {
  text-decoration: none;
  color: var(--ancor-color);
  font-family: var(--roboto-font-family);
  font-weight: 700;
  font-size: 14px;
  transition: 0.5s;
}

a:hover {
  color: var(--main-blue-bg-text-color);
}

ul {
  list-style: none;
  line-height: 2.5;
  padding-left: 0;
}

.left-side i {
  font-size: 18px;
  /* font-weight: 400; */
}

/* Questions list */
.questions-list {
  padding-left: 2rem;
  margin-bottom: 1rem;
}

.questions-list li {
  line-height: 2;
}

.questions-list a {
  font-size: 13px;
  color: var(--btn-bg-gray);
  font-weight: 400;
  font-family: var(--roboto-font-family);
  transition: 0.5s;
}

.questions-list a:hover {
  color: #464e5b;
}

ul li:hover {
  color: blue;
}

.inner-ul li:hover {
  color: #000;
}

/* Media query */
@media screen and (max-width: 800px) {
  .left-side {
    display: none;
  }
}
</style>
