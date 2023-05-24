<template>
  <section class="wrapper">
    <section class="one">
      <div class="info">
        <div class="title">Become a SinoB2B</div>
        <div class="title">Affiliate</div>
        <p>Refer Just Once, 365-day Commission Duration</p>
        <div class="btn">Already an affiliate? &nbsp; <span>Log in</span></div>
      </div>
      <img src="@/assets/become/one-bg.png" class="bg" alt="" />
    </section>
    <section >
      <div class="bg-white"></div>
      <div class="bg-grey"></div>
      <div class="content">
        <div class="item">
          <div><img src="@/assets/become/s1.png" alt="" /></div>
          <div class="name">SinoB2B gets buyers</div>
        </div>
        <div class="item">
          <div><img src="@/assets/become/s2.png" alt="" /></div>
          <div class="name">Buyers get world-class products</div>
        </div>
        <div class="item">
          <div><img src="@/assets/become/s3.png" alt="" /></div>
          <div class="name">Affiliates get earnings</div>
        </div>
      </div>
    </section>
    <section class="sec">
      <div class="left">
        <div>HOW</div>
        <div>IT</div>
        <div>WORKS?</div>
        <img src="@/assets/become/qua.png" alt="" />
      </div>
      <div class="right">
        <div class="item">
          <div>
            <img src="@/assets/become/sec1.png" alt="" />
          </div>
          <div>
            <div>Register as a Buyer</div>
            <div>& Apply Affiliate</div>
          </div>
        </div>
        <div class="item">
          <div>
            <img src="@/assets/become/sec2.png" alt="" />
          </div>
          <div>
            <div>Promote SinoB2B & Your</div>
            <div>Invitation Code</div>
          </div>
        </div>
        <div class="item">
          <div>
            <img src="@/assets/become/sec3.png" alt="" />
          </div>
          <div>
            <div>Bring Buyers & Orders</div>
            <div>on SinoB2B</div>
          </div>
        </div>
        <div class="item">
          <div>
            <img src="@/assets/become/sec4.png" alt="" />
          </div>
          <div>
            <div>See Commission Rolling</div>
            <div>In</div>
          </div>
        </div>
      </div>
    </section>
    <section class="third">
      <header>Who Can Earn with Us?</header>
      <div class="header"></div>
      <div class="left">
        <div class="item">
          <div class="step">1</div>
          <div>
            <div class="main">You know a lot of vape store owners</div>
            <div class="de">
              That's just prime! Don't hesitate to get in touch with them with
              the help of world class vape brands of ours.
            </div>
          </div>
        </div>
        <div class="item">
          <div class="step">2</div>
          <div>
            <div class="main">
Part-time job hunters													
</div>
            <div class="de">
              If you are in the US, UK, AU and other major eu countries and want to find a part-time sales job based on commission mode, Being our affiliate could be a good choice for you.														

            </div>
          </div>
        </div>
        <div class="item">
          <div class="step">3</div>
          <div>
            <div class="main">
Business educator													
</div>
            <div class="de">
              If you are helping people who wants to build their own e-commerce bussiness, you can recommend them running an online vape store with the help of SinoB2B's vape supply chain and dropshipping service.														

            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="item">
          <div class="step">4</div>
          <div>
            <div class="main">Social Media Marketing Agency	
</div>
            <div class="de">
              Looking for factory-priced vaping products for your influencers? Look no further. Join us and you will get what you want.													
            </div>
          </div>
        </div>
        <div class="item">
          <div class="step">5</div>
          <div>
            <div class="main">														

