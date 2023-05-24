<template>
  <section class="wrapper pc-show">
    <h1>Welcome to Register</h1>
    <div class="header">
      <div :class="[step > 0 ? 'black' : 'grey', step === 0 ? 'red' : 'grey']">1.Choose an Identity</div>
      <div :class="[step > 1 ? 'black' : 'grey', step === 1 ? 'red' : 'grey']">2.Create a Account</div>
      <div :class="[step > 2 ? 'black' : 'grey', step == 2 ? 'red' : 'grey']">3.Activate Mailbox </div>
    </div>
    <a-steps :current="step" size="small">
      <a-step />
      <a-step />
      <a-step />
    </a-steps>
    <div class="choose-list" v-if="step === 0">
      <div class="item" @click="click(1)" :class="[twoToneColor === 1 ? 'border-red' : '']">
        <div class="front"> <img src="@/assets/reg/s1.png" alt="">
          Be a Buyer</div>

        <CheckCircleTwoTone :twoToneColor="twoToneColor === 1 ? '#ff0600' : '#fff'" style="font-size: .18rem;" />
      </div>
      <div class="item" @click="click(2)" :class="[twoToneColor === 2 ? 'border-red' : '']">
        <div class="front"> <img src="@/assets/reg/s2.png" alt="">
          Be a Supplier</div>
        <CheckCircleTwoTone :twoToneColor="twoToneColor === 2 ? '#ff0600' : '#fff'" style="font-size: .18rem;" />
      </div>

    </div>
    <div class="step-two" v-if="step === 1 && twoToneColor === 1">
      <a-input placeholder="Username" style="width: 4rem;height: .3rem;margin-top: .5rem;"></a-input>
      <a-input placeholder="Email" style="width: 4rem;height: .3rem;margin-top: .1rem;"></a-input>
      <a-input placeholder="Password" style="width: 4rem;height: .3rem;margin-top: .1rem;"></a-input>
      <a-input placeholder="Invitation Code(Optional)" style="width: 4rem;height: .3rem;margin-top: .1rem;"></a-input>
      <a-checkbox style="font-size: 16px;margin-top: .3rem;">I agreed on <span>Terms & Conditions</span>,<span>Privacy
          Policy</span> and
        <span>Transaction Rules</span></a-checkbox>
      <div class="btn step-one op-7" style="justify-content: center;padding: 0;" @click="next">
        <div>Create</div>
      </div>
      <div class="back" @click="back">
        &lt; Re-select identity
      </div>
    </div>
    <div class="step-two" v-if="step === 1 && twoToneColor === 2">
      <div>
        <a-input placeholder="First Name"
          style="width: 1.95rem;height: .3rem;margin-top: .5rem;margin-right: .1rem;"></a-input>
        <a-input placeholder="Last Name" style="width: 1.95rem;height: .3rem;margin-top: .5rem;"></a-input>
      </div>
      <a-input placeholder="Username" style="width: 4rem;height: .3rem;margin-top: .1rem;"></a-input>
      <a-input placeholder="Email" style="width: 4rem;height: .3rem;margin-top: .1rem;"></a-input>
      <a-input placeholder="Mobile" style="width: 4rem;height: .3rem;margin-top: .1rem;"></a-input>
      <a-input placeholder="Company Name" style="width: 4rem;height: .3rem;margin-top: .1rem;"></a-input>
      <a-input placeholder="Password" style="width: 4rem;height: .3rem;margin-top: .1rem;"></a-input>
      <!-- <a-input placeholder="Invitation Code(Optional)" style="width: 4rem;height: .3rem;margin-top: .1rem;"></a-input> -->
      <a-checkbox style="font-size: 16px;margin-top: .3rem;">I agreed on <span>Terms & Conditions</span> and
        <span>Transaction Rules</span></a-checkbox>
      <div class="btn step-one op-7" style="justify-content: center;padding: 0;" @click="next">
        <div>Create</div>
      </div>
      <div class="back" @click="back">
        &lt; Re-select identity
      </div>
    </div>
    <div class="step-last" v-if="step == 2 && twoToneColor === 1">
      <img src="@/assets/reg/error.png" alt="">
      <p>
        An activation email has been sent to your inbox.
        <br />
        Please activate your account first.
      </p>
      <div class="btn step-one op-7" style="justify-content: center;padding: 0;">
        <div>Resend</div>
      </div>
    </div>
    <div class="step-last" v-if="step == 2 && twoToneColor === 2">
      <img src="@/assets/reg/success.png" alt="">
      <strong style="font-size: .15rem;">Account Activation Successful!</strong>
      <p>
        Login to privide your business licence to proceed.
        <br />
        Thanks for making SinoB2B a trustworthy platform..
      </p>
      <div class="btn step-one op-7" style="justify-content: center;padding: 0;">
        <div>Visit Supplier Center</div>
      </div>
    </div>
    <div class="btn step-one op-2" :class="[twoToneColor ? 'op-7' : '']" @click="next" v-if="step === 0">
      <div>Next step</div>
      <img src="@/assets/arrow.png" alt="">
    </div>
  </section>
  <section class="h5-show">
    <h1>Welcome to Regsiter</h1>
    <header>
      <div :class="[step > 0 ? 'black' : 'grey', step === 0 ? 'red' : 'grey']">1.Choose an Identity</div>
      <div :class="[step > 1 ? 'black' : 'grey', step === 1 ? 'red' : 'grey']">2.Create a Account</div>
      <div :class="[step > 2 ? 'black' : 'grey', step == 2 ? 'red' : 'grey']">3.Activate Mailbox </div>
    </header>
    <a-steps :current="step" size="small">
      <a-step />
      <a-step />
      <a-step />
    </a-steps>
    <div class="step-one" v-if="step === 0">
      <div class="item" @click="click(1)" :class="[twoToneColor === 1 ? 'border-red' : '']">
        <div class="front"> <img src="@/assets/reg/s1.png" alt="">
          Be a Buyer</div>

        <CheckCircleTwoTone :twoToneColor="twoToneColor === 1 ? '#ff0600' : '#fff'"
          style="font-size: 20px;margin-left: 100px;" />
      </div>
      <div class="item" @click="click(2)" :class="[twoToneColor === 2 ? 'border-red' : '']">
        <div class="front"> <img src="@/assets/reg/s2.png" alt="">
          Be a Supplier</div>
        <CheckCircleTwoTone :twoToneColor="twoToneColor === 2 ? '#ff0600' : '#fff'"
          style="font-size: 20px;margin-left: 100px;" />
      </div>
      <div class="h5-btn op-2" :class="[twoToneColor ? 'op-7' : '']" @click="next">Next step
        <img src="@/assets/arrow.png" alt="">
      </div>
    </div>
    <div class="step-2" v-if="step === 1 && twoToneColor === 1">
      <a-input placeholder="Username" style="width: 320px;height: 36px;margin-top: 20px;"></a-input>
      <a-input placeholder="Email" style="width: 320px;height: 36px;margin-top: 8px;"></a-input>
      <a-input placeholder="Password" style="width: 320px;height: 36px;margin-top: 8px;"></a-input>
      <a-input placeholder="Invitation Code(Optional)" style="width: 320px;height: 36px;margin-top: 8px;"></a-input>
      <a-checkbox style="font-size: 14px;margin-top: .3rem;width: 320px;">I agreed on <span>Terms &
          Conditions</span>,<span>Privacy Policy</span> and
        <span>Transaction Rules</span></a-checkbox>
      <div class="h5-btn step-one op-7" style="justify-content: center;padding: 0;margin: 20px 0;" @click="next">
        <div>Create</div>
      </div>
      <div class="back" style="
    font-size: 16px;
      " @click="back">
        &lt; Re-select identity
      </div>
    </div>
    <div class="step-2" v-if="step === 1 && twoToneColor === 2">
      <div>
      <a-input placeholder="First Name" style="width: 155px;height: 36px;margin-top: 20px;margin-right: 10px;"></a-input>
      <a-input placeholder="Username" style="width: 155px;height: 36px;margin-top: 20px;"></a-input>

      </div>
      <a-input placeholder="Username" style="width: 320px;height: 36px;margin-top: 8px;"></a-input>
      <a-input placeholder="Email" style="width: 320px;height: 36px;margin-top: 8px;"></a-input>
      <a-input placeholder="Password" style="width: 320px;height: 36px;margin-top: 8px;"></a-input>
      <a-input placeholder="Company Name" style="width: 320px;height: 36px;margin-top: 8px;"></a-input>
      <a-input placeholder="Password" style="width: 320px;height: 36px;margin-top: 8px;"></a-input>
      <a-checkbox style="font-size: 14px;margin-top: .3rem;width: 320px;">I agreed on <span>Terms &
          Conditions</span>,<span>Privacy Policy</span> and
        <span>Transaction Rules</span></a-checkbox>
      <div class="h5-btn step-one op-7" style="justify-content: center;padding: 0;margin: 20px 0;" @click="next">
        <div>Create</div>
      </div>
      <div class="back" style="
    font-size: 16px;
      " @click="back">
        &lt; Re-select identity
      </div>
    </div>
    <div class="step-3"  v-if="step === 2 && twoToneColor === 1">
      <img src="@/assets/reg/error.png" style="width: 120px;" alt="">
      <p style="font-size: 14px;margin-top: 20px;margin-bottom: 30px;">
        An activation email has been sent to your inbox.
        <br />
        Please activate your account first.
      </p>
      <div class="h5-btn step-one op-7" style="justify-content: center;padding: 0;">
        <div>Resend</div>
      </div>
    </div>
    <div class="step-3" v-if="step == 2 && twoToneColor === 2">
      <img src="@/assets/reg/success.png" style="width: 120px;" alt="">
      <strong style="font-size: 18px;">Account Activation Successful!</strong>
      <p style="font-size: 14px;margin-top: 20px;margin-bottom: 30px;">
        Login to privide your business licence to proceed.
        <br />
        Thanks for making SinoB2B a trustworthy platform..
      </p>
      <div class="h5-btn step-one op-7" style="justify-content: center;padding: 0;">
        <div>Visit Supplier Center</div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { CheckCircleTwoTone } from '@ant-design/icons-vue';
