<template>
  <div class="User">
    <van-nav-bar title="个人中心" left-arrow @click-left="$router.back()" />
    <van-cell-group>
      <van-cell title="单元格" value="内容" center>
        <van-image
          slot="icon"
          width="50"
          height="50"
          round
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div slot="title">{{ user.userName }}</div>
        <van-button
          @click="$router.push('/addressEdit')"
          type="info"
          size="small"
          round
          >编辑资料</van-button
        >
      </van-cell>
    </van-cell-group>
    <van-grid>
      <van-grid-item>
        <div slot="text">
          <div slot="icon">111</div>
          <div slot="text">222</div>
        </div>
      </van-grid-item>
      <van-grid-item>
        <div slot="text">
          <div slot="icon">111</div>
          <div slot="text">222</div>
        </div>
      </van-grid-item>
      <van-grid-item>
        <div slot="text">
          <div slot="icon">111</div>
          <div slot="text">222</div>
        </div>
      </van-grid-item>
      <van-grid-item>
        <div slot="text">
          <div slot="icon">111</div>
          <div slot="text">222</div>
        </div>
      </van-grid-item>
    </van-grid>
    <van-grid :column-num="2">
      <van-grid-item icon="star-o" text="文字" />
      <van-grid-item icon-prefix="toutiao" icon="lishi" text="文字" />
    </van-grid>
    <van-button block type="danger" @click="handleDelete">退出登录</van-button>
  </div>
</template>

<script>
import { userInfoAPI } from "@/services/auth";
import { removeToken } from "../utils/tools";
export default {
  name: "User",
  data() {
    return {
      user: {},
    };
  },
  async created() {
    const res = await userInfoAPI();
    console.log(res);
    this.user = res;
  },
  methods: {
    handleDelete() {
      removeToken();
      this.$router.push("/login");
    },
  },
};
</script>

<style></style>
