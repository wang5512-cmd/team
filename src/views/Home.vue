<template>
  <div class="home">
    <van-nav-bar title="首页" left-arrow @click-left="$router.back()" />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in banners" :key="item">
        <img :src="item" alt="" />
      </van-swipe-item>
    </van-swipe>
    <van-grid :column-num="3">
      <van-grid-item
        v-for="value in categories"
        :key="value._id"
        :icon="value.coverImg"
        :text="value.name"
        :to="{ name: 'Hot', query: { c: value._id } }"
      />
    </van-grid>
  </div>
</template>

<script>
// @ is an alias to /src
// import引入一个文件
import { allCategories } from "@/services/categories";
// import qz from "../assets/qz.png";

export default {
  name: "Home",
  data() {
    return {
      // qz, // qz: qz
      banners: [
        "https://img10.360buyimg.com/babel/s1180x940_jfs/t1/151836/38/8185/115243/5fc73742E8da77cb9/6b45302d884ded48.jpg.webp",
        "https://img20.360buyimg.com/pop/s1180x940_jfs/t1/138448/36/10847/90521/5f88144aEb0083842/f55d675228801e4b.jpg.webp",
        "https://img10.360buyimg.com/pop/s1180x940_jfs/t1/122746/25/19635/99259/5fbc5e83E9ad70c57/8bcbb2319250a096.jpg.webp",
        "https://img10.360buyimg.com/pop/s1180x940_jfs/t1/155425/32/9088/95555/5fd0c5feE4c0a7830/20da3f7a12e614e7.jpg.webp",
        "https://img13.360buyimg.com/pop/s1180x940_jfs/t1/135815/6/19184/80459/5fd1884cE5bf6be5c/d293def7ea8c42a1.jpg.webp",
      ],
      categories: [], // 商品分类
    };
  },
  async created() {
    const res = await allCategories();
    this.categories = res.categories;
  },
  components: {},
};
</script>
<style scoped>
.my-swipe .van-swipe-item img {
  width: 100%;
}
</style>
