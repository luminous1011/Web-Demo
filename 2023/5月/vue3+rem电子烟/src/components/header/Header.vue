<template>
  <div class="top-header" v-if="topHeaderVisble" style="  width: 10rem;
    position: fixed;
    top: 0;
    z-index: 1001;
  height: 0.1875rem;
  background: #111111;
  font-size: 0.075rem;
  font-family: Arial;
  font-weight: 400;
  color: #ffffff;
  line-height: 0.1875rem;
  text-align: center;">
    WARNING: This product contains nicotine. Nicotine is an addictive chemical.
    <CloseOutlined @click="hide" style="position: absolute;top: 12px;
    cursor: pointer;
    right: 10px;" />
  </div>
  <header id="header" class="header animated pc-show"
    :class="[safe ? '' : 'safe', router.options.history.location === '/register' || router.options.history.location === '/login' ? '' : '',!topHeaderVisble?'s':'']">
    <div class="front">
      <div class="logo">
        <img src="@/assets/logo.png" alt="" />
      </div>
      <div class="menu">
        <div class="menu-item">
          <a-dropdown placement="bottom">
            <span class="ant-dropdown-link" @click.prevent>
              Shop
              <img src="@/assets/down.png" alt="" />
            </span>
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <router-link to="/faq"> By Brands</router-link>
                </a-menu-item>
                <a-menu-item>
                  <router-link to="/faq">By Category</router-link>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
        <div class="menu-item">
          <a-dropdown placement="bottom">
            <span class="ant-dropdown-link" @click.prevent>
              Service
              <img src="@/assets/down.png" alt="" />
            </span>
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <router-link to="/faq">Online Procurement</router-link>
                </a-menu-item>
                <a-menu-item>
                  <router-link to="/faq">Online Payment</router-link>
                </a-menu-item>
                <a-menu-item>
                  <router-link to="/faq">
                    Supply Chain Building</router-link>
                </a-menu-item>
                <a-menu-item>
                  <router-link to="/faq">Value-Added Service</router-link>
                </a-menu-item>
                <a-menu-item>
                  <router-link to="/faq">Service Fee</router-link>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
        <div class="menu-item">
          <a-dropdown placement="bottom">
            <span class="ant-dropdown-link" @click.prevent>
              Learn
              <img src="@/assets/down.png" alt="" />
            </span>
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <router-link to="/faq">FAQ Center</router-link>
                </a-menu-item>
                <a-menu-item>
                  <router-link to="/privacy">Privacy Policy</router-link>
                </a-menu-item>
                <a-menu-item>
                  <router-link to="/terms">Terms & Conditions</router-link>
                </a-menu-item>
                <a-menu-item>
                  <router-link to="/rules">Procurement Agreement</router-link>

                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
      </div>
    </div>
    <div class="end">
      <div class="input" >
        <a-input placeholder="Search">
          <template #addonBefore>
            <SearchOutlined class="icon" />
          </template>
        </a-input>
      </div>
      <div class="h5-search">
        <SearchOutlined style="font-size: 0.125rem" />
      </div>
      <div class="icons" >
        <div><img src="@/assets/people.png" style="cursor: pointer;" @click="showLogin" alt="" /></div>
        <div><img src="@/assets/chat.png" alt="" /></div>
        <div><img src="@/assets/shop.png" alt="" /></div>
      </div>
    </div>
  </header>
  <div class="h5-show">
    <div class="wrapper">
      <div><img src="@/assets/logo.png" alt="" /></div>
      <div>
        <SearchOutlined style="font-size: 0.5556rem" />
        <img src="@/assets/home/h5-menu.png" @click="show" alt="" />
      </div>
    </div>
  </div>
  <a-modal  v-model:visible="loginVisible" class="form" width="440px" bodyStyle="border-radius:20px" :footer="null">
    <section>
      <h1 style="font-size: 24px;margin-bottom: 20px;">Login</h1>
      <a-input placeholder="Username/Email" style="width: 320px;margin-bottom: 20px;"></a-input>
      <a-input placeholder="Password" style="width: 320px;margin-bottom: 20px;"></a-input>
      <div style="width: 320px;display: flex;justify-content: space-between;font-size: 14px;">
        <a-checkbox>Remember me</a-checkbox>
        <span>Forgot password?</span>
      </div>
      <div class="h5-btn op-7">Sign in</div>
      <div class="create"> Create an account</div>
    </section>
  </a-modal>
  <a-drawer
    placement="right"
    :closable="false"
    width="270px"
    v-model:visible="visible"
  >
    <div style="padding:24px; width:calc(100% + 48px);height: calc(100% + 48px) ;background: #111;margin: -24px;">
      <a-collapse>
        <a-collapse-panel key="0" header="Shop">
                  <div style="color:#999;margin-bottom:10px"> By Brands</div>
                  <div style="color:#999;margin-bottom:10px">By Category</div>
                </a-collapse-panel>
              <div style="height:1px;background:#333;margin-top:10px"></div>

                <a-collapse-panel key="1" header="Service">
                  <div style="color:#999;margin-bottom:10px">Online Procurement</div>
                  <div style="color:#999;margin-bottom:10px">Online Payment</div>
                  <div style="color:#999;margin-bottom:10px">Supply Chain Building</div>
                  <div style="color:#999;margin-bottom:10px">Value-Added Service</div>
                  <div style="color:#999;margin-bottom:10px">Service Free</div>
                </a-collapse-panel>
              <div style="height:1px;background:#333;margin-top:10px"></div>
                <a-collapse-panel key="2" header="Learn">
                  <div style="color:#999;margin-bottom:10px">FAQ Center</div>
                  <div style="color:#999;margin-bottom:10px">Privacy Policy</div>
                  <div style="color:#999;margin-bottom:10px">Terms & Conditions</div>
                  <div style="color:#999;margin-bottom:10px">Procurement Agreemen</div>
                </a-collapse-panel>
            </a-collapse>
            <div style="height:1px;background:#333;margin-top:10px"></div>
            <div style="margin-top:10px">
              <img style="width:50px" src="@/assets/s1.png" />
              <img style="width:50px" src="@/assets/s2.png" />
              <img style="width:50px" src="@/assets/s3.png" />
            </div>
    </div>

  </a-drawer>
