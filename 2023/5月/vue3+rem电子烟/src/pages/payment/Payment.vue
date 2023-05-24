<template>
    <section class="one">
        <div>Payment First or
            Delivery First?</div>
        <img src="@/assets/payment/one.png" alt="">
    </section>
    <section class="sec">
        <header>Payment for Cargo</header>
        <div class="header-line"></div>
        <div class="p">By partnering with trusted payment service providers, we use bank transfers as our preferred
        </div>
        <div class="p"> payment method for now due to expensive transaction fee. More are adding.</div>
        <div class="wrapper">
            <div class="title">Multi-Currency Accepted</div>
            <div><img src="@/assets/payment/sec-s1.png" alt=""><img src="@/assets/payment/sec-s2.png" alt=""></div>
        </div>
    </section>
    <section class="third">
        <header>Payment for Freight & Value-added Service </header>
        <div class="header-line"></div>
        <div class="p">At SinoB2B, we separate payment for cargo and payment for freight. To simplify the process, we
        </div>
        <div class="p"> recommend using account balance auto-pay for freight payment. Please check the payment </div>
        <div class="p">methods for top-up.</div>
        <div class="wrapper">
            <div class="item">
                <div class="title">USD Accepted</div>
                <div><img src="@/assets/payment/gongshang.png" alt=""></div>
            </div>
            <div class="item">
                <div class="title">CNY Accepted</div>
                <div><img src="@/assets/payment/wechat.png" alt="">
                    <img src="@/assets/payment/alipay.png" alt="">
                    <img src="@/assets/payment/ningbo.png" alt="">
                </div>
            </div>
        </div>
    </section>
    <section class="bottom">
        <header>Safety and Security</header>
        <div class="header-line"></div>
        <div class="p">We ensure the safety and security of online transactions
        </div>
        <div class="p">through our proven methods.</div>
        <div class="wrapper">
            <div class="item">
                <img src="@/assets/payment/s1.png" alt="">
                <div>Verified
                    Suppliers</div>
                <p>
                    All the suppliers have been verified with proper business license.
                </p>
            </div>
            <div class="item">
                <img src="@/assets/payment/s2.png" alt="">
                <div style="width: 1.1198rem;">Trusted Payment
                    Partners</div>
                <p>
                    Partner with trusted third-party payment service providers to protect your funds.
                </p>
            </div>
            <div class="item">
                <img src="@/assets/payment/s3.png" alt="">
                <div style="width: 1.0198rem;">Release Upon
                    Delivery</div>
                <p>
                    Payment won’t be released to the supplier until our warehouse staff receive your cargo accordingly.
                </p>
            </div>
            <div class="item">
                <img src="@/assets/payment/s4.png" alt="">
                <div>Digital
                    e-Contract</div>
                <p>
                    Feel confident and secure on our e-Contract with all transaction rules being properly followed
                </p>
            </div>
        </div>
    </section>
</template>
<style lang="less" scoped>
.bottom {
    background: #F5F6F9;
    padding-bottom: .5625rem;

    .wrapper {
        width: 7.5rem;
        margin: 0 auto;
        height: 2.3073rem;
        background: #FFFFFF;
        border-radius: .1875rem;
        display: flex;
        align-items: center;
        margin-top: .3646rem;
        justify-content: center;
    }

    .item {
        width: 1.25rem;
        display: flex;
        align-items: center;
        flex-direction: column;

        img {
            height: .4167rem;
        }

        &+.item {
            margin-left: .625rem;
        }

        div {
            width: .6198rem;
            font-size: .1354rem;
            font-family: Arial;
            font-weight: bold;
            color: #111111;
            text-align: center;
            margin: .125rem 0;
            line-height: .1875rem;
        }

        p {
            width: 1.1979rem;
            font-size: .099rem;
            font-family: Arial;
            font-weight: 400;
            color: #9FA3AA;
            line-height: .151rem;
            text-align: center;
        }

    }
}

.third {
    padding-bottom: .5625rem;
    img {
        height: .3125rem;
    }

    .wrapper {
        margin-top: .3646rem;
        display: flex;
        justify-content: center;
    }

    .item {
        width: 3.6563rem;
        height: 1.5rem;
        background: #F5F6F9;
        border-radius: .1875rem;

        &+.item {
            margin-left: .2083rem;
        }

        div:last-child {
            display: flex;

            img+img {
                margin-left: .2083rem;
            }

            justify-content: center;
        }

        div:first-child {
            font-size: .1146rem;

            font-family: Arial;
            font-weight: bold;
            color: #111111;
            margin: .3125rem 0 .3646rem;
            text-align: center;

        }
    }
}

.sec {
    background: #F5F6F9;
    padding-bottom: .5625rem;

    .wrapper {
        width: 7.5rem;
        height: 1.5rem;
        background: #FFFFFF;
        border-radius: .1875rem;
        margin: 0 auto;
        margin-top: .3646rem;

        .title {
            font-size: .1146rem;
            font-family: Arial;
            font-weight: bold;
            text-align: center;
            color: #111111;
            margin-bottom: .4167rem;
            padding-top: .3125rem;
        }

        div:last-child {
            display: flex;
            justify-content: center;
        }

        img {
            width: 1.1198rem;

            &+img {
                margin-left: .5365rem;
            }
        }


    }
}

.one {
    overflow: hidden;
    position: relative;
    height: 3.8021rem;

    div {
        width: 3.9542rem;
        font-size: .3021rem;
        font-family: Arial;
        font-weight: bold;
        color: #111111;
        padding-top: 1.151rem;
        padding-left: 1.2708rem;
    }

    img {
        width: 6.7708rem;
        position: absolute;
        top: .8542rem;
        left: 1.25rem;
    }
}

header {
    font-size: .1875rem;
    font-family: Arial;
    font-weight: bold;
    color: #111111;
    text-align: center;
    padding-top: .5625rem;
}

.header-line {
    width: .9375rem;
    height: .0365rem;
    background: linear-gradient(90deg, #FF1702, rgba(255, 23, 2, 0.14));
    border-radius: .0208rem;
    margin: .1302rem auto .1823rem;
}

.p {
    font-size: .099rem;
    font-family: Arial;
    text-align: center;
    font-weight: 400;
    color: #9FA3AA;
}

.p:last-child {
    margin-bottom: .3646rem;
}
@media (max-width: 750px) {
    .one div{
        padding-top: 100px;
        width: 320px;
        font-size: .6667rem;
        padding-left: 0;
        text-align: center;
        margin: 0 auto;
    }
    .one{
        height: auto;
        img{
            position: unset;
            width: 320px;
            margin-left: 20px;
        }
    }
    .sec .wrapper{
        height: auto;
    }
    .sec .wrapper div:last-child{
flex-direction: column;
justify-content: center;
    }
    .sec .wrapper img{
        width: 160px;
        margin: 10px auto;
    }
    .sec .wrapper img + img{
        margin-left: auto;
        margin-top: 10px;
        margin-bottom: 10px;

    }
    .bottom .item div{
        line-height: unset;
    }
    .bottom .item p{
        display: none;
    }
    header{
        font-size: 20px;
    }
    .p{
        font-size: 14px;
        padding: 0 20px;
    }.third .item div:first-child{
        font-size: 16px;
        margin-bottom: 5px;
    }
}
</style>