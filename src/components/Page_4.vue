<template>
  <div>
    <p>page4</p>
    <div>
      <button @click="pageto3b">前へ戻る</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    pageto3b() {
      this.$router.push({ path: "/page3" })
    }
  }
}
</script>