<template>
  <div class="page2">
    <p>page2</p>
    <p>-現在、生命保険に加入されていますか？-<p>
    <label><input type="radio" name="insurance" value="yes" id="q1y" @change="nextq">はい</label>
    <label><input type="radio" name="insurance" value="no" id="q1n" @change="nextq">いいえ</label>
    <p></p>
    <div class="q2" id="q2">
    <p>-現在、入院中ですか。または、最近３ヶ月以内に医師の診療・検査の結果、入院・手術を勧められたことはありますか？-</p>
    <label><input type="radio" name="hospital" value="yes" id="q2y" @change="nextq">はい</label>
    <label><input type="radio" name="hospital" value="no" id="q2n" @change="nextq">いいえ</label>
    </div>
    <p></p>
    <div class="q3" id="q3">
    <p>-過去5年以内に病気やけがで手術をうけたことまたは継続して7日以上の入院したことがありますか？-</p>
    <label><input type="radio" name="hospitalization" value="yes">はい</label>
    <label><input type="radio" name="hospitalization" value="no">いいえ</label>
    </div>
    <p></p>
    <div class="page2btn">
      <button @click="pageto1b">前へ戻る</button>
      <button class="pageto3g" @click="pageto3g">次へ進む</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    pageto1b() {
      this.$router.push({ path: "/page1" })
    },
    pageto3g() {
      this.$router.push({ path: "/page3" })
    },
    nextq() {
      if(document.getElementById("q1y").checked || document.getElementById("q1n").checked){
      document.getElementById("q2").style.display = "block";
        if (document.getElementById("q2y").checked || document.getElementById("q2n").checked){
        document.getElementById("q3").style.display = "block";
        }
      }
    },
  },
};
</script>

<style>
.page2 {
  width: 700px;
  margin: auto;
  border:solid #40E0D0;
}

.page2btn {
  width: 200px;
  margin: auto;
  padding-top: 10px;
}

.pageto3g {
  margin-left: 10px;
}

.q2,.q3{
display: none;
}
</style>