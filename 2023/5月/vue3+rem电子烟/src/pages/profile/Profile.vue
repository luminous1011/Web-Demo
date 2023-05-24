<template >
  <div style="display: flex; justify-content: center" class="pc-show">
    <section class="left">
      <img src="@/assets/profile/logo-pic.png" alt="" />
      <div class="name">Healthcabin</div>
      <div class="info">Hands Hong Kong Corporation Limited</div>
      <div class="country">
        <img src="@/assets/profile/CN.png" alt="" />
        China
      </div>
      <div class="line"></div>
      <div class="label">Category</div>
      <div class="tag-list">
        <div class="tag">Tank</div>
        <div class="tag">Mods</div>
        <div class="tag">E-Liquids</div>
        <div class="tag">Pods</div>
        <div class="tag">Kits</div>
        <div class="tag">Accessories</div>
      </div>
      <div class="line"></div>
      <div class="label">Introduction</div>
      <div class="desc">
        We have been focusing on the field of electronic cigarette products,and
        now we are one of the largest/electronic cigarette operators in the
        world.
      </div>
      <div class="line"></div>
      <div class="label">Contact</div>
      <div class="i-">
        <img src="@/assets/profile/phone.png" alt="" />
        13892892323
      </div>
      <div class="i-">
        <img src="@/assets/profile/message.png" alt="" />
        hansi2402@healthcabin.net
      </div>
      <div class="i-">
        <img src="@/assets/profile/loc.png" alt="" />
        宝安区新安街道海旺社区N23区熙龙湾商
      </div>
      <div class="contact-btn">Contact Supplier</div>
    </section>
    <section class="right">
      <header>Store Top Ranking</header>
      <div class="wrapper">
        <div class="item">
          <div class="pic"><img src="@/assets/profile/s1.png" alt="" /></div>
          <div class="title">Geekvape Aegis 1FC Pod…</div>
          <div class="star">
            <img src="@/assets/profile/star-fill.png" alt="" />
            <img src="@/assets/profile/star-fill.png" alt="" />
            <img src="@/assets/profile/star-fill.png" alt="" />
            <img src="@/assets/profile/star-fill.png" alt="" />
            <img src="@/assets/profile/star-normal.png" alt="" />
            3 Reviews
          </div>
        </div>
        <div class="item">
          <div class="pic"><img src="@/assets/profile/s2.png" alt="" /></div>
          <div class="title">Geekvape Aegis 1FC Pod…</div>
          <div class="star">
            <img src="@/assets/profile/star-fill.png" alt="" />
            <img src="@/assets/profile/star-fill.png" alt="" />
            <img src="@/assets/profile/star-fill.png" alt="" />
            <img src="@/assets/profile/star-fill.png" alt="" />
            <img src="@/assets/profile/star-normal.png" alt="" />
            3 Reviews
          </div>
        </div>
        <div class="item">
          <div class="pic"><img src="@/assets/profile/s3.png" alt="" /></div>
          <div class="title">Geekvape Aegis 1FC Pod…</div>
          <div class="star">
            <img src="@/assets/profile/star-fill.png" alt="" />
            <img src="@/assets/profile/star-fill.png" alt="" />
            <img src="@/assets/profile/star-fill.png" alt="" />
            <img src="@/assets/profile/star-fill.png" alt="" />
            <img src="@/assets/profile/star-normal.png" alt="" />
            3 Reviews
          </div>
        </div>
        <div class="item">
          <div class="pic"><img src="@/assets/profile/s4.png" alt="" /></div>
          <div class="title">Geekvape Aegis 1FC Pod…</div>
          <div class="star">
            <img src="@/assets/profile/star-fill.png" alt="" />
            <img src="@/assets/profile/star-fill.png" alt="" />
            <img src="@/assets/profile/star-fill.png" alt="" />
            <img src="@/assets/profile/star-fill.png" alt="" />
            <img src="@/assets/profile/star-normal.png" alt="" />
            3 Reviews
          </div>
        </div>
      </div>
      <header style="margin: 0.3646rem 0 0.1823rem">
        All For Your Choices
      </header>
      <a-menu mode="horizontal">
        <a-menu-item key="mail"> All </a-menu-item>
        <a-menu-item key="app"> Mods </a-menu-item>
        <a-menu-item key="1"> Pods </a-menu-item>
        <a-menu-item key="2"> Kits</a-menu-item>
        <a-menu-item key="3"> E-Cigarette</a-menu-item>
        <a-menu-item key="4"> Accessories</a-menu-item>
        <a-menu-item key="5"> E-Liquids </a-menu-item>
        <a-menu-item key="6"> Tanks</a-menu-item>
      </a-menu>
      <div
        class="wrapper"
        style="margin-top: 0.1875rem"
        v-for="item in 4"
        :key="item"
      >
        <div class="item">
          <div class="pic"><img src="@/assets/profile/s1.png" alt="" /></div>
          <div class="title">Geekvape Aegis 1FC Pod…</div>
          <div class="star">
            <img src="@/assets/profile/star-fill.png" alt="" />
            <img src="@/assets/profile/star-fill.png" alt="" />
            <img src="@/assets/profile/star-fill.png" alt="" />
            <img src="@/assets/profile/star-fill.png" alt="" />
            <img src="@/assets/profile/star-normal.png" alt="" />
            3 Reviews
          </div>
        </div>
        <div class="item">
          <div class="pic"><img src="@/assets/profile/s2.png" alt="" /></div>
          <div class="title">Geekvape Aegis 1FC Pod…</div>
          <div class="star">
            <img src="@/assets/profile/star-fill.png" alt="" />
            <img src="@/assets/profile/star-fill.png" alt="" />
            <img src="@/assets/profile/star-fill.png" alt="" />
            <img src="@/assets/profile/star-fill.png" alt="" />
            <img src="@/assets/profile/star-normal.png" alt="" />
            3 Reviews
          </div>
        </div>
        <div class="item">
          <div class="pic"><img src="@/assets/profile/s3.png" alt="" /></div>
          <div class="title">Geekvape Aegis 1FC Pod…</div>
          <div class="star">
            <img src="@/assets/profile/star-fill.png" alt="" />
            <img src="@/assets/profile/star-fill.png" alt="" />
            <img src="@/assets/profile/star-fill.png" alt="" />
            <img src="@/assets/profile/star-fill.png" alt="" />
            <img src="@/assets/profile/star-normal.png" alt="" />
            3 Reviews
          </div>
        </div>
        <div class="item">
          <div class="pic"><img src="@/assets/profile/s4.png" alt="" /></div>
          <div class="title">Geekvape Aegis 1FC Pod…</div>
          <div class="star">
            <img src="@/assets/profile/star-fill.png" alt="" />
            <img src="@/assets/profile/star-fill.png" alt="" />
            <img src="@/assets/profile/star-fill.png" alt="" />
            <img src="@/assets/profile/star-fill.png" alt="" />
            <img src="@/assets/profile/star-normal.png" alt="" />
            3 Reviews
          </div>
        </div>
      </div>
      <div class="pagation">
        <a-pagination size="small" :showSizeChanger="false" :total="210" />
      </div>
    </section>
  </div>
  <section class="h5-show">
    <div class="info-wrapper">
      <img src="@/assets/profile/logo-pic.png" alt="" />
      <div class="name">Healthcabin</div>
      <div class="info">Hands Hong Kong Corporation Limited</div>
      <div class="country">
        <img src="@/assets/profile/CN.png" alt="" />
        China
      </div>
      <div class="line"></div>
      <div class="label">Category</div>
      <div class="tag-list">
        <div class="tag">Tank</div>
        <div class="tag">Mods</div>
        <div class="tag">E-Liquids</div>
        <div class="tag">Pods</div>
        <div class="tag">Kits</div>
        <div class="tag">Accessories</div>
      </div>
      <div class="line"></div>
      <div class="label">Introduction</div>
      <div class="desc">
        We have been focusing on the field of electronic cigarette products,and
        now we are one of the largest/electronic cigarette operators in the
        world.
      </div>
      <div class="line"></div>
      <div class="label">Contact</div>
      <div class="i-">
        <img src="@/assets/profile/phone.png" alt="" />
        13892892323
      </div>
      <div class="i-">
        <img src="@/assets/profile/message.png" alt="" />
        hansi2402@healthcabin.net
      </div>
      <div class="i-">
        <img src="@/assets/profile/loc.png" alt="" />
        宝安区新安街道海旺社区N23区熙龙湾商
      </div>
      <div class="contact-btn">Contact Supplier</div>
    </div>
    <header class="header">Store Top Ranking</header>
    <div class="list" style="padding: 0">
      <div class="item">
        <div class="pic"><img src="@/assets/shopping/s1.png" alt="" /></div>
        <div class="tilte">Geekvape Aegis 1FC Pod System</div>
        <div class="dec">Clearomizers</div>
        <div class="bottom">
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s1.png" alt="" />
          <span>3 Reviews </span>
          <img src="@/assets/shopping/heart-s1.png" class="heart" alt="" />
        </div>
      </div>
      <div class="item">
        <div class="pic"><img src="@/assets/shopping/s2.png" alt="" /></div>
        <div class="tilte">Geekvape Aegis 1FC Pod System</div>
        <div class="dec">Clearomizers</div>
        <div class="bottom">
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s1.png" alt="" />
          <span>3 Reviews </span>
          <img src="@/assets/shopping/heart-s1.png" class="heart" alt="" />
        </div>
      </div>
      <div class="item">
        <div class="pic"><img src="@/assets/shopping/s3.png" alt="" /></div>
        <div class="tilte">Geekvape Aegis 1FC Pod System</div>
        <div class="dec">Clearomizers</div>
        <div class="bottom">
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s1.png" alt="" />
          <span>3 Reviews </span>
          <img src="@/assets/shopping/heart-s1.png" class="heart" alt="" />
        </div>
      </div>
      <div class="item">
        <div class="pic"><img src="@/assets/shopping/s4.png" alt="" /></div>
        <div class="tilte">Geekvape Aegis 1FC Pod System</div>
        <div class="dec">Clearomizers</div>
        <div class="bottom">
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s1.png" alt="" />
          <span>3 Reviews </span>
          <img src="@/assets/shopping/heart-s1.png" class="heart" alt="" />
        </div>
      </div>
    </div>
    <header class="header">Store Top Ranking</header>
    <header>
      <div>All</div>
      <div>Tanks</div>
      <div>Mods</div>
      <div>E-Liquids</div>
      <div>Pods</div>
      <div>Kits</div>
      <div>Accessories</div>
    </header>
    <div class="list">
      <div class="item">
        <div class="pic"><img src="@/assets/shopping/s1.png" alt="" /></div>
        <div class="tilte">Geekvape Aegis 1FC Pod System</div>
        <div class="dec">Clearomizers</div>
        <div class="bottom">
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s1.png" alt="" />
          <span>3 Reviews </span>
          <img src="@/assets/shopping/heart-s1.png" class="heart" alt="" />
        </div>
      </div>
      <div class="item">
        <div class="pic"><img src="@/assets/shopping/s2.png" alt="" /></div>
        <div class="tilte">Geekvape Aegis 1FC Pod System</div>
        <div class="dec">Clearomizers</div>
        <div class="bottom">
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s1.png" alt="" />
          <span>3 Reviews </span>
          <img src="@/assets/shopping/heart-s1.png" class="heart" alt="" />
        </div>
      </div>
      <div class="item">
        <div class="pic"><img src="@/assets/shopping/s3.png" alt="" /></div>
        <div class="tilte">Geekvape Aegis 1FC Pod System</div>
        <div class="dec">Clearomizers</div>
        <div class="bottom">
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s1.png" alt="" />
          <span>3 Reviews </span>
          <img src="@/assets/shopping/heart-s1.png" class="heart" alt="" />
        </div>
      </div>
      <div class="item">
        <div class="pic"><img src="@/assets/shopping/s4.png" alt="" /></div>
        <div class="tilte">Geekvape Aegis 1FC Pod System</div>
        <div class="dec">Clearomizers</div>
        <div class="bottom">
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s1.png" alt="" />
          <span>3 Reviews </span>
          <img src="@/assets/shopping/heart-s1.png" class="heart" alt="" />
        </div>
      </div>
      <div class="item">
        <div class="pic"><img src="@/assets/shopping/s5.png" alt="" /></div>
        <div class="tilte">Geekvape Aegis 1FC Pod System</div>
        <div class="dec">Clearomizers</div>
        <div class="bottom">
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s1.png" alt="" />
          <span>3 Reviews </span>
          <img src="@/assets/shopping/heart-s1.png" class="heart" alt="" />
        </div>
      </div>
      <div class="item">
        <div class="pic"><img src="@/assets/shopping/s6.png" alt="" /></div>
        <div class="tilte">Geekvape Aegis 1FC Pod System</div>
        <div class="dec">Clearomizers</div>
        <div class="bottom">
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s1.png" alt="" />
          <span>3 Reviews </span>
          <img src="@/assets/shopping/heart-s1.png" class="heart" alt="" />
        </div>
      </div>
      <div class="item">
        <div class="pic"><img src="@/assets/shopping/s7.png" alt="" /></div>
        <div class="tilte">Geekvape Aegis 1FC Pod System</div>
        <div class="dec">Clearomizers</div>
        <div class="bottom">
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s1.png" alt="" />
          <span>3 Reviews </span>
          <img src="@/assets/shopping/heart-s1.png" class="heart" alt="" />
        </div>
      </div>
      <div class="item">
        <div class="pic"><img src="@/assets/shopping/s8.png" alt="" /></div>
        <div class="tilte">Geekvape Aegis 1FC Pod System</div>
        <div class="dec">Clearomizers</div>
        <div class="bottom">
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s1.png" alt="" />
          <span>3 Reviews </span>
          <img src="@/assets/shopping/heart-s1.png" class="heart" alt="" />
        </div>
      </div>
      <div class="item">
        <div class="pic"><img src="@/assets/shopping/s9.png" alt="" /></div>
        <div class="tilte">Geekvape Aegis 1FC Pod System</div>
        <div class="dec">Clearomizers</div>
        <div class="bottom">
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s1.png" alt="" />
          <span>3 Reviews </span>
          <img src="@/assets/shopping/heart-s1.png" class="heart" alt="" />
        </div>
      </div>
      <div class="item">
        <div class="pic"><img src="@/assets/shopping/s10.png" alt="" /></div>
        <div class="tilte">Geekvape Aegis 1FC Pod System</div>
        <div class="dec">Clearomizers</div>
        <div class="bottom">
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s2.png" alt="" />
          <img src="@/assets/shopping/star-s1.png" alt="" />
          <span>3 Reviews </span>
          <img src="@/assets/shopping/heart-s1.png" class="heart" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="less" scoped>
