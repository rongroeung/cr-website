<script>
import Carousel from '@/components/Carousel.vue'
export default {
  name: 'HomeView',
  components: { Carousel }
}
</script>

<template>
  <main>
    <Carousel />
    <section class="text-white text-center bg-secondary h-full">
      <h1 class="text-5xl">Our Discipleship Jurney</h1>
      <ul>
        <li>Devotion di</li>
        <li>Devotion di</li>
        <li>Devotion di</li>
        <li>Devotion di</li>
      </ul>

      <section class="bg-secondary flex flex-row border-1">
        <div class="bg-white text-black h-96 w-96 border-1">
          <p>Icon</p>
          <p>Title</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos possimus minus
            consequatur laudantium incidunt. Corporis maxime, quia incidunt impedit eius,
            accusantium provident beatae libero tempore, non dolores. Ad, quo tempora!
          </p>
        </div>
        <div class="bg-white text-black h-96 w-96 border-1">
          <p>Icon</p>
          <p>Title</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos possimus minus
            consequatur laudantium incidunt. Corporis maxime, quia incidunt impedit eius,
            accusantium provident beatae libero tempore, non dolores. Ad, quo tempora!
          </p>
        </div>
        <div class="bg-white text-black h-96 w-96 border-1">
          <p>Icon</p>
          <p>Title</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos possimus minus
            consequatur laudantium incidunt. Corporis maxime, quia incidunt impedit eius,
            accusantium provident beatae libero tempore, non dolores. Ad, quo tempora!
          </p>
        </div>
        <div class="bg-white text-black h-96 w-96 border-1">
          <p>Icon</p>
          <p>Title</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos possimus minus
            consequatur laudantium incidunt. Corporis maxime, quia incidunt impedit eius,
            accusantium provident beatae libero tempore, non dolores. Ad, quo tempora!
          </p>
        </div>
      </section>
    </section>
    <section id="highlights-activities" class="bg-white text-black">
      <img src="../assets/img/image2.png" alt="" />
    </section>
    <section class="sunday-sermons">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/L4wA3Eb9zW0?si=oDoVhnWRPs_x-yqF"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </section>
    <section class="pastoral-team-highlights">
      <img src="../assets/img/image1.png" alt="" />
    </section>
    <section id="contact-us">
      <button>contact us</button>
      <p>Google map</p>
      <div class="h-96 w-screen">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15634.811191003451!2d104.8750444359375!3d11.573150569248698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095181e3acb525%3A0x210670bdf19d7414!2sThe%20Crossroads%20Church%20of%20Cambodia!5e0!3m2!1sen!2skh!4v1723479500090!5m2!1sen!2skh"
          width="100%"
          height="100%"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
    <section id="footer">
      <img src="../assets/img/image.png" alt="" />
    </section>
  </main>
</template>

<style scoped>
.border-1 {
  border: 1px solid black;
}
</style>
