<template>
  <footer  class="pc-show" :class="[router.options.history.location==='/shopping'?'display-none':'']">
    <div class="header">
      <div>
        <img src="../../assets/home/footer-logo.png" alt="" />
      </div>
      <div>About</div>
      <div>Service</div>
      <div>Help</div>
      <div>Follow Us</div>
    </div>
    <section></section>
    <main>
      <div class="info-1">
        <div>
          SinoB2B is a dedicated B2B platform that streamlines the procurement
          process in China for global vape retailers.
        </div>
        <div>SinoB2B © Copyright 2023. All rights reserved.</div>
      </div>
      <div>
        <div>About SinoB2B</div>
        <div>About China Merchants Group</div>
        <div>Contact Us</div>
      </div>
      <div>
        <div>Online Procurement</div>
        <div>Online Payment</div>
        <div>Supply Chain Building</div>
        <div>Value-Added Service</div>
        <div>Service Fee</div>
      </div>
      <div>
        <div>FAQ Center</div>
        <div>Privacy Policy</div>
        <div>Terms & Conditions</div>
        <div>Procurement Agreement</div>
      </div>
      <div>
        <img src="../../assets/home/footer-s1.png" alt="" />
        <img src="../../assets/home/footer-s2.png" alt="" />
        <img src="../../assets/home/footer-s3.png" alt="" />
        <img src="../../assets/home/footer-s4.png" alt="" />
      </div>
    </main>
  </footer>
  <footer class="h5-show">
    <div class="header">
      <img src="../../assets/home/footer-logo.png" alt="" />
    </div>
    <div class="sec-title">
      SinoB2B is a dedicated B2B platform that streamlines the procurement
      process in China for global vape retailers.
    </div>
    <div class="bt">
      <a-collapse>
        <a-collapse-panel key="1" header="About">
          <div>About SinoB2B</div>
        <div>About China Merchants Group</div>
        <div>Contact Us</div>
        </a-collapse-panel>
        <a-collapse-panel key="2" header="Service">
          <div>Online Procurement</div>
        <div>Online Payment</div>
        <div>Supply Chain Building</div>
        <div>Value-Added Service</div>
        <div>Service Fee</div>
        </a-collapse-panel>
        <a-collapse-panel
          key="3"
          header="Help"
        >
        <div>FAQ Center</div>
        <div>Privacy Policy</div>
        <div>Terms & Conditions</div>
        <div>Procurement Agreement</div>
        </a-collapse-panel>
        <a-collapse-panel
          key="4"
          header="Follow Us"
        >
        <img src="../../assets/home/footer-s1.png" alt="" />
        <img src="../../assets/home/footer-s2.png" alt="" />
        <img src="../../assets/home/footer-s3.png" alt="" />
        <img src="../../assets/home/footer-s4.png" alt="" />
        </a-collapse-panel>
      </a-collapse>
    </div>
    <div class="root" >SinoB2B © Copyright 2023. All rights reserved.</div>
  </footer>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router =useRouter()

</script>
<style lang="less" scoped>

footer {
  // position: absolute;
  // bottom: 0;
  width: 10rem;
  background: #111111;
  color: #fff;
  padding: 0 1.25rem;
  padding-top: 0.4219rem;
  padding-bottom: 0.3375rem;
  //   0 1.25rem
  //   width: calc(100vw - 1.25rem - 1.25rem);
  //   margin: 0 auto;
  main {
    font-size: 0.075rem;
    font-family: Arial;
    font-weight: 400;
    color: #797d85;
    display: flex;
    justify-content: space-between;
    & > div {
    color: #797d85;
      flex: 1;
      transition: all linear .3s;
      div:hover{
        color:#fff;
       }
      &.info-1 {
        // width: 1.5625rem;
        // width: 1.5625rem !important;
        flex: 1.75;
   
      }
    }
    img {
      width: 0.1781rem;
      height: 0.1781rem;
      & + img {
        margin-left: 0.1313rem;
      }
    }
  }
  .info-1 {
  
    div:nth-child(1) {
      width: 1.375rem;
      font-size: 0.075rem;
      font-family: Arial;
      font-weight: 400;
      color: #797d85;
      margin-bottom: 0.2188rem;
    }
    div:nth-child(2) {
      font-size: 0.075rem;
      font-family: Arial;
      font-weight: 400;
      color: #797d85;
    }
  
  }
  .header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    font-size: 0.0875rem;
    font-weight: 600;
    & > div {
      flex: 1;
      &:first-child {
        // width: 1.5625rem !important;
        flex: 1.75;
      }
    }
  }
  .header img {
    width: 0.8531rem;
    height: 0.1656rem;
  }
  section {
    height: 1px;
    width: 100%;
    background: #32343a;
    margin: 0.1219rem 0;
  }
}
@media (max-width: 750px) {
  footer{
    padding: 0;
  }
  .header img {
    width: 3.3519rem !important;
    height: 0.6481rem !important;
    margin: 1rem auto 0.3704rem;
  }
  .sec-title {
    width: 8.093rem;
    font-size: 0.2963rem;
    font-family: Arial;
    font-weight: 400;
    color: #797d85;
    text-align: center;
    margin-bottom: 0.9259rem;
    margin: 0 auto;
  }
  .root{
font-size: .2963rem;
font-family: Arial;
font-weight: 400;
color: #797D85;
padding-bottom: .9259rem;
text-align: center;
  }
  .bt{
    img {
      width: .5704rem;
      height: 0.5704rem;
      & + img {
        margin-left: 0.5704rem;
      }
    }
  }
}
.ant-collapse-content,.ant-collapse,/deep/ .ant-collapse-content-box{
  background: #111111;
  color: #fff !important;
  border: 0 !important;

}
/deep/ .ant-collapse > .ant-collapse-item > .ant-collapse-header{
  color: #fff !important;
  border: 0 !important;


}
/deep/ .anticon-right.ant-collapse-arrow{
// display: none !important;
position: absolute;
right: 0;
transform: rotate(90deg);

}
/deep/ .ant-collapse-item-active .anticon-right {
  // &{
transform: rotate(-180deg);

// }
}
.bt{
width: calc(10rem - .7407rem - .7407rem );
margin: 0 auto;
margin-top: .9259rem;
padding-bottom: 1.6667rem;
}
/deep/ .ant-collapse > .ant-collapse-item,/deep/ .ant-collapse-content{

  border: 0 !important;
}
/deep/ .ant-collapse-header{
font-size: .4259rem;
font-family: Arial;
font-weight: bold;
color: #FFFFFF;
}
.display-none,.h5-show{
  display: none !important;
}
</style>
