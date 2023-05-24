<template>
  <section class="section-three">
    <h1 style="text-align: center;">Always Connect Your Retail Business to the Best Industry Players</h1>
    <div class="title-bottom-line"></div>
    <h6 style="text-align: center;">
      SinoB2B gives you access to the world's leading vape brands, allowing you
      to offer a diverse selection of popular vape sets to your customers,
      whether you run a retail store or an online vape shop.
    </h6>
    <div class="btn">View All Brands <img src="@/assets/home/arrow-red.png" alt=""></div>
    <div class="bottom-wrapper">
      <div class="logos">
        <div class="line-1">
          <div class="small-box">
            <img src="@/assets/home/section3/s1.png" style="width: 0.4688rem" alt="" />
          </div>
          <div class="small-box">
            <img src="@/assets/home/section3/s2.png" style="width: 0.4688rem" alt="" />
          </div>
          <div class="small-box big">
            <img src="@/assets/home/section3/s3.png" style="height: 0.225rem" alt="" />
          </div>
        </div>
        <div class="line-2">
          <div class="small-box big">
            <img src="@/assets/home/section3/s4.png" style="height: 0.2344rem" alt="" />
          </div>
          <div class="small-box">
            <img src="@/assets/home/section3/s5.png" style="height: 0.0719rem" alt="" />
          </div>
          <div class="small-box">
            <img src="@/assets/home/section3/s6.png" style="height: 0.1406rem" alt="" />
          </div>
          <div class="small-box">
            <img src="@/assets/home/section3/s7.png" style="height: 0.1406rem" alt="" />
          </div>
          <div class="small-box">
            <img src="@/assets/home/section3/s8.png" style="height: 0.2344rem" alt="" />
          </div>
        </div>
        <div class="line-3">
          <div class="small-box">
            <img src="@/assets/home/section3/s9.png" style="height: 0.0875rem" alt="" />
          </div>
          <div class="small-box big">
            <img src="@/assets/home/section3/s10.png" style="height: 0.15rem" alt="" />
          </div>
          <div class="small-box">
            <img src="@/assets/home/section3/s11.png" style="height: 0.1031rem" alt="" />
          </div>
          <div class="small-box big">
            <img src="@/assets/home/section3/s12.png" style="height: 0.1281rem" alt="" />
          </div>
        </div>
        <div class="line-4">
          <div class="small-box">
            <img src="@/assets/home/section3/s13.png" style="height: 0.0875rem" alt="" />
          </div>
          <div class="small-box big">
            <img src="@/assets/home/section3/s14.png" style="height: 0.0875rem" alt="" />
          </div>
          <div class="small-box">
            <img src="@/assets/home/section3/s15.png" style="height: 0.0875rem" alt="" />
          </div>
        </div>
      </div>
      <div class="main">
        <img src="@/assets/home/section-three-main.png" alt="" />
      </div>
    </div>
  </section>
