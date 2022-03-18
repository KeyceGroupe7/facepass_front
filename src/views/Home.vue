<template>
  <div id="home">
    <section id="top">
      <b-container class="relative">
          <div class="col-lg-6 custom-light-text">
            <h1>Bienvenue sur FacePass</h1>
            <p>Le gestionnaire de mot de passe intuitif et sécurisé</p>
            <router-link class="btn btn-light" to="/login">S'inscrire</router-link>
            <br><br>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam ut officia sunt animi suscipit hic eveniet debitis officiis id, adipisci dolor exercitationem quo architecto, excepturi cupiditate illo, vel recusandae quisquam? Soluta culpa facilis fugiat reprehenderit officiis earum asperiores deleniti neque.</p>
        </div>
        <img id="img-pc-top" src="../assets/top-pc-vector.png" alt="">
        <img id="img-pc-bottom" src="../assets/bottom-pc-vector.png" alt="">
        </b-container>
      </section>
        <section id="middle">
          <b-container>
            <div class="col-sm-6 row tmid">
              <h2>Un gestionnaire, des avantages </h2>
              <p>Evolutif selon vos besoins, qualitatif en toutes <br> circonstances !</p>
            </div>
          </b-container>
        <b-container>
          <div class="row justify-content-between cartes-wrapper">
            <article class="col-sm-3 custom-card card">
              <img src="../assets/lock.png" title="Gestionnaire sécurité et chiffré" class="image">
              <h5>Gestionnaire sécurisé et chiffré</h5>
            </article>
            <article class="col-sm-3 middle-item-card custom-card card">
              <img src="../assets/new_icon-scan.png" title="Reconnaissance faciale" class="image">
              <h5>Reconnaissance faciale</h5>
            </article>
            <article class="col-sm-3 custom-card card">
              <img src="../assets/github.png" title="Projet open source" class="image">
              <h5>Projet open source</h5>
            </article>
          </div>
        </b-container>
        </section>
        <section>
            <footer class="bas">
                <div class="bas">
                  <h3>FacePass</h3>
                  <router-link class="nav-link text-white" to="/home">Accueil</router-link>
                  <router-link class="nav-link text-white" to="/login">Connexion</router-link>
                  <!--<li><a href="about">A propos</a></li>-->
                </div>
            </footer>
            <footer class="copyr">
              <p>FacePass Tout droits réservés</p>
            </footer>
        </section>
    </div> 
   
</template>

<script>

export default {
  name: "login",
  data() {
    return {
    }
  },
  mounted() {

  },
  methods: {

  },
  created() {
    // get des identifiants tout les 1sec
    // setInterval(() => this.getIdentifiants(), 1000);
  }
};
</script>

<style scoped>

#top{
  background: linear-gradient(332deg, rgba(130,137,232,1) 0%, rgba(28,18,88,1) 56%);
  padding-bottom: 15%;
  padding-top: 10%;
}

#img-pc-top{
  position: absolute;
  display: inherit;
  right: 0;
  top: 0;
  z-index: 20;
  animation: 1.5s ease-in-out 0s infinite alternate float-picture;;
}

#img-pc-bottom{
  position: absolute;
  display: inherit;
  right: 0;
  top: 0;
  z-index: 10;
}

@keyframes float-picture { 
  0% { top: 0px; } 
  100% { top: -20px; }  }

#middle{

background-color: #353a40;  
}

 .middle-item-card img{
   width: 60%;
 }

.custom-light-text{
  color: #ECE8FF;
}

.row{
  color: white;

}

.custom-card{
  color: black;
  background-color: #CDCCF8;
  height: 300px;
}

.image{
  width: 35%;
  align-self: center;
  margin-top: 15%;
  margin-bottom: 15%;
}

.bas{
  background-color: #261968;
  color: white;
  padding: 3%;
}

.cartes-wrapper{
  padding-bottom: 100px;
  background-color: #353a40;
  text-align: center;
}

.copyr{
  background-color: #353a40;
  text-align: center;
  color: rgb(255, 255, 255);
  padding-top: 20px;
  display: flex;
  justify-content: center;
}

.tmid{
  padding-top: 75px;
  padding-bottom: 50px;
}

@media (min-width: 992px) and (max-width: 1199px) { 
  #img-pc-top{
    display: inherit;
    width: 50%;
  }

  #img-pc-bottom{
    display: inherit;
    width: 50%;
  }
}

@media (max-width: 991px) {
  #top{
    background: url('../assets/pc-vector-small.png'), linear-gradient(332deg, rgba(130,137,232,1) 0%, rgba(28,18,88,1) 56%);
    background-position: bottom right;
    background-repeat: no-repeat;
    align-items: center;
  }
  #img-pc-top{
    display: none;
  }

  #img-pc-bottom{
    display: none;
  }
}

</style>