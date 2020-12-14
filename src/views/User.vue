<template>
  <div>
    <van-field name="uploader" label="我的头像">
      <template #input>
        <van-uploader v-model="uploader" />
      </template>
    </van-field>
  </div>
</template>

<script>
import { userInfoAPI } from "@/services/auth";
export default {
  name: "User",
  data() {
    return {
      user: {},
      uploader: [
        {
          url:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1911365850,3841059090&fm=26&gp=0.jpg",
        },
      ],
    };
  },
  async created() {
    const res = await userInfoAPI();
    console.log(res);
    this.user = res;
  },
};
</script>

<style></style>
