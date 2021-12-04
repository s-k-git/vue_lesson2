<template>
  <div class="page3">
    <p>page3</p>
    <p>ご相談内容をご記入ください</p>
    <p>-ご相談内容-</p>
    <textarea></textarea>
    <div class="page3btn">
      <button @click="pageto2b">前へ戻る</button>
      <button class="pageto4g" @click="pageto4g">次へ進む</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    pageto2b() {
      this.$router.push({ path: "/page2" })
    },
    pageto4g() {
      this.$router.push({ path: "/page4" })
    }
  }
}
</script>

<style>
textarea {
  margin-left: 5px;
    padding: 10px;
    width: 90%;
    height: 15em;
    line-height: 1;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px #999;
}

.page3 {
  width: 400px;
  margin: auto;
  border:solid #40E0D0;
}
/*
.p3head {
  background-color: #d5fffb;
  border: solid #40E0D0;
}

.content {
  margin: auto;
  border:solid #40E0D0;
  padding: 10px;
}
*/
.page3btn {
  width: 200px;
  margin: auto;
  padding-top: 10px;
}

.pageto4g {
  margin-left: 10px;
}
</style>