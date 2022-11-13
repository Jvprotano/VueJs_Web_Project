<template>
  <div id="components">
    <Header />
    <div class="tela">
      <div id="info-course">
        <b-container class="info-main">
          <b-row>
            <h1>Meus Cursos</h1>
            <hr />
            <b-col id="myCourses"> </b-col>
          </b-row>
          <b-row v-for="i in coursesList" :key="i.courseId">
            <b-col class="col-md-6 pl-0 div-img" cols="6">
              <router-link
                :to="{ name: 'infoCourse', params: { id: i.courseId } }"
              >
                <span class="img-container">
                  <img class="img-fluid thumb" :src="i.imagemUrl" />
                </span>
              </router-link>
            </b-col>
            <b-col class="text-side" cols="6">
              <b-row class="title">
                <h2 class="mb-2 font-bold">
                  {{ i.courseName }}
                </h2>
              </b-row>
              <b-row class="instructor-name">
                <b-col sm="6">
                  <h6 class="mb-1">
                    <span class="font-bold"
                      >Instrutor: {{ i.nameInstructor }}
                    </span>
                  </h6>
                </b-col>
                <b-col sm="6">
                  <b-form-rating
                    id="rating-main"
                    class="rating"
                    inline
                    value
                    v-model="i.ratingTotal"
                    readonly
                    precision="1"
                  ></b-form-rating>
                </b-col>
              </b-row>
              <b-row>
                <h6>Jogo: Fifa</h6>
              </b-row>
              <b-row>
                <h6>Categoria: Pro</h6>
              </b-row>
              <b-row>
                <b-col sm="6" v-if="i.courseComplete">
                  <h6>Status: Completo</h6>
                </b-col>
                <b-col v-else>
                  <h6>Status: Em andamento</h6>
                </b-col>
              </b-row>
              <b-row>
                <b-row>
                  <b-col sm="6">
                    <h6>Data da compra: {{ i.datePurchase }}</h6>
                  </b-col>
                </b-row>

                <!-- Modal -->
                <b-row>
                  <b-col sm="6" class="bot">
                    <div id="home-i">
                      <b-button
                        v-on:click="
                          infoCourseId(i.courseId);
                          $bvModal.show(i.courseId);
                        "
                        class="bot"
                        >Avaliar</b-button
                      >
                      <b-form>
                        <b-container class="bv-example-row">
                          <b-row>
                            <div class="mb-1">
                              <b-col>
                                <b-modal :id="i.courseId">
                                  <template #modal-header>
                                    <h5>Avaliação do curso</h5>
                                  </template>

                                  <template>
                                    <div>
                                      <div>
                                        <h5>Insira a nota</h5>

                                        <b-form-rating
                                          class="rating"
                                          v-model="formRating.rating"
                                        ></b-form-rating>
                                        <br />
                                        <h5>Comentário</h5>
                                        <b-form-textarea
                                          id="textarea"
                                          v-model="formRating.comment"
                                          placeholder="Deixe seu comentário "
                                          rows="3"
                                          max-rows="6"
                                        ></b-form-textarea>
                                      </div>
                                    </div>
                                  </template>

                                  <template #modal-footer="{ cancel}">
                                    <b-button
                                      size="sm"
                                      variant="success"
                                      v-on:click.prevent="
                                        postRating(i.courseId)
                                      "
                                    >
                                      Confirmar
                                    </b-button>
                                    <b-button
                                      size="sm"
                                      variant="danger"
                                      @click="cancel()"
                                    >
                                      Cancelar
                                    </b-button>
                                  </template>
                                </b-modal></b-col
                              >
                            </div>
                          </b-row>
                        </b-container>
                      </b-form>
                    </div>
                  </b-col>
                  <b-col sm="6">
                    <div id="home-i">
                      <b-button
                        id="report"
                        @click="$bvModal.show(i.courseId + 'modal')"
                        >Report</b-button
                      >
                      <div class="container">
                        <b-container class="bv-example-row">
                          <b-row>
                            <div class="mb-1">
                              <b-col sm="12">
                                <b-modal :id="i.courseId + 'modal'">
                                  <template #modal-header>
                                    <h5>Report Curso</h5>
                                  </template>

                                  <template>
                                    <div>
                                      <div>
                                        <b-form-textarea
                                          id="textarea"
                                          placeholder="Descreva o motivo do report..."
                                          rows="3"
                                          max-rows="6"
                                        ></b-form-textarea>

                                        <pre class="mt-3 mb-0">{{ text }}</pre>
                                      </div>
                                      <p>Deseja solicitar reembolso?</p>
                                      <b-button-group>
                                        <p>Não</p>
                                        <label class="input-toggle">
                                          <input type="checkbox" />
                                          <span></span>
                                        </label>
                                        <p>Sim</p>
                                      </b-button-group>
                                    </div>
                                  </template>

                                  <template #modal-footer="{ ok, cancel}">
                                    <router-link
                                      id="registerCourse"
                                      to="/registerCourse"
                                      ><b-button
                                        size="sm"
                                        variant="success"
                                        @click="ok()"
                                      >
                                        Confirmar
                                      </b-button></router-link
                                    >
                                    <b-button
                                      size="sm"
                                      variant="danger"
                                      @click="cancel()"
                                    >
                                      Cancelar
                                    </b-button>
                                  </template>
                                </b-modal></b-col
                              >
                            </div>
                          </b-row>
                        </b-container>
                      </div>
                    </div>
                  </b-col>
                </b-row>

                <!-- <b-form-rating
                  id="rating-main"
                  class="rating"
                  inline
                  value
                  readonly
                  precision="1"
                ></b-form-rating> -->
              </b-row>
            </b-col>
          </b-row>
          <hr />
        </b-container>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import MyCourses from "../services/user";
