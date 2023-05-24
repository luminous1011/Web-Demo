<template>
  <section class="section-five">
    <header class="header">SinoB2B Blog</header>
    <div class="title-line"></div>
    <main>
      <div class="item" v-for="(item, index) in data">
        <div><img :src="item.img" style="height: 1.4063rem" alt="" /></div>
        <div class="info">
          <div :class="['box', 'box' + (index + 1)]">
            <span></span> {{ item.info1 }}
          </div>
          <div>{{ item.info2 }}</div>
        </div>
        <h1>{{ item.main }}</h1>
        <div class="more">
          <img src="@/assets/home/section5/eye.png" alt="" />
          <span>{{ item.eye }}</span>
          <img src="@/assets/home/section5/commit.png" alt="" />
          <span>{{ item.commit }}</span>
          <img src="@/assets/home/section5/star.png" alt="" />
          <span>{{ item.star }}</span>
          <img :src="item.avatar" alt="" />
        </div>
      </div>
    </main>
  </section>
</template>
<script setup lang="ts">
const data = [
  {
    img: new URL("../../../assets/home/section5/s1.png", import.meta.url).href,
    info1: "most popular",
    info2: "March 27 2023",
    main: "More Vuse e-cigarette menthol styles draw ban from FDA",
    eye: "56k",
    commit: "765",
    star: "3.3k",
    avatar: new URL(
      "../../../assets/home/section5/avatar-1.png",
      import.meta.url
    ).href,
  },
  {
    img: new URL("../../../assets/home/section5/s2.png", import.meta.url).href,
    info1: "Our News",
    info2: "March 27 2023",
    main: "SinoB2B is one step closer to its US $9 billion IPO in China",
    eye: "56k",
    commit: "765",
    star: "3.3k",
    avatar: new URL(
      "../../../assets/home/section5/avatar-2.png",
      import.meta.url
    ).href,
  },
  {
    img: new URL("../../../assets/home/section5/s3.png", import.meta.url).href,
    info1: "Industry News",
    info2: "March 27 2023",
    main: "E-cigarette flavors are associated with lower odds …",
    eye: "56k",
    commit: "765",
    star: "3.3k",
    avatar: new URL(
      "../../../assets/home/section5/avatar-3.png",
      import.meta.url
    ).href,
  },
];
</script>
<style lang="less" scoped>
.section-five {
  background-color: #f5f6f9;
  .more {
    font-size: 0.0875rem;
    font-family: Arial;
    font-weight: bold;
    color: #111111;
    padding: 0.1156rem 0.1563rem;
    span {
      margin-right: 0.0781rem;
      display: inline-block;
    }

    img {
      width: 0.2188rem;
      height: 0.2188rem;
      margin-right: 0.0469rem;
      &:last-child {
        margin-left: 0.25rem;
        border-radius: 50%;
      }
    }
  }
  h1 {
    width: 1.9375rem;
    font-size: 0.1275rem !important;
    font-family: Arial;
    font-weight: bold;
    color: #111111;
    line-height: 0.1875rem;
    margin: 0 auto 0;
    padding-bottom: 0.125rem;
    border-bottom: 1px solid #d4d8e0;
    transition: all linear .15S;
    &:hover{
      color: #FF1702;
    }
  }
  main {
    display: flex;
    justify-content: center;
  }
  .info {
    height: 0.4375rem;
    padding: 0 0.1875rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.075rem;
    color: #9fa3aa;
  }
  .box {
    span {
      width: 0.0375rem;
      height: 0.0375rem;
      background: #ffd250;
      border-radius: 50%;
      display: block;
      margin-right: 0.0563rem;
    }
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.0875rem 0 0.0625rem;
    height: 0.1563rem;
    background: #fffae7;
    border-radius: 0.0781rem;
    font-size: 0.075rem;
    font-family: Arial;
    font-weight: bold;
    color: #000001;
  }
  .box2 {
    background: #e7fffb;
  }
  .box3 {
    background: #fff1fc;
  }
  .box2 span {
    background: #2ec2ae;
  }
  .box3 span {
    background: #ed95db;
  }
  header {
    font-size: 0.1875rem;
    font-family: Arial;
    font-weight: bold;
    color: #111111;
    text-align: center;
    padding-top: 0.5rem;
  }
  .item {
    width: 2.375rem;

    // height: 2.75rem;
    background: #ffffff;
    box-shadow: 0px 0px 0.4688rem 0px rgba(64, 89, 136, 0.15);
    border-radius: 0.1875rem;
    & + .item {
      margin-left: 0.1875rem;
    }
  }
  .title-line {
    width: 0.9375rem;
    height: 0.0375rem;
    background: linear-gradient(90deg, #ff1702, rgba(255, 23, 2, 0.14));
    border-radius: 0.0187rem;
    margin: 0.1rem auto 0.375rem;
  }
}
@media (max-width: 750px) {
  .section-five {
    header{
font-size: .6667rem;
font-family: Arial;
font-weight: bold;
color: #000001;
    }
    .title-line{
        width: 2.7778rem;
height: .1111rem;
background: linear-gradient(90deg, #FF1702, rgba(255,23,2,0.14));
border-radius: .0556rem;
    }
    main {
      flex-direction: column;
      align-items: center;
  
      .item {
        width: 8.8889rem !important;
        height: 9.4444rem !important;
        border-radius: .5556rem;
        margin-top: .5556rem;
        h1 {
        width: calc(8.8889rem - .7407rem - .7407rem) !important;
        text-align: center;
        margin: 0 auto;
        font-size: 0.5rem !important;
        font-family: Arial;
        font-weight: bold;
        color: #111111;
        line-height: .5926rem;
        padding-bottom: .463rem;
      }
        .info {
          margin: 0.6481rem auto 0.463rem;
          padding: 0 0.7407rem;
    
        }
        .box {
          // width: 2.3889rem;
          height: 0.5926rem;
          border-radius: 0.2963rem;
          padding-left: 0.0926rem;
          font-size: 0.2222rem;
          justify-content: flex-start;
          span {
            width: 0.1481rem;
            height: 0.1389rem;
            background: #ffd250;
            border-radius: 50%;
            margin-right: 0.0926rem;
          }
        }
      }
      .more{
        padding:.4444rem .7407rem ;
        img{
            height: .787rem;
            width: .787rem;
            margin-right: .1481rem;
            &:last-child{
                // margin-left: .811rem;
            }
        }
        span{
            margin-right: .463rem;
        }
      }
      .item > div:first-child img {
        height: 4.4444rem !important;
        width: 8.8889rem;
      }
    }
  }
}
</style>
