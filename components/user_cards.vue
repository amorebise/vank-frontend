<template>
  <div>
    <div class="user__card__wrap">hi</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.user__card__wrap {
  border: 1px solid #00e8fe;
  width: 50%;
  margin: 40px auto;
  display: grid;
  place-items: center;
  border-radius: 20px;
  height: 300px;
}

@media (max-width: 768px) {
  .user__card__wrap {
    border: 1px solid #00e8fe;
    width: 100%;
    margin: 20px auto;
    display: grid;
    place-items: center;
    border-radius: 20px;
    height: 300px;
  }
}
</style>