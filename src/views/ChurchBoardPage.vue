<script>
export default {
  name: 'ChurchBoardPage',
  data() {
    return {
      data: null,
      ChurchBoard: {
        title: 'church-board-of-directors',
        description:
          'We come together as a community, bound by faith and purpose, to share in the leadership and stewardship of our beloved church. With hearts full of gratitude, we thank God for calling us, the alumni, to join hands and build up the body of Christ.',
        image: `${this.$githubAssetsPath}/img/Group-Photo---Church-Board-Members-2024.jpg`,
        imageDescription:
          'In the photo (L to R): Mrs. Sam Dalis, Mr. Gnonn Danet, Mrs. Sous Sinoun, Mrs. Chann Socheata, Mr. Norl Chanly, Mr. Theng Rathrongroeung, Pastor Moeun Rathana',
        Principles: [
          {
            header: 'Purposeful Service',
            content:
              'As stewards of our churchS vision and mission, your role is pivotal. May your decisions be bathed in prayer, guided by GodS will, and aimed at serving our congregation with purpose.'
          },
          {
            header: 'Unity and Harmony',
            content:
              'Let us embrace our diversity as a strength. Working together in unity, respecting each others perspectives, we enrich our discussions and fortify our ministry.'
          },
          {
            header: 'Servant Leadership',
            content:
              ' Following the example of Jesus. true leadership lies in selfless service. May your leadership be marked by humility, compassion, and a heart devoted to others.'
          },
          {
            header: 'Prayerful Dependence',
            content:
              'Seek God"s wisdom in every decision. May our meetings be sanctified by prayer, inviting His guidance for the growth and flourishing of our church.'
          },
          {
            header: 'Encouragement and Support',
            content:
              'Lean on one another. Encourage, uplift, and support fellow board members. Together, we form a team fueled by love for Christ and His people.'
          }
        ],
        BoardMembers: [
          {
            name: 'Pastor Moeun Rathana',
            role: 'Chair Person'
          },
          {
            name: 'Mrs. Sous Sinoun',
            role: 'Vice Chair Person'
          },
          {
            name: 'Mrs. Sam Dalis',
            role: 'Secretary'
          },
          {
            name: 'Mrs. Chann Socheata',
            role: 'Treasurer'
          },
          {
            name: 'Mr. Gnonn Danet',
            role: 'member'
          },
          {
            name: 'Mr. Norl Chanly',
            role: 'member'
          },
          {
            name: 'Mr. Theng Rathrongroeung',
            role: 'member'
          }
        ]
      }
    }
  },
  async created() {
    this.data = await this.fetchData('03001001')
  }
}
</script>

<template>
  <section id="church_board" class="h-fit w-full flex-center flex-col bg-cr-gray text-black">
    <div class="image-header h-300-px w-full flex-center">
      <p class="text-white text-5xl" v-t="'church-board'"></p>
    </div>
    <div class="content w-4/5 mx-auto my-20">
      <p
        class="text-secondary text-2xl md:text-4xl xl:text-5xl text-center mb-2"
        v-t="ChurchBoard.title"
      ></p>
      <p class="text-sm md:text-lg my-8">
        {{ ChurchBoard.description }}
      </p>
      <p class="text-sm md:text-lg my-8">Guiding Principles for Our Board:</p>

      <div class="p-4 pt-0">
        <ul class="list-disc m-2">
          <template v-for="principle in ChurchBoard.Principles" :key="principle">
            <li class="text-sm md:text-lg my-1">
              <b>{{ principle.header }}</b
              >: {{ principle.content }}
            </li>
          </template>
        </ul>
      </div>
      <div class="flex-center flex-col">
        <img :src="ChurchBoard.image" alt="Image of church board member" class="w-4/5" />
        <p class="text-sm md:text-lg my-2">
          {{ ChurchBoard.imageDescription }}
        </p>
      </div>
      <div class="p-4 pt-0">
        <ul class="list-disc m-2">
          <template v-for="boardMember in ChurchBoard.BoardMembers" :key="boardMember">
            <li class="text-sm md:text-lg italic my-1">
              {{ boardMember.name }} | <span v-t="boardMember.role"></span>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </section>
</template>

<script scoped></script>