Vaping blogs & forums												
</div>
            <div class="de">
              Join our affiliate program, connect world class vape brands to your audience and monetize your traffic.														
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="four">
      <header>Why Partner with SinoB2B.com?</header>
      <div class="header"></div>
      <div class="wrapper">
        <div class="item">
          <div class="name">200+</div>
          <div class="a">200+ World class vape</div>
          <div class="a">brands to choose from</div>
          <p>
            We have over 200+ world famous vape brands and over 1000+ Products
            to choose from.
          </p>
        </div>
        <div class="item">
          <div class="name">50%</div>
          <div class="a">Up to 50% commission</div>
          <div class="a">based on our profit</div>
          <p>
            Wholesale orders have thin profit, but we are still willing to share
            up to 50% of our profit to affiliates.
          </p>
        </div>
        <div class="item">
          <div class="name">365-day</div>
          <div class="a">Refer just once, 365-day</div>
          <div class="a">commission duration</div>
          <p>
            Wholesale orders have thin profit, but we are still willing to share
            up to 50% of our profit to affiliates.
          </p>
        </div>
        <div class="item">
          <div class="name">Eexpert</div>
          <div class="a">Dedicated account manager & expert</div>
          <div class="a">expert</div>
          <p>
            Wholesale orders have thin profit, but we are still willing to share
            up to 50% of our profit to affiliates.
          </p>
        </div>
      </div>
    </section>
    <section class="five">
      <header>FAQ</header>
      <div class="wrapper">
        <div class="left">
          <div class="item" :class="[i===1?'i':'']">
            <div class="m" @click="insert(1)"  >
              <div>1. How does SinoB2B affiliate work?</div>
              <img src="@/assets/faq/ad.png" v-if="i!==1"  alt="" />
              <img src="@/assets/faq/ca.png" v-else  alt="" />
            </div>
            <div style="font-size: 12px;padding-bottom: 20px;" class="more">
              Yes, it is totally free to join since there is no monthly fee.
            </div>
          </div>
          <div class="item" :class="[i===2?'i':'']">
            <div class="m" @click="insert(2)">
              <div>2. How do I get started?</div>
              <img src="@/assets/faq/ad.png" v-if="i!==2"  alt="" />
              <img src="@/assets/faq/ca.png" v-else  alt="" />
            </div>
            <div style="font-size: 12px;padding-bottom: 20px;" class="more">
              Yes, it is totally free to join since there is no monthly fee.
            </div>
          </div>
          <div class="item" :class="[i===3?'i':'']">
            <div class="m" @click="insert(3)">
              <div>3. How does SinoB2B affiliate work?</div>
              <img src="@/assets/faq/ad.png" v-if="i!==3"  alt="" />
              <img src="@/assets/faq/ca.png" v-else  alt="" />
            </div>
            <div style="font-size: 12px;padding-bottom: 20px;" class="more">
              Yes, it is totally free to join since there is no monthly fee.
            </div>
          </div>
          <div class="item" :class="[i===4?'i':'']">
            <div class="m" @click="insert(4)">
              <div>4. How do I get started?</div>
              <img src="@/assets/faq/ad.png" v-if="i!==4"  alt="" />
              <img src="@/assets/faq/ca.png" v-else  alt="" />
            </div>
            <div style="font-size: 12px;padding-bottom: 20px;" class="more">
              Yes, it is totally free to join since there is no monthly fee.
            </div>
          </div>
          <div class="item" :class="[i===5?'i':'']">
            <div class="m" @click="insert(5)">
              <div>5. How does SinoB2B affiliate work?</div>
              <img src="@/assets/faq/ad.png" v-if="i!==5"  alt="" />
              <img src="@/assets/faq/ca.png" v-else  alt="" />
            </div>
            <div style="font-size: 12px;padding-bottom: 20px;" class="more">
              Yes, it is totally free to join since there is no monthly fee.
            </div>
          </div>
        </div>
        <div class="right">
          <div class="item" :class="[i===6?'i':'']">
            <div class="m"  @click="insert(6)">
              <div>6. How does SinoB2B affiliate work?</div>
              <img src="@/assets/faq/ad.png" v-if="i!==6"  alt="" />
              <img src="@/assets/faq/ca.png" v-else  alt="" />
            </div>
            <div style="font-size: 12px;padding-bottom: 20px;" class="more">
              Yes, it is totally free to join since there is no monthly fee.
            </div>
          </div>
          <div class="item" :class="[i===7?'i':'']">
            <div class="m"  @click="insert(7)">
              <div>7. How do I get started?</div>
              <img src="@/assets/faq/ad.png" v-if="i!==7"  alt="" />
              <img src="@/assets/faq/ca.png" v-else  alt="" />
            </div>
            <div style="font-size: 12px;padding-bottom: 20px;" class="more">
              Yes, it is totally free to join since there is no monthly fee.
            </div>
          </div>
          <div class="item" :class="[i===8?'i':'']">
            <div class="m"  @click="insert(8)">
              <div>8. How does SinoB2B affiliate work?</div>
              <img src="@/assets/faq/ad.png" v-if="i!==8"  alt="" />
              <img src="@/assets/faq/ca.png" v-else  alt="" />
            </div>
            <div style="font-size: 12px;padding-bottom: 20px;" class="more">
              Yes, it is totally free to join since there is no monthly fee.
            </div>
          </div>
          <div class="item" :class="[i===9?'i':'']">
            <div class="m"  @click="insert(9)">
              <div>9. How do I get started?</div>
              <img src="@/assets/faq/ad.png" v-if="i!==9"  alt="" />
              <img src="@/assets/faq/ca.png" v-else  alt="" />
            </div>
            <div style="font-size: 12px;padding-bottom: 20px;" class="more">
              Yes, it is totally free to join since there is no monthly fee.
            </div>
          </div>
        </div>
      </div>
    </section>
    <h6 style="width: 7.3854rem; font-size: 16px;margin: 0 auto;margin-top: 30px;">Do you have an limitations?
