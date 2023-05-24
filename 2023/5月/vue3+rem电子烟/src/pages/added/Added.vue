<template>
  <section class="one">
    <div class="wrapper">
      <div><span>Added Value, </span> <br />Exceeded Expectations!</div>
      <p>
        SinoB2B is a vape wholesale website and offers a series of value-added
        services
      </p>
    </div>
    <img src="@/assets/added/one.png" alt="" />
  </section>
  <section class="sec">
    <header style="text-align: center">
      Quality Inspection & Relabeling
      <br />
      & Customized Packaging
    </header>
    <div class="header-line auto"></div>
    <div class="ins-wrapper">
      <div class="item">
        <img src="@/assets/added/s1.png" alt="" />
        <p>Check and count the outer packaging and quantity</p>
        <div class="btn">Free</div>
      </div>
      <div style="width: 1px; height: 0.625rem; background: #dddddd"></div>
      <div class="item">
        <img src="@/assets/added/s2.png" alt="" />
        <p>Randomly check the inner box for buyer</p>
        <div class="btn">Free</div>
      </div>
      <div style="width: 1px; height: 0.625rem; background: #dddddd"></div>
      <div class="item">
        <img src="@/assets/added/s3.png" alt="" />
        <p>Quality inspection piece by piece</p>
        <div>Please choose “yes” before placing the order</div>
      </div>
      <div style="width: 1px; height: 0.625rem; background: #dddddd"></div>
      <div class="item">
        <img src="@/assets/added/s4.png" alt="" />
        <p>Relabeling based on buyer’s need</p>
        <div>Please contact us and specific your needs first</div>
      </div>
      <div style="width: 1px; height: 0.625rem; background: #dddddd"></div>
      <div class="item">
        <img src="@/assets/added/s5.png" alt="" />
        <p>Customized packaging based on buyer’s need</p>
        <div>Please contact us and specific your needs first</div>
      </div>
    </div>
  </section>
  <section class="third">
    <div class="wrapper">
      <header>
        Product Sourcing for
        <br />
        OEM & ODM
      </header>
      <div class="header-line"></div>

      <div class="more">
        <img src="@/assets/added/dui.png" alt="" />
        Search and recommend suitable manufacturers for you
      </div>
      <div class="more">
        <img src="@/assets/added/dui.png" alt="" />
        On-site factory inspection
      </div>
      <div class="more">
        <img src="@/assets/added/dui.png" alt="" />
        Coordinate sample production
      </div>
      <div class="more">
        <img src="@/assets/added/dui.png" alt="" />
        Sample delivery and confirmation
      </div>
    </div>
    <img src="@/assets/added/oem.png" class="ome" alt="" />
  </section>
  <section class="btns">
    <div class="btn">
      New to this Site? Check out our &nbsp;<span>Userguide</span>&nbsp; before
      you start
    </div>
    <div class="btn">
      For all pricing please visit  &nbsp;<span>Service Fee</span>&nbsp;
    </div>
    <div class="btn">
      For more inquiry please visit &nbsp;<span>FAQ</span>&nbsp;
    </div>
  </section>
</template>
<style lang="less" scoped>
.sec {
  padding: 0.5625rem 0;
  background: #f5f6f9;
  .ins-wrapper {
    display: flex;
    width: 7.5rem;
    height: 1.526rem;
    margin: 0 auto;
    background: #ffffff;
    border-radius: 0.1875rem;
    align-items: center;
  }
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1.7188rem;
    text-align: center;
    height: 1.526rem;
    justify-content: center;
    p {
      margin-top: 0.1719rem;
      width: 1.0156rem;
      font-size: 16px;
    }
    img {
      height: 0.3385rem;
    }
    div {
      width: 1.0156rem;
      font-size: 0.0729rem;
      font-family: Arial;
      font-weight: 400;
      color: #9fa3aa;
    }
    .btn {
      width: 0.4115rem;
      height: 0.1458rem;
      background: rgba(255, 23, 2, 0);
      border: 1px solid #ff1702;
      border-radius: 14px;
      display: flex;
      font-size: 0.0729rem;
      align-items: center;
      justify-content: center;
      color: #ff1702;
    }
  }
}

header {
  font-size: 0.1875rem;
  font-family: Arial;
  font-weight: bold;
  color: #111111;
}

.header-line {
  width: 0.9375rem;
  height: 0.0365rem;
  background: linear-gradient(90deg, #ff1702, rgba(255, 23, 2, 0.14));
  border-radius: 0.0208rem;
  margin: 0.1563rem 0 0.2083rem;
}

.auto {
  margin: 0.1563rem auto 0.2083rem;
}

.third {
  position: relative;

  .wrapper {
    padding-top: 0.9115rem;
    padding-left: 5.8854rem;
    padding-bottom: 0.9115rem;
  }

  .ome {
    width: 3.1823rem;
    position: absolute;
    top: 0.224rem;
    left: 1.7917rem;
  }

  .wrapper {
    font-size: 0.0885rem;
    font-family: Arial;
    font-weight: 400;
    color: #111111;

    img {
      width: 0.0781rem;
      margin-right: 0.026rem;
    }
  }
}

.btns {
  .btn {
    width: 4.4688rem;
    height: 0.5313rem;
    background: #ffffff;
    border-radius: 0.2656rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    font-size: 16px;
    span {
      color: #ff1702;
      text-decoration: underline;
    }

    & + .btn {
      margin-top: 0.1875rem;
    }
  }

  background: #f5f6f9;
  padding: 0.5625rem 0;
}

.one {
  height: 3.8021rem;
  position: relative;
  overflow: hidden;

  .wrapper {
    padding-top: 1.4896rem;
    padding-left: 1.25rem;

    div {
      font-size: 0.3021rem;
      font-family: Arial;
      color: #111;
      font-weight: bold;

      span {
        color: #ff1702;
      }
    }

    p {
      width: 2.6563rem;
      font-size: 0.125rem;
      font-family: Arial;
      font-weight: 400;
      color: #9fa3aa;
      line-height: 0.1979rem;
    }
  }

  img {
    width: 5.4635rem;
    position: absolute;
    top: 0.1875rem;
    right: 0.6927rem;
  }
}
@media (max-width: 750px) {
   .sec .ins-wrapper{
        flex-direction: column;
        height: auto;
        width: 320px;
        height: auto;
        padding-top: 20px;
        .item{
          width: 320px;
          margin-bottom: 20px;
          img{
            height: 30px;
          }
          p,div{
            width: 320px;
          font-size: 12px;
          }
          .btn{
            height: 30px;
            width: 60px;
          }
        }
    }
  .third {
    .wrapper {
      padding-top: 360px;
      padding-left: 0;
      width: 320px;
      margin: 0 auto;
      header{
        text-align: center;
      }
      .header-line{
        width: 320px;
      }
    }
  }
  .third .ome {
    width: 320px;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -160px;
  }
  .one {
    display: flex;
    flex-direction: column;
    height: unset;
    align-items: center;
    img {
      position: relative;
      width: 320px;
      right: 0;
    }
    .wrapper {
      padding-left: 0;
      padding-top: 80px;
      div,
      p {
        width: 320px;
        text-align: center;
        line-height: unset;
        font-size: 14px;
      }
      div {
        font-size: 24px;
      }
    }
  }
  .btns {
    .btn {
      width: 9rem;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      height: 40px;
      background: #ffffff;
      border-radius: 30px;

      font-size: 12px;
    }
  }
  header{
    font-size: 20px;
  }
  .more{
    font-size: 14px !important;
  }
}
</style>