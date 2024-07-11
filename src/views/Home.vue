<!-- views/Home.vue -->
<template>
  <div class="home">
    <ExerciseDay 
      headingButtonText="I'M READY FOR DAY - 1" 
      subheadingButtonText="bicep"
      :videos="bicepVideos"
      mainVideoSrc="/bicep/bicep1.mp4"
      :posterImages="bicepPosterImages"
    />
    <ExerciseDay 
      headingButtonText="I'M READY FOR DAY - 2" 
      subheadingButtonText="tricep"
      :videos="tricepVideos"
      mainVideoSrc="/tricep/tricep1.mp4"
      :posterImages="tricepPosterImages"
    />
    <ExerciseDay 
      headingButtonText="I'M READY FOR DAY - 3" 
      subheadingButtonText="chest"
      :videos="chestVideos"
      mainVideoSrc="/chest/chest1.mp4"
      :posterImages="chestPosterImages"
    />
    <ExerciseDay 
      headingButtonText="I'M READY FOR DAY - 4" 
      subheadingButtonText="shoulder"
      :videos="shoulderVideos"
      mainVideoSrc="/shoulder/video1.mp4"
      :posterImages="shoulderPosterImages"
    />
    <ExerciseDay 
      headingButtonText="I'M READY FOR DAY - 5" 
      subheadingButtonText="back"
      :videos="backVideos"
      mainVideoSrc="/back/back1.mp4"
      :posterImages="backPosterImages"
    />
    <ExerciseDay 
      headingButtonText="I'M READY FOR DAY - 6" 
      subheadingButtonText="leg"
      :videos="legVideos"
      mainVideoSrc="/leg/leg1.mp4"
      :posterImages="legPosterImages"
    />
    <br><br><br><br><br>
  </div>
</template>

<script>
import ExerciseDay from '@/components/Days.vue';
import ReadyButton from "@/components/ReadyButton.vue";
export default {
  name: 'Home',
  components: {
    ExerciseDay,ReadyButton
  },
  setup() {
    const bicepVideos = [
      '/bicep/bicep1.mp4',
      '/bicep/bicep2.mp4',
      '/bicep/bicep3.mp4',
      '/bicep/bicep4.mp4',
      '/bicep/bicep5.mp4',
      '/bicep/bicep6.mp4',
      '/bicep/bicep7.mp4',
      '/bicep/bicep8.mp4',
      '/bicep/bicep9.mp4',
    ];

    const tricepVideos = [
      '/tricep/tricep1.mp4',
      '/tricep/tricep2.mp4',
      '/tricep/tricep3.mp4',
      '/tricep/tricep4.mp4',
      '/tricep/tricep5.mp4',
      '/tricep/tricep6.mp4',
    ];

    const chestVideos = [
      '/chest/chest1.mp4',
      '/chest/chest2.mp4',
      '/chest/chest3.mp4',
      '/chest/chest4.mp4',
      '/chest/chest5.mp4',
      '/chest/chest6.mp4',
      '/chest/chest7.mp4',
    ];

    const shoulderVideos = [
      '/shoulder/video1.mp4',
      '/shoulder/video2.mp4',
      '/shoulder/video3.mp4',
      '/shoulder/video4.mp4',
      '/shoulder/video5.mp4',
      '/shoulder/video6.mp4',
      '/shoulder/video7.mp4',
      '/shoulder/video8.mp4',
    ];

    const backVideos = [
      '/back/back1.mp4',
      '/back/back2.mp4',
      '/back/back3.mp4',
      '/back/back4.mp4',
      '/back/back5.mp4',
      '/back/back6.mp4',
      '/back/back7.mp4',
      '/back/back8.mp4',
    ];

    const legVideos = [
      '/leg/leg1.mp4',
      '/leg/leg2.mp4',
      '/leg/leg3.mp4',
      '/leg/leg4.mp4',
      '/leg/leg5.mp4',
      '/leg/leg6.mp4',
      '/leg/leg7.mp4',
    ];

    const bicepPosterImages = [
      '/bicepImg/bicep1.png',
      '/bicepImg/bicep2.png',
      '/bicepImg/bicep3.png',
      '/bicepImg/bicep4.png',
      '/bicepImg/bicep5.png',
      '/bicepImg/bicep6.png',
      '/bicepImg/bicep7.png',
      '/bicepImg/bicep8.png',
      '/bicepImg/bicep9.png',
    ];

    const tricepPosterImages = [
      '/tricepImg/tricep1.png',
      '/tricepImg/tricep2.png',
      '/tricepImg/tricep3.png',
      '/tricepImg/tricep4.png',
      '/tricepImg/tricep5.png',
      '/tricepImg/tricep6.png',
    ];

    const chestPosterImages = [
      '/chestImg/chest1.png',
      '/chestImg/chest2.png',
      '/chestImg/chest3.png',
      '/chestImg/chest4.png',
      '/chestImg/chest5.png',
      '/chestImg/chest6.png',
      '/chestImg/chest7.png',
    ];

    const shoulderPosterImages = [
      '/shoulderImg/shoulder1.png',
      '/shoulderImg/shoulder2.png',
      '/shoulderImg/shoulder3.png',
      '/shoulderImg/shoulder4.png',
      '/shoulderImg/shoulder5.png',
      '/shoulderImg/shoulder6.png',
      '/shoulderImg/shoulder7.png',
      '/shoulderImg/shoulder8.png',
    ];

    const backPosterImages = [
      '/backImg/back1.png',
      '/backImg/back2.png',
      '/backImg/back3.png',
      '/backImg/back4.png',
      '/backImg/back5.png',
      '/backImg/back6.png',
      '/backImg/back7.png',
      '/backImg/back8.png',
    ];

    const legPosterImages = [
      '/legImg/leg1.png',
      '/legImg/leg2.png',
      '/legImg/leg3.png',
      '/legImg/leg4.png',
      '/legImg/leg5.png',
      '/legImg/leg6.png',
      '/legImg/leg7.png',
    ];

    return {
      bicepVideos,
      tricepVideos,
      chestVideos,
      shoulderVideos,
      backVideos,
      legVideos,
      bicepPosterImages,
      tricepPosterImages,
      chestPosterImages,
      shoulderPosterImages,
      backPosterImages,
      legPosterImages,
    };
  },
};
</script>

<style scoped>
/* Add your scoped styles here */
.home {
  margin-top: 70px;
  background-color: #222;
}

</style>
