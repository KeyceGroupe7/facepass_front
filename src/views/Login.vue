<template xmlns="http://www.w3.org/1999/html">
  <div id="login">
    </br>
    <h3 class="text-white">Bienvenue !</h3>
    <div id="connect" v-if="connectPage">
    <!-- connexion user  -->
      <div class="butttongroup text-center">
      <button
        class="btn btn-dark mt-2"
        @click="login()"
      >
        Connexion
      </button>
      <button
        class="btn btn-info mt-2"
        @click="LogToSign"
      >
        Inscription
      </button>
      </div>
      <b-container class="pt-5">
      <div class="col-6 mb-5 card shadow mx-auto">
        <h4 class="mt-2 mb-0">Connexion</h4>
        <hr>
        <b-form-group
          class=""
          id="email-sign-in"
          label="Identifiant"
        >
          <b-form-input
            v-model="credentials.email"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          class=""
          id="password-sign-in"
          label="Mot de passe"
        >
          <b-form-input
            v-model="credentials.password"
            type="password"
            required
          ></b-form-input>

          <p v-if="this.passwordAlert.length>1" class="alert mt-2">{{ passwordAlert }}</p>
        </b-form-group>
      </div>
    </b-container>
      <div class="text-center">
      <button
        class="btn btn-primary mt-2 w-25"
        @click="getFaceRecognize()"
      >
        Utiliser la reconnaissance faciale
      </button>
      </div>
  </div>

  <div class="signup" v-if="signupPage">
    <div class="butttongroup text-center">
      <button
        class="btn btn-dark mt-2"
        @click="signUp()"
      >
        S'inscrire
      </button>
      <button
        class="btn btn-info mt-2"
        @click="SignToLog()"
      >
        Connexion
      </button>
    </div>
    <b-container class="mt-5">
      <div class="col-6 card shadow mx-auto">
        <h4 class="mt-2 mb-0">Inscription</h4>
        <hr>
        <b-form-group
          class=""
          id="new-email-sign-in"
          label="Identifiant"
        >
          <b-form-input
            v-model="newCredentials.email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          class=""
          id="new-password-sign-in"
          label="Mot de passe"
        >
          <b-form-input
            v-model="newCredentials.password"
            type="password"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          class=""
          id="new-passwordconfirm-sign-in"
          label="Confirmez le mot de passe"
        >
          <b-form-input
            v-model="newCredentials.passwordConfirm"
            type="password"
            required
          ></b-form-input>
          <p v-if="this.newPasswordConfirmAlert.length>1" class="alert mt-2">{{ newPasswordConfirmAlert }}</p>
        </b-form-group>
      </div>
    </b-container>

  </div>
  </div>

</template>

<script>

export default {
  name: "login",
  data() {
    return {
      newPasswordConfirmAlert: '',
      connectPage:true,
      signupPage:false,
      passwordAlert: '',
      credentials: {
        email: "",
        password: "",
        userId: "",
        token: ""
      },
      newCredentials: {
      },
      user: {}
    }
  },
  mounted() {
    if (localStorage) {
      this.user = JSON.parse(localStorage.getItem("user"));
      }if(this.user.token){
        this.$router.push({ name: 'Dashboard' })
      }
  },
  methods: {
    login() {
      if(this.credentials.email != null && this.credentials.password != null){
        console.log('oooh');
        this.axios
        .post("http://localhost:3000/api/auth/login", {
          email: this.credentials.email,
          password: this.credentials.password
        })
        .then(response => {
          if (response.data.token) {
            localStorage.setItem(
              "user",
              JSON.stringify(response.data)
            );
            this.credentials.token = localStorage.getItem("user");
            this.$router.push({ name: 'Dashboard' });

          }
        })
        .catch(function(error) {
          console.log(error);
          this.passwordAlert = 'Identifiants inconnus';


        });
        console.log(this.passwordAlert);
      }
    },
    signUp() {
      if(this.newCredentials.email != null && this.newCredentials.password != null && this.newCredentials.passwordConfirm != null){
        if(this.newCredentials.passwordConfirm === this.newCredentials.password){
          this.axios
          .post("http://localhost:3000/api/auth/signup", {
            email: this.newCredentials.email,
            password: this.newCredentials.password,

          })
          .then(response => {
            if (response.data.token) {
              localStorage.setItem(
                "user",
                JSON.stringify(response.data)
              );
              this.credentials.token = localStorage.getItem("user");
              this.$router.push({ name: 'Dashboard' })

            }
          })
          .catch(function(error) {
            console.log(error);

          });
        }else{
          this.newPasswordConfirmAlert = 'Les mots de passes ne sont pas identiques'
        }
      }

    },

    LogToSign() {
      this.connectPage= false;
      this.signupPage= true;
      this.newCredentials.email= '';
      this.newCredentials.password= '';
    },

    SignToLog() {
      this.signupPage= false;
      this.connectPage= true;
      this.credentials.email= '';
      this.credentials.password= '';
    },
  },
  created() {
  }
};
</script>

<style scoped>
h3 {
  text-align: center;
}

#login{
  background: linear-gradient(332deg, rgba(130,137,232,1) 0%, rgba(28,18,88,1) 56%);
}

#login{
  background: rgb(130,137,232);
  background: linear-gradient(332deg, rgba(130,137,232,1) 0%, rgba(28,18,88,1) 56%);
  height: calc(100vh - 56px);
}
.alert{
  color: rgb(224 135 135);
  padding: 5px 8px;
}

.butttongroup{
  margin-top: 20px;
}

button{
  margin-left: 10px;
  margin-right: 10px;
  width: 10%;
}
</style>