</h6>
<br/>
    <p style="width: 7.3854rem; font-size: 12px;margin: 0 auto;padding-bottom: 40px;color: rgba(159, 163, 170, 1);">
      1. The minimum payment amount for PayPal is USD $100 and USD $500 for Bank. Regularly we start to arrange the payment on 5th of each month and the whole payment process will take another 5 business days.
<br/><br/>2. Do remember your inivitation code to your buyers before they sign up. If someone forgot to add your invitation code, tell us with a proof and we can help you recover the referral relationship.
<br/><br/>3. Don't worry if your referred buyers clears the browser cookie since we only use Invitation Code mode. The 365-day duration is stable.
<br/><br/>4. Products on SinoB2B may have exclusive distributors on some countries and regions. Before you started promotion, please contact us for more useful details at: marsyang@sinob2b.com.</p>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const i=ref(0)
function insert(x:number){
  if(i.value===x){
    return i.value=0
  }
  i.value=x
}
</script>

<style lang="less" scoped>
.five {
    .wrapper{
        display: flex;
        justify-content: center;
    }
    .left,.right{
        display: inline-block;
        vertical-align: top;
    }
    .right{
        margin-left: .125rem;
    }
  .item {
    padding: 0 0.2604rem;
    width: 3.6875rem;
    background: #f5f6f9;
    border-radius: 0.0938rem;
    margin-bottom: 0.0938rem;
    .more{
        display: none;
      }
    .m {
      font-size: 0.1146rem;
      height: 0.4375rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      img {
        width: 0.1042rem;
      }
    
    
    }
    &.i .more{
        display: block !important;
      }
  }
}
.four {
  background: #f5f6f9;
  padding-bottom: 0.5625rem;
  .wrapper {
    display: flex;
    // align-items: center;
    justify-content: center;
  }
  .item {
    width: 1.5625rem;
    text-align: center;
    & + .item {
      margin-left: 0.2604rem;
    }
    .a {
      font-size: 0.1146rem;
      font-family: Arial;
      font-weight: bold;
      color: #111111;
    }
    .name {
      font-size: 0.224rem;
      font-family: Arial;
      font-weight: bold;
      color: #ff4f3c;
      margin-bottom: 0.1667rem;
    }
    p {
      margin-top: 0.1667rem;
      width: 100%;
      font-size: 0.099rem;
      font-family: Arial;
      font-weight: 400;
      color: #9fa3aa;
    }
  }
}
.third {
  // padding-left: 1.2604rem;
  padding-bottom: 40px;

  .left,
  .right {
    display: inline-block;
    vertical-align: top;
    // display: flex;
    // flex-direction: column;
  }
  .left {
    margin-left: 1.2604rem;
  }
  .right {
    margin-left: 0.625rem;
  }

  .item {
    display: flex;
    margin-bottom: 20px;
  }
  .step {
    width: 0.3698rem;
    height: 0.3698rem;
    background: #ffe7e5;
    border-radius: 50%;
    font-size: 0.151rem;
    font-family: Arial;
    font-weight: bold;
    color: #ff1702;
    margin-right: 0.1875rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .main {
    font-size: 0.1146rem;
    font-family: Arial;
    font-weight: bold;
    color: #111111;
    width: 2.3438rem;
  }
  .de {
    font-size: 12px;
    color: rgba(159, 163, 170, 1);
    width: 2.3438rem;
  }
}
header {
  font-size: 0.1875rem;
  font-family: Arial;
  font-weight: bold;
  color: #111111;
  text-align: center;
  padding-top: 0.5625rem;
  padding-bottom: 0.1563rem;
}
.header {
  width: 0.9375rem;
  height: 0.0365rem;
  background: linear-gradient(90deg, #ff1702, rgba(255, 23, 2, 0.14));
  border-radius: 0.0208rem;
  margin: 0 auto;
  margin-bottom: 0.375rem;
}
.sec {
  padding: 0.5625rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  // padding-left: 1.2604rem;
  background: #F5F6F9;
  .right {
    padding-left: 0.5625rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 5.1406rem;
    width:calc(7.5rem - 2.375rem) ;
  }
  .left {
    width: 2.375rem;
    height: 1.9635rem;
    background: linear-gradient(38deg, #5a439b, #114dc0, #ff5343);
    border-radius: 0.1875rem;
    position: relative;
    font-size: 0.25rem;
    font-weight: 600;
    color: #fff;
    padding: 0.5073rem 0 0 0.2813rem;
    img {
      width: 0.4167rem;
      position: absolute;
      top: 0.2813rem;
      right: 0.2813rem;
    }
  }
  .item {
    display: flex;
    align-items: center;
    font-size: 0.1146rem;
    img {
      width: 0.4583rem;
    }
    & > div:last-child {
      margin-left: 0.1667rem;
      width: 1.5188rem;
    }
    &:nth-child(3),
    &:nth-child(4) {
      margin-top: 0.4583rem;
    }
  }
}
.one {
  height: calc(4.1302rem - 0.651rem);
  padding: 1.25rem 0 0 1.25rem;
  position: relative;
  overflow: hidden;
  .bg {
    position: absolute;
    top: 0.901rem;
    left: 4.1146rem;
    height: 3.2292rem;
  }
  .title {
    font-size: 0.3021rem;
    font-family: Arial;
    font-weight: bold;
    color: #111111;
  }
  p {
    font-size: 0.125rem;
    font-family: Arial;
    font-weight: 400;
    color: #9fa3aa;
  }
  .btn {
    width: 1.875rem;
    height: 0.3438rem;
    background: #f5f6f9;
    border-radius: 0.1719rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.1146rem;
    span {
      color: rgba(255, 79, 60, 1);
    }
  }
}
.content {
  position: absolute;
  top: 0;
  left: 50%;
  display: flex;
  align-items: center;
  width: 7.5rem;
  height: 1.3021rem;
  background: #ffffff;
  box-shadow: 0px 0px 0.4688rem 0px rgba(64, 89, 136, 0.15);
  border-radius: 0.1875rem;
  margin: 0 auto;
  margin-left: -3.75rem;
  padding: 0.3229rem 0;
  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    & + .item {
      border-left: 1px solid #ddd;
    }
  }
  img {
    width: 0.375rem;
    margin-bottom: 0.1563rem;
  }
  .name {
    font-size: 0.1146rem;
    font-family: Arial;
    font-weight: bold;
    color: #111111;
  }
  span {
    color: #ff1702;
  }
}

.bg-white {
  height: 0.651rem;
}

.bg-grey {
  height: 0.651rem;
  background-color: #f5f6f9;
}
section {
  position: relative;
}
@media (max-width:750px) {
  .one{
  padding:0;

  padding-top:100px;
  height:auto;
  .info{
    width: 9rem;
    margin:0 auto;
    text-align:center;
    .title{
font-size:20px;

    }
    p{
      font-size:14px;

    }
    .btn{
    margin:0 auto;
      width:6rem;
      min-height: 30px;
      font-size:14px;

    }
  }
  img{
    margin:0 .5rem;
    // top:100px !important;
    position:relative !important;
    top: 50px !important;
    left:0 !important;
    margin-top:20px;
    width: 9rem;
    height:auto !important;
  }
  }
  .content,.bg-white{
    display: none;
  }
  .third .main{
    font-size: 16px;
  }
  .third .de{
    font-size: 12px;

  }
   .five .left,  .five .right{
      display: block !important;
    }
    .five .wrapper{
      flex-direction: column;
    }
    .five .item{
      width: 9rem;
      min-height: 30px;
      margin: 0 auto;
      margin-bottom:5px;

  .m{
    display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: 30px;
      font-size: 14px;
img{
  min-width: 10px;
}
  }

    }
    .four .wrapper{
      flex-direction: column;
      .item{
        width: 10rem;
        padding: 0 30px;
        font-size: 14px;
        margin-bottom: 20px;
        .name{
          font-size: 32px;
        }
        p{
          font-size: 14px;
        }
        .a{
          font-size: 18px;
        }
      }
    }
    header{
      font-size: 20px;
    }
    .third{
      .left,.right{
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .step{
        width: 40px;
        height: 40px;
        font-size: 16px;
      }
.item{
  margin-bottom: 20px;
}
      .main,.de{
        width: 240px;
        font-size: 16px;
      }
      .de{
        font-size: 12px;
      }
    }
    .sec .right{
      flex-direction: column;
    }
    .sec .item > div:last-child{
      font-size:12px;
      width: 200px;
    }
    .sec .item{
      margin: 0 !important;
      img{
        width: 30px;
      }
      margin-bottom: 10px !important;
    }
    .five .right{
      margin-left: 0 !important;
    }
} 
</style>