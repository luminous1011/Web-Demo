<template>
    <section>
        <div class="wrapper">
            <h1>UserGuide</h1>

            <div class="item" :class="[idx === 1 ? 'active' : '']">
                <div class="header" @click="handleIdxChange(1)">

                    <div class="title">Create an account</div>
                    <div><img src="@/assets/faq/ca.png" v-if="idx === 1" alt=""><img src="@/assets/faq/ad.png" v-else
                            alt="">
                    </div>
                </div>
                <div class="detail">
                    It is easy to create a buyer account on SinoB2B.com:
                    <br />
                    <br />
                    1. Start creating an buyer account
                    <br />
                    2. Add company information and invitation code (if any)
                    <br />
                    3. Activate account through email
                    <br />
                    4. You are free to login
                    <br />
                    <br />

                    Please note that wholesale prices are available to login users only.
                </div>
            </div>
            <div class="item" :class="[idx === 2 ? 'active' : '']">
                <div class="header" @click="handleIdxChange(2)">

                    <div class="title">Become a verified buyer</div>
                    <div><img src="@/assets/faq/ca.png" v-if="idx === 2" alt=""><img src="@/assets/faq/ad.png" v-else
                            alt="">
                    </div>
                </div>
                <div class="detail">
                    SinoB2B is a cross-boarder platform. In order to purchase vapes here, you have to had your company registered outside of mainland China.
                    <br />
                    <br />
                    1. Go to Buyer Home
                    <br />2. Click edit
                    <br />3. Complete your company information
                    <br />4. Upload your business license
                    <br />5. Wait for approval
                    <br />
                    <br />
                    You will be notified via email after approval. Your business license will only be used for cross-boarder trade verification purpose.
                </div>
            </div>
            <div class="item" :class="[idx === 3 ? 'active' : '']">
                <div class="header" @click="handleIdxChange(3)">
                    <div class="title">Place an Order</div>
                    <div ><img src="@/assets/faq/ca.png" v-if="idx === 3" alt=""><img src="@/assets/faq/ad.png" v-else
                            alt="">
                    </div>
                </div>
                <div class="detail">
                    After your business license is approved, you can feel free to purchase all the products listed on SinoB2B.com
                    <br />
                    <br />
                    1. Add products you want to procure to cart
                    <br />2. Add your own product Sku (
                    <br />2. Select products in the cart and place a PO (purchase order or procurement order) draft
                    <br />3. Supplier approves the PO draft
                    <br />4. Buyer finishes the payment (invoice and remittance are free to download)
                    <br />5. SinoB2B warehouse staff receives cargo in bonded warehouse on behalf of the buyer
                    <br />6. Goods become ready to ship
                    <br />
                    <br />
                    Products with no available stock in bonded warehouse will go to "Pre-order"

                </div>

            </div>
            <div class="item" :class="[idx === 4 ? 'active' : '']">
                <div class="header" @click="handleIdxChange(4)">
                    <div class="title">Make the payment?</div>
                    <div><img src="@/assets/faq/ca.png" v-if="idx === 4" alt=""><img src="@/assets/faq/ad.png" v-else
                            alt="">
                    </div>
                </div>
                <div class="detail">
                    We offer bank transfer option for the moment.
                    <br />
                    <br />
                    1. Click pay and you will be redirected to payment page
                    <br />2. Download the remittance and finish the payment offline (Please mark your PO ID when making the payment)
                    <br />3. e-Contract is free to download
                    <br />
                    <br />
                    Make sure to cover bank charges when making the payment.
                </div>
            </div>
            <div class="item" :class="[idx === 5 ? 'active' : '']">
                <div class="header" @click="handleIdxChange(5)">
                    <div class="title">Balance Top-up</div>
                    <div><img src="@/assets/faq/ca.png" v-if="idx === 5" alt=""><img src="@/assets/faq/ad.png" v-else
                            alt="">
                    </div>
                </div>
                <div class="detail">
                    Before you top up for freight payment, you can always try Freight Calculation first.
                    <br />
                    <br />
                    1. Login and go to buyer home
                    <br />2. Click top up
                    <br />3. Select a payment method for top up
                    <br />4. Enter an amount and finish the payment
                    <br />

                </div>
            </div>
            <div class="item" :class="[idx === 6 ? 'active' : '']">
                <div class="header" @click="handleIdxChange(6)">
                    <div class="title">Start Shipment</div>
                    <div><img src="@/assets/faq/ca.png" v-if="idx === 6" alt=""><img src="@/assets/faq/ad.png" v-else
                            alt="">
                    </div>
                </div>
                <div class="detail">
                    We offer both B2B shipment and dropshipping which need to be done separately. Go to My Shipment and start shipping here.
                    <br />
                    <br />
                    For B2B shipment:
                    <br />1. Click create shipping order
                    <br />2. Select the products you have just purchased
                    <br />3. Add your address information
                    <br />4. Select shipping methods
                    <br />5. Pay the freight (make sure you have account balance)
                    <br />6. Wait for your package
                    <br />
                    <br />
                    For dropshipping:
                    <br />1. Go to dropshipping and click batch add
                    <br />2. Download the excel sample, add information and upload again
                    <br />3. Go to Freight Unpaid and select all the orders you want us to ship
                    <br />4. Pay the freight (make sure you have account balance)
                    <br />5. SinoB2B will pick and pack all the orders and ship them directly to your consumers' doorstep

                </div>
            </div>
            <div class="item" :class="[idx === 7 ? 'active' : '']">
                <div class="header" @click="handleIdxChange(7)">
                    <div class="title">Become an Affiliate</div>
                    <div><img src="@/assets/faq/ca.png" v-if="idx === 7" alt=""><img src="@/assets/faq/ad.png" v-else
                            alt="">
                    </div>
                </div>
                <div class="detail">
                    Welcome to join our affiliate program. It's so easy to become one of our affiliates
                    <br />
                    <br />
                    1. Register as a buyer first
                    <br />2. Go to My Affiliate and click Apply
                    <br />3. Get your invitation code
                    <br />4. You are free to refer buyers to SinoB2B.com to purchase and earn money
                    <br />

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