</template>
<script setup lang="ts">
import useScrollEvent from "./actions/useScrollEvent";
import { SearchOutlined,CloseOutlined} from "@ant-design/icons-vue";
import { watch, ref } from "vue";
import { useRouter } from 'vue-router'
const router = useRouter()

const { scrollSwitch, safe } = useScrollEvent();
const loginVisible = ref(false)
const visible = ref(false)
const topHeaderVisble = ref(true)
function showLogin() {
  loginVisible.value = true
}
function hide(){
  topHeaderVisble.value = false

}
function show(){
  visible.value=!visible.value
}
</script>

<style lang="less" scoped>

.form {
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // height:549px;

    // height: 3.0rem;
  }

  span {
    text-decoration: underline;
  }

  /deep/ .ant-input {
    background: rgba(0, 0, 0, .03);


  }

  .create {
    font-size: 16px;
    font-weight: bold;
    margin-top: 15px;
    color: #f51f00;
  }

  .h5-btn {
    margin-top: 30px;
    font-weight: bold;
    color: #fff;
    background: #ff0600;
    width: 320px;
    height: 50px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    font-size: 16px;
    padding-left: 120px;

    // justify-content: center;
    img {
      width: 20px;
      margin-left: 80px;
    }
  }

  /deep/ .ant-input:hover {
    background: #fff;
  }

  .op-7 {
    opacity: .7;
    pointer-events: all;
  }

  /deep/ .ant-checkbox-checked .ant-checkbox-inner {
    background: #f51f00;
    border-color: #f51f00;
  }
}

.h5-show {
  display: none;
}

.header.animated {
  animation-duration: 0.5s;
  animation-fill-mode: both;
}

.header.animated.slideDown {
  animation-name: slideDown;
}

.header.animated.slideUp {
  animation-name: slideUp;
}

@keyframes slideDown {
  0% {
    transform: translateY(-70px);
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes slideUp {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-70px);
  }
}

