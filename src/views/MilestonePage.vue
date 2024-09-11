<script>
import { windowResizeMixin } from '@/util/mixin'
export default {
  name: 'MilestonePage',
  mixins: [windowResizeMixin],
  data() {
    return {
      data: null
    }
  },
  async created() {
    this.data = await this.getContentById('04001001')
  },
  computed: {
    cssBefore() {
      return this.width < 768 ? 'card-wrapper' : 'card-wrapper-right' // width data in mixin
    }
  }
}
</script>

<template>
  <section class="bg-secondary h-fit w-full flex-center flex-col">
    <div class="image-header h-300-px w-full flex-center">
      <p class="text-4xl xl:text-5xl" v-t="'milestone'"></p>
    </div>
    <div class="content w-4/5 flex-center my-20">
      <div
        class="space-y-8 relative before:absolute before:inset-0 before:ml-8 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent"
      >
        <!-- Item #1 -->
        <div
          class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
        >
          <!-- Icon -->
          <div
            class="flex items-center justify-center w-16 h-16 rounded-full border border-white bg-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"
          >
            2000
          </div>
          <!-- Card -->
          <div
            class="card-wrapper w-[calc(100%-6rem)] md:w-[calc(50%-4rem)] bg-white p-4 rounded border border-slate-200 text-black shadow"
          >
            <div class="flex-center flex-col mb-1">
              <img src="../assets/img/About--Cover-001.jpg" class="w-auto h-auto rounded mb-4" />
              <div class="font-bold text-black text-start">
                CNEC Singapore started Crossroads Ministry
              </div>
            </div>
          </div>
        </div>

        <!-- Item #2 -->
        <div
          class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
        >
          <!-- Icon -->
          <div
            class="flex items-center justify-center w-16 h-16 rounded-full border border-white bg-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"
          >
            2011
          </div>
          <!-- Card -->
          <div
            :class="cssBefore"
            class="w-[calc(100%-6rem)] md:w-[calc(50%-4rem)] bg-white p-4 rounded border border-slate-200 text-black shadow"
          >
            <div class="flex-center flex-col mb-1">
              <img src="../assets/img/About--Cover-001.jpg" class="w-auto h-auto rounded mb-4" />
              <div class="font-bold text-black text-start">
                CNEC installed interim Local Board of Directors
              </div>
            </div>
          </div>
        </div>

        <!-- Item #3 -->
        <div
          class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
        >
          <!-- Icon -->
          <div
            class="flex items-center justify-center w-16 h-16 rounded-full border border-white bg-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"
          >
            2013
          </div>
          <!-- Card -->
          <div
            class="card-wrapper w-[calc(100%-6rem)] md:w-[calc(50%-4rem)] bg-white p-4 rounded border border-slate-200 text-black shadow"
          >
            <div class="flex-center flex-col mb-1">
              <img src="../assets/img/About--Cover-001.jpg" class="w-auto h-auto rounded mb-4" />
              <div class="font-bold text-black text-start">
                CNEC sent potential Local Leaders to Bible School
              </div>
            </div>
          </div>
        </div>

        <!-- Item #4 -->
        <div
          class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
        >
          <!-- Icon -->
          <div
            class="flex items-center justify-center w-16 h-16 rounded-full border border-white bg-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"
          >
            2017
          </div>
          <!-- Card -->
          <div
            :class="cssBefore"
            class="w-[calc(100%-6rem)] md:w-[calc(50%-4rem)] bg-white p-4 rounded border border-slate-200 text-black shadow"
          >
            <div class="flex-center flex-col mb-1">
              <img src="../assets/img/About--Cover-001.jpg" class="w-auto h-auto rounded mb-4" />
              <div class="font-bold text-black text-start">
                CNEC installed an official Pastor Of the Crossroads Church
              </div>
            </div>
          </div>
        </div>

        <!-- Item #5 -->
        <div
          class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
        >
          <!-- Icon -->
          <div
            class="flex items-center justify-center w-16 h-16 rounded-full border border-white bg-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"
          >
            2020
          </div>
          <!-- Card -->
          <div
            class="card-wrapper w-[calc(100%-6rem)] md:w-[calc(50%-4rem)] bg-white p-4 rounded border border-slate-200 text-black shadow"
          >
            <div class="flex-center flex-col mb-1">
              <img src="../assets/img/About--Cover-001.jpg" class="w-auto h-auto rounded mb-4" />
              <div class="font-bold text-black text-start">
                CNEC installed Official Local Board f Directors & started New Building Project
              </div>
            </div>
          </div>
        </div>
        <!-- Item #6 -->
        <div
          class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
        >
          <!-- Icon -->
          <div
            class="flex items-center justify-center w-16 h-16 rounded-full border border-white bg-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"
          >
            2022
          </div>
          <!-- Card -->
          <div
            :class="cssBefore"
            class="w-[calc(100%-6rem)] md:w-[calc(50%-4rem)] bg-white p-4 rounded border border-slate-200 text-black shadow"
          >
            <div class="flex-center flex-col mb-1">
              <img src="../assets/img/About--Cover-001.jpg" class="w-auto h-auto rounded mb-4" />
              <div class="font-bold text-black text-start">
                The New Crossroads Missions Centre is completely built
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card-wrapper {
  position: relative;
  z-index: 1;
}
.card-wrapper:before {
  content: ' ';
  z-index: -1;
  position: absolute;
  background: white;
  width: 30px;
  height: 30px;
  top: calc(50% - 15px);
  margin-left: -30px;
  transform: rotate(45deg);
}
.card-wrapper-right {
  position: relative;
  z-index: 1;
}
.card-wrapper-right:after {
  content: ' ';
  z-index: -1;
  position: absolute;
  background: white;
  width: 30px;
  height: 30px;
  top: calc(50% - 15px);
  right: 0;
  margin-right: -15px;
  transform: rotate(45deg);
}
</style>
