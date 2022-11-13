<template>
  <div class="header">
    <div id="curso-instruido">
      <div class="container">
        <b-card title="Card Title" no-body>
          <PerfilMenu />
          <b-card-body class="text">
            <div id="home-i">
              <b-card-text
                ><b-row
                  ><b-col sm="12" id="btnCourseRequest">
                    <SolicitacaoModal /> </b-col></b-row
                    
              >
              <div class="spinner" v-show="spinner" id="spinnerCard">
                    <vue-simple-spinner
                      line-fg-color="#533784"
                      text-fg-color="#533784"
                      size="large"
                      message="Carregando..."
                    ></vue-simple-spinner>
                  </div>
              </b-card-text>
                <b-container>
                    <b-col sm="12">
                      <div class="teste">
                        <h2 v-show="curso == true" style="color: black; font-size: 17px; text-align: center !important; margin-top: -8% !important">Ops... você ainda não possui nenhum curso cadastrado :(</h2>
                      </div>
                    </b-col>
                </b-container>
              <b-container
                class="bv-example-row"
                v-for="i in instructorCourse"
                :key="i.id"
              >
                <b-row>
                  
                  <b-col cols="3" class="pr-0">
                    <div class="size-img">
                      <img class="img" :src="i.imageUrl" />
                    </div>
                  </b-col>
                  <b-col cols="7" class="text pl-0">
                    <b-row v-if="i.strActive"
                      ><p id="Titulo">
                        <alert> {{ i.title }}</alert>
                      </p></b-row
                    >
                    <b-row v-else
                      ><p id="InactiveTitle">
                        <alert>{{ i.title }}</alert>
                      </p></b-row
                    >
                    <b-row
                      ><p>Game: {{ i.gameName }}</p></b-row
                    >
                    <b-row
                      ><p>Data: {{ i.dateCreated }}</p></b-row
                    >
                    <b-row v-if="i.strActive">
                      <p>Status: Ativado</p>
                    </b-row>
                    <b-row v-else>
                      <p>Status: Desativado</p>
                    </b-row>
                    <b-row>
                      <b-form-rating
                        id="rating-main"
                        class="rating rating-comment"
                        inline
                        value
                        v-model="i.rating"
                        readonly
                        precision="1"
                      ></b-form-rating>
                    </b-row>
                  </b-col>
                  <b-col cols="1" class="text pl-0" v-if="i.strActive">
                    <b-button-toolbar>
                      <b-button-group class="mr-1">
                        <router-link
                          :to="{ name: 'infoCourse', params: { id: i.id } }"
                          ><b-button title="Visualizar curso">
                            <b-icon
                              icon="eye"
                              aria-hidden="true"
                            ></b-icon> </b-button
                        ></router-link>

                        <b-card-text>
                          <b-row>
                            <b-col sm="12">
                              <div class="mb-1">
                                <b-col sm="12"
                                  ><b-button
                                    v-on:click="
                                      infoStudentModal(i.id);
                                      $bvModal.show('ModalR' + i.id);
                                    "
                                    title="Registrar aulas"
                                  >
                                    <b-icon
                                      icon="calendar3"
                                      aria-hidden="true"
                                    ></b-icon>
                                  </b-button>

                                  <!-- MODAIS -->
                                  <b-modal :id="'ModalR' + i.id" size="lg">
                                    <template #modal-header>
                                      <h5>Compras realizadas por alunos</h5>
                                    </template>

                                    <b-container id="container">
                                      <div class="card">
                                        <b-table
                                          ref="table"
                                          striped
                                          hover
                                          sticky-header
                                          :key="i.id"
                                          :fields="fields"
                                          :items="Students"
                                        >
                                          <template #cell(concluir)>
                                            <div v-if="Students[0].courseComplete">
                                              <b-button
                                                :id= Students
                                                size="sm"
                                                v-on:click="
                                                  concludeCourse(Students[id])
                                                "
                                                class="mr-2"
                                              >
                                                Concluir curso
                                              </b-button>
                                            </div>
                                            <div v-else>
                                              <b-button
                                                id="CourseCompleted"
                                                size="sm"
                                                v-on:click="
                                                  concludeCourse(Students[id])
                                                "
                                                class="mr-2"
                                              >
                                                Concluir curso
                                              </b-button>
                                            </div>
                                          </template>
                                        </b-table>
                                      </div>
                                    </b-container>
                                    <template #modal-footer="{ cancel }">
                                      <b-button
                                        size="sm"
                                        variant="danger"
                                        @click="cancel()"
                                      >
                                        Cancelar
                                      </b-button>
                                    </template>
                                  </b-modal>

                                  <b-modal :id="'ModalD' + i.id" size="md">
                                    <template #modal-header>
                                      <h5>Por favor confirme</h5>
                                    </template>

                                    <template v-if="i.strActive">
                                      <p>
                                        Deseja realmente desativar este curso?
                                      </p>
                                    </template>

                                    <template v-else>
                                      <p>Deseja realmente ativar este curso?</p>
                                    </template>

                                    <template #modal-footer="{ cancel }">
                                      <b-button
                                        size="sm"
                                        variant="success"
                                        v-on:click="disableCourse(i.id)"
                                      >
                                        SIM
                                      </b-button>

                                      <b-button
                                        size="sm"
                                        variant="danger"
                                        @click="cancel()"
                                      >
                                        NÃO
                                      </b-button>
                                    </template>
                                  </b-modal>
                                </b-col>
                              </div>
                            </b-col>
                          </b-row>
                        </b-card-text>

                        <router-link
                          :to="{ name: 'editCourse', params: { id: i.id } }"
                        >
                          <b-button title="Editar curso">
                            <b-icon icon="pencil" aria-hidden="true"></b-icon>
                          </b-button>
                        </router-link>
                        <p>
                          <b-button
                            title="Desativar Curso"
                            v-on:click="$bvModal.show('ModalD' + i.id)"
                          >
                            <b-icon icon="trash" aria-hidden="true"></b-icon>
                          </b-button>
                        </p>
                      </b-button-group>
                    </b-button-toolbar>
                  </b-col>

                  <b-col v-else-if="i.strApproved">
                    <b-card-text
                      ><b-row
                        ><b-col sm="12">
                          <b-button
                            title="Ativar Curso"
                            v-on:click="disableCourse(i.id)"
                            id="btnEnable">
                            Ativar
                          </b-button>
                        </b-col></b-row
                      >
                    </b-card-text>
                  </b-col>
                  <b-col v-else>
                    <b-card-text
                      ><b-row
                        ><b-col sm="12">
                          <b-button
                            title="Ativar Curso"
                            disabled
                            id="btnNotApproved">
                            Em análise...
                          </b-button>
                        </b-col></b-row
                      >
                    </b-card-text>
                  </b-col>
                </b-row>
                <hr />
              </b-container>
            </div>
          </b-card-body>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import PerfilMenu from "../components/PerfilMenu";
import SolicitacaoModal from "../components/SolicitacaoModal";
import InstruCourse from "../services/user";
import Course from "../services/home";
import Sales from "../services/user";
import VueSimpleSpinner from "vue-simple-spinner";

export default {
  data() {
    return {
      curso: false,
      instructorCourse: [],
      fields: [
        { key: "purchaseId", label: "Pedido" },
        { key: "fullName", label: "Nome" },
        { key: "datePurchase", label: "Data da compra" },
        { key: "email", label: "E-mail" },
        { key: "Concluir", label: "Concluir" },
      ],
      Students: [],
      form: {
        purchaseId: "",
      },
      spinner: false,
    };
  },
  name: "CursoInstrutor",
  components: {
    PerfilMenu,
    SolicitacaoModal,
    VueSimpleSpinner,
  },

  mounted() {
    InstruCourse.instructorCourse().then((apiResponse) => {
      this.instructorCourse = apiResponse.data;
      if(this.instructorCourse.length == 0){
        return this.curso = true;

      }
    });

  },

  methods: {
    infoStudentModal: function (courseId) {
      Sales.students(courseId).then((apiResponse) => {
        this.Students = apiResponse.data;
        console.log(this.Students)
      });
    },

    disableCourse: function (courseId) {
      Course.DisableCourse(courseId).then(() => {
        location.reload();
      });
    },

    concludeCourse: function (students) {
      console.log(students);
      this.form.purchaseId = students[0].purchaseId;
      Sales.ConcludeCourse(this.form.purchaseId).then(() => {});
    },
  },
};
</script>

<style scoped>
#CourseCompleted {
  background-color: #1bdb28 !important;
}

#btnEnable {
  background-color: #2fb233 !important;
  box-shadow: none !important;
}


#btnNotApproved {
  background-color: #5f5f5f !important;
  box-shadow: none !important;
}

#btnEnableDisable:hover {
  background-color: #58b35b !important;
}

#btnCourseRequest {
  text-align: -webkit-right;
}

#Titulo {
  font-size: 20px;
  color: #533784;
  font-weight: bold;
}

#InactiveTitle {
  font-size: 20px;
  color: #747474;
  font-weight: bold;
}

.container {
  margin-top: 5%;
}
.media-aside {
  display: inline !important;
}

.size-img {
  text-align: left;
  height: 170px;
  width: 250px;
}
.img {
  object-fit: cover;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
.text {
  text-align: left;
  line-height: 10px;
}
.home-i {
  padding: 15px;
}
.bv-example-row {
  margin-top: 50px;
}

.b-rating-star {
  color: #ffd900;
  border: none;
}

#rating-main {
  background-color: transparent !important;
  pointer-events: none;
  border: none !important;
}

.rating {
  color: #e69819 !important;
}
</style>

