<template>
  <div>
    <div class="breadcrumb-wrapper">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/" class="text-decoration-none the-home"
              ><i class="fas fa-home pe-1"></i> Home</router-link
            >
          </li>
          <li
            class="breadcrumb-item active the-communities"
            aria-current="page"
          >
            FAQs
          </li>
        </ol>
      </nav>
    </div>
    <main>
      <div>
        <div class="heading">
          <h6><i class="fas fa-info-circle pe-2"></i> FAQs</h6>
          <p>
            Find out everything you need to get started by taking the tour. If
            you still have questions, come back and check out the pinned
            articles, if you still need help contact us:
            <a href="#" class="text-decoration-none">email@domain.com </a>
          </p>
        </div>
        <!-- Accordion -->
        <div>
          <div
            class="accordion"
            v-for="question in questions"
            :key="question.id"
          >
            <div class="question" @click="question.showP = !question.showP; question.minus = !question.minus">
              <div class="sign">
                <div class="minus" v-if="question.minus"></div>
              </div>
              <div class="ask">
                <h2>{{ question.title }}</h2>
              </div>
            </div>
            <div class="answer" v-if="question.showP">
              <p>
                {{ question.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Help",
  data() {
    return {
      // showP: false,
      // minus: true,
      questions: {
        q1: {
          title: "Why do you hate programming?",
          answer: `Questions that need additional work or that are not a good fit
                  for this site may be put on hold by experienced community
                  members. While questions are on hold, they cannot be answered,
                  but can be edited to make them eligible for reopening.`,
          showP: false,
          minus: true,
        },
        q2: {
          title: "Why do you hate programming?",
          answer: `Questions that need additional work or that are not a good fit
                  for this site may be put on hold by experienced community
                  members. While questions are on hold, they cannot be answered,
                  but can be edited to make them eligible for reopening.`,
          showP: false,
          minus: true,
        },
        q3: {
          title: "Why do you hate programming?",
          answer: `Questions that need additional work or that are not a good fit
                  for this site may be put on hold by experienced community
                  members. While questions are on hold, they cannot be answered,
                  but can be edited to make them eligible for reopening.`,
          showP: false,
          minus: true,
        },
        q4: {
          title: "Why do you hate programming?",
          answer: `Questions that need additional work or that are not a good fit
                  for this site may be put on hold by experienced community
                  members. While questions are on hold, they cannot be answered,
                  but can be edited to make them eligible for reopening.`,
          showP: false,
          minus: true,
        },
        q5: {
          title: "Why do you hate programming?",
          answer: `Questions that need additional work or that are not a good fit
                  for this site may be put on hold by experienced community
                  members. While questions are on hold, they cannot be answered,
                  but can be edited to make them eligible for reopening.`,
          showP: false,
          minus: true,
        },
        q6: {
          title: "Why do you hate programming?",
          answer: `Questions that need additional work or that are not a good fit
                  for this site may be put on hold by experienced community
                  members. While questions are on hold, they cannot be answered,
                  but can be edited to make them eligible for reopening.`,
          showP: false,
          minus: true,
        },
        q7: {
          title: "Why do you hate programming?",
          answer: `Questions that need additional work or that are not a good fit
                  for this site may be put on hold by experienced community
                  members. While questions are on hold, they cannot be answered,
                  but can be edited to make them eligible for reopening.`,
          showP: false,
          minus: true,
        },
        q8: {
          title: "Why do you hate programming?",
          answer: `Questions that need additional work or that are not a good fit
                  for this site may be put on hold by experienced community
                  members. While questions are on hold, they cannot be answered,
                  but can be edited to make them eligible for reopening.`,
          showP: false,
          minus: true,
        },
        q9: {
          title: "Why do you hate programming?",
          answer: `Questions that need additional work or that are not a good fit
                  for this site may be put on hold by experienced community
                  members. While questions are on hold, they cannot be answered,
                  but can be edited to make them eligible for reopening.`,
          showP: false,
          minus: true,
        },
        q10: {
          title: "Why do you hate programming?",
          answer: `Questions that need additional work or that are not a good fit
                  for this site may be put on hold by experienced community
                  members. While questions are on hold, they cannot be answered,
                  but can be edited to make them eligible for reopening.`,
          showP: false,
          minus: true,
        },
      },
    };
  },
};
</script>

<style scoped>
div {
  background-color: var(--white-text);
}

.breadcrumb-wrapper {
  padding: 30px;
  padding-bottom: 10px;
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

/* Main */
main {
  background-color: var(--white-text);
  height: 1355px;
  padding: 30px;
}

.heading h6 {
  color: #26333b;
  font-family: var(--roboto-font-family);
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
}

.heading p {
  line-height: 24px;
  font-size: 14px;
  font-family: var(--arial-font-family);
  font-weight: 400;
  color: var(--btn-bg-gray);
}

.heading a:hover {
  color: #272930;
}

/* Accordion */
.accordion {
  background-color: var(--questions-bg-widget);
  border: 1px solid var(--separator-color);
  padding: 15px 30px;
  font-family: var(--roboto-font-family);
  margin-bottom: 17px;
}

.question {
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
}

.ask {
  background-color: transparent;
}

.ask h2 {
  font-size: 14px;
  font-weight: 700;
  margin-top: 7px;
}

.sign {
  width: 20px;
  height: 20px;
  background-color: #333;
  border-radius: 3px;
  margin-right: 15px;
  position: relative;
}

.sign::after {
  content: "";
  width: 8px;
  height: 1.5px;
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.minus {
  width: 1.5px;
  height: 8px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.answer {
  border-top: 1px solid var(--separator-color);
  transition: 0.5s;
  margin-top: 15px;
  padding-top: 7px;
  background-color: transparent;
}

.answer p {
  font-size: 13px;
  font-family: var(--arial-font-family);
  color: var(--footer-text-color);
}
</style>
