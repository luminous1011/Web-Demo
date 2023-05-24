<template>
  <section class="section-four pc-show">
    <header>Shop By Category</header>
    <div class="subtitle-line"></div>
    <main class="category-wrapper">
      <div class="item">
        <div class="normal">
          <div>
            <img src="@/assets/home/section4/category/s1.png" style="height: 0.625rem" alt="" />
          </div>
          <div class="label">Disposables</div>
        </div>
        <div class="hover">
          <div class="hover-label">Disposables</div>
          <img src="@/assets/home/section4/category/active.png" alt="" />
        </div>
      </div>
      <div class="item">
        <div class="normal">
          <div>
            <img src="@/assets/home/section4/category/s2.png" style="height: 0.625rem" alt="" />
          </div>
          <div class="label">Pods</div>
        </div>
        <div class="hover">
          <div class="hover-label">Pods</div>
          <img src="@/assets/home/section4/category/active.png" alt="" />
        </div>
      </div>
      <div class="item">
        <div class="normal">
          <div>
            <img src="@/assets/home/section4/category/s3.png" style="height: 0.625rem" alt="" />
          </div>
          <div class="label">Mods</div>
        </div>
        <div class="hover">
          <div class="hover-label">Mods</div>
          <img src="@/assets/home/section4/category/active.png" alt="" />
        </div>
      </div>
      <div class="item">
        <div class="normal">
          <div>
            <img src="@/assets/home/section4/category/s4.png" style="height: 0.625rem" alt="" />
          </div>
          <div class="label">Tanks</div>
        </div>
        <div class="hover">
          <div class="hover-label">Tanks</div>
          <img src="@/assets/home/section4/category/active.png" alt="" />
        </div>
      </div>
      <div class="item">
        <div class="normal">
          <div>
            <img src="@/assets/home/section4/category/s5.png" style="height: 0.625rem" alt="" />
          </div>
          <div class="label">Vape Pens</div>
        </div>
        <div class="hover">
          <div class="hover-label">Vape Pens</div>
          <img src="@/assets/home/section4/category/active.png" alt="" />
        </div>
      </div>
      <div class="item">
        <div class="normal">
          <div>
            <img src="@/assets/home/section4/category/s6.png" style="height: 0.625rem" alt="" />
          </div>
          <div class="label">Coils</div>
        </div>
        <div class="hover">
          <div class="hover-label">Coils</div>
          <img src="@/assets/home/section4/category/active.png" alt="" />
        </div>
      </div>
      <div class="item">
        <div class="normal">
          <div>
            <img src="@/assets/home/section4/category/s7.png" style="height: 0.625rem" alt="" />
          </div>
          <div class="label">Accessories</div>
        </div>
        <div class="hover">
          <div class="hover-label">Accessories</div>
          <img src="@/assets/home/section4/category/active.png" alt="" />
        </div>
      </div>
      <div class="item">
        <div class="normal">
          <div>
            <img src="@/assets/home/section4/category/s8.png" style="height: 0.625rem" alt="" />
          </div>
          <div class="label">Kits</div>
        </div>
        <div class="hover">
          <div class="hover-label">Kits</div>
          <img src="@/assets/home/section4/category/active.png" alt="" />
        </div>
      </div>
    </main>
    <div class="header-2">Digitize & Streamline Each Step to the Ultimate</div>
    <div class="step-wrapper">
      <div>1</div>
      <div><img src="@/assets/home/section4/down.png" alt="" /></div>
      <div>2</div>
      <div><img src="@/assets/home/section4/up.png" alt="" /></div>
      <div>3</div>
      <div><img src="@/assets/home/section4/down.png" alt="" /></div>
      <div>4</div>
      <div><img src="@/assets/home/section4/up.png" alt="" /></div>
      <div>5</div>
    </div>
    <div class="step-info">
      <div class="info-wrapper" v-for="item in stepInfo" :key="item.title">
        <div class="info-title">{{ item.title }}</div>
        <div class="info-desc">
          {{ item.desc }}
        </div>
      </div>
    </div>
    <div class="main-middle">
      <img src="@/assets/home/section4/bg.png" class="bg" alt="" />
      <div class="chat-1">
        <div class="chat1">Payment First or
          Delivery First?</div>
        <div class="chat2">It's no longer a
          problem!</div>
      </div>
      <div class="left">
        <div class="middle-item">
          <div><img src="@/assets/home/section4/s1.png" alt="" /></div>
          <div class="primary">
            Verified <br />
            Suppliers
          </div>
          <div class="sec">
            All the suppliers have been verified with proper business license.
          </div>
        </div>
        <div class="middle-item">
          <div><img src="@/assets/home/section4/s2.png" alt="" /></div>
          <div class="primary">
            Release Upon <br />
            Delivery
          </div>
          <div class="sec">
            Payment won’t be released to the supplier until our warehouse staff
            receive your cargo accordingly.
          </div>
        </div>
      </div>
      <div class="right">
        <div class="middle-item">
          <div><img src="@/assets/home/section4/s3.png" alt="" /></div>
          <div class="primary">
            Trusted Payment <br />
            Partners
          </div>
          <div class="sec">
            Partner with trusted third-party payment service providers to
            protect your funds.
          </div>
        </div>
        <div class="middle-item">
          <div><img src="@/assets/home/section4/s4.png" alt="" /></div>
          <div class="primary">
            Digital <br />
            e-Contract
          </div>
          <div class="sec">
            Feel confident and secure on our e-Contract with all transaction
            rules being properly followed
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-wrapper">
      <div class="wrapper">
        <div class="item-bottom"  @mouseover="handleChangeIdx(1)" :class="[
          idx === 1 ? 'hover-bottom hover-bottom-1' : '',
          idx === 2 ? 'border' : '',
        ]" style="border-radius: 0.1875rem 0 0 0.1875rem">
          <div class="img">
            <img src="@/assets/home/section4/bottom/s1.png" alt="" />
          </div>
          <div class="main-text">Wide Selection & <br />Available Stock</div>
          <div class="add">
            <img src="@/assets/home/section4/addd.png" alt="" @click="handleChangeIdx(1)" />
          </div>
          <div class="sec-text">
            Operate your vape retail business from anywhere and at anytime. We
            can directly ship to your consumer’s doorstep upon given orders.
          </div>
        </div>
        <div class="item-bottom" @mouseover="handleChangeIdx(2)" :class="[
          idx === 2 ? 'hover-bottom' : '',
          idx === 3 ? 'border' : '',
          idx === 1 ? 'hover-bottom-2' : '',
        ]">
          <div class="img">
            <img src="@/assets/home/section4/bottom/s2.png" alt="" />
          </div>
          <div class="main-text">
            Lower Startup <br />
            Cost
          </div>
          <div class="add">
            <img src="@/assets/home/section4/addd.png" alt="" @click="handleChangeIdx(2)" />
          </div>
          <div class="sec-text">
            Operate your vape retail business from anywhere and at anytime. We
            can directly ship to your consumer’s doorstep upon given orders.
          </div>
        </div>
        <div class="item-bottom" @mouseover="handleChangeIdx(3)" :class="[idx === 3 ? 'hover-bottom hover-bottom-3' : '']"
          style="border-radius: 0 0.1875rem 0.1875rem 0">
          <div class="img">
            <img src="@/assets/home/section4/bottom/s3.png" alt="" />
          </div>
          <div class="main-text">
            You Sell, <br />
            We Ship
          </div>
          <div class="add">
            <img src="@/assets/home/section4/addd.png" alt="" @click="handleChangeIdx(3)" />
          </div>
          <div class="sec-text">
            Operate your vape retail business from anywhere and at anytime. We
            can directly ship to your consumer’s doorstep upon given orders.
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section-four h5-show">
    <header>Shop By Category</header>
    <div class="subtitle-line"></div>
    <main class="category-wrapper">
      <div class="item">
        <div class="normal">
          <div>
            <img src="@/assets/home/section4/category/s1.png" style="height: 0.625rem" alt="" />
          </div>
          <div class="label">Disposables</div>
        </div>
        <div class="hover">
          <div class="hover-label">Disposables</div>
          <img src="@/assets/home/section4/category/active.png" alt="" />
        </div>
      </div>
      <div class="item">
        <div class="normal">
          <div>
            <img src="@/assets/home/section4/category/s2.png" style="height: 0.625rem" alt="" />
          </div>
          <div class="label">Pods</div>
        </div>
        <div class="hover">
          <div class="hover-label">Pods</div>
          <img src="@/assets/home/section4/category/active.png" alt="" />
        </div>
      </div>
      <div class="item">
        <div class="normal">
          <div>
            <img src="@/assets/home/section4/category/s3.png" style="height: 0.625rem" alt="" />
          </div>
          <div class="label">Mods</div>
        </div>
        <div class="hover">
          <div class="hover-label">Mods</div>
          <img src="@/assets/home/section4/category/active.png" alt="" />
        </div>
      </div>
      <div class="item">
        <div class="normal">
          <div>
            <img src="@/assets/home/section4/category/s4.png" style="height: 0.625rem" alt="" />
          </div>
          <div class="label">Tanks</div>
        </div>
        <div class="hover">
          <div class="hover-label">Tanks</div>
          <img src="@/assets/home/section4/category/active.png" alt="" />
        </div>
      </div>
      <div class="item">
        <div class="normal">
          <div>
            <img src="@/assets/home/section4/category/s5.png" style="height: 0.625rem" alt="" />
          </div>
          <div class="label">Vape Pens</div>
        </div>
        <div class="hover">
          <div class="hover-label">Vape Pens</div>
          <img src="@/assets/home/section4/category/active.png" alt="" />
        </div>
      </div>
      <div class="item">
        <div class="normal">
          <div>
            <img src="@/assets/home/section4/category/s6.png" style="height: 0.625rem" alt="" />
          </div>
          <div class="label">Coils</div>
        </div>
        <div class="hover">
          <div class="hover-label">Coils</div>
          <img src="@/assets/home/section4/category/active.png" alt="" />
        </div>
      </div>
      <div class="item">
        <div class="normal">
          <div>
            <img src="@/assets/home/section4/category/s7.png" style="height: 0.625rem" alt="" />
          </div>
          <div class="label">Accessories</div>
        </div>
        <div class="hover">
          <div class="hover-label">Accessories</div>
          <img src="@/assets/home/section4/category/active.png" alt="" />
        </div>
      </div>
      <div class="item">
        <div class="normal">
          <div>
            <img src="@/assets/home/section4/category/s8.png" style="height: 0.625rem" alt="" />
          </div>
          <div class="label">Kits</div>
        </div>
        <div class="hover">
          <div class="hover-label">Kits</div>
          <img src="@/assets/home/section4/category/active.png" alt="" />
        </div>
      </div>
    </main>
    <header style="margin-bottom: 1.1111rem">
      Digitize & Streamline Each Step to the Ultimate
    </header>
    <div class="step">
      <div class="step-left">
        <div>1</div>
        <img src="@/assets/home/section4/down.png" alt="" />
        <div>2</div>
        <img src="@/assets/home/section4/up.png" alt="" />
        <div>3</div>
        <img src="@/assets/home/section4/down.png" alt="" />
        <div>4</div>
        <img src="@/assets/home/section4/up.png" alt="" />
        <div>5</div>
      </div>
      <div class="step-right">
        <div class="right-item">
          <div class="t1">Select</div>
          <div class="t2">
            Choose from tons of trending vape sets and create PO
          </div>
        </div>
        <div class="right-item">
          <div class="t1">Pay</div>
          <div class="t2">Pay safely with trusted payment providers</div>
        </div>
        <div class="right-item">
          <div class="t1">Deliver</div>
          <div class="t2">Cargo is delivered to our bonded warehouse</div>
        </div>
        <div class="right-item">
          <div class="t1">Ship</div>
          <div class="t2">Effect shipment with flexible logistic solutions</div>
        </div>
        <div class="right-item">
          <div class="t1">Receive</div>
          <div class="t2">Deliver to your warehouse or your consumers</div>
        </div>
      </div>
    </div>
    <div class="chat">
      <div class="bg">
        <div class="chat1">Payment First or
          Delivery First?</div>
        <div class="chat2">It's no longer a
          problem!</div>
      </div>
    </div>
    <div class="chat-bt">
      <div class="item">
        <img src="@/assets/home/section4/s1.png" alt="">
        <div class="chat-bt-t1">Verified Suppliers</div>
        <div class="chat-bt-t2">
          All the suppliers have been verified with proper business license.
        </div>
      </div>
      <div class="item">
        <img src="@/assets/home/section4/s2.png" alt="">
        <div class="chat-bt-t1">Trusted Payment Partners</div>
        <div class="chat-bt-t2">
          Partner with trusted third-party payment service providers to protect your funds.
        </div>
      </div>
      <div class="item">
        <img src="@/assets/home/section4/s3.png" alt="">
        <div class="chat-bt-t1">Release Upon Delivery</div>
        <div class="chat-bt-t2">
          Payment won’t be released to the supplier until our warehouse staff receive your cargo accordingly.
        </div>
      </div>
      <div class="item">
        <img src="@/assets/home/section4/s4.png" alt="">
        <div class="chat-bt-t1">Digital e-Contract</div>
        <div class="chat-bt-t2">
          Feel confident and secure on our e-Contract with all transaction rules being properly followed.
        </div>
      </div>
      <div class="people-header">
        <img src="@/assets/home/section4/que.png" alt="">
        <div class="content">
          Looking for a <span class="red">Dropshipping </span> Solution? <span class="black">We’ve Got You Covered!</span>
        </div>
      </div>
    </div>
    <div class="people"><img src="@/assets/home/section4/people.png" alt=""></div>
    <div class="footer">
      <div class="item-footer"  :class="[idx===1?'hover-bt':'']">
        <div><img src="@/assets/home/section4/bottom/s1.png" alt=""></div>
        <div class="main">
          Wide Selection & Available Stock
        </div>
        <div class="add"><img src="@/assets/home/section4/addd.png"  @click="handleChangeIdx(1)" alt=""></div>
      </div>
      <div class="item-footer"  :class="[idx===2?'hover-bt':'']">
        <div><img src="@/assets/home/section4/bottom/s2.png" alt=""></div>
        <div class="main">
          Lower Startup Cost
        </div>
        <div class="add"><img src="@/assets/home/section4/addd.png"  @click="handleChangeIdx(2)" alt=""></div>
      </div>
      <div class="item-footer " :class="[idx===3?'hover-bt':'']">
        <div><img src="@/assets/home/section4/bottom/s3.png" alt=""></div>
        <div class="main">
          You Sell,<br /> We Ship
        </div>
        <div class="add"><img src="@/assets/home/section4/addd.png" @click="handleChangeIdx(3)" alt=""></div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref } from "vue";
