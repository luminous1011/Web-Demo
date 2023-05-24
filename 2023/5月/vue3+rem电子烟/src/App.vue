<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const Footer = defineAsyncComponent(() => import("./components/footer"));
const Header = defineAsyncComponent(() => import("./components/header"));
</script>

<template>
  <div class="app-wrapper">

    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<style lang="less">

/* html,body{
  overflow: hidden;
} */
.h5-show {
  display: none;
}

@media (max-width: 750px) {
  .pc-show {
    display: none !important;
  }

  .h5-show {
    display: block !important;
  }
}

/deep/ .ant-dropdown {
  z-index: 10001 !important;
}
*{
  font-family: Arial;
}
</style>
