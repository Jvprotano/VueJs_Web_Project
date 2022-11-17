<template>
  <div id="home">
    <div id="up">
      <div class="spinner" id="spinnerCard" v-show="spinner">
        <vue-simple-spinner
          line-fg-color="#533784"
          text-fg-color="#533784"
          size="big"
          style="margin:7cm auto"
         ></vue-simple-spinner>
      </div>
      <CarouselPhotos v-show="!spinner"/>
      <div class="mx-auto text-center" id="texto-container">
        <h2 class="text-white-50 mx-auto mt-2 mb-5">Nunca esqueça o quanto</h2>
        <h1 class="mx-auto my-0 text-uppercase">Eu amo você</h1>
        <h2 class="text-white-50 mx-auto mt-2 mb-5">
          Falar de pertinho foi uma das melhores coisas da minha vida! Te amo
          muito muito muito ❤
        </h2>
      </div>
      <Video />
      <router-view />
    </div>
    <Card />
    <footer class="footer bg-black small text-center text-white-50">
      <div class="container">
        Criado pelo amor da sua vida! J&K - Pra Minha Vida
      </div>
    </footer>
  </div>
</template>

<script>
import CarouselPhotos from "../components/CarouselPhotos";
import Video from "../components/Video.vue";
import Card from "../components/Card.vue";
import VueSimpleSpinner from "vue-simple-spinner";

export default {
  name: "Home",
  data() {
    return {
      spinner: false,
    };
  },
  components: {
    CarouselPhotos,
    VueSimpleSpinner,
    Video,
    Card,
  },
};
</script>

<style scoped>
#texto-container {
  margin-top: -8rem;
}

h2 {
  max-width: 16rem !important;
  font-size: 20px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

#up {
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.7) 75%,
      #000000 100%
    ),
    url("../assets/hearts.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
  position: relative;
  width: 100%;
  height: auto;
  min-height: 35rem;
}

#spinnerCard{
  display: flex;
}

@media (max-width: 750px) {
#spinnerCard{
    margin-top: 47%;
    background-color: transparent;
    position: absolute;
    margin-left: 41%;
}
}

h1 {
  font-family: "Varela Round", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 4.5rem;
  line-height: 4.5rem;
  letter-spacing: 0.3rem;
  background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0));
  -webkit-text-fill-color: #f12929d4;
  -webkit-background-clip: text;
  background-clip: text;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
