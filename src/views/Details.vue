<template>
  <div class="details">
    <van-nav-bar title="商品详情" left-arrow @click-left="$router.back()" />
    <div class="content">
      <img :src="ccc.coverImg" alt="" class="b" />
      <p>{{ ccc.name }}</p>
      <p>价格:{{ ccc.price }}</p>
    </div>

    <van-count-down :time="time">
      <template #default="timeData">
        <span class="Countdown">秒杀倒计时：</span>
        <span class="block">{{ timeData.hours }}</span>
        <span class="colon">:</span>
        <span class="block">{{ timeData.minutes }}</span>
        <span class="colon">:</span>
        <span class="block">{{ timeData.seconds }}</span>
      </template>
    </van-count-down>
    <div v-html="ccc.content" id="tu"></div>
  </div>
</template>

<script>
import { Details } from "@/services/products";
export default {
  data() {
    return {
      ccc: {},
      time: 30 * 60 * 60 * 1000,
    };
  },
  computed: {},
  watch: {},
  methods: {},
  async created() {
    const details = await Details(this.$route.query.a);
    console.log(details);
    this.ccc = details;
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  components: {},
};
</script>

<style scoped>
.content img {
  width: 100%;
  /* height: 70%; */
}
.content p {
  text-align: center;
}
.colon {
  display: inline-block;
  margin: 0 4px;
  color: #ee0a24;
}
.block {
  display: inline-block;
  width: 22px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #ee0a24;
}
.van-count-down {
  text-align: center;
  margin-top: 2rem;
}
.colon {
  display: inline-block;
  margin: 0 4px;
  color: #ee0a24;
}
.block {
  display: inline-block;
  width: 22px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #ee0a24;
}
.Countdown {
  color: red;
}
.header {
  height: 40px;
}
#tu >>> img {
  width: 100%;
}
</style>
