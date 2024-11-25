<script>
export default {
  name: 'WorshipMinistryPage',
  data() {
    return {
      section1: null,
      contents: []
    }
  },
  async created() {
    this.section1 = await this.getContentById('08001001')

    this.contents = await this.getAllContentStartByIds('08002')
  }
}
</script>

<template>
  <section class="bg-cr-gray-light h-fit w-full flex-center flex-col">
    <div id="08001001" v-if="section1" class="w-full">
      <PageHeader :section="section1" />
    </div>
    <div class="content h-full text-black w-4/5">
      <template v-for="content in contents" :key="content.id">
        <ContentSection :section="content" />
      </template>
    </div>
    <section
      class="relative w-full h-screen bg-cover bg-center"
      style="background-image: url('path-to-background-image.jpg')"
    >
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="relative z-10 flex justify-center items-center h-full text-white">
        <div class="text-center">
          <h1 class="text-4xl font-bold mb-4">Welcome to Our Worship Service</h1>
          <p class="text-xl mb-6">Join us in celebration and praise!</p>
          <a
            href="#live"
            class="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600 transition"
            >Watch Live</a
          >
        </div>
      </div>
    </section>
    <section class="py-12 bg-gray-100">
      <h2 class="text-3xl text-center mb-8">Recent Worship Services</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="relative overflow-hidden rounded-lg shadow-lg">
          <img src="path-to-sermon-thumbnail.jpg" alt="Sermon 1" class="w-full h-56 object-cover" />
          <div class="absolute inset-0 bg-black opacity-30"></div>
          <div class="absolute inset-0 flex justify-center items-center">
            <a href="#sermon1" class="text-white text-2xl font-bold">Play Video</a>
          </div>
        </div>
        <!-- Repeat for other sermons -->
      </div>
    </section>
    <section class="bg-gray-200 py-12">
      <h2 class="text-3xl text-center mb-8">Worship Lyrics</h2>
      <div class="text-center mx-auto w-full max-w-xl">
        <p class="text-xl font-semibold mb-4">Song Title</p>
        <div class="space-y-4">
          <p class="text-2xl">Verse 1: You are my light, my salvation...</p>
          <p class="text-2xl">Chorus: Lift your hands and praise His name...</p>
          <p class="text-2xl">Verse 2: In your presence, we find peace...</p>
          <!-- Add more verses here -->
        </div>
      </div>
    </section>
    <section class="bg-blue-100 py-12">
      <h2 class="text-3xl text-center mb-8">Testimonies & Prayer Requests</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 class="text-xl font-semibold mb-4">Submit Your Prayer Request</h3>
          <form action="#" method="POST" class="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              class="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <textarea
              placeholder="Prayer Request"
              class="w-full px-4 py-2 border border-gray-300 rounded-md"
            ></textarea>
            <button type="submit" class="w-full py-2 bg-blue-500 text-white rounded-md">
              Submit Request
            </button>
          </form>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-4">Watch a Testimony</h3>
          <div class="space-y-4">
            <div class="bg-white p-4 rounded-lg shadow-md">
              <p class="text-lg">"God healed me after a long battle with illness..."</p>
              <a href="#testimony1" class="text-blue-500">Read More</a>
            </div>
            <!-- Repeat for other testimonies -->
          </div>
        </div>
      </div>
    </section>
    <section class="py-12 bg-white">
      <h2 class="text-3xl text-center mb-8">Upcoming Events</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-gray-200 p-6 rounded-lg shadow-lg">
          <h3 class="text-2xl font-semibold mb-4">Sunday Worship Service</h3>
          <p class="text-lg mb-4">Join us for a powerful time of worship and praise!</p>
          <p class="text-lg font-bold">Date: Sunday, 10 AM</p>
        </div>
        <!-- Repeat for other events -->
      </div>
    </section>
    <section class="bg-green-100 py-12">
      <h2 class="text-3xl text-center mb-8">Support Our Ministry</h2>
      <div class="text-center">
        <p class="text-lg mb-4">
          Help us spread God's word and serve our community by contributing to our ministry.
        </p>
        <a href="#donate" class="px-6 py-3 bg-green-500 text-white rounded-lg text-lg"
          >Donate Now</a
        >
      </div>
    </section>
  </section>
</template>

<style scoped></style>
