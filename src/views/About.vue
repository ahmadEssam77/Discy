<template>
  <div class="main-wrapper">
    <h3>
      Our mission is to share and grow <br />
      the world’s knowledge.
    </h3>
    <p>
      Discy mission is to share and grow the world’s knowledge. A vast amount of
      the knowledge that would be valuable to many people is currently only
      available to a few — either locked in people’s heads, or only accessible
      to select groups. We want to connect the people who have knowledge to the
      people who need it, to bring together people with different perspectives
      so they can understand each other better, and to empower everyone to share
      their knowledge for the benefit of the rest of the world.
    </p>
    <p>
      The potential of this is huge. If we can execute on our mission, we’re
      going to make a big impact on the world. We just need to get a smart group
      of people together that can get us there.
    </p>
    <div class="iframe-wrapper">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/JuyB7NO0EYY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <h4>Why Choosing Discy <br />Our Values</h4>
    <div class="values-container" v-for="value in values" :key="value.id">
      <h5>{{ value.heading }}</h5>
      <p>
        {{ value.desc }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      values: {
        v1: {
          heading: "1. Maximize long-term value",
          desc: "We are building a product that we hope lasts forever. We want to be a strong and independent engine, this long term focus guides all of the decisions we make.",
        },
        v2: {
          heading: "2. Continuously learn and adapt",
          desc: "We value experimentation, metrics-driven decisions, and speed of iteration. We push to production with every commit so we launch as soon as work is done and learn as quickly as possible.",
        },
        v3: {
          heading: "3. Execute",
          desc: "We value people who have great ideas but who also can quickly drive them all the way to bring their ideas into life.",
        },
        v4: {
          heading: "4. Be direct and respectful",
          desc: "We expect and welcome constant feedback. We trust each other to be open and straightforward, so if you have anything in mind don’t hesitate to call us.",
        },
      },
    };
  },
};
</script>

<style scoped>
.main-wrapper {
  background-color: var(--white-text);
  text-align: center;
}

.main-wrapper h3,
.main-wrapper h4 {
  color: var(--navbar-bg);
  font-family: var(--roboto-font-family);
  font-size: 1.375em; /* == 22px */
  font-weight: 700;
  padding-top: 1.3em;
  padding-bottom: 0.4em;
  line-height: 1.5em;
}

.main-wrapper p {
  font-size: 0.875em; /* == 14px */
  font-weight: 400;
  font-family: var(--roboto-font-family);
  line-height: 1.8em; /* == 28.8px */
  width: 75%;
  text-align: justify;
  margin: auto;
  margin-bottom: 1.5em;
  color: var(--footer-text-color);
}

.iframe-wrapper iframe {
    width: 75%;
    height: 550px;
    margin: auto;
}

.values-container {
    width: 75%;
    margin: auto;
}

.values-container h5 {
  color: var(--navbar-bg);
  font-family: var(--roboto-font-family);
  font-size: 0.875em; /* == 14px */
  font-weight: 700;
  padding-bottom: 1.125em;
  text-align: start;
}

.values-container p {
    text-align: start;
    width: 100%;
    margin-bottom: 1em;
}

/* .values-container p:last-of-type {
    padding-bottom: 3em;
} */

</style>