import { ref } from 'vue';
const twoToneColor = ref(0)
const step = ref(0)
function click(i: number) {
  twoToneColor.value = i
}
function next() {
  step.value = step.value + 1
}
function back() {
  step.value = step.value - 1
}
</script>

<style lang="less" scoped>
.h5-show {
  overflow: hidden;
  padding: 40px 0;
  .step-2,.step-3 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .step-3{
    text-align: center;

  }
  .h5-btn {
    color: #fff;
    background: #ff0600;
    width: 280px;
    height: 50px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    font-size: 16px;
    padding-left: 100px;

    // justify-content: center;
    img {
      width: 20px;
      margin-left: 80px;
    }
  }

  .step-one {
    display: flex;
    flex-direction: column;
    align-items: center;

    .item {
      width: 320px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #eee;
      border-radius: 10px;
      margin-bottom: 20px;

      img {
        width: 60px;
      }

      font-size: 18px;
      font-weight: 600;
    }
  }

  h1 {
    font-size: 22px;
    text-align: center;
    font-weight: bold;
    margin-top: 60px;
  }

  header {
    font-size: 12px;
    display: flex;
    justify-content: space-between;

  }
}
/deep/ .ant-steps{
  width: 84% !important;
}
.header {
  display: flex;
  justify-content: space-between;
  width: 5.25rem;
  font-size: 16px;
  margin-bottom: 10px;
}

