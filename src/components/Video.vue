<template>
  <div id="video-container">
    <iframe
      ref="videoRef"
      id="video"
      src="https://player.vimeo.com/video/447147496?h=66d944f821&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
      width="500px"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
      controls
    >
    </iframe>
  </div>
</template>

<script>
export default {
      mounted() {
    this.$refs.videoRef.src = "https://player.vimeo.com/video/447147496?autoplay=1&muted=1";
  }
};
</script>

<style scoped>
#video{
  width: 550px;
  height: 500px;
}
#video-container{
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin-top: -4rem;
}
</style>