<template>
  <div>
    <p>page0</p>
    <div class="page0btn">
      <button @click="pageto1g">次へ進む</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    pageto1g() {
      this.$router.push({ path: "/page1" })
    }
  }
}
</script>

<style>

</style>