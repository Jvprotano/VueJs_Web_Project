<template>
  <div id="components">
    <div id="info-course">
      <b-container class="info-main">
        <b-row>
          <div class="spinner" v-show="spinner" id="spinnerCard">
            <vue-simple-spinner
              line-fg-color="#533784"
              text-fg-color="#533784"
              size="large"
              message="Carregando..."
            ></vue-simple-spinner>
          </div>

          <b-col class="col-md-6 pl-0 div-img" cols="12">
            <img class="img-fluid thumb" :src="courses.imageUrl" />
          </b-col>
          <b-col class="text-side col-md-6" cols="12" v-show="!spinner">
            <b-row class="mb">
              <h2 class="title-course">{{ courses.title }}</h2>
              <b-form-rating
                id="rating-main"
                class="rating"
                inline
                value
                v-model="courses.ratingTotal"
                readonly
                precision="1"
              ></b-form-rating>
            </b-row>
            <b-row>
              <b-col cols="6">
                <b-row class="instructor-name mb-info">
                  <h6>
                    <span class="font-bold">Instrutor:</span>
                    {{ courses.instructorFullName }}
                  </h6>
                </b-row>
              </b-col>
              <b-col cols="6">
                <b-row class="instructor-name mb-info">
                  <h6>
                    <span class="font-bold">Game:</span> {{ courses.gameName }}
                  </h6>
                </b-row>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6">
                <b-row class="category mb-info">
                  <h6>
                    <span class="font-bold">Nível:</span>
                    {{ courses.categoryName }}
                  </h6>
                </b-row>
              </b-col>
              <b-col cols="6">
                <b-row class="duration mb-info">
                  <h6>
                    <span class="font-bold">Duração:</span>
                    {{ courses.duration }} horas
                  </h6>
                </b-row>
              </b-col>
            </b-row>
            <b-row class="mb-info mb-info">
              <h6>
                <span class="font-bold">Data de criação:</span> 04/10/2021
              </h6>
            </b-row>
            <b-row class="mt-price">
              <b-col class="div-price">
                <h4 class="mt-1 text-price text-purple">{{ courses.value }}</h4>
              </b-col>
              <b-col class="buy">
                <router-link :to="{ name: 'registerCard' }">
                  <b-button class="btn-buy">Comprar</b-button>
                </router-link>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
      <b-container class="description">
        <b-row>
          <b-col>
            <div class="spinner" v-show="spinner" id="spinnerCard">
              <vue-simple-spinner
                line-fg-color="#533784"
                text-fg-color="#533784"
                size="large"
                message="Carregando..."
              ></vue-simple-spinner>
            </div>
            <h4 class="font-bold">Descrição</h4>
            <p class="p-description">
              {{ courses.description }}
            </p>
          </b-col>
        </b-row>
      </b-container>

      <b-container class="description">
        <b-row>
          <b-col>
            <div class="spinner" v-show="spinner" id="spinnerCard">
              <vue-simple-spinner
                line-fg-color="#533784"
                text-fg-color="#533784"
                size="large"
                message="Carregando..."
              ></vue-simple-spinner>
            </div>
            <h4 class="font-bold">Metodologia</h4>
            <p class="p-description">
              {{ courses.methodology }}
            </p>
          </b-col>
        </b-row>
      </b-container>

      <b-container class="comments-ratings">
        <h4 class="title-cr font-bold">Comentários e avaliações</h4>
        <div class="spinner" v-show="spinner" id="spinnerCard">
          <vue-simple-spinner
            line-fg-color="#533784"
            text-fg-color="#533784"
            size="large"
            message="Carregando..."
          ></vue-simple-spinner>
        </div>
        <b-row v-for="i in courses.listRating" :key="i.id">
          <b-col>
            <b-row>
              <h6 class="name-comment mb-1">{{ i.userFullName }}</h6>
            </b-row>
            <b-row>
              <b-form-rating
                id="rating-main"
                class="rating rating-comment"
                inline
                value
                v-model="i.note"
                readonly
                precision="1"
              ></b-form-rating>
            </b-row>
            <p class="comment">
              {{ i.comment }}
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="12">
            <div class="teste">
              <h2 v-show="curso == true" style="color: black; font-size: 17px">
                Ops, parece que esse curso ainda não tem comentarios. Seja o
                primeiro!
              </h2>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import Course from "../services/home";
