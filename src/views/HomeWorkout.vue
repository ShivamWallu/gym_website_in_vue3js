<!-- views/HomeWorkout.vue -->
<template>
  <div class="home">
    <ExerciseDay 
      headingButtonText="I'M READY" 
      subheadingButtonText="ready"
      :videos="bicepVideos"
      mainVideoSrc="/homeworkout/girl1.mp4"
      :posterImages="bicepPosterImages"
    />
    <ExerciseDay 
      headingButtonText="I'M READY" 
      subheadingButtonText="steady"
      :videos="tricepVideos"
      mainVideoSrc="/homeworkout/girl5.mp4"
      :posterImages="tricepPosterImages"
    />
    <ExerciseDay 
      headingButtonText="I'M READY" 
      subheadingButtonText="go"
      :videos="chestVideos"
      mainVideoSrc="/homeworkout/girl9.mp4"
      :posterImages="chestPosterImages"
    />
    <br><br><br><br><br>
  </div>
</template>

<script>
import ExerciseDay from '@/components/Days.vue';
import ReadyButton from "@/components/ReadyButton.vue";
export default {
  name: 'HomeWorkout',
  components: {
    ExerciseDay,ReadyButton
  },
  setup() {
    const bicepVideos = [
      '/homeworkout/girl1.mp4',
      '/homeworkout/girl2.mp4',
      '/homeworkout/girl3.mp4',
      '/homeworkout/girl4.mp4',
    ];
    const tricepVideos = [
      '/homeworkout/girl5.mp4',
      '/homeworkout/girl6.mp4',
      '/homeworkout/girl7.mp4',
      '/homeworkout/girl8.mp4',
    ];
    const chestVideos = [
      '/homeworkout/girl9.mp4',
      '/homeworkout/girl10.mp4',
      '/homeworkout/girl11.mp4',
      '/homeworkout/girl12.mp4',
      '/homeworkout/girl13.mp4',
    ];
    const bicepPosterImages = [
      '/homeworkoutImg/girl1.png',
      '/homeworkoutImg/girl2.png',
      '/homeworkoutImg/girl3.png',
      '/homeworkoutImg/girl4.png',
    ];
    const tricepPosterImages = [
      '/homeworkoutImg/girl5.png',
      '/homeworkoutImg/girl6.png',
      '/homeworkoutImg/girl7.png',
      '/homeworkoutImg/girl8.png',
    ];
    const chestPosterImages = [
      '/homeworkoutImg/girl9.png',
      '/homeworkoutImg/girl10.png',
      '/homeworkoutImg/girl11.png',
      '/homeworkoutImg/girl12.png',
      '/homeworkoutImg/girl13.png',
    ];
    return {
      bicepVideos,
      tricepVideos,
      chestVideos,
      bicepPosterImages,
      tricepPosterImages,
      chestPosterImages,
    };
  },
};
</script>

<style scoped>
.home {
  margin-top: 70px;
  background-color: #222;
}
</style>