import Rating from "../services/user";
import Sales from "../services/user";
export default {
  data() {
    return {
      coursesList: [],
      list: [{}],
      formRating: {
        courseId: "",
        rating: "",
        comment: "",
      },
    };
  },
  components: {
    Header,
    /*     ModalReport,
    ModalRating, */
  },
  mounted() {
    MyCourses.myCourses().then((apiResponse) => {
      this.coursesList = apiResponse.data;
      console.log(this.coursesList);
    });
  },
  methods: {
    postRating(rating) {
      this.formRating.courseId = rating;
      Rating.ratingCourse(this.formRating).then((apiResponse) => {
        console.log(apiResponse);
        console.log(this.formRating);
        location.reload();
      });
    },
    infoCourseId: function(courseId) {
      Sales.students(courseId).then((apiResponse) => {
        this.Students = apiResponse.data;
        console.log(this.Students);
        console.log(courseId);
      });
    },
  },
};
</script>

<style scoped>
#myCourses {
  padding: 10px;
}
.buttonMore {
  margin-top: 60px;
  margin-bottom: 80px;
  justify-content: center;
  display: flex;
}

.more {
  padding-top: 14px !important;
  padding-bottom: 14px !important;
  padding-right: 8rem !important;
  padding-left: 8rem !important;
}

h2 {
  font-size: 1.7rem;
}

.info-main {
  color: #0e0e10;
  background-color: #f7f7f8;
  margin-top: 32px;
  box-shadow: 0 0 40px rgb(0 0 0 / 20%);
  border-radius: 10px;
  padding: 20px;
}

.description {
  color: #0e0e10;
  border-radius: 16px;
  background-color: #f7f7f8;
  margin-top: 30px;
  padding: 40px !important;
  box-shadow: 0 0 40px rgb(0 0 0 / 20%);
}

.b-rating-star {
  color: /* #ffc400;  */ #ffd900;
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
  text-align: center !important;
  border: none !important;
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

#rating-main {
  background-color: #f7f7f8 !important;
  pointer-events: none;
  border: none !important;
}

