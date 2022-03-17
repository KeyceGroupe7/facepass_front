<template>
  <div id="home">
    <section id="top">
      <b-container>
            <div class="col-sm-6">
              <h1>Bienvenue sur FacePass</h1>
              <p>Le gestionnaire de mot de passe intuitif et sécurisé</p>
              <button class="btn btn-light">S'inscrire</button>
              <br><br>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam ut officia sunt animi suscipit hic eveniet debitis officiis id, adipisci dolor exercitationem quo architecto, excepturi cupiditate illo, vel recusandae quisquam? Soluta culpa facilis fugiat reprehenderit officiis earum asperiores deleniti neque.</p>
        </div>
        </b-container>
      </section>
        <section id="middle">
          <b-container>
            <div class="col-sm-6 row">
              <h2>Un gestionnaire, des avantages </h2>
              <p>Evolutif selon vos besoins, qualitatif en toutes <br> circonstances !</p>
            </div>
          </b-container>
        <b-container>
          <div class="row justify-content-between cartes">
            <article class="col-sm-3 custom-card card">
              <img src="../assets/icon-scan.png" title="Gestionnaire sécurité et chiffré" class="image">
            </article>
            <article class="col-sm-3 custom-card card">
              <img src="../assets/icon-scan.png" title="Reconnaissance faciale" class="image">
            </article>
            <article class="col-sm-3 custom-card card">
              <img src="../assets/icon-scan.png" title="Projet open source" class="image">
            </article>
          </div>
        </b-container>
        </section>
        <section>
            <footer class="bas">
              <div class="row justify-content-between">
                <div class="col-sm-3 bas">
                  <h3>Contenu</h3>
                  <li>test</li>
                  <li>test2</li>
                  <li>test3</li>
                </div>
                <div class="col-sm-3 bas">
                  <h3>Contenu</h3>
                  <li>test</li>
                  <li>test2</li>
                  <li>test3</li>
                </div>
                <div class="col-sm-3 bas">
                  <h3>Contenu</h3>
                  <li>test</li>
                  <li>test2</li>
                  <li>test3</li>
                </div>
              </div>
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
  background: url('../assets/pc-vector.png'), linear-gradient(332deg, rgba(130,137,232,1) 0%, rgba(28,18,88,1) 56%);
  background-position: right;
  background-repeat: no-repeat;
  align-items: center;
  padding-bottom: 300px;
  padding-top: 200px;
}

#middle{

background-color: #353a40;  
}

.col-sm-6{
  color: white;
  margin-left: 1%;

}

.row{
  color: white;

}

.custom-card{
  color: black;
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

.cartes{
  padding-bottom: 100px;
  background-color: #353a40
}

</style>