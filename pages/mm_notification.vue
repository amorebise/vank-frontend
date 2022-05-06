<template>
  <div>
    <success-component
      text="Your Application is Successful, Check Your Mail For Verification."
    />
  </div>
</template>

<script>
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk&family=Titillium+Web&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Space Grotesk", sans-serif;
}
.page_succes {
  padding: 150px 20px;
}
.page_succes h1 {
  color: #1d83c5;
  font-weight: 700;
}
.page_succes p {
  font-size: 20px;
}

@media (max-width: 768px) {
  .page_succes h1 {
    font-size: 30px;
  }
  .page_succes p,
  .home_link {
    font-size: 14px;
  }
}
</style>