import VueSimpleSpinner from "vue-simple-spinner";

export default {
  data() {
    return {
      curso: false,
      courses: [],
      value: 0,
      value_comment: 1,
      spinner: true,
    };
  },
  components: {
    VueSimpleSpinner,
  },

  mounted() {
    this.spinner = true;
    var id = this.$route.params.id;
    Course.infoCourse(id).then((apiResponse) => {
      this.courses = apiResponse.data;
      this.spinner = false;
      if (this.courses.listRating == 0) {
        return (this.curso = true);
      }
    });
  },
};
</script>

<style scoped>
#spinnerCard {
  margin: 50% auto !important;
}

.btn-buy {
  padding-top: 11px !important;
  padding-bottom: 11px !important;
}

.info-main {
  color: #0e0e10;
  border-radius: 16px;
  background-color: #f7f7f8;
  margin-top: 30px;
  box-shadow: 0 0 40px rgb(0 0 0 / 20%);
}

.description {
  color: #0e0e10;
  border-radius: 16px;
  background-color: #f7f7f8;
  margin-top: 30px;
  padding: 40px !important;
  box-shadow: 0 0 40px rgb(0 0 0 / 20%);
}

.info-main {
  margin-top: 8%;
}

.b-rating-star {
  color: #ffd900;
  border: none;
}

.b-rating-value {
  color: #0e0e10;
}

.category {
  padding-left: 2px;
}

.duration {
  padding-left: 2px;
}

.instructor-name {
  padding-left: 2px;
}

.mt-price {
  margin-top: 2.5rem;
}

.buy {
  padding-left: 2px;
  text-align: center !important;
  border: none !important;
  justify-content: center;
  display: flex;
}

.btn {
  padding: 0.7rem;
  border: 0px solid transparent !important;
  padding-right: 3rem;
  padding-left: 3rem;
  border-radius: 12px !important;
}

.btn:hover {
  background-color: #772ce8 !important;
}

.btn:active {
  border: none !important;
}

.comments-ratings {
  color: #0e0e10;
  border-radius: 16px;
  background-color: #f7f7f8;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 40px !important;
  box-shadow: 0 0 40px rgb(0 0 0 / 20%);
}

#rating-main {
  background-color: #f7f7f8 !important;
  pointer-events: none;
  border: none !important;
}

.comment {
  padding-bottom: 15px;
}

.title-cr {
  padding-bottom: 15px;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  color: #0e0e10;
}

.text-side {
  padding: 18px;
}

.title-course {
  font-weight: bold;
  font-size: 1.65rem;
  margin-bottom: 3px;
}

.thumb {
  border-radius: 13px 0px 0px 13px !important;
}

.mb {
  margin-bottom: 1.45rem;
}

h6 {
  font-size: 1.05rem;
}

.div-price {
  align-items: center;
  display: flex;
}

.text-price {
  font-weight: bold;
  font-size: 1.6rem;
}

.rating {
  color: #e69819 !important;
}

.rating-comment {
  padding-left: 7px;
}

.name-comment {
  font-weight: bold;
  font-size: 1.05rem;
}

.p-description {
  font-size: 1.1rem;
}

@media (max-width: 750px) {
  .div-img {
    padding-right: 0px;
    margin-top: 40px;
  }

  .container {
    width: 100% !important;
  }
}

.container {
  width: 78%;
}

@media (min-width: 1600px) {
  .container {
    width: 66% !important;
  }
}

@media (min-width: 1920px) {
  .container {
    width: 54% !important;
  }
}

.mb-info {
  margin-bottom: 7px !important;
}

.img-fluid {
  width: 100%;
  height: 306px;
}

.text-price {
  font-size: 1.85rem;
}
</style>
