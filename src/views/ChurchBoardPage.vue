<script>
export default {
  name: 'ChurchBoardPage',
  data() {
    return {
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
      ]
    }
  }
}
</script>

<template>
  <section class="h-fit w-full flex-center flex-col bg-cr-gray text-black">
    <div class="image-header h-300-px w-full flex-center">
      <p class="text-white text-5xl" v-t="'church-board'"></p>
    </div>
    <div class="content w-4/5 mx-auto my-20">
      <p class="text-secondary text-2xl md:text-4xl xl:text-5xl text-center mb-2">
        Church Board of Directors 2024-2025
      </p>
      <p class="text-sm md:text-base my-8">
        We come together as a community, bound by faith and purpose, to share in the leadership and
        stewardship of our beloved church. With hearts full of gratitude, we thank God for calling
        us, the alumni, to join hands and build up the body of Christ.
      </p>
      <p class="text-sm md:text-base my-8">Guiding Principles for Our Board:</p>

      <div class="p-4 pt-0">
        <ul class="list-disc m-2">
          <template v-for="principle in Principles" :key="principle">
            <li>
              <b>{{ principle.header }}</b
              >: {{ principle.content }}
            </li>
          </template>
        </ul>
      </div>
    </div>
  </section>
</template>

<script scoped>
</script>