</template>
<style lang="less" scoped>
.section-three {
  .btn {
    visibility: hidden;
  }

  overflow: hidden;
  width: 10rem;
  //   height: 5.2313rem;
  padding: 0.5594rem 0 0.3969rem 0;
  background: #f5f6f9;
  display: flex;
  flex-direction: column;
  align-items: center;

  .main img {
    width: 3.125rem;
    height: 2.8125rem;
    margin-left: 0.3125rem;
  }

  .bottom-wrapper {
    display: flex;
    align-items: center;
  }

  .logos>div {
    display: flex;
    justify-content: center;
    margin-bottom: 0.0625rem;
  }

  .small-box {
    width: 0.625rem;
    height: 0.625rem;
    background: #ebeef2;
    border-radius: 0.3125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all linear 0.3s;

    &.big {
      width: 1.4375rem;

      &:hover {
        background: #fff;
        transform: scale(1.15);
      }
    }

    &+.small-box {
      margin-left: 0.0625rem;
    }

    &:hover {
      background: #fff;
      transform: scale(1.3);
    }
  }

  h1 {
    width: 3.3687rem;
    font-size: 0.1875rem;
    font-family: Arial;
    font-weight: bold;
    color: #111111;
  }

  .title-bottom-line {
    width: 0.9375rem;
    height: 0.0375rem;
    background: linear-gradient(90deg, #ff1702, rgba(255, 23, 2, 0.14));
    border-radius: 0.0187rem;
    margin: 0.1rem 0 0.1875rem;
  }

  h6 {
    width: 3.4312rem;
    font-size: 0.1rem;
    font-family: Arial;
    font-weight: 400;
    color: #9fa3aa;
  }
}

@media (max-width: 750px) {
  .section-three {
    padding-bottom: 0 !important;

    h1 {
      width: 8.6111rem !important;
      font-size: 0.6667rem !important;
      text-align: center;
      font-family: Arial;
      font-weight: bold;
      color: #111111;
      line-height: 0.8148rem !important;
      margin-top: 1.6667rem;
    }

    .title-bottom-line {
      display: none;
    }

    .logos {
      width: calc(10rem - 0.5093rem - 0.5093rem);

      .line-1 {
        .small-box:nth-child(1) img {
          width: 1.0463rem !important;
        }

        .small-box:nth-child(2) img {
          width: 0.9259rem !important;
        }

        .small-box:nth-child(3) img {
          width: 1.8519rem !important;
          height: unset !important;
        }
      }

      .line-2 {
        .small-box:nth-child(1) img {
          width: 1.3148rem !important;
          height: 0.5185rem !important;
        }

        .small-box:nth-child(2) img {
          width: 0.9444rem !important;
          height: 0.1574rem !important;
        }

        .small-box:nth-child(3) img {
          width: .7407rem !important;
          height: .2963rem !important;
        }

        .small-box:nth-child(4) img {
          width: .8148rem !important;
          height: .2963rem !important;
        }

        .small-box:nth-child(5) img {
          width: .5093rem !important;
          height: 0.5093rem !important;
        }
      }

      .line-3 {
        .small-box:nth-child(1) img {
          width: .8426rem !important;
          height: .1944rem !important;
        }

        .small-box:nth-child(2) img {
          width: 1.8519rem !important;
          height: .3333rem !important;
        }

        .small-box:nth-child(3) img {
          width: .8426rem !important;
          height: .2222rem !important;
        }

        .small-box:nth-child(4) img {
          width: 2.1481rem !important;
          height: .287rem !important;
        }
      }

      .line-4 {
        .small-box:nth-child(1) img {
          width: .8426rem !important;
          height: .1944rem !important;
        }

        .small-box:nth-child(2) img {
          width: 1.8519rem !important;
          height: .3333rem !important;
        }

        .small-box:nth-child(3) img {
          width: .8426rem !important;
          height: .2222rem !important;
        }

        .small-box:nth-child(4) img {
          width: 2.1481rem !important;
          height: .287rem !important;
        }
      }

      .small-box {
        width: 1.3796rem;
        height: 1.3704rem;
        background: #ebeef2;
        border-radius: 0.6852rem;


        &.big {
          width: 2.8889rem !important;
        }
      }
    }

    .bottom-wrapper {
      flex-direction: column;
    }

    h6 {
      width: 7.8056rem;
      font-size: 0.3889rem;
      font-family: Arial;
      font-weight: 400;
      color: #9fa3aa;
      line-height: 0.5rem;
      text-align: center;
    }

    .main {
      transform: translateY(1.0185rem);

      img {
        width: 7.8241rem;
        height: 7.0556rem;
        margin: 0;
      }
    }
  }

  .btn {
    width: 4.1111rem;
    height: 1.2963rem;
    background: rgba(247, 240, 244, 0);
    border: .037rem solid #FF1702;
    border-radius: .6481rem;
    margin: .6481rem auto 1.1111rem;
    display: flex;
    align-items: center;
    font-size: .3333rem;
    font-family: Arial;
    font-weight: 400;
    color: #FF1802;
    visibility: visible !important;

    img {
      margin-left: .1667rem;
      width: .0926rem;
      height: .1389rem;
    }

    justify-content: center;
  }
}
</style>
