<template>
  <section class="section-six pc-show">
    <div class="top">
      <header>Get to Know More About Our Services</header>
      <div class="header-line"></div>
    </div>
    <div class="bottom"></div>
    <img src="@/assets/home/section5/video.png" class="video" alt="">
  </section>
  <section class=" section-six  h5-show">
    <div class="top">
      <header>Why SinoB2B?</header>
      <div class="header-line"></div>
    </div>
    <img src="@/assets/home/section5/video.png"  alt="">

  </section>
</template>
<style lang="less" scoped>
.section-six {
    padding-top: .5625rem;
    background: #f5f6f9;
    position: relative;
 
    .video{
       height: 3.6875rem;
       width: 5.3125rem;
       margin-top: calc(-2.1563rem - -0.75rem);
       margin-left: -2.6563rem;
       position: absolute;
       top: 50%;
       left: 50%;
    }

  .header-line {
    width: 0.9375rem;
    height: 0.0375rem;
    background: linear-gradient(90deg, #ff1702, rgba(255, 23, 2, 0.14));
    border-radius: 0.0187rem;
    margin: 0 auto;
    margin-top: 0.125rem;

  }
  .bottom {
    background-color: #fff;
    height: 2.8125rem;
  }
  header {
    font-size: 0.1875rem;
    font-family: Arial;
    font-weight: bold;
    color: #111111;
    text-align: center;
  }
  .top {
    height: 1.1719rem;
    background: #f5f6f9;
  }
}
@media (max-width:750px) {
    img{
        width: 10rem;
    }
    header{
font-size: .6667rem !important;
font-family: Arial;
font-weight: bold;
color: #111111;
    }
    .header-line{
        width: 2.7778rem !important;
height: .1111rem !important;
background: linear-gradient(90deg, #FF1702, rgba(255,23,2,0.14));
border-radius: .0556rem;
    }
    
}
</style>
