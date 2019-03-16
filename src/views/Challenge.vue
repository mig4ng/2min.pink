<template>
  <div id="challenge" class="text-white mt-6 font-bold">
    <div v-if="screen === 'start'">
      <p>Most people fail this test.</p>
      <p>And so will too!</p>
      <p class="mt-4">Here are the rules:</p>
      <ul>
        <li>You must stay in this window.</li>
        <li>You must keep looking at the screen.</li>
        <li>You must ignore all notifications on your device.</li>
      </ul>
      <p class="mt-4">Are you ready?</p>
      <button class="mt-4 underline text-white text-2xl font-bold"
              @click="startTimer">
              Start Challenge
      </button>
    </div>
    <div v-else-if="screen === 'running'">
      <p>Remaining Seconds: {{ time }}</p>
      <p class="mt-4">Originaly it was going to be 10 minutes, but everyone would fail.</p>
      <button class="mt-4 underline text-white text-2xl font-bold"
              @click="endTimer">
              Give up...
      </button>
    </div>
    <div v-else-if="screen === 'end'">
      <p v-if="isLoser">Told you!</p>
      <p v-else>You did it! Congratulations</p>
      <p class="mb-4">Anyway...</p>
      <p class="mb-4">What is this website all about?! You are asking.</p>
      <p>This website purpose is to raise awareness in smartphone overuse.</p>
      <p class="mt-4">People today are:</p>
      <ul>
        <li>Driving with their eyes glued to their phones,
          risking injuring themselves or worst killing someone.</li>
        <li>Ignoring their loves ones while looking at photos of people they barely know.</li>
        <li>Wasting not 2 minutes but HOURS every single day consuming worthless content.</li>
        <li>This list could go on...</li>
      </ul>
      <p class="mt-4">
        For your own physical and mental health ask yourself the following question.
      </p>
      <p class="mt-4 text-xl">
        Am I controling my smartphone or is my smartphone controling me?
      </p>
      <p class="mt-4">
        Smartphone are great tools, do not get me wrong, if you use them as a tool.
      </p>
      <h2 class="mt-4">Help yourself and others!</h2>
      <p class="mt-4">Want help reducing screen time?
        Read <a class="text-white" href="https://amzn.to/2TBMeZ0">
        How to Break Up with Your Phone</a> by Catherine Price.</p>
      <p class="mt-4">Share this with someone you are concerned with.
        <button class="text-white font-bold underline"
                v-clipboard:copy="'https://2min.pink'"
                v-clipboard:success="onCopy">
                {{ copied ? 'Link copied' : 'Copy link to clipboard' }}
        </button>.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      time: 120,
      interval: null,
      screen: 'start',
      isLoser: false,
      copied: false,
    };
  },
  methods: {
    startTimer() {
      this.interval = setInterval(this.incrementTime, 1000);
      this.screen = 'running';
    },
    endTimer() {
      clearInterval(this.interval);
      this.interval = null;
      this.screen = 'end';
      this.isLoser = true;
    },
    incrementTime() {
      this.time = this.time - 1;
      if (this.time === 0) {
        clearInterval(this.interval);
        this.interval = null;
        this.screen = 'end';
      }
    },
    onCopy() {
      this.copied = true;
    },
  },
};
</script>
