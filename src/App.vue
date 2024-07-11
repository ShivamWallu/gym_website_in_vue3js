<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import RegistrationPopup from '@/components/RegistrationPopup.vue';
export default {
  name: 'App',
  components: {
    Navbar,  
    Footer,
    RegistrationPopup
  },
  mounted() {
    console.log('App mounted');
  }
}
</script>
<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
    <RegistrationPopup />
  </div>
</template>
<style>
/* TOASTER  ALERT*/
#toaster-container {
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 30000;
}
.toaster {
  display: flex;
  align-items: center;
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  margin-top: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  z-index: 20000;
}
.toaster.show {
  opacity: 1;
}
.toaster i {
  margin-right: 10px;
}
.success {
  background-color: #28a745;
  color: white;
}
.warning {
  background-color: red;
  color: rgb(255, 255, 255);
}
/* Body */
body, html {
  background-color: #222;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
.swiper-container {
  width: 358px; /* Set the width of the container */
  height: 120px; /* Set the height of the container */
  overflow: hidden; /* Hide overflow to keep the container dimensions fixed */
}
@media (min-width: 380px) {
  .swiper-container {
    width: 410px; /* Set the width of the container */
    height: 140px; /* Set the height of the container */
    overflow: hidden; /* Hide overflow to keep the container dimensions fixed */
  }
  .play-button {
    transform: translateX(9%);
  }
}
/* Swiper slide configuration */
.swiper-slide {
  position: relative;
  padding-bottom: 60px;
  overflow: hidden; /* Hide overflow of the video container */
}
/* Video styling to fit within the slide */
.swiper-slide video {
  width: 100%; /* Fit the video to the slide width */
  height: 100%; /* Fit the video to the slide height */
  object-fit: cover; /* Ensure the video covers the entire slide area */
}
.swiper {
  position: relative;
  width: 100%;
}
.swiper-pagination2 {
  z-index: 9999; /* Set a high z-index to ensure it's above the videos */
}
.mySwiper2 {
  margin-top: -40px;
  margin-bottom: 60px;
}
.swiper-slide button::before {
  position: absolute;
  content: "";
  height: 0;
  width: 0;
  top: 0;
  left: 0;
  background: linear-gradient(
    135deg,
    rgba(33, 33, 33, 1) 0%,
    rgba(33, 33, 33, 1) 50%,
    rgba(150, 4, 31, 1) 50%,
    rgba(191, 4, 38, 1) 60%
  );
  border-radius: 0 0 0.5em 0;
  box-shadow: 0.2em 0.2em 0.2em rgba(0, 0, 0, 0.3);
  transition: 0.3s;
}
.swiper-slide button:hover::before {
  width: 1.6em;
  height: 1.6em;
}
.swiper-slide button:active {
  box-shadow: 0.2em 0.2em 0.3em rgba(0, 0, 0, 0.3);
  transform: translate(0.1em, 0.1em);
}
/* Disable text selection */
.home {
    -webkit-user-select: none; /* Disable selection for WebKit/Blink browsers */
    -moz-user-select: none; /* Disable selection for Gecko browsers */
    -ms-user-select: none; /* Disable selection for Edge browsers */
    user-select: none; /* Disable selection for all other browsers */
}
/* Optionally, prevent copying from the whole page */
body {
    -webkit-touch-callout: none; /* Disable long touch callout (iOS) */
    -webkit-user-drag: none; /* Prevent elements from being dragged */
    -webkit-tap-highlight-color: transparent; /* Remove highlight on tap */
}
</style>
