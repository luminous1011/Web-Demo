<template>
  <SectionOne />
  <SectionTwo />
  <SectionThree />
  <SectionFour />
  <SectionFive />
  <SectionSix />
  <a-modal v-model:visible="visible" class="form" @ok="handleOk" width="5rem" :footer="null" :closable="false">
    <div class="form-header">
      <img src="@/assets/form-icon.png" alt="">
      Age Verification
    </div>
    <p>
      The products available on Element Vape are age-restricted and intendedfor adults of legal smoking age only. All
      orders placed on the website willbe verified by an industry leading Age Verification software for validation.

    </p>
    <p>
      By entering our website, you affirm that you are of legal smoking age inyour jurisdication and you agree to be Age
      Verified.

    </p>
    <div class="btn-footer">
      <div class="btn" @click="confirm">YES,IAM OF LEGAL AGE</div>
      <div class="btn cancel" @click="cancel">NO,IDON'T AGREE</div>
    </div>
  </a-modal>
</template>
<style lang="less" scoped>
.form {
  .btn-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .375rem 0;
  }

  .btn {
    cursor: pointer;
    width: 1.599rem;
    height: .375rem;
    background: #FF4F3C;
    border-radius: .1875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .099rem;
    font-family: Arial;
    font-weight: bold;
    color: #FFFFFF;

    &.cancel {
      background: #FFEDEB;
      color: rgba(255, 79, 60, 1);
    }

    &+.btn {
      margin-left: .2083rem;
    }

  }

  p {
    font-size: .1146rem;
    font-family: Arial;
    font-weight: 400;
    color: #111111;
    padding: 0 .3646rem;
  }
}

.form-header {
  font-size: .1979rem;
  font-family: Arial;
  font-weight: bold;
  color: #111111;
  display: flex;
  align-items: center;
  margin-bottom: .2604rem;
  justify-content: center;

  img {
    width: .4063rem;
    margin-right: .1042rem;
  }
}

@media (max-width:750px) {
  .form{
    width: 320px;
  }
  .form p{
    font-size: 14px;
  }
}
</style>
<style lang="less" scoped>
section {
  max-width: 100vw;
}

header {
  width: 10rem;
  height: 0.1875rem;
  background: #111111;
  font-size: 0.075rem;
  font-family: Arial;
  font-weight: 400;
  color: #ffffff;
  line-height: 0.1875rem;
  text-align: center;
}
</style>
<script lang="ts" setup>
import { defineAsyncComponent, ref } from "vue";
const visible = ref(true)
if (sessionStorage.getItem('agree')) {
  visible.value = false
}
function cancel() {
  visible.value = false
  location.href = "http://www.google.com"
  sessionStorage.removeItem('agree')
}
function confirm() {
  visible.value = false
  sessionStorage.setItem('agree', 'agree')
}
const SectionOne = defineAsyncComponent(
  () => import("./components/SectionOne.vue")
);
const SectionTwo = defineAsyncComponent(
  () => import("./components/SectionTwo.vue")
);
const SectionThree = defineAsyncComponent(
  () => import("./components/SectionThree.vue")
);
const SectionFour = defineAsyncComponent(
  () => import("./components/SectionFour.vue")
);
const SectionFive = defineAsyncComponent(
  () => import("./components/SectionFive.vue")
);
const SectionSix = defineAsyncComponent(
  () => import("./components/SectionSix.vue")
);
</script>