.h5-show {
  .info-wrapper {
    padding: 0 0.4635rem;
    .contact-btn{
        width: 9.0729rem;
height: 1.1094rem;
background: rgba(246,80,50,0.1);
border-radius: .5573rem;
font-size: .3333rem;
font-family: Arial;
display: flex;
align-items: center;
justify-content: center;
font-weight: 400;
color: #F65032;
margin: .7396rem 0 1.0417rem;
    }
    .tag{
        padding: 0 .3542rem;
font-size: .3333rem;
font-family: Arial;
font-weight: 400;
color: #9FA3AA;
height: .6667rem;
background: #F5F6F9;
border-radius: .3333rem;
display: inline-block;
line-height:  .6667rem;
&+.tag{
    margin:0 0  .1875rem .1875rem;
}
    }
    & > img {
      width: 100%;
    }
    .name {
      font-size: 0.6667rem;
      font-family: Arial;
      font-weight: bold;
      color: #000000;
    }
    .info{
        font-size: .3333rem;
font-family: Arial;
        font-size: .3333rem;
font-weight: 400;
color: #9FA3AA;
    }
    .country,.desc,.i-{
        font-size: .3333rem;
color: #9FA3AA;
img{
    width: .2708rem;
}
    }
    .label{
        font-size: .3333rem;
font-family: Arial;
font-weight: bold;
color: #000000;
    }
    .line{
        width: 9.0729rem;
height: 2px;
background: #DDDDDD;
margin: .7396rem 0;
    }
  }
  .header {
    font-size: 0.4427rem;
    font-family: Arial;
    font-weight: bold;
    color: #000000;
    border: 0 !important;
  }
  .list {
    display: flex;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 100px;
    .item {
      &:nth-child(2n) {
        margin-left: 0.1875rem;
      }
      margin-bottom: 0.1875rem;

      .tilte {
        font-size: 0.3333rem;
        font-family: Arial;
        font-weight: bold;
        padding-left: 15px;
        color: #333333;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .dec {
        font-size: 0.2604rem;
        font-family: Arial;
        font-weight: 400;
        padding-left: 15px;
        color: #9fa3aa;
      }

      .bottom {
        height: 20px;
        display: flex;
        align-items: center;
        padding-left: 15px;

        img {
          width: 0.276rem;
          height: 0.276rem;
        }

        span {
          font-size: 0.2604rem;
          font-family: Arial;
          font-weight: 400;
          color: #9fa3aa;
          margin-left: 10px;
        }

        .heart {
          width: 0.4323rem;
          height: 0.3646rem;
          margin-left: 20px;
        }
      }

      width: 4.9063rem;
      height: 6.7708rem;
      background: #f5f6f9;

      .pic img {
        width: 3.6094rem;
        height: 3.6094rem;
      }

      .pic {
        padding: 0.474rem 0.7135rem 0.5469rem 0.5833rem;
      }
    }
  }

  padding-top: 2.0313rem;

  .sec-header {
    display: flex;
    font-size: 0.3333rem;
    font-family: Arial;
    font-weight: 400;
    color: #333333;
    height: 1.5104rem;
    align-items: center;
    padding-left: 0.4688rem;

    img {
      width: 0.2083rem;
      height: 0.1198rem;
    }
  }

  header {
    height: 1.6094rem;
    padding: 0 0.4688rem;
    display: flex;
    align-items: center;
    overflow: scroll;
    white-space: nowrap;
    border-bottom: solid #e5e5e5 1px;

    &::-webkit-scrollbar {
      display: none;
    }

    div {
      margin-left: 30px;
      font-size: 0.3333rem;
      font-family: Arial;
      font-weight: 400;
      color: #333333;
      line-height: 72px;

      &:first-child {
        margin: 0;
      }
    }
  }
}
/deep/ .ant-pagination-item a {
  color: rgba(159, 163, 170, 1);
  font-weight: 400;
}
/deep/ .ant-pagination-item-active a {
  color: #111;
  border: 0 !important;
}
/deep/ .ant-pagination-item-active {
  border: 0 !important;
}
/deep/ .ant-pagination-next {
  margin-left: 0.25rem !important;
}
/deep/ .ant-pagination-prev {
  margin-right: 0.25rem !important;
}
.pagation {
  padding: 0.3646rem 0 0.5625rem;
  text-align: center;
}
/deep/ .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item {
  font-size: 0.0885rem;
  font-family: Arial;
  font-weight: 400;
  color: #9fa3aa;
}
/deep/
  .ant-menu-horizontal:not(.ant-menu-dark)
  > .ant-menu-item-selected::after,
