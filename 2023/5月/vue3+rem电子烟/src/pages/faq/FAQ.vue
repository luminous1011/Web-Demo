<template>
    <section>
        <div class="wrapper">
            <h1>FAQ</h1>

            <div class="item" :class="[idx === 1 ? 'active' : '']">
                <div class="header" @click="handleIdxChange(1)">

                    <div class="title">1. I’m a company registered in China, can I purchase vaping pro</div>
                    <div><img src="@/assets/faq/ca.png" v-if="idx === 1" alt=""><img src="@/assets/faq/ad.png" v-else
                            alt="">
                    </div>
                </div>
                <div class="detail">
                    Payment for goods: Currently, we support bank transfer by partnering with reputable payment service
                    providers like SunRate and Xtransfer who can protect your payment. We also provide e-Contracting to
                    protect the whole online transaction.
                    <br />
                    <br />
                    Payment for Freight: To improve efficiency, we currently only support an auto-pay option. So before you
                    top up, please make sure you fully understand how we calculate the freight in
                </div>
            </div>
            <div class="item" :class="[idx === 2 ? 'active' : '']">
                <div class="header" @click="handleIdxChange(2)">

                    <div class="title">2. Is it safe to purchase vaping products on SinoB2B?</div>
                    <div><img src="@/assets/faq/ca.png" v-if="idx === 2" alt=""><img src="@/assets/faq/ad.png" v-else
                            alt="">
                    </div>
                </div>
                <div class="detail">
                    Payment for goods: Currently, we support bank transfer by partnering with reputable payment service
                    providers like SunRate and Xtransfer who can protect your payment. We also provide e-Contracting to
                    protect the whole online transaction.
                    <br />
                    <br />
                    Payment for Freight: To improve efficiency, we currently only support an auto-pay option. So before you
                    top up, please make sure you fully understand how we calculate the freight in
                </div>
            </div>
            <div class="item" :class="[idx === 3 ? 'active' : '']">
                <div class="header" @click="handleIdxChange(3)">
                    <div class="title">3. How to make payments on SinoB2B as a buyer?</div>
                    <div ><img src="@/assets/faq/ca.png" v-if="idx === 3" alt=""><img src="@/assets/faq/ad.png" v-else
                            alt="">
                    </div>
                </div>
                <div class="detail">
                    Payment for goods: Currently, we support bank transfer by partnering with reputable payment service
                    providers like SunRate and Xtransfer who can protect your payment. We also provide e-Contracting to
                    protect the whole online transaction.
                    <br />
                    <br />
                    Payment for Freight: To improve efficiency, we currently only support an auto-pay option. So before you
                    top up, please make sure you fully understand how we calculate the freight in
                </div>

            </div>
            <div class="item" :class="[idx === 4 ? 'active' : '']">
                <div class="header" @click="handleIdxChange(4)">
                    <div class="title">4. Why don’t you provide credit card or PayPal payment options?</div>
                    <div><img src="@/assets/faq/ca.png" v-if="idx === 4" alt=""><img src="@/assets/faq/ad.png" v-else
                            alt="">
                    </div>
                </div>
                <div class="detail">
                    Payment for goods: Currently, we support bank transfer by partnering with reputable payment service
                    providers like SunRate and Xtransfer who can protect your payment. We also provide e-Contracting to
                    protect the whole online transaction.
                    <br />
                    <br />
                    Payment for Freight: To improve efficiency, we currently only support an auto-pay option. So before you
                    top up, please make sure you fully understand how we calculate the freight in
                </div>
            </div>
            <div class="item" :class="[idx === 5 ? 'active' : '']">
                <div class="header" @click="handleIdxChange(5)">
                    <div class="title">5. Do you provide warehousing services?</div>
                    <div><img src="@/assets/faq/ca.png" v-if="idx === 5" alt=""><img src="@/assets/faq/ad.png" v-else
                            alt="">
                    </div>
                </div>
                <div class="detail">
                    Payment for goods: Currently, we support bank transfer by partnering with reputable payment service
                    providers like SunRate and Xtransfer who can protect your payment. We also provide e-Contracting to
                    protect the whole online transaction.
                    <br />
                    <br />
                    Payment for Freight: To improve efficiency, we currently only support an auto-pay option. So before you
                    top up, please make sure you fully understand how we calculate the freight in
                </div>
            </div>
            <div class="item" :class="[idx === 6 ? 'active' : '']">
                <div class="header" @click="handleIdxChange(6)">
                    <div class="title">6. How do you charge the warehousing fee?</div>
                    <div><img src="@/assets/faq/ca.png" v-if="idx === 6" alt=""><img src="@/assets/faq/ad.png" v-else
                            alt="">
                    </div>
                </div>
                <div class="detail">
                    Payment for goods: Currently, we support bank transfer by partnering with reputable payment service
                    providers like SunRate and Xtransfer who can protect your payment. We also provide e-Contracting to
                    protect the whole online transaction.
                    <br />
                    <br />
                    Payment for Freight: To improve efficiency, we currently only support an auto-pay option. So before you
                    top up, please make sure you fully understand how we calculate the freight in
                </div>
            </div>
            <div class="item" :class="[idx === 7 ? 'active' : '']">
                <div class="header" @click="handleIdxChange(7)">
                    <div class="title">7. What logistics services do you provide?</div>
                    <div><img src="@/assets/faq/ca.png" v-if="idx === 7" alt=""><img src="@/assets/faq/ad.png" v-else
                            alt="">
                    </div>
                </div>
                <div class="detail">
                    Payment for goods: Currently, we support bank transfer by partnering with reputable payment service
                    providers like SunRate and Xtransfer who can protect your payment. We also provide e-Contracting to
                    protect the whole online transaction.
                    <br />
                    <br />
                    Payment for Freight: To improve efficiency, we currently only support an auto-pay option. So before you
                    top up, please make sure you fully understand how we calculate the freight in
                </div>
            </div>
            <div class="item" :class="[idx === 8 ? 'active' : '']">
                <div class="header" @click="handleIdxChange(8)">
                    <div class="title">8. Are there any advantages of using your logistics services?</div>
                    <div><img src="@/assets/faq/ca.png" v-if="idx === 8" alt=""><img src="@/assets/faq/ad.png" v-else
                            alt="">
                    </div>
                </div>
                <div class="detail">
                    Payment for goods: Currently, we support bank transfer by partnering with reputable payment service
                    providers like SunRate and Xtransfer who can protect your payment. We also provide e-Contracting to
                    protect the whole online transaction.
                    <br />
                    <br />
                    Payment for Freight: To improve efficiency, we currently only support an auto-pay option. So before you
                    top up, please make sure you fully understand how we calculate the freight in
                </div>
            </div>
            <div class="item" :class="[idx === 9 ? 'active' : '']">
                <div class="header" @click="handleIdxChange(9)">
                    <div class="title">9. How to top up for freight payment?</div>
                    <div><img src="@/assets/faq/ca.png" v-if="idx === 9" alt=""><img src="@/assets/faq/ad.png" v-else
                            alt="">
                    </div>
                </div>
                <div class="detail">
                    Payment for goods: Currently, we support bank transfer by partnering with reputable payment service
                    providers like SunRate and Xtransfer who can protect your payment. We also provide e-Contracting to
                    protect the whole online transaction.
                    <br />
                    <br />
                    Payment for Freight: To improve efficiency, we currently only support an auto-pay option. So before you
                    top up, please make sure you fully understand how we calculate the freight in
                </div>
            </div>
            <div class="item" :class="[idx === 10 ? 'active' : '']">
                <div class="header" @click="handleIdxChange(10)">
                    <div class="title">10. Are there any requirements to become a supplier of electronic vaporizers on
                        SinoB2B?
                    </div>
                    <div><img src="@/assets/faq/ca.png" v-if="idx === 10" alt=""><img src="@/assets/faq/ad.png" v-else
                            alt="">
                    </div>
                </div>
                <div class="detail">
                    Payment for goods: Currently, we support bank transfer by partnering with reputable payment service
                    providers like SunRate and Xtransfer who can protect your payment. We also provide e-Contracting to
                    protect the whole online transaction.
                    <br />
                    <br />
                    Payment for Freight: To improve efficiency, we currently only support an auto-pay option. So before you
                    top up, please make sure you fully understand how we calculate the freight in
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const idx = ref(3)
function handleIdxChange(x: number) {
    if (idx.value === x) {
        return idx.value = -1
    }
    idx.value = x
}
</script>
<style lang="less" scoped>
section {
    min-height: 50vh;
    padding-bottom: 100px;
}

.header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    cursor: pointer;
}

.wrapper {
    width: 75%;
    margin: 0 auto;
    font-family: Arial;
    // margin-top: 100px;
    padding-top: 100px;

    h1 {
        font-size: 40px;
        font-weight: 600;
        font-family: Arial;
        color: #111111;
    }

    .item {
        margin-bottom: 20px;
        min-height: 50px;
        background: #F5F6F9;
        border-radius: 5px;
        // display: flex;
        // align-items: center;
        padding: 0 20px;
        // justify-content: space-between;
        padding-top: 12px;

        .detail {
            padding-left: 18px;
            padding-top: 20px;
            display: none;
            padding-bottom: 20px;
            font-size: .0885rem;
        }



        img {

            width: 12px;
            height: 12px;
            cursor: pointer;
        }

        .title {
            font-size: 16px;
            font-family: Arial;
            font-weight: bold;
            color: #111111;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            padding-right: 30px;
        }
    }

    .active .detail {
        display: block;
    }
   .item .detail{
        font-size: 14px !important;
    }
}
</style>