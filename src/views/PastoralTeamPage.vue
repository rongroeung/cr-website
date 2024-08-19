<script>
import PastoralTeamCard from '@/components/PastoralTeamCard.vue'
export default {
  name: 'PastoralTeamPage',
  components: { PastoralTeamCard },
  data() {
    return {
      PastoralTeams: [
        {
          id: 1,
          image: `${this.$assetsPath}/img/Rathana-Profile.png`,
          name: '',
          description:
            'Pastor Moeun Rathana: A Journey of Faith and Service<br/><br/>And I heard the voice of the Lord saying, “Whom shall I send, and who will go for us?” Then I said, “Here I am! Send me.” (Isaiah 6:8)<br/><br/>In the year 2008, Pastor Moeun Rathana stood at a crossroads—a juncture where earthly pursuits met the ethereal. With unwavering conviction, he responded to a divine calling that beckoned him beyond the familiar terrain of IT and Economics. His heart ablaze with purpose, Rathana embarked on a remarkable odyssey.<br/><br/>The Philippines became his sanctuary, its theological halls echoing with ancient wisdom. There, he pursued an M.Div. (Master of Divinity) in Pastoral Studies—a sacred quest that transcended mere academia. Guided by prayer and fueled by faith, he delved into Scripture, honing his understanding of God’s Word. By God’s grace, he emerged not only with academic honors but also with a theological award—an emblem of divine favor.<br/><br/>In 2017, Rathana returned to Cambodia, his spirit aflame. The mantle of pastorship settled upon his shoulders as he assumed leadership at Crossroads Church. His mission extended far beyond the pulpit; it was about holistic transformation. With fervor, he imparted God’s Word to young hearts, nurturing their souls and kindling hope. His passion was a beacon—a lighthouse guiding seekers toward abundant life.<br/><br/>And then, in the tender embrace of 2022, love wove its tapestry. San Phalyn, a kindred soul, joined him in matrimony. Together, they embarked on a shared ministry journey—a symphony of purpose, compassion, and unwavering commitment.<br/><br/>So let this story echo through the ages: Pastor Moeun Rathana, the bridge between heaven and earth, the steward of souls, and the weaver of God’s grace. His legacy—a testament to faith, service, and the transformative power of love—continues to resonate within the walls of Crossroads Church and beyond.'
        },
        {
          id: 2,
          image: `${this.$assetsPath}/img/Phalyn-Profile.png`,
          name: '',
          description: ''
        },
        {
          id: 2,
          image: `${this.$assetsPath}/img/Menghun-Profile.png`,
          name: '',
          description: ''
        },
        {
          id: 2,
          image: `${this.$assetsPath}/img/Sreyrath-Profile.png`,
          name: '',
          description: ''
        },
        {
          id: 2,
          image: `${this.$assetsPath}/img/Dany-Profile.png`,
          name: '',
          description: ''
        },
        {
          id: 2,
          image: `${this.$assetsPath}/img/Chhoeum-Narongrith-Profile.png.png`,
          name: '',
          description: ''
        }
      ]
    }
  }
}
</script>

<template>
  <section class="h-fit w-full flex-center flex-col bg-cr-gray">
    <div class="image-header h-300-px w-full flex-center">
      <p class="text-white text-5xl" v-t="'pastoral-team'"></p>
    </div>
    <div class="content w-4/5 mx-auto my-20">
      <h1 class="text-3xl font-bold text-gray-800 mb-8">Full-Time Pastors</h1>
      <div class="flex justify-center flex-wrap gap-20">
        <template v-for="team in 4" :key="team.id">
          <PastoralTeamCard :item="team" />
        </template>
      </div>
    </div>
  </section>
</template>
  
  <script scoped>
</script>