<template>
  <div>
    <div class="page_succes d-flex justify-content-center text-center">
      <div>
        <nuxt-img
          format="webp"
          sizes="xs:35vw sm:30vw md:20vw lg:15vw"
          quality="90"
          fit="cover"
          src="/checked.png"
        />
        <h1>Subscription Pending</h1>
        <p>
          You have a pending subscription, please try again after <br />
          you get an email confirming that your pending subscription <br />
          has been processed.
        </p>
        <nuxt-link class="home_link" to="/user_dashboard/dashboard"
          >back to dashboard</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default { middleware: "auth" };
</script>

<style >
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