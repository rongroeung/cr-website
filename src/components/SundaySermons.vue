<script>
import CrButton from './CrButton.vue'
import YoutubeCard from './YoutubeCard.vue'
export default {
  name: 'SundaySermons',
  components: { CrButton, YoutubeCard },
  data() {
    return {
      youtubeVideos: [
        {
          id: 1,
          thumbnail:
            'https://raw.githubusercontent.com/rongroeung/cr-website/development/src/assets/img/Deacon_Bryan_Testimony.png',
          url: 'https://www.youtube.com/watch?v=7sDG_CUmTQM',
          title: "Deacon Bryan's Testimony",
          duration: '36:09',
          date: '2 months ago',
          views: '23',
          profileImage:
            'https://yt3.googleusercontent.com/F8KfEmC8FjU5JgXby1P8lGrVJYeZsO2NP14bvJTG0Nq4UfYCHk03Y9KrMXpYOrbDAXOEr6JeTw=s160-c-k-c0x00ffffff-no-rj',
          profileName: 'ccoc online'
        },
        {
          id: 2,
          thumbnail:
            'https://raw.githubusercontent.com/rongroeung/cr-website/development/src/assets/img/Jesus_raise_lazarus_from_the_dead.png',
          url: 'https://www.youtube.com/watch?v=7sDG_CUmTQM',
          title:
            'ព្រះយេស៊ូវប្រោសឡាសាឲ្យរស់ឡើងវិញ (បញ្ចប់) ​| យ៉ូហាន 11:38-45 ~ គ្រូអធិប្បាយ មឿន រតនា',
          duration: '12:09',
          date: '3 months ago',
          views: '76',
          profileImage:
            'https://yt3.googleusercontent.com/F8KfEmC8FjU5JgXby1P8lGrVJYeZsO2NP14bvJTG0Nq4UfYCHk03Y9KrMXpYOrbDAXOEr6JeTw=s160-c-k-c0x00ffffff-no-rj',
          profileName: 'ccoc online'
        },
        {
          id: 3,
          thumbnail:
            'https://raw.githubusercontent.com/rongroeung/cr-website/development/src/assets/img/Knowing_Your_WHY.png',
          url: 'https://www.youtube.com/watch?v=L4wA3Eb9zW0&t',
          title: 'Knowing Your WHY | យ៉ូហាន៖៤ ~ Guest Speaker Pastor Val',
          duration: '41:09',
          date: '3 months ago',
          views: '15',
          profileImage:
            'https://yt3.googleusercontent.com/F8KfEmC8FjU5JgXby1P8lGrVJYeZsO2NP14bvJTG0Nq4UfYCHk03Y9KrMXpYOrbDAXOEr6JeTw=s160-c-k-c0x00ffffff-no-rj',
          profileName: 'ccoc online'
        },
        {
          id: 4,
          thumbnail:
            'https://raw.githubusercontent.com/rongroeung/cr-website/development/src/assets/img/Mother_day.png',
          url: 'https://www.youtube.com/watch?v=4n2c-7Ie2zM',
          title: "ទិវាអ្នកម្តាយ -Mother's Day | សុភាសិត 31:10-31~ គ្រូអធិប្បាយ មឿន រតនា",
          duration: '36:09',
          date: '3 months ago',
          views: '30',
          profileImage:
            'https://yt3.googleusercontent.com/F8KfEmC8FjU5JgXby1P8lGrVJYeZsO2NP14bvJTG0Nq4UfYCHk03Y9KrMXpYOrbDAXOEr6JeTw=s160-c-k-c0x00ffffff-no-rj',
          profileName: 'ccoc online'
        }
      ]
    }
  }
}
</script>
<template>
  <section class="flex-center flex-col bg-white py-20">
    <div class="h-fit w-4/5 flex items-center justify-center flex-col">
      <div id="our-sunday-sermons" class="h-fit w-full mb-6 flex-center flex-col sm:flex-row">
        <p
          class="w-full md:w-2/4 text-center md:text-start text-black text-2xl md:text-4xl xl:text-5xl mb-4 sm:mb-0"
        >
          Our Sunday Sermons
        </p>
        <CrButton label="sunday-sermons" :class="'sm:ml-auto'" buttonRoute="sunday-sermons" />
      </div>
      <div class="flex-center flex-wrap gap-6">
        <template v-for="video in youtubeVideos" :key="video.id">
          <YoutubeCard :video="video" />
        </template>
      </div>
    </div>
  </section>
</template>
<style scoped>
</style>