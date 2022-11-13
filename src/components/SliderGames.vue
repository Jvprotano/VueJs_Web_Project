<template>
  <div class="box">
    <h3 class="sub-title text-white" v-show="!spinner">Cursos em destaque</h3>
    <carousel-games
      class="slid bg-secundary"
      :disable3d="true"
      :space="375"
      :clickable="true"
      :on-main-slide-click="onMainSlideClick"
      :controls-visible="true"
      :loop="true"
      v-show="!spinner"
    >
      <slide v-for="(slide, i) in slideCount" :index="i" :key="i">
        <template v-if="i < homeData.length">
          <router-link
            :to="{ name: 'infoCourse', params: { id: homeData[i].id } }"
            class="buttonCourse"
          >
            <span class="img-container">
              <img :src="homeData[i].imageUrl" />
            </span>
            <div class="infos">
              <b-row>
                <b-col sm="12">
                  <h5 class="title-course font-bold">
                    {{ homeData[i].title }}
                  </h5>
                </b-col>
              </b-row>
              <b-row>
                <b-col sm="12">
                  <h5 class="name-instructor">
                    Instrutor:
                    <span class="text-purple">{{
                      homeData[i].instructorName
                    }}</span>
                  </h5>
                </b-col>
                <b-col sm="12">
                  <p class="description">{{ homeData[i].description }}</p>
                </b-col>
              </b-row>
            </div>
          </router-link>
        </template>
      </slide>
    </carousel-games>
  </div>
</template>

<script scoped>
import Slide from "@/carousel-3d/Slide";
import Courses from "../services/home";
import CarouselGames from "../carousel-3d/CarouselGames.vue";

const slides = [
  {
    title: "",
    desc: "",
    src: "",
  },
];

export default {
  name: "App",
  idCourse: 1,

  components: {
    CarouselGames,
    Slide,
  },
  data() {
    return {
      slides: slides,
      slideCount: 12,
      homeData: [],
      id: "",
      spinner: true,
    };
  },
  mounted() {
    this.spinner = true;
    Courses.homeLoadData().then((apiResponse) => {
      this.homeData = apiResponse.data.listCourseRecommended;
      this.spinner = false;
    });
  },

  methods: {
    onSlideChanged(index) {
      console.log("onSlideChanged Callback Triggered", "Slide Index " + index);
    },
    onLastSlide(index) {
      console.log("onLastSlide Callback Triggered", "Slide Index " + index);
    },
    onMainSlideClick() {},
    onAfterSlideChanged(index) {
      console.log(
        "@after-slide-changed Callback Triggered",
        "Slide Index " + index
      );
    },
    onSlideChange(index) {
      console.log(
        "@before-slide-change Callback Triggered",
        "Slide Index " + index
      );
    },
    addSlide() {
      this.slideCount++;
    },
    removeSlide() {
      if (this.slideCount > 1) {
        this.slideCount--;
      }
    },
  },
};
</script>

<style scoped>
.box {
  margin-bottom: 65px;
}

img {
  padding: 10px !important;
  box-shadow: 0 0 40px rgb(0 0 0 / 15%) !important;
  object-fit: cover !important;
  box-sizing: border-box !important;
  width: 98% !important;
  height: 55%;
  border: solid !important;
}

.img-container:hover img {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.carousel-3d-slider {
  height: 500px !important;
  width: 500px !important;
}
.carousel-3d-container {
  padding: 10px !important;
  height: 357px !important;
  width: 100% !important;
  box-shadow: 0 0 40px rgb(0 0 0 / 95%) !important;
}
.carousel-3d-slide {
  background-color: #0f0c1d;
  height: 140% !important;
}

.buttonCourse {
  text-decoration: none !important;
  color: black;
}

h3 {
  margin-left: 4%;
}

a {
  color: #0f0c1d !important;
}

.infos {
  padding: 10px 10px 0px 10px !important;
}

.sub-title {
  font-size: 1.75rem;
  font-weight: 700;
}

.description {
  font-size: 15px;
  font-weight: 400;
  line-height: 1.44;
  margin: 0;
  overflow: hidden;
  text-decoration: none;
}

.title-course {
  font-size: 1.25;
  font-weight: 700;
  margin-bottom: 8px;
}

.name-instructor {
  font-size: 1.15rem;
  font-weight: 500;
}

h1,
h2,
h3,
h4,
h5,
h5,
p {
  color: #e5e5e5;
}
</style>
