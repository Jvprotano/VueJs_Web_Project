<template>
  <div>
    <div id="snow"></div>
    <img class="santa" src="../assets/helpers/santas.gif" alt="Santa Be Watchin" />
  </div>
</template>

<style scoped>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
}
body {
  background: #111;
  overflow: hidden;
}

/***************************

BEGIN OF FLYING SANTA

***************************/
.santa {
  width:20vw;
  min-width:175px;
  z-index: 600;
  cursor: pointer;
  -webkit-animation: FlyingSanta 38s infinite linear;
  -moz-animation: FlyingSanta 38s infinite linear;
  -ms-animation: FlyingSanta 38s infinite linear;
  -o-animation: FlyingSanta 38s infinite linear;
  animation: FlyingSanta 38s infinite linear;
  bottom: 0%;
  left: 0%;
  position: absolute;
}
@keyframes FlyingSanta {
  25% {
    bottom: 80%;
    left: 85%;
    transform: rotateY(0deg);
  }
  26% {
    transform: rotateY(180deg);
  }
  50% {
    bottom: 60%;
    left: 0%;
    transform: rotateY(180deg);
  }
  51% {
    transform: rotateY(0deg);
  }
  75% {
    bottom: 40%;
    left: 85%;
    transform: rotateY(0deg);
  }
  76% {
    bottom: 40%;
    left: 85%;
    transform: rotateY(180deg);
  }
  99% {
    transform: rotateY(180deg);
  }
}

/***************************

//// END OF FLYING SANTA ///

***************************/

#snow {
  background: none;
  z-index: 200;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/191814/flake1.png"),
    url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/191814/flake2.png"),
    url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/191814/flake3.png");
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  -webkit-animation: snow 10s linear infinite;
  -moz-animation: snow 10s linear infinite;
  -ms-animation: snow 10s linear infinite;
  animation: snow 10s linear infinite;
  pointer-events: none;
}
@keyframes snow {
  0% {
    background-position: 0px 0px, 0px 0px, 0px 0px;
  }
  50% {
    background-position: 500px 500px, 100px 200px, -100px 150px;
  }
  100% {
    background-position: 500px 1000px, 200px 400px, -100px 300px;
  }
}
@-moz-keyframes snow {
  0% {
    background-position: 0px 0px, 0px 0px, 0px 0px;
  }
  50% {
    background-position: 500px 500px, 100px 200px, -100px 150px;
  }
  100% {
    background-position: 400px 1000px, 200px 400px, 100px 300px;
  }
}
@-webkit-keyframes snow {
  0% {
    background-position: 0px 0px, 0px 0px, 0px 0px;
  }
  50% {
    background-position: 500px 500px, 100px 200px, -100px 150px;
  }
  100% {
    background-position: 500px 1000px, 200px 400px, -100px 300px;
  }
}
@-ms-keyframes snow {
  0% {
    background-position: 0px 0px, 0px 0px, 0px 0px;
  }
  50% {
    background-position: 500px 500px, 100px 200px, -100px 150px;
  }
  100% {
    background-position: 500px 1000px, 200px 400px, -100px 300px;
  }
}
</style>

