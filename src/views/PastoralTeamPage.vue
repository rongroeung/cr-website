<script>
import PastoralTeamCard from '@/components/PastoralTeamCard.vue'
export default {
  name: 'PastoralTeamPage',
  components: { PastoralTeamCard },
  data() {
    return {
      data: null,
      senior_pastors: [
        {
          id: 1,
          image: `${this.$githubAssetsPath}/img/Rathana-Profile.png`,
          name: 'Pastor Moeun Rathana',
          description:
            'In the year 2008, Pastor Moeun Rathana stood at a crossroads—a juncture where earthly pursuits met the ethereal. With unwavering conviction, he responded to a divine calling that beckoned him beyond the familiar terrain of IT and Economics. His heart ablaze with purpose, Rathana embarked on a remarkable odyssey.<br/><br/>The Philippines became his sanctuary, its theological halls echoing with ancient wisdom. There, he pursued an M.Div. (Master of Divinity) in Pastoral Studies—a sacred quest that transcended mere academia. Guided by prayer and fueled by faith, he delved into Scripture, honing his understanding of God’s Word. By God’s grace, he emerged not only with academic honors but also with a theological award—an emblem of divine favor.<br/><br/>In 2017, Rathana returned to Cambodia, his spirit aflame. The mantle of pastorship settled upon his shoulders as he assumed leadership at Crossroads Church. His mission extended far beyond the pulpit; it was about holistic transformation. With fervor, he imparted God’s Word to young hearts, nurturing their souls and kindling hope. His passion was a beacon—a lighthouse guiding seekers toward abundant life.<br/><br/>And then, in the tender embrace of 2022, love wove its tapestry. San Phalyn, a kindred soul, joined him in matrimony. Together, they embarked on a shared ministry journey—a symphony of purpose, compassion, and unwavering commitment.<br/><br/>So let this story echo through the ages: Pastor Moeun Rathana, the bridge between heaven and earth, the steward of souls, and the weaver of God’s grace. His legacy—a testament to faith, service, and the transformative power of love—continues to resonate within the walls of Crossroads Church and beyond.'
        }
      ],
      full_time_co_workers: [
        {
          id: 2,
          image: `${this.$githubAssetsPath}/img/Phalyn-Profile.png`,
          name: 'San Phalyn',
          description:
            'Sister San Phalyn is one of CR Alumni. Before she came to join Crossroads for full-time she was an active church member and serving as female dorm leader as well as facilitator for faith and fitness ministry. She used to be a missionary in South Africa for a year program. She decided to join Crossroads in May 2020 due to our Crossroads need of recruiting an accountant to help with our new church building project. Corrently, she is serving as our accountant. Besides, she helps with one-one-one pastoring female students, coordinate female soccer and children and leads her care group. She married Pastor Rathana in October 2022.<br/><br/>Pastoral team member'
        },
        {
          id: 3,
          image: `${this.$githubAssetsPath}/img/Menghun-Profile.png`,
          name: 'Ptr. Chem Menghun',
          description:
            'He embarked on his full-time ministry with Crossroads in 2017, subsequently attending Phnom Penh Bible School. In 2021, he achieved a degree in theology. Presently, he holds the position of assistant Pastor at the church, overseeing several ministries. Additionally, he fulfills the role of pastor for the male dormitory.<br/><br/>Assistant Pastor'
        },
        {
          id: 4,
          image: `${this.$githubAssetsPath}/img/Sreyrath-Profile.png`,
          name: 'Sen Sreyrath',
          description:
            'Sen Sreyrath, having married Menghun, our assistant pastor at Crossroads Church, embarked on a transformative path. In September 2022, she made a resolute decision—to join Crossroads full-time and serve as the children’s ministry pastor. Her heart beats for evangelism, especially reaching out to children and those who feel lost. Beyond her pastoral role, she actively contributes to church administration, including the School of Mission assistant, children’s outreach, and community engagement.<br/><br/>Pastoral team member'
        },
        {
          id: 5,
          image: `${this.$githubAssetsPath}/img/Dany-Profile.png`,
          name: 'Sis. Bin Dany',
          description:
            'Sister Bin Dany became a valuable addition to the Crossroads pastoral team in February 2022. She undertakes the pastoral duties for the female dormitory, provides Bible teachings in the evenings, and coordinates the worship leaders. Her multifaceted role contributes significantly to the spiritual growth and harmony of the community.<br/><br/>Pastoral Team Member'
        }
      ],
      part_time_co_workers: [
        {
          id: 6,
          image: `${this.$githubAssetsPath}/img/Chhoeum-Narongrith-Profile.png`,
          name: 'Chhoeum Narongrith',
          description:
            'Chhoeum Narongrith, one of our dorm students, wears his heart on his sleeve—a devoted follower of Jesus. Recognizing his commitment, we invited him to join our team as a part-time staff member for building maintenance. His multifaceted role includes assisting with male dorm management, soccer ministry, and IT media for livestreams. Hand in hand with Sister Dany, he ensures smooth dorm operations across various areas.<br/><br/>Building Management Assistant<br/>Male Dorm Manager'
        }
      ]
    }
  },
  async created() {
    this.data = await this.fetchData('03001001')
  }
}
</script>

<template>
  <section class="PastoralTeamPage h-fit w-full flex-center flex-col bg-cr-gray">
    <div class="image-header h-300-px w-full flex-center">
      <p class="text-white text-5xl" v-t="'pastoral-team'"></p>
    </div>
    <div class="content w-4/5 mx-auto my-20">
      <p class="text-center text-3xl font-bold text-gray-800 mb-12">Senior Pastors</p>
      <div class="flex justify-center flex-wrap gap-20">
        <template v-for="item in senior_pastors" :key="item.id">
          <PastoralTeamCard :item="item" />
        </template>
      </div>
      <p class="text-center text-3xl font-bold text-gray-800 my-12">Full-Time Co-Workers</p>
      <div class="flex justify-center flex-wrap gap-20">
        <template v-for="item in full_time_co_workers" :key="item.id">
          <PastoralTeamCard :item="item" />
        </template>
      </div>
      <p class="text-center text-3xl font-bold text-gray-800 my-12">Part-Time Co-Workers</p>
      <div class="flex justify-center flex-wrap gap-20">
        <template v-for="item in part_time_co_workers" :key="item.id">
          <PastoralTeamCard :item="item" />
        </template>
      </div>
    </div>
  </section>
</template>

<script scoped></script>
