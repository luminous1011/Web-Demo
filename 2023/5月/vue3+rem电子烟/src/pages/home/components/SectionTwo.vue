<template>
  <section class="section-two pc-show">
    <div class="section-two-wrapper">
      <div class="wrapper-item">
        <div><img src="@/assets/home/section-two-s1.png" alt="" /></div>
        <div class="title">Source the Best</div>
        <div class="line"></div>
        <div class="desc">
          Connect directly to 90% of the vape industry's supply and always offer
          your customers the best and trending vape sets from top brands with
          ease.
        </div>
      </div>
      <div class="wrapper-item">
        <div><img src="@/assets/home/section-two-s2.png" alt="" /></div>
        <div class="title">Pay with Safety</div>
        <div class="line"></div>
        <div class="desc">
          Partner with reputable payment companies that will hold the funds
          until the SinoB2B operator receives the cargo on your behalf as per
          the procurement agreement.
        </div>
      </div>
      <div class="wrapper-item">
        <div><img src="@/assets/home/section-two-s3.png" alt="" /></div>
        <div class="title">Fulfill in Efficiency</div>
        <div class="line"></div>
        <div class="desc">
          SinoB2B provides comprehensive logistic solutions tailored to your
          needs, including dropshipping, B2B transportation via air, sea, and
          express courier.
        </div>
      </div>
    </div>
  </section>
  <section class="section-two h5-show">
    <div class="section-two-wrapper">
      <div class="wrapper-item">
        <div><img src="@/assets/home/section-two-s1.png" alt="" /></div>
        <div class="title">Source the Best</div>
        <div class="line"></div>
        <div class="desc">
          Connect directly to 90% of the vape industry's supply and always offer
          your customers the best and trending vape sets from top brands with
          ease.
        </div>
      </div>
      <div class="wrapper-item">
        <div><img src="@/assets/home/section-two-s2.png" alt="" /></div>
        <div class="title">Pay with Safety</div>
        <div class="line"></div>
        <div class="desc">
          Partner with reputable payment companies that will hold the funds
          until the SinoB2B operator receives the cargo on your behalf as per
          the procurement agreement.
        </div>
      </div>
      <div class="wrapper-item">
        <div><img src="@/assets/home/section-two-s3.png" alt="" /></div>
        <div class="title">Fulfill in Efficiency</div>
        <div class="line"></div>
        <div class="desc">
          SinoB2B provides comprehensive logistic solutions tailored to your
          needs, including dropshipping, B2B transportation via air, sea, and
          express courier.
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="less" scoped>
.section-two {
  //   height: 2.6875rem;
  width: 10rem;
  //   display: flex;
  //   align-items: center;
  padding: 0.5625rem 0;
  .section-two-wrapper {
    display: flex;
    padding: 0 1.375rem;
    .wrapper-item + .wrapper-item {
      margin-left: 0.7594rem;
    }
    img {
      //   width: 0.3469rem;
      height: 0.3531rem;
      margin-bottom: 0.2188rem;
    }
    .title {
      font-size: 0.1375rem;
      font-family: Arial;
      font-weight: bold;
      color: #111111;
    }
    .line {
      width: 2rem;
      height: 0.0125rem;
      background: linear-gradient(90deg, #ff1702, rgba(255, 23, 2, 0.14));
      border-radius: 0.0063rem;
      margin: 0.1563rem 0;
    }
    .desc {
      width: 1.8813rem;
      //   height: 0.5469rem;
      text-overflow: ellipsis;
      font-size: 0.1rem;
      font-family: Arial;
      font-weight: 400;
      color: #9fa3aa;
    }
  }
}
@media (max-width: 750px) {
  .section-two {
    padding-bottom: 1.6667rem;
    .section-two-wrapper {
      display: block;
      img {
        width: 1.2222rem;
        height: unset;
      }
      .title {
        width: 4.787rem;
        font-size: 0.5rem;
        font-family: Arial;
        font-weight: bold;
        color: #111111;
      }
      .line{
        width: 5.9259rem !important;
        height: .037rem !important;
      }
      .line{
        margin: .463rem 0 !important;
      }
      .wrapper-item{
        margin: 0 !important;
        margin-top: 1.1481rem !important;
      }
      .desc{
        width: 7.3148rem;
height: 1.8704rem;
font-size: .3889rem;
font-family: Arial;
font-weight: 400;
color: #9FA3AA;
      }
    }
  }
}
</style>