/deep/ .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover::after,
.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu:hover::after,
.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-active::after,
.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-active::after,
.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-open::after,
.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-open::after,
.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected::after,
.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-selected::after {
  border-color: #ff4f3c;
}
.right {
  font-size: 0.151rem;
  font-family: Arial;
  font-weight: bold;
  color: #000000;
  //   display: inline-block;
  margin-left: 0.25rem;
  margin-top: 0.9896rem;
  .wrapper {
    display: flex;
    margin-top: 0.0938rem;
    .item {
      width: 1.25rem;
      & + .item {
        margin-left: 0.0833rem;
      }
      .pic img {
        width: 1.25rem;
      }
      .title {
        margin-top: 0.1042rem;
        font-size: 0.0885rem;
        font-family: Arial;
        font-weight: bold;
        color: #333333;
      }
      .star {
        font-size: 0.0729rem;
        font-family: Arial;
        font-weight: 400;
        color: #9fa3aa;
        margin-top: 0.0625rem;
        img {
          width: 0.0833rem;
          & + img {
            margin-left: 0.0208rem;
          }
          &:last-child {
            margin-right: 0.0573rem;
          }
        }
      }
    }
  }
}
.left {
  height: 6.25rem;
  margin-top: 0.6354rem;
  width: 1.9792rem;
  padding-right: 0.2448rem;
  border-right: solid 1px #ddd;
  //   display: inline-block;
  .i- {
    img {
      width: 0.0729rem;
      margin-right: 0.0417rem;
    }
    font-size: 0.0885rem;
    font-family: HarmonyOS_Sans_SC;
    font-weight: 400;
    color: #9fa3aa;
    margin-bottom: 0.1042rem;
  }
  .contact-btn {
    width: 1.7188rem;
    margin-top: 0.1875rem;
    height: 0.25rem;
    background: rgba(255, 79, 60, 0.1);
    border-radius: 0.125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.0885rem;
    font-family: Arial;
    font-weight: 400;
    color: #ff4f3c;
  }
  .desc {
    width: 1.5833rem;
    font-size: 0.0885rem;
    font-family: Arial;
    font-weight: 400;
    color: #9fa3aa;
  }
  .tag-list {
    display: flex;
    flex-wrap: wrap;
  }
  .tag {
    height: 0.1667rem;
    line-height: 0.1667rem;
    background: #f5f6f9;
    border-radius: 0.0833rem;
    padding: 0 0.0833rem;
    font-size: 0.0729rem;
    font-family: Arial;
    font-weight: 400;
    color: #9fa3aa;
    display: inline-block;
    margin-bottom: 0.0521rem;
    & + .tag {
      margin-left: 0.0521rem;
    }
  }
  .label {
    font-size: 0.0885rem;
    font-family: Arial;
    font-weight: bold;
    color: #000000;
    margin-bottom: 0.0938rem;
  }
  .line {
    width: 1.7188rem;
    height: 1px;
    background: #dddddd;
    margin: 0.1563rem auto;
  }
  .country {
    font-size: 0.0885rem;
    font-family: Arial;
    font-weight: 400;
    color: #9fa3aa;
    margin: 0.0938rem 0 0;
    img {
      width: 0.1302rem;
    }
  }
  & > img {
    width: 1.7396rem;
  }
  .name {
    font-size: 0.151rem;
    font-family: Arial;
    font-weight: bold;
    color: #000000;
    margin: 0.0625rem 0;
  }
  .info {
    font-size: 0.0885rem;
    font-family: Arial;
    font-weight: 400;
    color: #9fa3aa;
  }
}
</style>