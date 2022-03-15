<template>
  <div id="app">
    <!--    <div class="container" style="width: 100%; height: 90vh; border-radius: 20px">-->
    <div class style="height:100vh">
      <div class="row" style="height: 100%">
        <div
          class="menu"
          style="border-right: 1px black solid; background: #313234; width: 20%; height: 100%; padding: 30px 0 0 30px;; text-align: left; border-radius: 5px 0 0 5px;"
        >
          <div class="element-menu" style="margin-top: 15px;">
            <a href="#" v-on:click="identifiantFilterKey = 'all' ">
              <font-awesome-icon icon="th" />
              <span style="margin-left: 10px;">Tous les éléments&nbsp;</span>
              <div class="number-element">
                <a href>{{ filteredElements.length }}</a>
              </div>
            </a>
            <br />
            <a href="#" v-on:click="identifiantFilterKey = 'favoris' ">
              <font-awesome-icon icon="star" />
              <span style="margin-left: 10px;">Favoris</span>
            </a>
            <br />
            <a
              href="#"
              v-b-toggle.categories
              style="cursor: pointer; position: relative; top: 20px"
            >CATÉGORIES</a>
            <b-collapse id="categories" class="categories">
              <a href="#" id="categorie-inner" v-on:click="identifiantFilterKey = 'identifiant' ">
                <font-awesome-icon icon="key" />
                <span style="margin-left: 10px;">identifiants</span>
              </a>
              <br />
              <a href="#" v-on:click="identifiantFilterKey = 'note' ">
                <font-awesome-icon icon="sticky-note" />
                <span style="margin-left: 10px;">notes sécurisées</span>
              </a>
              <br />
              <a href="#" v-on:click="identifiantFilterKey = 'carte' ">
                <font-awesome-icon icon="credit-card" />
                <span style="margin-left: 10px;">cartes de crédit</span>
              </a>
              <br />
            </b-collapse>
          </div>
        </div>
        <div
          class="elements"
          style="border-right: 1px black solid; background: #1F2022; width: 20%; height: 100%"
        >
          <div
            class="search"
            style="padding: 5px; background: #313234; border-bottom: black 1px solid;"
          >
            <input
              v-model="search"
              type="search"
              placeholder="Rechercher"
              class="form-control element-search"
            />
          </div>
          <div class="element-elements">
            <b-list-group style="height: 93vh; overflow: scroll;">
              <b-list-group-item
                href="#"
                @dblclick="modalDelete(element)"
                @click="detailElement(all)"
                v-show="identifiantFilterKey === 'all' "
                v-for="(all, i) in filteredElements"
                :key="'all'+ i"
                class="element"
              >
                <b-img
                  v-show="all.image !== null"
                  :src="all.image"
                  style="height: 40px; border-radius: 8px; float: left"
                ></b-img>
                <b-img
                  v-show="all.image === null"
                  :src="image"
                  style="height: 40px; border-radius: 8px; float: left"
                ></b-img>
                <p
                  style="margin-top: 7px; float: left; margin-bottom: 0; left: 15px; position: relative;"
                >{{ all.name }}</p>
              </b-list-group-item>
              <b-list-group-item
                href="#"
                @dblclick="modalDelete(element)"
                @click="detailElement(identifiant)"
                v-show="identifiantFilterKey === 'identifiant' "
                v-for="(identifiant, i) in filteredIdentifiants"
                :key="'identifiant'+ i"
                class="element"
              >
                <b-img
                  v-show="identifiant.image !== null"
                  :src="identifiant.image"
                  style="height: 40px; border-radius: 8px; float: left"
                ></b-img>
                <b-img
                  v-show="identifiant.image === null"
                  :src="image"
                  style="height: 40px; border-radius: 8px; float: left"
                ></b-img>
                <p
                  style="margin-top: 7px; float: left; margin-bottom: 0; left: 15px; position: relative;"
                >{{ identifiant.name }}</p>
              </b-list-group-item>
              <b-list-group-item
                href="#"
                @dblclick="modalDelete(element)"
                @click="detailElement(note)"
                v-show="identifiantFilterKey === 'note' "
                v-for="(note, i) in filteredNotes"
                :key="'note'+ i"
                class="element"
              >
                <b-img
                  v-show="note.image !== null"
                  :src="note.image"
                  style="height: 40px; border-radius: 8px; float: left"
                ></b-img>
                <b-img
                  v-show="note.image === null"
                  :src="image"
                  style="height: 40px; border-radius: 8px; float: left"
                ></b-img>
                <p
                  style="margin-top: 7px; float: left; margin-bottom: 0; left: 15px; position: relative;"
                >{{ note.name }}</p>
              </b-list-group-item>
              <b-list-group-item
                href="#"
                @dblclick="modalDelete(element)"
                @click="detailElement(carte)"
                v-show="identifiantFilterKey === 'carte' "
                v-for="(carte, i) in filteredCartes"
                :key="'carte'+ i"
                class="element"
              >
                <b-img
                  v-show="carte.image !== null"
                  :src="carte.image"
                  style="height: 40px; border-radius: 8px; float: left"
                ></b-img>
                <b-img
                  v-show="carte.image === null"
                  :src="image"
                  style="height: 40px; border-radius: 8px; float: left"
                ></b-img>
                <p
                  style="margin-top: 7px; float: left; margin-bottom: 0; left: 15px; position: relative;"
                >{{ carte.name }}</p>
              </b-list-group-item>
            </b-list-group>
          </div>
        </div>
        <div
          class="details"
          style="color: white; background: #1F2022; width: 60%; height: 100%; border-radius: 0 5px 5px 0;"
        >
          <div class="banniere">
            <font-awesome-icon
              icon="plus"
              v-b-modal.modal-prevent-closing
              style="margin-left: 10px"
              v-show="this.credentials.token !== '' "
            />
            <font-awesome-icon
              v-show="this.credentials.token !== '' "
              icon="sign-out-alt"
              @click="logout"
              style="margin-left: 10px"
            />
            <font-awesome-icon
              icon="key"
              v-show="this.credentials.token === '' "
              v-b-modal.modal-login
              style="margin-left: 10px"
            />
            <font-awesome-icon
              icon="user"
              v-show="this.credentials.token === '' "
              v-b-modal.modal-register
            />
          </div>
          <!-- connexion user  -->
          <b-modal
            id="modal-login"
            ref="modal"
            style="font-size: 16px"
            :hideHeaderClose="false"
            :centered="true"
            title="Connexion"
            @show="resetModal"
            @hidden="resetModal"
            @ok="login"
            ok-title="Connexion"
            cancel-title="Fermer"
            button-size="sm"
            v-if="showWindowLog"
          >
            <form ref="form" @submit.stop.prevent="handleSubmit">
              <b-form-group
                :state="nameState"
                label-for="identifiant-input"
                invalid-feedback="Une addresse mail est requise"
              >
                <b-form-input
                  id="username-email-input"
                  v-model="credentials.email"
                  :state="nameState"
                  required
                  placeholder="Email..."
                  style="height: calc(1.5em + 0.5rem); font-size: 15px;"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                :state="nameState"
                label-for="pass-input"
                invalid-feedback="Un mot de passe est requis"
              >
                <b-form-input
                  id="username-password-input"
                  v-model="credentials.password"
                  type="password"
                  :state="nameState"
                  required
                  placeholder="Mot de passe..."
                  style="height: calc(1.5em + 0.5rem); font-size: 15px;"
                ></b-form-input>
              </b-form-group>
            </form>
          </b-modal>
          <!-- create user modal -->
          <b-modal
            id="modal-register"
            ref="modal"
            style="font-size: 16px"
            :hideHeaderClose="false"
            :centered="true"
            title="Inscritpion"
            @show="resetModal"
            @hidden="resetModal"
            @ok="createUsername"
            ok-title="Créer"
            cancel-title="Fermer"
            button-size="sm"
            v-if="showWindowSign"
          >
            <form ref="form" @submit.stop.prevent="handleSubmit">
              <b-form-group
                :state="nameState"
                label-for="identifiant-input"
                invalid-feedback="Une addresse mail est requis"
              >
                <b-form-input
                  id="username-email-input"
                  v-model="credentials.email"
                  :state="nameState"
                  required
                  placeholder="Email..."
                  style="height: calc(1.5em + 0.5rem); font-size: 15px;"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                :state="nameState"
                label-for="pass-input"
                invalid-feedback="Un mot de passe est requis"
              >
                <b-form-input
                  id="username-password-input"
                  v-model="credentials.password"
                  type="password"
                  :state="nameState"
                  required
                  placeholder="Mot de passe..."
                  style="height: calc(1.5em + 0.5rem); font-size: 15px;"
                ></b-form-input>
              </b-form-group>
            </form>
          </b-modal>
          <!-- create identifiant modal  -->
          <b-modal
            id="modal-prevent-closing"
            ref="modal"
            style="font-size: 16px"
            :hideHeaderClose="false"
            :centered="true"
            title="Enregistrer un nouvel élement"
            @show="resetModal"
            @hidden="resetModal"
            @ok="createIdentifiants"
            ok-title="Créer"
            cancel-title="Fermer"
            button-size="sm"
          >
            <form ref="form" @submit.stop.prevent="handleSubmit">
              <b-form-group
                :state="nameState"
                label-for="name-input"
                invalid-feedback="Un nom est requis"
              >
                <b-form-input
                  id="name-input"
                  v-model="name"
                  :state="nameState"
                  required
                  placeholder="Nom..."
                  style="height: calc(1.5em + 0.5rem); font-size: 15px;"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                :state="nameState"
                label-for="identifiant-input"
                invalid-feedback="Un identifiant est requis"
              >
                <b-form-input
                  id="identifiant-input"
                  v-model="username"
                  :state="nameState"
                  required
                  placeholder="Identifiant..."
                  style="height: calc(1.5em + 0.5rem); font-size: 15px;"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                :state="nameState"
                label-for="pass-input"
                invalid-feedback="Un mot de passe est requis"
              >
                <b-form-input
                  id="pass-input"
                  v-model="password"
                  type="password"
                  :state="nameState"
                  required
                  placeholder="Mot de passe..."
                  style="height: calc(1.5em + 0.5rem); font-size: 15px;"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                :state="nameState"
                label-for="image-input"
                invalid-feedback="Une image est requise"
              >
                <b-form-input
                  size="sm"
                  id="image-input"
                  :value="image"
                  required
                  placeholder="Image..."
                  style="height: calc(1.5em + 0.5rem); font-size: 15px;"
                ></b-form-input>
              </b-form-group>
              <b-form-select
                v-model="categorie_selected"
                :options="categorie"
                size="sm"
                style="margin-top: unset; height: calc(1.5em + 0.5rem); font-size: 15px"
              ></b-form-select>
            </form>
          </b-modal>
          <div class="content-details">
            <div class="detail-name" style="display: flex;">
              <b-img
                v-if="element.image === null"
                :src="image"
                alt="Image 1"
                style="height: 40px; border-radius: 8px"
              ></b-img>
              <b-img v-else :src="element.image" style="height: 40px; border-radius: 8px"></b-img>
              <h3 style="margin-left: 20px; font-weight: bold">{{element.name}}</h3>
            </div>
            <div
              class="detail-value"
              style="padding: 12px 12px 12px 12px ;text-align: left; margin-top: 15px; border-radius: 5px; border: 1px solid #696A6B"
            >
              <b-form @submit.stop.prevent>
                <label style="margin-bottom: unset; font-size: 12px">Nom d'utilisateur</label>
                <b-input
                  type="text"
                  v-model="element.username"
                  v-on:blur="updateIdentifiant(element)"
                  class="input-details"
                ></b-input>
                <font-awesome-icon
                  icon="user"
                  style="position: relative; left: 4px; bottom: 23px; height: 12px;"
                />
                <label
                  style="margin-bottom: unset; font-size: 12px; margin-left: -20px"
                >Mot de passe</label>
                <b-input
                  :type="passwordFiledType"
                  v-model="element.password"
                  v-on:blur="updateIdentifiant(element)"
                  class="input-details"
                ></b-input>
                <font-awesome-icon
                  @click="displayPassword"
                  :icon="eyeIcon"
                  style="position: relative; left: 3px; bottom: 23px; cursor: pointer; height: 12px;"
                />
              </b-form>
              <div class="progression">
                <p class="strong" v-if="this.element.password.length === 0">Saisissez un mot de passe</p>
                <p class="strong" v-if="this.element.password.length >= 1 && this.element.password.length <= 9">Faible</p>
                <p class="strong" v-if="this.element.password.length >= 10 && this.element.password.length <= 15">Moyen</p>
                <p class="strong" v-if="this.element.password.length >= 16">Fantastique</p>
                <b-progress
                  :value="defaut"
                  v-show="element.password.length === 0"
                  variant="info"
                  style="width: 100%; height: 10px"
                ></b-progress>
                <b-progress
                  :value="faible"
                  v-show="element.password.length >= 1 && element.password.length <= 9"
                  variant="danger"
                  style="width: 100%; height: 10px"
                ></b-progress>
                <b-progress
                  :value="moyen"
                  v-show="element.password.length >= 10 && element.password.length <= 15"
                  variant="warning"
                  style="width: 100%; height: 10px"
                ></b-progress>
                <b-progress
                  :value="strong"
                  v-show="element.password.length >= 16 "
                  variant="success"
                  style="width: 100%; height: 10px"
                ></b-progress>
              </div>
            </div>
            <div class="detail-remarque" style="text-align: left; margin-top: 15px;">
              <b-button
                @click="visible = !visible"
                block
                variant="primary"
                size="sm"
                style="margin-bottom: 20px; background: transparent; border: 1px solid #68696A"
              >
                Afficher les détails de
                formulaire enregistrés
              </b-button>
              <transition name="fade">
                <div class="details-formulaire" v-show="visible">
                  <h5>Détails de formulaire web</h5>
                  <b-form>
                    <label style="margin-bottom: unset; font-size: 12px">Nom d'utilisateur</label>
                    <b-input
                      type="text"
                      v-model="element.username"
                      class="input-details"
                      style="padding: 0.3rem 0.3rem 0.3rem 0.5rem;"
                    ></b-input>
                    <label style="margin-bottom: unset; font-size: 12px">Mot de passe</label>
                    <b-input
                      :type="passwordFiledType"
                      v-model="element.password"
                      class="input-details"
                      style="padding: 0.3rem 0.3rem 0.3rem 0.5rem;"
                    ></b-input>
                  </b-form>
                </div>
              </transition>
              <div class="details-info">
                <label style="margin-bottom: unset; font-size: 12px">Date de création</label>
                <p style="margin-bottom: 0; font-size: 13px">Le {{element.date_creation | date()}}</p>
                <label style="margin-bottom: unset; font-size: 12px">Dernière modification</label>
                <p
                  style="margin-bottom: 0; font-size: 13px"
                >Le {{element.date_modification | date()}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var moment = require("moment");
moment.locale("fr");
export default {
  name: "app",
  data() {
    return {
      moment: moment,
      identifiants: [],
      nameState: null,
      submittedNames: [],
      identifiantFilterKey: "all",
      visible: true,
      showWindowLog: true,
      showWindowSign: true,
      search: "",
      name: "",
      username: "",
      password: "",
      image: "https://i.picsum.photos/id/950/40/40.jpg",
      strongest: "",
      passwordFiledType: "password",
      eyeIcon: "eye-slash",
      count: 0,
      defaut: 2,
      faible: 20,
      moyen: 66,
      strong: 100,
      categorie_selected: null,
      categorie: [
        {
          value: null,
          text: "Séléctionner une catégorie"
        },
        {
          value: 1,
          text: "Identifiant"
        },
        {
          value: 2,
          text: "Note"
        },
        {
          value: 3,
          text: "Carte de crédit"
        }
      ],
      element: {
        password: ""
      },
      credentials: {
        email: "",
        password: "",
        userId: "",
        token: ""
      }
    };
  },
  methods: {
    // recupere les datas de chaque element sur le click de l'élément
    detailElement(data) {
      this.element = data;
      this.check();
    },
    createUsername(bvModalEvt) {
      this.axios
        .post("http://localhost:3000/api/auth/signup", {
          email: this.credentials.email,
          password: this.credentials.password,          

          // date_creation: moment(new Date()).format("YYYY-MM-DD"),
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);        
          bvModalEvt.preventDefault();

        });
        // Prevent modal from closing      


      // Trigger submit handler
      this.handleSubmit();
    },
    login(bvModalEvt) {            
      this.axios
        .post("http://localhost:3000/api/auth/login", {
          email: this.credentials.email,
          password: this.credentials.password
        })
        .then(response => {
          if (response.data.token) {
            const isConnect = localStorage.setItem(
              "user",
              JSON.stringify(response.data)
            );
            this.credentials.token = localStorage.getItem("user");
            this.getIdentifiants(); 
            this.showWindowLog = false;
          }
        })
        .catch(function(error) {
          console.log(error);
          this.showWindowLog = true;
        });            
        
        // Prevent modal from closing      

        bvModalEvt.preventDefault();

      // Trigger submit handler
      this.handleSubmit();
    },
    logout() {
      this.axios
        .post("http://localhost:3000/api/auth/logout")
        .then(response => {
          localStorage.removeItem("user");
          this.credentials.token = "";
          if (!this.credentials.token) {
            // this.identifiants = [];
            // this.element = [];
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // create identifiant
    createIdentifiants(bvModalEvt) {
      let user = JSON.parse(localStorage.getItem("user"));
      var headers = {
        headers: {
          Authorization: "Bearer " + user.token
        }
      };
      this.axios
        .post(
          "http://localhost:3000/api/post",
          {
            name: this.name,
            username: this.username,
            password: this.password,
            image: this.image,
            categories_id: this.categorie_selected,
            date_creation: moment(new Date()).format("YYYY-MM-DD"),
            date_modification: moment(new Date()).format("YYYY-MM-DD"),
            id_user: this.credentials.token
          },
          headers
        )
        .then(response => {
          this.getIdentifiants();
          console.log("Objet crée");
        })
        .catch(function(error) {
          console.log(error);
        });
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    //update identifiant
    updateIdentifiant(element) {
      const data_c = element.date_creation;
      let user = JSON.parse(localStorage.getItem("user"));
      var headers = {
        headers: {
          Authorization: "Bearer " + user.token
        }
      };
      this.axios
        .put(
          `http://localhost:3000/api/put/${element._id}`,
          {
            name: element.name,
            username: element.username,
            password: element.password,
            image: element.image,
            categories_id: element.categories_id,
            date_creation: moment(data_c).format("YYYY-MM-DD"),
            date_modification: moment(new Date()).format("YYYY-MM-DD")
          },
          headers
        )
        .then(response => {
          console.log("Objet modifié");
          this.getIdentifiants();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // delete identifiant
    deleteIdentifiant(element) {
      let user = JSON.parse(localStorage.getItem("user"));
      this.axios
        .delete(`http://localhost:3000/api/delete/${element._id}`, {
          headers: {
            Authorization: "Bearer " + user.token
          }
        })
        .then(response => {
          console.log("Objet supprimé");
          this.getIdentifiants();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // get identifiant
    async getIdentifiants() {
      let user = JSON.parse(localStorage.getItem("user"));
      const response = await this.axios.get("http://localhost:3000/api/", {
        headers: {
          Authorization: "Bearer " + user.token
        }
      });      

      if (response.status === 200 && this.credentials.token !== "") {
        this.identifiants = response.data;
      } else {
        console.log("Erreur");
      }
      if (this.credentials.token === "") {
        console.log("Connectez-vous")
      }
    },
    // definit le text selon la longueur deu mot de passe
    check() {
    },
    // affiche et cache le mot de passe
    displayPassword() {
      this.passwordFiledType =
        this.passwordFiledType === "password" ? "text" : "password";
      this.eyeIcon = this.eyeIcon === "eye-slash" ? "eye" : "eye-slash";
    },
    // verifie si un champs required est null
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    // verifie si un champs required est null
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      // Push the name to submitted names
      this.submittedNames.push(this.name);
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
    // reset les champs de la modal a zéro
    resetModal() {
      (this.name = ""),
        (this.username = ""),
        (this.password = ""),
        (this.categorie_selected = null);
    },
    // modal de suppression
    modalDelete(element) {
      this.$bvModal
        .msgBoxConfirm("Cette action est irréversible", {
          title: "Êtes-vous sûr de vouloir supprimer : " + element.name,
          size: "",
          buttonSize: "sm",
          okVariant: "danger",
          okTitle: "Supprimer",
          cancelTitle: "Fermer",
          footerClass: "p-2",
          hideHeaderClose: false,
          centered: true
        })
        .then(value => {
          if (value) {
            this.deleteIdentifiant(element);
          }
        })
        .catch(err => {
          console.log("une erreur est survenue");
        });
    }
  },
  // filtre with moment
  filters: {
    currency: function(val) {
      let configuration = {
        locale: "fr",
        currency: "EUR"
      };
      return new Intl.NumberFormat(configuration.locale, {
        style: "currency",
        currency: "EUR"
      }).format(val);
    },
    nl2br: function(val) {
      return val.replace(/\n/g, "<br>");
    },
    formatDate: function(val) {
      return moment(val).format("L");
    },
    formatShortDate: function(val) {
      return moment(val).format("DD/MM");
    },
    date: function(val) {
      return moment(val).format("LL");
    },
    datetime: function(val) {
      return moment(val).format("llll");
    },
    formatRelativeDate: function(val) {
      return moment(val).calendar();
    }
  },
  mounted() {
    this.check();
    this.getIdentifiants();
  },
  computed: {
    // get all
    allElements() {
      return this.identifiants;
    },
    // get element pour la barre de recherche
    filteredElements() {
      return this.identifiants.filter(identifiants =>
        identifiants.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
    // get element -> identifiant
    filteredIdentifiants() {
      return this.identifiants.filter(
        identifiant => identifiant.categories_id === 1
      );
    },
    // get element -> notes
    filteredNotes() {
      return this.identifiants.filter(note => note.categories_id === 2);
    },
    // get element -> cartes
    filteredCartes() {
      return this.identifiants.filter(carte => carte.categories_id === 3);
    }
  },
  created() {
    // get des identifiants tout les 1sec
    // setInterval(() => this.getIdentifiants(), 1000);
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: 0.1s;
}

.fade-enter,
  .fade-leave-to

  /* .fade-leave-active below version 2.1.8 */
 {
  opacity: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: white;
  text-decoration: none !important;
}

a:hover {
  color: #42b983;
}

.element {
  position: relative;
  display: block;
  padding: 10px;
  color: white;
  border: unset;
  border-bottom: 1px solid black;
  background: transparent;
  cursor: pointer;
}

.element:first-child {
  border-top-left-radius: unset;
  border-top-right-radius: unset;
}

.element:active,
.element:focus,
.element:hover {
  background-color: #313234 !important;
  color: white;
}

.element-search {
  color: white;
  text-align: center;
  border: 1px solid rgb(105, 106, 107);
  background-color: rgb(31, 32, 34);
  height: 26px;
  width: 95%;
  margin: auto;
  margin-top: 4px;
}

.element-search:focus {
  background-color: transparent;
  color: whitesmoke;
}

.number-element {
  display: inline-block;
  background-color: #2a2a2c;
  width: 25px;
  text-align: center;
  border: 1px solid black;
  border-radius: 8px;
}

.banniere {
  padding: 20px;
  background: #313234;
  border-bottom: black 1px solid;
  border-radius: 0 5px 0 0;
}

.banniere svg {
  height: 26px;
  width: 26px !important;
  position: relative;
  float: right;
  top: -13px;
  padding: 5px;
  color: whitesmoke;
  border-radius: 5px;
  cursor: pointer;
  background-color: #58595b;
}

.element-menu .categories {
  margin-top: 25px;
}

.element:last-child {
  border-bottom-right-radius: unset;
  border-bottom-left-radius: unset;
}

.details .content-details {
  padding: 20px;
  height: 88vh;
  overflow: auto;
}

.detail-value .strong {
  font-size: 13px;
  float: right;
  position: relative;
  margin-top: 0;
  margin-bottom: 0;
}

.detail-value .progression {
  margin-top: -20px;
}

.input-details {
  height: 20px;
  width: 45%;
  background: transparent;
  border: 1px dotted #696a6b;
  color: white;
  font-size: 14px;
  padding: 0.3rem 0.3rem 0.3rem 1.8em;
  margin-top: -3px;
}

.input-details:hover {
  border: 1px dotted #696a6b;
}

.input-details:focus {
  background: transparent;
  color: white;
}
</style>