.grey {
  color: #aaa;
}

.red {
  color: #f51f00;
}

.black {
  color: #111;
}

.step-last {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  img {
    width: 1.5rem;
    margin-top: .3rem;
  }

  p {
    font-size: .15rem;
    margin-top: .2rem;
  }
}

.back {
  font-size: 0.099rem;
  color: #f51f00;
  font-weight: bold;
  margin-top: .15rem;
  cursor: pointer;
}

span {
  text-decoration: underline;
}

.step-two {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.op-2 {
  opacity: .2;
  pointer-events: none;
}

/deep/ .ant-input {
  background: rgba(0,0,0,.03);
}

/deep/ .ant-input:hover {
  background: #fff;
}

.op-7 {
  opacity: .7;
  pointer-events: all;
}

.btn {
  margin-top: .4042rem;
  font-size: 0.099rem;
  // font-weight: bold;
  background: #ff0600;
  cursor: pointer;
  color: #fff;
  display: flex;
  padding: 0 .1042rem;
  // width: 1.0417rem;
  align-items: center;
  border-radius: .3042rem;
  width: 1.3375rem;
  height: .35rem;
  // justify-content: center;
  padding-left: .4083rem;

  img {
    height: .0533rem !important;
    margin-left: .1042rem;
    // height: unset !important;
  }
}

.wrapper {
  width: 5.75rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  // justify-content: center;
  flex-direction: column;
  height: 6.5rem;
  padding-top: .8rem;

  .choose-list {
    display: flex;
    margin-top: .5625rem;

  }

  h1 {
    font-size: .2042rem;
  }

  .item {
    background: #eee;
    width: 2.2rem;
    height: 1rem;
    border-radius: .1042rem;
    cursor: pointer;
    box-sizing: border-box;
    border: 1px solid transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 .2083rem;

    &+.item {
      margin-left: .1563rem;
    }

    .front {
      font-size: 0.139rem;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: .4208rem;
        margin-right: .1042rem;
      }
    }
  }
}

