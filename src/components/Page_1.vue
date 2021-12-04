<template>
<div>
  <div class="page1">
    <header class="p1head">お客様の情報を入力してください</header>
    <div class="content">
      <p>-性別-<p>
      <label><input type="radio" name="sex" value="man">男</label>
      <label><input type="radio" name="sex" value="woman">女</label>
      <p></p>
      <p>-生年月日-</p>
      <form>
      <select>
        <option v-for="n in 63" :key="n.id">
          {{n + 1925}}年(昭和{{n}})
        </option>
        <option>
          1989年(昭和64/平成1)
        </option>
        <option v-for="n in 29" :key="n.id">
          {{n + 1989}}年(平成{{n + 1}})
        </option>
        <option>
          2019年(平成32/令和1)
        </option>
        <option v-for="n in 5" :key="n.id">
          {{n + 2019}}年(令和{{n + 1}})
        </option>
      </select>年
      <select>
        <option v-for="n in 12" :key="n.id">
          {{n}}
        </option>
      </select>月
      <select>
        <option v-for="n in 31" :key="n.id">
          {{n}}
        </option>
      </select>日
      </form>
    </div>
  </div>
  <div class="page1btn">
    <button @click="pageto0b">前へ戻る</button>
    <button @click="pageto2g">次へ進む</button>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    pageto0b() {
      this.$router.push({ path: "/" })
    },
    pageto2g() {
      this.$router.push({ path: "/page2" })
    }
  }
}
</script>

<style>
.page1 {
  width: 700px;
  margin: auto;
  border:solid #40E0D0;
}

.page1btn {
  width: 200px;
  margin: auto;
  padding-top: 10px;
}

.pageto2g {
  margin-left: 10px;
}
</style>