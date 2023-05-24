<template>
  <section class="section-one pc-show">
    <div class="info-wrapper">
      <div class="title">
        Revolutionize Your Vape Supply Chain with <span>SinoB2B</span>
      </div>
      <div class="subtitle">
        Take Your Vape supply Chain to the Next Level with Our Advanced
        IT-Driven Capabilities.
      </div>
      <div class="crtls">
        <div class="btn">
          <div>Be a buyer</div>
          <div>
            <img src="@/assets/home/section-one-arrow.png" class="a1" alt="" />
            <img src="@/assets/arrow.png" class="a2" alt="" />
          </div>
        </div>
        <div class="btn">
          <div>Be a Supplier</div>
          <div>
            <img src="@/assets/home/section-one-arrow.png" class="a1" alt="" />
            <img src="@/assets/arrow.png" class="a2" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section-one h5-show">
    <div class="info-wrapper">
      <div class="title">
        Revolutionize Your Vape Supply Chain with <span>SinoB2B</span>
      </div>
      <div class="subtitle">
        Take Your Vape supply Chain to the Next Level with Our Advanced
        IT-Driven Capabilities.
      </div>
      <div class="crtls">
        <div class="btn">
          <div>Be a buyer</div>
          <div>
            <img src="@/assets/home/section-one-arrow.png" class="a1" alt="" />
            <img src="@/assets/arrow.png" class="a2" alt="" />
          </div>
        </div>
        <div class="btn">
          <div>Be a Supplier</div>
          <div>
            <img src="@/assets/home/section-one-arrow.png" class="a1" alt="" />
            <img src="@/assets/arrow.png" class="a2" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="h5-show">
  <img src="@/assets/home/h5-bottom.png" alt="">
  </section>
</template>
<style lang="less" scoped>
.section-one {
  width: 10rem;
  height: 4.9375rem;
  background: url("@/assets/home/section-one-bg.png") 100% 100% no-repeat;
  background-size: 100% 100%;
  .crtls {
    margin-top: 0.3rem;
    display: flex;
  }
  .btn {
    cursor: pointer;
    width: 1.6rem;
    height: 0.4313rem;
    background: #ffffff;
    box-shadow: 0 0.0969rem 0.1844rem 0 rgba(255, 192, 186, 0.4);
    border-radius: 0.2156rem;
    font-size: 0.0969rem;
    font-family: Arial;
    font-weight: 400;
    color: #111111;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.25rem;
    transition: all linear .3s;
    .a2{
        display: none;
      }
    &:hover{
      background: #e45843;
      color: #fff;
      .a1{
        display: none;
      }
      .a2{
        display: block;
      }
    }
    & + .btn {
      margin-left: 0.125rem;
    }
    img {
      width: 0.0969rem;
      height: 0.0688rem;
    }
  }
  .info-wrapper {
    padding-top: 1.3188rem;
    padding-left: 1.2563rem;
  }
  .title {
    width: 3.1719rem;
    font-size: 0.35rem;
    font-family: Arial;
    font-weight: bold;
    color: #111111;
    span {
      color: #e13910;
    }
  }
  .subtitle {
    margin-top: 0.3125rem;
    width: 2.6313rem;
    font-size: 0.125rem;
    font-family: Arial;
    font-weight: 400;
    color: #9fa3aa;
  }
}
@media (max-width: 750px) {
  .section-one {
    background: url("@/assets/home/h5-bg-top.png") 100% 100% no-repeat;
    padding-bottom: 1.4815rem;
    height: auto;
    .info-wrapper {
      padding: 0;
      .subtitle {
        width: 8.2037rem;
        font-size: 0.3889rem;
        font-family: Arial;
        font-weight: 400;
        color: #9fa3aa;
        margin: 0.5556rem auto;
        text-align: center;
      }
      .title {
        width: 7.3981rem;
        font-size: 0.8148rem;
        font-family: Arial;
        font-weight: bold;
        color: #111111;
        margin: 0 auto;
        padding: 0;
        text-align: center;
        padding-top: 2.8241rem;
      }
      .crtls {
        justify-content: center;
      }
    
      .btn {
        width: 3.8148rem;
        height: 1.2778rem;
        background: #ffffff;
        box-shadow: 0px 0.1481rem 0.2778rem 0px rgba(204, 207, 214, 0.4);
        border-radius: 0.6389rem;
        padding: 0 0.5407rem;

        font-size: 14px !important;
        img {
          width: 0.2963rem;
          height: 0.2963rem;
        }
      }
    }
  }
}
section>img{
  width: 10rem;
  margin-top: -0.58rem;
}
</style>
