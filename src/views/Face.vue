<template>
  <div id="face">
    face
    <button @click="postPicture()">lol</button>
  </div>
</template>

<script>

export default {
  name: "Face",
  data() {
    return {
      user: {},
    }
  },
  created(){
    console.log('toto');
    // Promise.all([
    //   faceapi.nets.faceRecognitionNet.loadFromUri('../../public/face/models'),
    //   faceapi.nets.faceLandmark68Net.loadFromUri('../../public/face/models'),
    //   faceapi.nets.ssdMobilenetv1.loadFromUri('../../public/face/models')    
    // ]).then(this.start);
  },
  mounted() {
    if (localStorage) {
      this.user = JSON.parse(localStorage.getItem("user"));
      
      if(!this.user.token){
        this.$router.push({ name: 'Login' })
      }
    }else{
        this.$router.push({ name: 'Login' })
    }
  },
  methods: {
    postPicture() {
        console.log('post image');
        this.axios
        .post("http://localhost:3000/api/face/post", {

        })
        .then(response => {
            console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  }
};
</script>

<style>
#faceWarp{
  margin: 0 auto;
  padding: 0;
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

canvas{
  position: absolute;

}
</style>
