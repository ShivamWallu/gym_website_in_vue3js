<!-- views/Photos.vue -->
<template>
  <div class="home">
    <div class="shine">Gym Poses</div>
    <div class="image-gallery">
      <img src="@/assets/mypic.jpg" alt="Image 1">
      <img src="@/assets/mypic2.jpg" alt="Image 2">
      <!-- Add more images here -->
    </div>
    <div class="loader">
      <div data-glitch="More Photos Soon!" class="glitch">More Photos Soon!</div>
    </div><br><br><br><br><br>
  </div>
</template>

<script>
export default {
  name: 'Photos',
};
</script>

<style scoped>
.home{
  margin-top: 80px;
  background-color: #222;
}
.shine {
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 2em;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.3);
  background: #222 -webkit-gradient(
      linear,
      left top,
      right top,
      from(#222),
      to(#222),
      color-stop(0.5, #fff)
    ) 0 0 no-repeat;
  background-image: -webkit-linear-gradient(
    -40deg,
    transparent 0%,
    transparent 40%,
    #fff 50%,
    transparent 60%,
    transparent 100%
  );
  -webkit-background-clip: text;
  -webkit-background-size: 100% 100%;
  -webkit-animation: zezzz;
  -webkit-animation-duration: 7s;
  -webkit-animation-iteration-count: infinite;
}
@-webkit-keyframes zezzz {
  0%,
  10% {
    background-position: -200px;
  }
  20% {
    background-position: top left;
  }
  100% {
    background-position: 200px;
  }
}
/* IMAGES */
.image-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* Creates gaps between images */
}
.image-gallery img {
  width: calc(33.33% - 0px); /* Adjust according to the number of images you want to display in a row */
  margin-bottom: 20px; /* Adjust the gap between rows */
}
@media screen and (max-width: 768px) {
  .image-gallery img {
    width: calc(50% - 0px); /* Adjust for smaller screens */
  }
}
@media screen and (max-width: 480px) {
  .image-gallery img {
    width: calc(100% - 0px); /* Adjust for even smaller screens */
  }
}
/* heading */
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
}
.glitch {
  position: relative;
  font-size: 25px;
  font-weight: 700;
  line-height: 1.2;
  color: #fff;
  letter-spacing: 5px;
  z-index: 1;
  animation: shift 1s ease-in-out infinite alternate;
  margin-bottom: 35px;
}
.glitch:before,
.glitch:after {
  display: block;
  content: attr(data-glitch);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8;
}
.glitch:before {
  animation: glitch 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
  color: #8b00ff;
  z-index: -1;
}
.glitch:after {
  animation: glitch 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
  color: #00e571;
  z-index: -2;
}
@keyframes glitch {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-3px, 3px);
  }
  40% {
    transform: translate(-3px, -3px);
  }
  60% {
    transform: translate(3px, 3px);
  }
  80% {
    transform: translate(3px, -3px);
  }
  to {
    transform: translate(0);
  }
}
@keyframes shift {
  0%, 40%, 44%, 58%, 61%, 65%, 69%, 73%, 100% {
    transform: skewX(0deg);
  }
  41% {
    transform: skewX(10deg);
  }
  42% {
    transform: skewX(-10deg);
  }
  59% {
    transform: skewX(40deg) skewY(10deg);
  }
  60% {
    transform: skewX(-40deg) skewY(-10deg);
  }
  63% {
    transform: skewX(10deg) skewY(-5deg);
  }
  70% {
    transform: skewX(-50deg) skewY(-20deg);
  }
  71% {
    transform: skewX(10deg) skewY(-10deg);
  }
}
</style>