.title-cr {
  padding-bottom: 15px;
}

.text-side {
  padding: 18px;
}

.title-course {
  font-weight: bold;
  font-size: 1.75rem;
  margin-bottom: 3px;
}

.thumb {
  padding: 2px;
  border-radius: 13px !important;
  height: 270px;

  background-color: #f7f7f8 !important;
  box-shadow: 0 0 40px rgb(0 0 0 / 20%) !important;
}

.mb {
  margin-bottom: 1.6rem;
}

h6 {
  font-size: 1.05rem;
}

.div-price {
  align-items: center;
  display: flex;
  margin-top: 60px;
}

.text-price {
  font-weight: bold;
  font-size: 1.6rem;
}

.rating {
  color: #e69819 !important;
}

#info-course {
  margin-top: 105px;
  box-shadow: 0 0 40px rgb(0 0 0 / 15%) !important;
}

.img-container {
  cursor: pointer;
}

.components {
  width: 80%;
}

@media (max-width: 750px) {
  .container {
    width: 100% !important;
  }
  .div-img {
    padding-right: 0px;
    margin-top: 40px;
  }
}

@media (min-width: 1600px) {
  .container {
    width: 52% !important;
  }
}

@media (min-width: 1920px) {
  .container {
    width: 55% !important;
  }
}

img {
  box-shadow: 0 0 40px rgb(0 0 0 / 15%) !important;
  -o-object-fit: cover !important;
  object-fit: cover !important;
  box-sizing: border-box !important;
  width: 100% !important;
  height: 100%;
}

h2 {
  font-size: 1.5rem;
}

#report {
  background-color: brown !important;
  float: right;
}

.rating {
  color: #ffd900;
  border: none !important;
}

label.input-toggle {
  line-height: 0;
  font-size: 0;
  display: inline-block;
  margin: 0;
}

label.input-toggle > span {
  display: inline-block;
  position: relative;
  background-image: -webkit-linear-gradient(
    left,
    #848484 0%,
    #848484 50%,
    #7cbcbf 50%,
    #7cbcbf 100%
  );
  background-image: linear-gradient(
    to right,
    #848484 0%,
    #848484 50%,
    #7cbcbf 50%,
    #7cbcbf 100%
  );
  background-size: 64px 14px;
  background-position: 0%;
  border-radius: 32px;
  width: 32px;
  height: 14px;
  cursor: pointer;
  -webkit-transition: background-position 0.2s ease-in;
  transition: background-position 0.2s ease-in;
}

label.input-toggle > input:checked + span {
  background-position: -100%;
}

label.input-toggle > span:after {
  content: "";
  display: block;
  position: absolute;
  width: 18px;
  height: 18px;
  background: #f1f1f1;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
  top: 50%;
  left: 0;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  border-radius: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  -webkit-transition: left 0.2s ease-in, background-color 0.2s ease-in,
    -webkit-transform 0.3s ease;
  transition: left 0.2s ease-in, background-color 0.2s ease-in,
    -webkit-transform 0.3s ease;
  transition: left 0.2s ease-in, background-color 0.2s ease-in,
    transform 0.3s ease;
  transition: left 0.2s ease-in, background-color 0.2s ease-in,
    transform 0.3s ease, -webkit-transform 0.3s ease;
}

label.input-toggle > input:checked + span:after {
  left: calc(100% - 18px);
  background-color: #1d8b90;
}

label.input-toggle > span:active:after {
  -webkit-transform: translateY(-50%) scale3d(1.15, 0.85, 1);
  transform: translateY(-50%) scale3d(1.15, 0.85, 1);
}

label.input-toggle > input:disabled + span:active:after {
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

label.input-toggle > input:disabled + span {
  cursor: default;
}

label.input-toggle > input:disabled + span {
  background: #d5d5d5;
}

label.input-toggle > input:disabled + span:after {
  background: #bdbdbd;
}

label.input-toggle > input {
  display: block;
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
</style>
