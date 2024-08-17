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
            'https://i.ytimg.com/an_webp/UdmzbrqaIw4/mqdefault_6s.webp?du=3000&sqp=CMqWgbYG&rs=AOn4CLCywTku3foaWARjPXY7IykKXkmpbw',
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
            'https://i.ytimg.com/an_webp/7sDG_CUmTQM/mqdefault_6s.webp?du=3000&sqp=CN6agbYG&rs=AOn4CLC6fW3B6QOFw0oHGaobFKjK-eNGxQ',
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
            'https://i.ytimg.com/an_webp/L4wA3Eb9zW0/mqdefault_6s.webp?du=3000&sqp=CL7ogLYG&rs=AOn4CLDbpkAlWU1iPZa5m6F1J0Q2mWXwtQ',
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
            'https://i.ytimg.com/an_webp/4n2c-7Ie2zM/mqdefault_6s.webp?du=3000&sqp=CIKtgbYG&rs=AOn4CLCstXPLVeFvK93kVrTx8g5C0R_5yw',
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
  <section id="sunday-sermons" class="flex-center flex-col bg-white py-20">
    <div class="h-fit w-4/5 flex items-center justify-center flex-col">
      <div id="our-sunday-sermons" class="h-fit w-full mb-6 flex-center flex-col sm:flex-row">
        <p class="w-2/4 text-black text-2xl md:text-4xl xl:text-5xl mb-4 sm:mb-0">
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