interface IStepItem {
  title: string;
  desc: string;
}
const stepInfo: IStepItem[] = [
  {
    title: "Select",
    desc: "Choose from tons of trending vape sets and create PO",
  },
  {
    title: "Pay",
    desc: "Pay safely with trusted payment providers",
  },
  {
    title: "Deliver",
    desc: "Cargo is delivered to our bonded warehouse",
  },
  {
    title: "Ship",
    desc: "Effect shipment with flexible logistic solutions",
  },
  {
    title: "Receive",
    desc: "Deliver to your warehouse or your consumers",
  },
];
const idx = ref(3);
function handleChangeIdx(val: number) {
  idx.value = val;
}
</script>
<style lang="less" scoped>
.section-four {
.chat-1{
  position: absolute;
font-size: .151rem;
font-family: Arial;
font-weight: bold;
color: #FFFFFF;
top: 1.3802rem;
left: 1.6667rem;
  .chat1{
    width: 1.3281rem;
  }
  .chat2{
    padding-left: .349rem;
    width: 1.3281rem;
  }
}
  .left {
    position: absolute;
    top: 0.8406rem;
    left: 4rem;
  }

  .right {
    position: absolute;
    top: 1.5281rem;
    left: calc(4rem + 0.1875rem + 2.375rem);
  }

  .middle-item {
    width: 2.375rem;
    // height: 1.8125rem;
    background: #ffffff;
    box-shadow: 0px 0px 0.4688rem 0px rgba(64, 89, 136, 0.15);
    border-radius: 0.1875rem;
    padding: 0.25rem;

    &+.middle-item {
      margin-top: 0.1875rem;
    }

    img {
      height: 0.4063rem;
    }

    .primary {
      font-size: 0.1375rem;
      font-family: Arial;
      font-weight: bold;
      color: #111111;
      margin: 0.125rem 0;
    }

    .sec {
      font-size: 0.1rem;
      font-family: Arial;
      font-weight: 400;
      color: #9fa3aa;
    }
  }

  .main-middle {
    width: 10rem;
    height: 6.725rem;
    overflow: hidden;
    // background: url('@/assets/home/section4/bg.png') 100% 100% no-repeat;
    // background-size: 100% 100%;
    position: relative;

    .bg {
      position: absolute;
      width: 11.45rem;
      height: 6.725rem;
    }
  }

  .bottom-wrapper {
    margin-bottom: 0.5625rem;
    position: relative;

    .wrapper {
      display: flex;
      width: 7.5rem;
      height: 1.7813rem;
      background: #ffffff;
      box-shadow: 0px 0px 0.4688rem 0px rgba(64, 89, 136, 0.15);
      border-radius: 0.1875rem;
      align-items: center;
      margin: 0 auto;
      background: linear-gradient(0deg, #ffb0a9, #ec594c);
    }

    .item-bottom {
      padding-left: 0.3125rem;
      padding-top: 0.3875rem;
      transition: height linear 0.3s;
      height: 100%;
      flex: 1;
      background: #fff;

      &.border {
        border-radius: 0 0 0.1875rem 0px;
      }

      &.hover-bottom {
        background: linear-gradient(0deg, #ffb0a9, #ec594c);
        border-radius: 0.1875rem 0.1875rem 0.1875rem 0px;
        height: 120%;
        margin-bottom: 0.35rem;
        color: #fff;

        .main-text {
          color: #fff;
        }

        .sec-text {
          display: block;
        }

        .add {
          display: none;
        }
      }

      &.hover-bottom-1 {
        border-radius: 0.1875rem 0.1875rem 0.1875rem 0.1875rem !important;
      }

      &.hover-bottom-2 {
        border-radius: 0 0 0 0.1875rem;
      }

      &.hover-bottom-3 {
        border-radius: 0.1875rem 0.1875rem 0.1875rem 0 !important;
      }

      &+.item-bottom {
        // border-left: #e8ebf0 solid 0.0031rem;
      }

      .img img {
        height: 0.3906rem;
        margin-bottom: 0.1781rem;
      }

      .sec-text {
        display: none;
        margin-top: 0.1812rem;
        font-size: .0625rem;
      }

      .main-text {
        font-size: 0.1375rem;
        font-family: Arial;
        font-weight: bold;
        color: #111111;
      }

      .add img {
        height: 0.0969rem;
        width: 0.0969rem;
        margin-top: 0.1812rem;
        cursor: pointer;
      }
    }
  }

  .step-info {
    margin-top: 0.1563rem;
    display: flex;
    margin-left: 0.35rem;
    justify-content: center;
    margin-bottom: 0.7813rem;
  }

  .info-wrapper {
    width: 1.25rem;
    margin-right: 0.32rem;

    .info-desc {
      //   width: 1.0063rem;
      font-size: 0.1rem;
      font-family: Arial;
      font-weight: 400;
      color: #9fa3aa;
      margin-top: 0.125rem auto 0;
      text-align: center;
    }

    .info-title {
      text-align: center;
      font-size: 0.1375rem;
      font-family: Arial;
      font-weight: bold;
      color: #111111;
    }
  }

  .step-wrapper {
    display: flex;
    align-content: center;
    justify-content: center;

    img {
      width: 0.6406rem;
      height: 0.125rem;
      margin: 0 0.2969rem 0 0.25rem;
    }

    div:nth-child(odd) {
      width: 0.375rem;
      height: 0.375rem;
      background: rgba(255, 24, 2, 0.1);
      //   opacity: 0.1;
      border-radius: 50%;
      font-size: 0.15rem;
      font-family: Arial;
      font-weight: bold;
      color: #ff1702;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .header-2 {
    width: 2.8125rem;
    font-size: 0.1875rem;
    font-family: Arial;
    font-weight: bold;
    color: #111111;
    margin: 0.5625rem auto 0.375rem;
    text-align: center;
  }

  .hover-label {
    font-size: 0.225rem;
    font-family: Arial;
    font-weight: bold;
    color: #ffffff;
    margin-top: 0.5406rem;
    margin-bottom: 0.1375rem;
    text-align: center;
  }

  .hover {
    background: linear-gradient(0deg,
        rgba(255, 176, 169, 0.95),
        rgba(236, 89, 76, 0.95));
    box-shadow: 0px 0.0781rem 0.3125rem 0px rgba(244, 45, 28, 0.3);
    border-radius: 0.1875rem;
    width: 1.8188rem;
    height: 1.25rem;
    position: absolute;
    top: 0;
    // display: none;
    transition: all 0.3s ease-in;
    opacity: 0;

    // display: flex;
    //   flex-direction: column;
    //   align-items: center;
    img {
      width: 0.2406rem;
      height: 0.0688rem;
      margin: 0 auto;
      display: block;
    }
  }

  .category-wrapper {
    width: calc(100vw - 1.2rem - 1.2rem);
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
  }

  .label {
    margin-top: 0.1563rem;
    font-size: 0.1rem;
    font-family: Arial;
    font-weight: bold;
    color: #111111;
  }

  .item {
    position: relative;
    width: 1.8188rem;
    height: 1.25rem;
    background: linear-gradient(0deg, #ffffff, #f2f4f7);
    border-radius: 0.1875rem;
    margin: 0 0.075rem 0.075rem 0;

    &:hover {
      .hover {
        // display: block;
        opacity: 1;
      }
    }

    .normal {
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        margin-top: 0.2188rem;
      }
    }
  }

  .subtitle-line {
    text-align: center;
    width: 0.9375rem;
    height: 0.0375rem;
    background: linear-gradient(90deg, #ff1702, rgba(255, 23, 2, 0.14));
    border-radius: 0.0187rem;
    margin: 0.1rem auto 0.375rem;
  }

  header {
    font-size: 0.1875rem;
    text-align: center;
    font-family: Arial;
    font-weight: bold;
    color: #000001;
    margin-top: 0.5625rem;
  }
}

@media (max-width: 750px) {
  .section-four {
    padding-bottom: 1.6667rem;

    .people img {
      width: 3.4722rem;
      height: 5.7593rem;
    }

    .people {
      display: flex;
      justify-content: center;
    }

    .footer {
      width: 8.8889rem;
      margin: 0 auto;
      background: #FFFFFF;
      box-shadow: 0px 0px .6944rem 0px rgba(64, 89, 136, 0.15);
      border-radius: .5556rem;

      .item-footer {
        // width: 7.037rem;
        display: flex;
        font-size: .5rem;
        font-family: Arial;
        font-weight: bold;
        color: #111111;
        line-height: .5926rem;
        width: 7.037rem;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        padding: 1.2037rem 0;
        align-items: center;

        &.hover-bt {
          width: 9.2407rem;
          height: 5.4444rem;
          background: linear-gradient(0deg, #FFB0A9, #EC594C);
          border-radius: 0px .5556rem .5556rem 0px;
          padding: 0 .9259rem;
          color: #fff;
        }

        &+.item-footer {
          border-top: 2px solid #E8EBF0;
        }

        .main {
          width: 4.1667rem;
        }

        .add img {
          width: .4167rem;
          height: .4167rem;
        }

        div:first-child {
          img {
            height: 1.2037rem;
          }
        }
      }
    }

    .people-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: .6481rem;

      img {
        margin-top: .5556rem;
        margin-bottom: -0.4852rem;
        width: 1.2778rem;
        height: 1.0741rem;
      }

      .red {
        color: rgba(255, 23, 2, 1);
      }

      .black {
        color: #111;
      }

      .content {
        width: 7.7222rem;
        font-size: .6667rem;
        font-family: Arial;
        font-weight: bold;
        color: #B5BAC5;
        text-align: center;
        margin: 0 auto;
        line-height: .8148rem;
      }
    }

    .chat-bt {
      .item {
        width: 8.8889rem;
        height: 6.1111rem;
        background: #FFFFFF;
        box-shadow: 0px 0px 1.3889rem 0px rgba(64, 89, 136, 0.15);
        border-radius: .5556rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: .5556rem auto 0;

        img {
          height: 1.8519rem;
          margin-top: .463rem;
        }

        .chat-bt-t1 {
          height: .463rem;
          font-size: .5rem;
          font-family: Arial;
          font-weight: bold;
          text-align: center;
          margin: .5556rem .3704rem;
          color: #111111;
        }

        .chat-bt-t2 {
          text-align: center;
          margin: 0 auto;
          width: 6.8148rem;
          font-size: .3889rem;
          font-family: Arial;
          font-weight: 400;
          color: #9FA3AA;
        }
      }
    }

    .chat {
      width: 8.8889rem;
      height: 6.1111rem;
      background: linear-gradient(38deg, #5a439b, #114dc0, #ff5343);
      border-radius: 0.5556rem;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: .4444rem;
      font-family: Arial;
      font-weight: bold;
      color: #FFFFFF;

      .chat1,
      .chat2 {
        width: 3.5185rem;
      }

      .chat1 {
        margin-top: .9259rem;
        margin-left: .9259rem;
      }

      .chat2 {
        margin-top: .103rem;
        margin-left: 3.463rem;
      }

      .bg {
        background: url("@/assets/home/chat.png") 100% 100% no-repeat;
        background-position: center center;
        background-size: 100%;
        width: 7.9537rem;
        height: 4.3981rem;
      }
    }

    .step {
      display: flex;
      width: calc(10rem - 1.4815rem - 1.1111rem);
      margin: 0 auto;
      height: 100%;

      .step-right {
        margin-left: 0.6667rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
.right-item+.right-item{
  margin-top: 20px;
}
        .t1 {
          font-size: 0.5rem;
          padding-top: .2778rem;
          font-family: Arial;
          font-weight: bold;
          // height: 0.463rem;
          color: #111111;
        }

        .t2 {
          font-size: 0.3889rem;
          font-family: Arial;
          font-weight: 400;
          color: #9fa3aa;
          margin-top: 0.3704rem;
          margin-bottom: 0.3704rem;
        }
      }

      .step-left {
        // display: flex;
        // flex-direction: column;
        // align-items: center;
        // justify-content: center;
        // padding: 50px 0;
        width: 1.1111rem;
        display: flex;
        flex-direction: column;
        // justify-content: space-between;

        div {
          width: 1.1019rem;
          height: 1.1019rem;
          background: rgba(255, 24, 2, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          font-size: 0.4444rem;
          font-family: Arial;
          font-weight: bold;
          color: #ff1702;
          justify-content: center;
          margin: 0.2778rem 0;
        }

        img {
          width: 1.2315rem;
          height: 0.1944rem;
          transform: rotate(90deg);
          margin: 36px 0;
        }
      }
    }

    .category-wrapper {
      width: unset;
      margin: 0;
      justify-content: center;

      .item {
        width: 4.537rem;
        height: 3.7037rem;
        background: linear-gradient(0deg, #ffffff, #f2f4f7);
        border-radius: 0.5556rem;

        .normal .label {
          font-size: 0.3889rem !important;
          font-family: Arial;
          font-weight: bold;
          color: #111111;
        }

        .hover {
          width: 4.537rem;
          height: 3.7037rem;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;

          .hover-label {
            font-size: 0.3889rem !important;
          }

          img {
            width: 0.7407rem;
            height: 0.1852rem;
          }
        }

        .normal img {
          height: 1.6667rem !important;
          margin-top: 0.6481rem;
        }
      }
    }

    header {
      font-size: 0.6667rem;
      font-family: Arial;
      font-weight: bold;
      color: #000001;
      margin-top: 1.6667rem;
    }

    .subtitle-line {
      width: 2.7778rem;
      height: 0.1111rem;
      background: linear-gradient(90deg, #ff1702, rgba(255, 23, 2, 0.14));
      border-radius: 0.0556rem;
      margin-bottom: 1.1111rem;
    }

  }
}</style>
