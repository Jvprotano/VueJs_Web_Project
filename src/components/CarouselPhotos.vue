<template>
  <div class="box">
    <div class="mainCarousel">
      <div class="spinner" id="spinnerCard" v-show="spinner">
        <vue-simple-spinner
          line-fg-color="#533784"
          text-fg-color="#533784"
          size="big"
        ></vue-simple-spinner>
      </div>
      <carousel-3d :controls-visible="true" :space="400" v-show="!spinner">
        <slide v-for="(slide, i) in slideCount" :index="i" :key="i"> 
          <template>
            <b-card class="card-carousel">
              <img class="image-carousel" :src="homeData[i].imgUrl" :alt="homeData[i].id" />
            </b-card>
          </template>
        </slide>
      </carousel-3d>
    </div>
  </div>
</template>

<script>
import Carousel3d from "@/carousel-3d/Carousel3d";
import Slide from "@/carousel-3d/Slide";
import HomeData from "../services/home";
import VueSimpleSpinner from "vue-simple-spinner";

const slides = [
  {
    title: "",
    desc: "",
    src: "",
  },
];

export default {
  name: "App",
  components: {
    Carousel3d,
    Slide,
    VueSimpleSpinner,
  },

  data() {
    return {
      slides: slides,
      slideCount: 8,
      homeData: [],
      spinner: true,
    };
  },

 mounted() {
   this.spinner = true;
    HomeData.homeLoadData().then((apiResponse) => {
      this.homeData = apiResponse.data;
      this.spinner = false;
    })
  },

  methods: {
    desativaLoading() {
      this.spinner = false;
    },
    onSlideChanged(index) {
      console.log("onSlideChanged Callback Triggered", "Slide Index " + index);
    },
    onLastSlide(index) {
      console.log("onLastSlide Callback Triggered", "Slide Index " + index);
    },
    onMainSlideClick() {
      console.log("onMainSlideClick Callback Triggered");
    },
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
#spinnerCard {
  margin: 14% auto !important;
}
.carousel-3d-slider {
  position: relative !important;
}

img {
  box-shadow: 0 0 40px rgb(0 0 0 / 15%) !important;
  height: 300px;
  object-fit: cover !important;
  box-sizing: border-box !important;
  width: 100% !important;
  height: 100% !important;
}
.row {
  margin-top: 10px !important;
  margin-bottom: 10px !important;
  object-fit: cover !important;
}

.carousel-3d-container {
  box-shadow: 0 0 40px rgb(96 76 76 / 95%);
  height: 420px !important;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 10px !important;
  box-sizing: border-box;
}
.carousel-3d-slider {
  box-shadow: 0 0 40px rgb(0 0 0 / 15%) !;
  height: 500px;
  object-fit: cover;
  border-radius: 10px !important;
  box-sizing: border-box;
}
.carousel-3d-slide {
  height: 440px !important;
  border-width: 0px !important;
  box-shadow: 0 0 40px rgb(0 0 0 / 25%) !important;
  border-radius: 4px !important;
}
.card-carousel {
  margin: 0px !important;
}
.card {
  border: 0px !important;
}

.card-body {
  padding: 0px;
  height: 470px;
  object-fit: cover;
  border-radius: 10px !important;
  box-sizing: border-box;
}

h3 {
  margin-left: 30px;
}

#alo {
  position: absolute !important;
}

.mainCarousel {
  margin-bottom: 200px;
}

.bg-secundary {
  background-color: transparent !important;
}
</style>