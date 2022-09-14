<template>
  <div>
    <success-component
      text="Your Submission Is Successful, Please Check Your
          Email to Verify Your Account."
    />
  </div>
</template>

<script>
</script>

<style scoped>
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