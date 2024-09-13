<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      data: null,
      whoWeAre: {
        header: 'Who We Are',
        content:
          'In 1934, a missionary from Ireland and five American businessmen initiated something that no one had ventured into before.</br></br> When no one was able to entrust financial resources to national workers, they did the complete opposite. These six people placed their trust in the locals and decided to provide financial support for a group of ordinary national co-workers. In the 20th century, such partnership was distinctive. Since then, it has become an effective missions strategy.</br></br> Today, CNEC (known as Partners International in North America and other western countries) has centers spanning 56 countries, reaching out to 392 people groups, providing support for 5000 national co-workers to manage over 100 projects. In His faithfulness, God has brought together CNEC workers from different cultures and languages, opening doors for CNEC to minister even in the least evangelized places, from Shanghai in China to Timbuktu in Africa, participating in the call to proclaim the Gospel for the extension of the kingdom of God.'
      },
      whatWeDo: {
        header: 'What We Do',
        content:
          'The key role of CNEC is to be the vital connection between overseas resources (from donors, sponsors and volunteer groups providing expertise) and the national co-workers in each of the countries that CNEC works in.</br></br>In allocating resources, CNEC is involved in a wide range of local projects, including church planting, training of national leaders, construction of homes for children, student centers, schools, drug rehabilitation centers, developing micro-enterprise projects and setting up scholarships for students. The CNEC headquarters, where all administrative matters are processed, is located in Singapore. Currently, CNEC has missions projects in countries below.</br></br>The setting up of centers for university students are to nurture and equip these students so as to develop future leaders for God in Cambodia. Through the ability of these students to make a difference where they are and through their vocation, these students have been leading other Cambodians to Christ. The ministry vision of "Life Influence Life" has taken root in changing and transforming the lives of many students that they may be light and salt to the nation of Cambodia.'
      },
      ourBeliefs: [
        'In the Holy Scriptures as originally given by God, divinely inspired, infallible, entirely trustworthy; and the supreme authority in all matters of faith and conduct.',
        'One God eternally existent in three persons, Father, Son, and Holy Spirit who are equal in power and glory.',
        'Our Lord Jesus Christ, God manifest in the flesh, truly man without ceasing to be truly God. His virgin birth, His sinless human life, His divine miracles, His vicarious and atoning death as a propitiatory and substitutionary sacrifice, His bodily resurrection, His ascension, His mediatorial work, and His personal and visible return in power and glory.',
        'Man was created in the image of God. Through the disobedience of the first man, Adam, the entire human race fell into sin and was alienated from God. The salvation of the lost and sinful man is solely through the shed blood of the Lord Jesus Christ by faith apart from works, and regeneration by Holy Spirit.',
        'The Holy Spirit is a Person, is God, and eternally possesses all divine attributes together with the Father and the Son, by whose indwelling the believer is regenerated, enabled to live a holy life, to witness and work for the Lord Jesus Christ.',
        'The unity of the Spirit of all true believers, the Church, the Body of Christ. Christ Himself is the head of the church, which is His body, and members are responsible to Him for personal growth, for mutual care and for witness to the world.',
        'The bodily resurrection of both the saved and the lost during the second coming of Christ; they that are saved unto the resurrection of life, they that are lost unto the resurrection of damnation.'
      ]
    }
  },
  async created() {
    this.data = await this.getContentById('02001001')
  }
}
</script>

<template>
  <section id="about-page" class="bg-white h-fit w-full flex-center flex-col">
    <div class="image-header h-300-px w-full flex-center">
      <p class="text-5xl" v-t="'about'"></p>
    </div>
    <div class="about-content text-gray-600 flex-center flex-col">
      <div class="my-20 w-4/5">
        <p class="text-3xl font-bold text-gray-800 mb-6">{{ whoWeAre.header }}</p>
        <div class="text-sm sm:text-lg" v-html="whoWeAre.content"></div>
      </div>
      <div class="bg-cr-gray flex-center">
        <div class="w-4/5 my-20">
          <p class="text-3xl font-bold text-gray-800 mb-6">{{ whatWeDo.header }}</p>
          <div class="text-sm sm:text-lg" v-html="whatWeDo.content"></div>
        </div>
      </div>
      <div class="w-4/5 my-20">
        <p class="text-3xl font-bold text-gray-800 mb-6">Our Beliefs</p>
        <ul class="list-disc m-2 flex justify-center flex-wrap gap-6">
          <template v-for="ourBelief in ourBeliefs" :key="ourBelief">
            <li class="text-sm sm:text-lg h-fit w-full sm:w-2/5">
              {{ ourBelief }}
            </li>
          </template>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
