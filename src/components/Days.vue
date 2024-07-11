<!-- components/Days.vue -->
<template>
  <div class="exercise-day">
    <ReadyButton 
      :headingButtonText="headingButtonText" 
      :subheadingButtonText="subheadingButtonText"
    />

    <div class="main-video-container">
      <video ref="mainVideo" width="100%" height="auto" controls muted autoplay controlsList="nodownload">
        <source :src="mainVideoSrc" type="video/mp4" loading="lazy">
      </video>
    </div>

    <swiper
      :slides-per-view="3"
      :space-between="10"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :breakpoints="breakpoints"
    >
      <swiper-slide v-for="(video, index) in videos" :key="index">
        <div class="video-container">
          <video
            :src="video"
            width="100%"
            height="auto"
            muted
            loading="lazy"
            :poster="posterImages[index]"
          ></video>
          <button class="play-button" @click="checkAndPlayVideo(index)">Play</button>
        </div>
      </swiper-slide>
    </swiper>

    <div id="toaster-container"></div>
    <RegistrationPopup :isVisible="isRegistrationPopupVisible" @update:isVisible="isRegistrationPopupVisible = $event" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import RegistrationPopup from '@/components/RegistrationPopup.vue';
import ReadyButton from '@/components/ReadyButton.vue';

export default {
  name: 'ExerciseDay',
  components: {
    Swiper,
    SwiperSlide,
    RegistrationPopup,
    ReadyButton
  },
  props: {
    headingButtonText: {
      type: String,
      required: true
    },
    subheadingButtonText: {
      type: String,
      required: true
    },
    videos: {
      type: Array,
      required: true
    },
    mainVideoSrc: {
      type: String,
      required: true
    },
    posterImages: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const mainVideo = ref(null);
    const isRegistrationPopupVisible = ref(false);

    const onSwiper = (swiper) => {
      console.log(swiper);
    };

    const onSlideChange = () => {
      console.log('slide change');
    };

    const playMainVideo = (index) => {
      if (mainVideo.value) {
        mainVideo.value.pause(); // Pause current video
        mainVideo.value.src = props.videos[index]; // Set new video source
        mainVideo.value.load();  // Load the new video source
        mainVideo.value.play();  // Play the video
      }
    };

    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return decodeURIComponent(parts.pop().split(';').shift());
      return null;
    };

    const checkAndPlayVideo = (index) => {
      const gymDataCookie = getCookie("GymData");

      if (gymDataCookie) {
        console.log("Cookie found, playing video...");
        closePopup();  // Ensure popup is closed if already open
        playMainVideo(index);
        pauseOtherMainVideos(); // Pause other main videos
      } else {
        console.log("Cookie not found, opening popup...");
        openRegistrationPopup();  // Call openRegistrationPopup function to open the popup
      }
    };

    const openRegistrationPopup = () => {
      isRegistrationPopupVisible.value = true;
    };

    const closePopup = () => {
      isRegistrationPopupVisible.value = false;
    };

    const breakpoints = {
      640: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    };

    const pauseOtherMainVideos = () => {
      const allMainVideos = document.querySelectorAll('.main-video-container video');
      allMainVideos.forEach(video => {
        if (video !== mainVideo.value) {
          video.pause();
        }
      });
    };

    onMounted(() => {
      if (mainVideo.value) {
        mainVideo.value.play();
      }
    });

    return {
      onSwiper,
      onSlideChange,
      playMainVideo,
      checkAndPlayVideo,
      mainVideo,
      breakpoints,
      isRegistrationPopupVisible,
      openRegistrationPopup,
      closePopup,
    };
  },
};
</script>
  <style scoped>
  /* Scoped styles for Home.vue */
  .home {
    margin-top: 70px;
    background-color: #222;
  }
  .main-video-container {
    margin-bottom: 20px;
  }
  .video-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .button-container {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  button {
    padding: 5px 10px;
    font-size: 16px;
    cursor: pointer;
  }
  .play-button {
    position: absolute;
    bottom: 8px;
    left: 0%;
    font-size: 1em;
    padding: 0.5em 2.4em;
    background-color: #bf0426;
    border: none;
    border-radius: 0.5em;
    color: #dedede;
    box-shadow: 0.5em 0.5em 0.5em rgba(0, 0, 0, 0.3);
    cursor: pointer;
    margin-left: 4px;
  }
  </style>
  