/deep/ .ant-steps-item-finish .ant-steps-item-icon,
/deep/ .ant-steps-item-finish .ant-steps-item-icon>.ant-steps-icon {
  border-color: #ff0600;
  color: #ff0600;
}

/deep/ .ant-steps-item-finish>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title::after {
  background: #ff0600;
}

/deep/ .ant-steps-item-wait .ant-steps-item-icon {

  background-color: #fff;
  border-color: rgba(0, 0, 0, 0.25);

}

/deep/ .ant-steps-item-process>.ant-steps-item-container>.ant-steps-item-icon {
  border-color: #ff0600;
  background: #ff0600;
  color: #ff0600;
}

.border-red {
  background: #fff !important;
  border: 1px solid #ff0600 !important;
}

/deep/ .ant-checkbox-checked .ant-checkbox-inner {
  background: #f51f00;
  border-color: #f51f00;
}

/deep/ .ant-steps-item-title {
  position: relative !important;
}

/deep/ .ant-steps-item-title::after {
  position: absolute;
  top: 16px;
  left: 100%;
  display: block;
  width: 9999px;
  height: 1px;
  background: #f0f0f0 !important;
  content: '';
}

@media (max-width:750px) {
  /deep/ .ant-steps-vertical {
    flex-direction: row;
    justify-content: center;
    margin-left: 45px;
  }

  /deep/ .ant-steps-vertical.ant-steps-small .ant-steps-item-container .ant-steps-item-title {
    width: 100%;
    background: #eee;
    height: 1px;
    margin-top: 10px;
  }

  /deep/ .ant-steps-item:last-child .ant-steps-item-content {
    display: none;
  }

  /deep/ .ant-steps-vertical>.ant-steps-item:not(:last-child)>.ant-steps-item-container>.ant-steps-item-tail {
    display: none;
  }
  .h5-show {
    display: block !important;
  }
}

@media (max-width: 750px) {

  .h5-show {
    display: block !important;
  }
  .h5-show .step-one .item img{
    width: 60px !important;
    height: 60px !important;
  }
  .h5-show .step-one .item{
    padding: 0 20px;
    justify-content: space-between;
    width: 280px;
    span{
      margin-left: 0 !important;
    }
  }
}
/deep/ .ant-steps-item:last-child{
  flex:none;
}
// #9397a0
</style>