header {
  height: calc(0.4688rem);
  position: fixed;
  z-index: 1000;
  top: 0.1875rem;
  &.s{
    top: 0;
  }

  //   box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  /deep/ .ant-input {
    border-radius: 0 0.125rem 0.125rem 0;
    background: #fff4f3;
    height: 0.25rem;

    border-left: 0;

    &:focus {
      outline: none;
      box-shadow: none;
      border-color: #d9d9d9;
    }
  }

  left: 0;
  right: 0;
  padding: 0.1875rem 0.4375rem;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0);
  justify-content: space-between;

  .end {
    display: flex;
    align-items: center;
  }

  .icons img {
    height: 0.125rem;
    margin-left: 0.25rem;
  }

  .icons {
    display: flex;
  }

  .menu {
    display: flex;
  }

  .front {
    display: flex;
    align-items: center;
  }

  .logo img {
    width: 1.2813rem;
    height: 0.25rem;
  }

  .menu-item {
    font-size: 0.1rem;
    font-family: Arial !important;
    font-weight: 400;
    color: #333333;
    margin-left: 0.2813rem;

    img {
      width: 0.0531rem;
      height: 0.0313rem;
      margin-left: 0.0313rem;
    }
  }
}

.ant-dropdown-menu {
  box-shadow: 0px 0.0313rem 0.25rem 0px rgba(51, 58, 78, 0.4) !important;
  border-radius: 0.0469rem !important;
  // padding: .0781rem;
}

.ant-dropdown-link {
  cursor: pointer;
  display: block;
  padding: 0.0625rem 0.0938rem;
}

/deep/ .ant-dropdown-menu-item {
  padding: 10px 15px !important;
}

/deep/ .ant-input-group-addon {
  background: #fff4f3;
  border-radius: 0.125rem 0 0 0.125rem;
  height: 0.25rem;
}

/deep/ .ant-input-group {
  width: 1.3531rem;
}

/deep/ .icon,
.ant-input-group-addon {
  height: 0.1187rem !important;
  width: 0.1187rem !important;
  font-size: 0.1187rem;
}



.safe {
  background-color: #fff;
}

.h5-search {
  display: none;
}

@media (max-width: 750px) {
  .top-header {
    display: none;
  }

  .pc-show {
    display: none;
  }

  .h5-show {
    display: block;
    position: fixed;
    left: 0;
    right: 0;
    z-index: 1000;
  }

  .wrapper {
    width: 9.0741rem;
    margin: 0.463rem auto 0;
    height: 1.2963rem;
    background: #ffffff;
    box-shadow: 0px 0px 0.9259rem 0px rgba(0, 0, 0, 0.15);
    border-radius: 0.6481rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.7407rem 0 0.5556rem;

    &>div:nth-child(1) {
      display: flex;
      align-items: center;

      img {
        width: 2.7778rem;
        height: 0.5556rem;
      }
    }

    &>div:nth-child(2) {
      display: flex;
      align-items: center;

      img {
        margin-left: 0.463rem;
        width: 0.463rem;
        height: 0.463rem;
      }
    }
  }

}

@media (max-width: 1000px) {
  .input {
    display: none;
  }

  .h5-search {
    display: block;
  }

}

.display-none,
.h5-show {

  // display: none !important;
}

 .ant-drawer-right.ant-drawer-open .ant-drawer-content-wrapper{
  width: 270px !important;
 } 
 .ant-collapse-content,
.ant-collapse,
/deep/ .ant-collapse-content-box {
    background: transparent;
    //   color: #fff !important;
    border: 0 !important;

}

/deep/ .ant-collapse>.ant-collapse-item>.ant-collapse-header {
    padding: 0;
    //   color: #fff !important;
    border: 0 !important;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    padding-top: 20px;

}

/deep/ .anticon-right.ant-collapse-arrow {
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

.bt {
    width: calc(10rem - .7407rem - .7407rem);
    margin: 0 auto;
    margin-top: .9259rem;
    padding-bottom: 1.6667rem;
}

/deep/ .ant-collapse>.ant-collapse-item,
/deep/ .ant-collapse-content {

    border: 0 !important;
}

/deep/ .ant-collapse-header {
    font-size: .4259rem;
    font-family: Arial;
    font-weight: bold;
    // color: #FFFFFF;

}

/deep/ .ant-collapse-content-box {
    padding-left: 0;
    background-color: #111;
    color: #fff;
}

/deep/ .ant-collapse {
    // padding-top: .0938rem;
    // margin-top: .2604rem;
    border-top: 1px solid #333 !important;
    margin-top: 40px;
}

/deep/ .ant-checkbox-wrapper span {
    padding-right: 0;
}

/deep/ .ant-checkbox-checked .ant-checkbox-inner {
    background: #f51f00;
    border-color: #f51f00;
}

.ant-dropdown-link,.right{
    font-size: .099rem;
}
</style>
