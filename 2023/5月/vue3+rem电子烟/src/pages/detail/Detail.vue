<template>
    <section class="pc-show" style="padding-top: .9375rem;display: flex;justify-content: center;">
        <div class="one">
            <div class="big"> <img src="@/assets/detail/one-b1.png" alt=""></div>
            <div class="small"><img src="@/assets/detail/one-s2.png" @click="c(1)" :class="[i===1?'se':'']" alt=""> <img src="@/assets/detail/one-s2.png"
                @click="c(2)" :class="[i===2?'se':'']"  alt=""><img  @click="c(3)" :class="[i===3?'se':'']" src="@/assets/detail/one-s2.png" alt=""><img   @click="c(4)" :class="[i===4?'se':'']" src="@/assets/detail/one-s2.png" alt=""></div>
        </div>
        <div class="sec">
            <div class="header">
                <span>Pre-order</span> Hellvape Fat Rabbit 2 Sub
                Ohm Tank 5ml (28mm)
            </div>
            <div class="info">
                <div>27 pcs in Stock</div>
                <div>Sku: xxxfd5432xxx</div>
            </div>
            <div class="sign-btn" style="margin-bottom: .0521rem;">
                <span style="color:#FF1702;text-decoration: underline;">Sign in </span>
                &nbsp;to view bulk price
            </div>
            <div class="label">Color:</div>
            <div class="s">
                <span :class="[colorIdx === 1 ? 'selected' : '']" @click="handleChooseColor(1)">
                    <a-tooltip>
                        <template #title>Wave Blue</template>
                        Wave Blue
                    </a-tooltip>
                </span>
                <span :class="[colorIdx === 2 ? 'selected' : '']" @click="handleChooseColor(2)">
                    <a-tooltip>
                        <template #title>Wave Cyan</template>
                        Wave Cyan
                    </a-tooltip>
                </span>
                <span :class="[colorIdx === 3 ? 'selected' : '']" @click="handleChooseColor(3)">
                    <a-tooltip>
                        <template #title>Pacific Blue</template>
                        Pacific Blue
                    </a-tooltip>
                </span>
                <span :class="[colorIdx === 4 ? 'selected' : '']" @click="handleChooseColor(4)">
                    <a-tooltip>
                        <template #title>Gunmetal Carbon Fiber</template>
                        Gunmetal...
                    </a-tooltip>
                </span>
                <span :class="[colorIdx === 5 ? 'selected' : '']" @click="handleChooseColor(5)">
                    <a-tooltip>
                        <template #title>Wave Purple</template>
                        Wave Purple
                    </a-tooltip>
                </span>
                <span :class="[colorIdx === 6 ? 'selected' : '']" @click="handleChooseColor(6)">
                    <a-tooltip>
                        <template #title>Wave Blue</template>
                        Wave Blue
                    </a-tooltip>
                </span>
                <span :class="[colorIdx === 7 ? 'selected' : '']" @click="handleChooseColor(7)">
                    <a-tooltip>
                        <template #title>Wave Cyan</template>
                        Wave Cyan
                    </a-tooltip>
                </span>
                <span :class="[colorIdx === 8 ? 'selected' : '']" @click="handleChooseColor(8)">
                    <a-tooltip>
                        <template #title>Pacific Blue</template>
                        Pacific Blue
                    </a-tooltip>
                </span>
                <span :class="[colorIdx === 9 ? 'selected' : '']" @click="handleChooseColor(9)">
                    <a-tooltip>
                        <template #title>Gunmetal Carbon Fiber</template>
                        Gunmetal...
                    </a-tooltip>
                </span>
                <span :class="[colorIdx === 10 ? 'selected' : '']" @click="handleChooseColor(10)">
                    <a-tooltip>
                        <template #title>Wave Purple</template>
                        Wave Purple
                    </a-tooltip>
                </span>
            </div>
            <div class="s" v-if="colorMoreVisble">
                <span>
                    <a-tooltip>
                        <template #title>Wave Blue</template>
                        Wave Blue
                    </a-tooltip>
                </span>
                <span>
                    <a-tooltip>
                        <template #title>Wave Cyan</template>
                        Wave Cyan
                    </a-tooltip>
                </span>
                <span>
                    <a-tooltip>
                        <template #title>Pacific Blue</template>
                        Pacific Blue
                    </a-tooltip>
                </span>
                <span>
                    <a-tooltip>
                        <template #title>Gunmetal Carbon Fiber</template>
                        Gunmetal...
                    </a-tooltip>
                </span>
                <span>
                    <a-tooltip>
                        <template #title>Wave Purple</template>
                        Wave Purple
                    </a-tooltip>
                </span>
                <span>
                    <a-tooltip>
                        <template #title>Wave Blue</template>
                        Wave Blue
                    </a-tooltip>
                </span>
                <span>
                    <a-tooltip>
                        <template #title>Wave Cyan</template>
                        Wave Cyan
                    </a-tooltip>
                </span>
                <span>
                    <a-tooltip>
                        <template #title>Pacific Blue</template>
                        Pacific Blue
                    </a-tooltip>
                </span>
                <span>
                    <a-tooltip>
                        <template #title>Gunmetal Carbon Fiber</template>
                        Gunmetal...
                    </a-tooltip>
                </span>
                <span>
                    <a-tooltip>
                        <template #title>Wave Purple</template>
                        Wave Purple
                    </a-tooltip>
                </span>
                <span>
                    <a-tooltip>
                        <template #title>Wave Blue</template>
                        Wave Blue
                    </a-tooltip>
                </span>
                <span>
                    <a-tooltip>
                        <template #title>Wave Cyan</template>
                        Wave Cyan
                    </a-tooltip>
                </span>
                <span>
                    <a-tooltip>
                        <template #title>Pacific Blue</template>
                        Pacific Blue
                    </a-tooltip>
                </span>
                <span>
                    <a-tooltip>
                        <template #title>Gunmetal Carbon Fiber</template>
                        Gunmetal...
                    </a-tooltip>
                </span>
                <span>
                    <a-tooltip>
                        <template #title>Wave Purple</template>
                        Wave Purple
                    </a-tooltip>
                </span>
                <span>
                    <a-tooltip>
                        <template #title>Wave Blue</template>
                        Wave Blue
                    </a-tooltip>
                </span>
                <span>
                    <a-tooltip>
                        <template #title>Wave Cyan</template>
                        Wave Cyan
                    </a-tooltip>
                </span>
                <span>
                    <a-tooltip>
                        <template #title>Pacific Blue</template>
                        Pacific Blue
                    </a-tooltip>
                </span>

            </div>
            <div :class="['view-more', colorMoreVisble ? 'up' : '']" @click="handleColorMoreVisible">
                View more colors
                <img src="@/assets/detail/down.png" alt="">
            </div>
            <div class="label">Type:</div>
            <div class="s">
                <span :class="[sizeIdx === 1 ? 'selected' : '']" @click="handleChooseSize(1)">10ml</span>
                <span :class="[sizeIdx === 2 ? 'selected' : '']" @click="handleChooseSize(2)">20ml</span>
                <span :class="[sizeIdx === 3 ? 'selected' : '']" @click="handleChooseSize(3)">30ml</span>
            </div>
            <div class="weight">
                <div class="num">
                    <span style="color:#CED1D7">-</span>
                    <span>1</span>
                    <span>+</span>
                </div>
                <div>Unit Weight: <span
                        style="
                                                                                                                                color: #333333;
                                                                                                                                        ">42.0g</span>
                </div>
            </div>
            <div class="cart">
                <div class="btn">Add to Cart</div>
                <img style="width: .3438rem;" src="@/assets/detail/cart.png" alt="">
            </div>
            <div class="line" style="margin-top: .3125rem;"></div>
            <div class="p" @click="handlePayVisble">
                <div>Payment</div>
                <img style="width: .0938rem;cursor: pointer;" :class="[payVisble ? 'rotate-180' : '']"
                    src="@/assets/detail/down.png" alt="">
            </div>
            <div class="content" v-if="payVisble">
                <div><span>Payment for Goods: </span>Bank Transfer via SUNRATE</div>
                <div><span>Payment for Freight: </span>Pre-Top up & Auto Pay</div>
                <div>Learn More</div>
            </div>
            <div class="line"></div>
            <div class="p" @click="handleLogVisble">
                <div>Logistic</div>
                <img style="width: .0938rem;cursor: pointer;" :class="[logVisble ? 'rotate-180' : '']"
                    src="@/assets/detail/down.png" alt="">
            </div>
            <div class="content" v-if="logVisble">
                <div><span>B2B Shipment: </span>Sea, Air, Express Delivery</div>
                <div><span>Dropshipping: </span>Air & Express Delivery</div>
                <div>Learn More</div>
            </div>
            <div class="line"></div>
        </div>
        <div class="end">
            <div><img src="@/assets/detail/logo.png" style="width: .7188rem;margin-bottom: .1302rem;" alt=""></div>
            <div style="font-size: .099rem;
                                                                                            font-family: Arial;
                                                                                            font-weight: bold;
                                                                                            color: #333333;">
                WOTOFO
            </div>
            <div class="info">
                <div>china</div>
                <div><img src="@/assets/detail/store.png" style="width: .0885rem;margin-right: .0313rem;" alt="">Visit Store
                    <img src="@/assets/detail/right.png" style="height: .0521rem;margin-left: .0417rem;" alt="">
                </div>
            </div>
            <div class="contact-btn">
                Contact Supplier
            </div>
            <div
                style="width:100%;
                                                                                            height: .0052rem;
                                                                                            background: #DDDDDD;margin: .1563rem 0;">
            </div>
            <div class="k">Trading Place: </div>
            <div class="v">Shenzhen Bonded Zone</div>
            <div class="k">Shipping From: </div>
            <div class="v">Shenzhen Bonded Warehouse</div>
            <div class="k">Shipping To: </div>
            <div class="select">
                <div>Please select</div>
                <div><img src="@/assets/detail/down.png" alt=""></div>
            </div>
            <div class="k"> Shipping Methods: </div>
            <div class="select">
                <div>Please select</div>
                <div><img src="@/assets/detail/down.png" alt=""></div>
            </div>
            <div
                style="width:100%;
                                                                                            height: .0052rem;
                                                                                            background: #DDDDDD;margin: .1563rem 0;">
            </div>
            <div class="under">
                <div>
                    Estimated Shipping Time:
                </div>
                <div>-</div>
            </div>

            <div class="under" style="margin-top: .1563rem;">
                <div>Tracking Info:
                </div>
                <div>-</div>
            </div>
        </div>
    </section>
    <section class="bottom pc-show">
        <header>
            <div>Recommended Products</div>
            <div>
                <img src="@/assets/detail/down.png" alt="" class="prev" @click="prev">
                <img src="@/assets/detail/down.png" alt="" class="next" @click="next">
            </div>
        </header>
        <article>
            <img src="@/assets/detail/s1.png" :style="{
                marginLeft: `${distance}rem`
            }" alt="">
            <img src="@/assets/detail/s2.png" alt="">
            <img src="@/assets/detail/s3.png" alt="">
            <img src="@/assets/detail/s4.png" alt="">
            <img src="@/assets/detail/s1.png" alt="">
            <img src="@/assets/detail/s2.png" alt="">
            <img src="@/assets/detail/s3.png" alt="">
        </article>
        <header>
            <div>
                <span style="cursor: pointer;" :class="[active !== 0 ? 'active' : '']" @click="handleAc(0)">Product Details</span>
                <span style="margin-left: .25rem;cursor: pointer;" @click="handleAc(1)"
                    :class="[active !== 1 ? 'active' : '']">Reviews</span>
            </div>
        </header>
        <div style="width: 100%;height: 1px;background:#ddd ;"></div>
        <main v-if="active === 0">
            <img src="@/assets/detail/empty.png" alt="">
            <div>No product details currently available</div>
        </main>
        <div style="padding: .1875rem 0;" v-else>
            <div class="a1" style="display: flex;">
                <div style="margin-right: .0885rem;"><img style="width: .3542rem;" src="@/assets/detail/a1.png" alt="">
                </div>
                <div>
                    <div style="font-size: .1042rem;font-weight: 600;">Jiale</div>
                    <div style="color: #9FA3AA;">China</div>
                </div>
            </div>
            <div style="display: flex;align-items: center;font-size: 12px;color: #FFB34E;padding-left: .4583rem;">
                <img style="width: .099rem;margin-right: 5px;" src="@/assets/shopping/star-s2.png" alt="">
                <img style="width: .099rem;margin-right: 5px;" src="@/assets/shopping/star-s2.png" alt="">
                <img style="width: .099rem;margin-right: 5px;" src="@/assets/shopping/star-s2.png" alt="">
                <img style="width: .099rem;margin-right: 5px;" src="@/assets/shopping/star-s2.png" alt="">
                <img style="width: .099rem;margin-right: 5px;" src="@/assets/shopping/star-s2.png" alt="">
                5
                <div style="background-color: #9FA3AA; width: 1px;height: 10px;margin: 0 .0938rem;"></div>
                <span style="color: #9FA3AA;">3 weeks ago</span>
            </div>
            <div style="font-size: .1042rem;margin: .1198rem 0;padding-left: .4583rem;">I give this product 82 points, and
                the remaining 18 points I give you in the form of 666</div>
            <div style="padding-left: .4583rem;"><img src="@/assets/detail/one-s2.png" alt=""></div>
            <div style="padding-left: .4583rem;font-size: .0885rem;display: flex;align-items: center;margin-top: .1302rem;">
                <span style="margin-right: 10px;color: #9FA3AA;">Helpful?</span>
                <span style="margin-right: 10px;"><img style="width: .0729rem;" src="@/assets/detail/zan.png" alt="">
                    Yes</span>
                <span><img style="width: .0729rem;" src="@/assets/detail/no-zan.png" alt=""> No</span>
            </div>
            <div style="width:100%;height: 1px;background: #ddd;margin: .1875rem 0;"></div>
            <div class="a1" style="display: flex;">
                <div style="margin-right: .0885rem;"><img style="width: .3542rem;" src="@/assets/detail/a2.png" alt="">
                </div>
                <div>
                    <div style="font-size: .1042rem;font-weight: 600;">fatimaben1708</div>
                    <div style="color: #9FA3AA;">Malaysia</div>
                </div>
            </div>
            <div style="display: flex;align-items: center;font-size: 12px;color: #FFB34E;padding-left: .4583rem;">
                <img style="width: .099rem;margin-right: 5px;" src="@/assets/shopping/star-s2.png" alt="">
                <img style="width: .099rem;margin-right: 5px;" src="@/assets/shopping/star-s2.png" alt="">
                <img style="width: .099rem;margin-right: 5px;" src="@/assets/shopping/star-s2.png" alt="">
                <img style="width: .099rem;margin-right: 5px;" src="@/assets/shopping/star-s2.png" alt="">
                <img style="width: .099rem;margin-right: 5px;" src="@/assets/shopping/star-s1.png" alt="">
                4
                <div style="background-color: #9FA3AA; width: 1px;height: 10px;margin: 0 .0938rem;"></div>
                <span style="color: #9FA3AA;">2 months ago</span>
            </div>
            <div style="font-size: .1042rem;margin: .1198rem 0;padding-left: .4583rem;">My God! Is this the advantage of
                Made in China? It's incredibly good, both in terms of craftsmanship and functionality. Thank you to SINOB2B
                for meeting such a great manufacturer!</div>
            <!-- <div style="padding-left: .4583rem;"><img src="@/assets/detail/one-s2.png" alt=""></div> -->
            <div style="padding-left: .4583rem;font-size: .0885rem;display: flex;align-items: center;margin-top: .1302rem;">
                <span style="margin-right: 10px;color: #9FA3AA;">Helpful?</span>
                <span style="margin-right: 10px;"><img style="width: .0729rem;" src="@/assets/detail/zan-ing.png" alt="">
                    Yes</span>
                <span><img style="width: .0729rem;" src="@/assets/detail/no-zan.png" alt=""> No</span>
            </div>
            <div style="width:100%;height: 1px;background: #ddd;margin: .1875rem 0;"></div>
            <div style="text-align: center;color: #9FA3AA;padding-bottom: .5208rem;">There is currently no further
                information available</div>
        </div>
    </section>
    <section class="h5-show" autoplay>
        <a-carousel>
            <div>
                <img src="@/assets/detail/s1.png" />
            </div>
            <div>
                <img src="@/assets/detail/s2.png" />
            </div>
            <div>
                <img src="@/assets/detail/s3.png" />
            </div>
            <div>
                <img src="@/assets/detail/s4.png" />
            </div>
        </a-carousel>
        <div class="l1">
            <span>Pre-order</span>
            Hellvape Fat Rabbit 2 Sub Ohm Tank 5ml (28mm)
        </div>
        <div class="l2">
            <div>27 pcs in Stock</div>
            <div>Sku: xxxfd5432xxx</div>
        </div>
        <div class="l3"> <span>Sign in</span>&nbsp; to view bulk price</div>
        <div class="label">Color:</div>
        <div class="s">
            <div class="item se">Wave Blue</div>
            <div class="item">Wave Cyan</div>
            <div class="item">Twill Silver</div>
            <div class="item">Evil Spirits</div>
            <div class="item">Wave Purple</div>
            <div class="item">Wave Purple</div>
        </div>
        <div class="more">View more colors <img src="@/assets/detail/down.png" alt=""> </div>
        <div class="label">Type:</div>
        <div class="s">
            <div class="item se">10ml</div>
            <div class="item">20ml</div>
            <div class="item">30ml</div>
        </div>
        <div class="crtls">
            <div class="btn">
                <div>-</div>
                <div>1</div>
                <div>+</div>
            </div>
            <div class="info">
                Unit Weight:
                <span>42.0g</span>
            </div>
        </div>
        <div class="select" @click="handlePayVisble">
            <div>Payment</div>
            <div><img src="@/assets/detail/down.png" alt=""> </div>
        </div>
        <div class="content" v-if="payVisble" style="padding:0 .4688rem">
            <div style="font-size:12px"><span style="color:#9FA3AA">Payment for Goods: </span>Bank Transfer via SUNRATE
            </div>
            <div style="font-size:12px"><span style="color:#9FA3AA">Payment for Freight: </span>Pre-Top up & Auto Pay</div>
            <div style="font-size:12px;text-decoration: underline;">Learn More</div>
        </div>
        <div class="select" @click="handleLogVisble">
            <div>Logistic</div>
            <div><img src="@/assets/detail/down.png" alt=""> </div>
        </div>
        <div class="content" v-if="logVisble" style="padding:0 .4688rem">
            <div style="font-size:12px"><span style="color:#9FA3AA">B2B Shipment: </span>Sea, Air, Express Delivery</div>
            <div style="font-size:12px"><span style="color:#9FA3AA">Dropshipping: </span>Air & Express Delivery</div>
            <div style="font-size:12px;text-decoration: underline;">Learn More</div>
        </div>
        <div class="store">
            <div class="l1">
                <div><img src="@/assets/detail/logo.png" alt=""></div>
                <div>
                    <div>WOTOFO</div>
                    <div class="china">China</div>
                </div>
            </div>
            <div class="l2-">
                <div>Contact Supplier</div>
                <div>Visit Store</div>
            </div>
        </div>
        <div class="header">
            Reviews (32)
            <img style="margin-left:210px;width:8px" src="@/assets/detail/right.png" />
        </div>
        <div class="jiale">
            <div class="avatar">
                <img src="@/assets/detail/a1.png" />
                <div>
                    <div class="name">jiale</div>
                    <div class="info">
                        <div>China</div>
                        <div>3 weeks ago</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="jiale-info">
            I give this product 82 points, and the remaining 18 points I
            give you in the form of 666
        </div>
        <div class="jiale">
            <div class="avatar">
                <img src="@/assets/detail/a2.png" />
                <div>
                    <div class="name">fatimaben1708</div>
                    <div class="info">
                        <div>Malaysia</div>
                        <div>2 months ago</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="jiale-info">
            My God! Is this the advantage of Made in China? It's incredibly good, both in terms of craftsmanship and
            functionality. Thank you to SINOB2B for meeting …
        </div>
        <div class="header">
            Product Details
        </div>
        <div class="aa">
            <img src="@/assets/detail/s1.png" />
            <img src="@/assets/detail/s2.png" />
            <img src="@/assets/detail/s3.png" />
            <img src="@/assets/detail/s4.png" />
        </div>
        <div class="footer-fix">
            <div class="btn">Add to Cart</div>
            <img src="@/assets/detail/cart.png" />
        </div>
    </section>
</template>
<style lang="less" scoped>
.bottom {
    width: 5.8125rem;
    margin-top: .5625rem;
    margin-left: 1.25rem;

    main {
        font-size: .1146rem;
        color: #B8BDC4;
        text-align: center;

        img {
            margin: .3125rem 0 .1042rem;
        }

        padding-bottom: .9115rem;
    }

    article {
        img {
            width: 1.25rem;
            margin-right: .0938rem;
        }

        display: flex;
        overflow: hidden;
        margin-bottom: .375rem;
        width: 5.8125rem;
        overflow: hidden;
        overflow: scroll;

        &::-webkit-scrollbar {
            margin-left: 20px;
            // background: #f00;
        }
    }

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: .151rem;
        font-family: Arial;
        font-weight: bold;
        color: #333333;
        margin-bottom: .1823rem;

        .prev {
            transform: rotate(90deg);
            width: .0938rem;
            cursor: pointer;
        }

        .next {
            transform: rotate(-90deg);
            width: .0938rem;
            cursor: pointer;
            margin-left: .2083rem;
        }
    }
}

.end {
    width: 1.6927rem;
    padding-left: .25rem;
    margin-left: .25rem;
    border-left: 1px solid #ddd;
    height: 3.7125rem;

    .select {
        width: 1.4375rem;
        height: .1875rem;
        background: #F5F6F9;
        border-radius: .0313rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: .0729rem;
        font-family: Arial;
        font-weight: 400;
        color: #333333;
        margin-bottom: .1563rem;
        padding: 0 .0938rem;

        img {
            width: .0521rem;
        }
    }

    .k {
        font-size: .0729rem;
        font-family: Arial;
        font-weight: 400;
        color: #9FA3AA;
        margin-bottom: .0417rem;
    }

    .v {
        font-size: .0729rem;
        margin-bottom: .1563rem;
        color: #333;
    }

    .contact-btn {
        width: 1.4375rem;
        height: .25rem;
        background: rgba(255, 79, 60, 0.1);
        border-radius: .125rem;
        font-size: .0885rem;
        font-family: Arial;
        font-weight: 400;
        color: #FF4F3C;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: .0729rem;
        font-family: Arial;
        font-weight: 400;
        color: #9FA3AA;
        margin-bottom: .1302rem;

        div {
            display: flex;
            align-items: center;
        }
    }

    .under {
        font-size: .0729rem;
        font-family: Arial;
        font-weight: 400;
        color: #9FA3AA;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}

.sec {
    width: 2.8125rem;
    margin-left: .25rem;

    .content {
        div {
            color: #333;
            font-size: .0729rem;
            font-family: Arial;

            span {
                font-size: .0729rem;
                font-family: Arial;
                font-weight: 400;
                color: #9FA3AA;
            }

            &:last-child {
                margin: .1563rem 0;
                text-decoration: underline;
            }
        }
    }

    .p {
        display: flex;
        justify-content: space-between;
        height: .4167rem;
        font-size: .1146rem;
        font-family: Arial;
        font-weight: bold;
        color: #333333;
        cursor: pointer;
        align-items: center;
    }

    .line {
        width: 2.8125rem;
        height: .0052rem;
        background: #DDDDDD;
    }

    .cart {
        display: flex;
        margin-top: .125rem;

        .btn {
            width: 1.4063rem;
            height: .3438rem;
            background: #FF4F3C;
            border-radius: .1719rem;
            font-size: .1146rem;
            font-family: Arial;
            font-weight: bold;
            color: #FFFFFF;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: .0938rem;
        }
    }

    .weight {
        padding-top: .0781rem;
        display: flex;
        font-size: .0729rem;
        font-family: Arial;
        font-weight: 400;
        color: #9FA3AA;
        align-items: center;
    }

    .num {
        padding: 0 .0938rem;
        width: .875rem;
        height: .1875rem;
        background: #F5F6F9;
        border-radius: .0938rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: .099rem;
        font-family: Arial;
        font-weight: 400;
        color: #333333;
        margin-right: .125rem;

        span:first-child,
        span:last-child {
            font-size: .1563rem;
        }
    }

    .view-more {
        cursor: pointer;

        img {
            margin-left: .0313rem;
            width: .0521rem;
            height: .0313rem;
        }

        &.up {
            img {
                transform: rotate(180deg);
            }
        }

        font-size: .0729rem;
        font-family: Arial;
        font-weight: 400;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #9FA3AA;
    }

    .label {
        height: .2083rem;
        font-size: .0729rem;
        font-family: Arial;
        font-weight: 400;
        color: #9FA3AA;
        display: flex;
        align-items: center;
    }

    .s {
        display: flex;
        flex-wrap: wrap;
        cursor: pointer;
    }

    .s span {
        width: .5208rem;
        height: .1875rem;
        background: #F5F6F9;
        border-radius: .0313rem;
        text-align: center;
        line-height: .1875rem;
        display: inline-block;
        margin-right: .0469rem;
        margin-bottom: .0469rem;
        font-size: .0729rem;

        &:hover {
            color: #FF1702;
        }

        &.selected {
            background: rgba(255, 255, 255, 0);
            border: 1px solid #FF1702;
            color: #FF1702;
        }

        &:nth-child(5n) {
            margin-right: 0;
        }
    }

    .sign-btn {
        width: 2.8125rem;
        display: flex;
        justify-content: center;
        align-items: center;
        height: .4375rem;
        background: #F5F6F9;
        border-radius: 6px;
        font-size: .099rem;
        font-family: Arial;
        font-weight: 400;

    }

    .info {
        display: flex;
        justify-content: space-between;
        height: .3125rem;
        align-items: center;
        font-size: .0729rem;
        font-family: Arial;
        font-weight: 400;
        color: #9FA3AA;
    }

    .header {
        // width: 2.4323rem;
        height: .3802rem;
        font-size: .1615rem;
        font-family: Arial;
        font-weight: bold;
        color: #333333;
        line-height: .224rem;

        span {
            width: .4063rem;
            height: .151rem;
            background: #569EFF;
            border-radius: .0469rem;
            display: inline-block;
            font-size: .0677rem;
            font-family: Arial;
            font-weight: bold;
            color: #FFFFFF;
            line-height: .151rem;
            text-align: center;
        }
    }
}

img {
    transition: all linear .3s;
}

.rotate-180 {
    transform: rotate(180deg);
}

.one {
    width: 2.5rem;

    img {
        width: 2.5rem;
        height: 2.5rem;
    }

    .small img {
        width: .3438rem;
        height: .3438rem;
        margin-right: .0625rem;
        margin-top: .0625rem;
        cursor: pointer;
   

    }
    .se{
        border: solid 1px red;

        }
    .small {
        display: flex;
        justify-content: center;
    }
}

@media (max-width:750px) {

    .ant-carousel,
    /deep/ .slick-slider {
        height: 12.8594rem;
        background: #F5F6F9;
        // display: flex;
        // align-items: center;
    }

    /deep/ .slick-slider {
        padding-top: 80px;
    }

    /deep/ .ant-carousel .slick-dots li.slick-active button {
        background: #9E9EA6;
        width: 1.6667rem;
    }

    /deep/ .ant-carousel .slick-dots li button {
        width: 1.6667rem;
        background: rgba(158, 158, 166, .7);

    }

    /deep/ .ant-carousel .slick-dots li {
        width: unset;
    }

    .aa {
        background: #fff;
    }

    .aa img {
        background: #fff;
        width: 10rem;
        mix-blend-mode: multiply;
    }

    .jiale {
        img {
            width: 1.0417rem;
            margin-right: .2708rem;
        }

        .avatar {
            display: flex;
            padding: 0 .4688rem;

        }

        .name {
            font-size: .3333rem;
        }

        .info {
            width: 7.0333rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: .2917rem;
            color: #9FA3AA;
        }
    }

    .jiale-info {
        padding: .6667rem .4688rem .7396rem;
        border-bottom: solid #DDDDDD 1px;
        font-size: .3333rem;
        font-family: Arial;
        margin-bottom: .8802rem;
    }

    .header {

        font-size: .4427rem;
        font-family: Arial;
        font-weight: bold;
        color: #333333;
        padding: 0 .4688rem;
        margin-bottom: .7292rem;
        display: flex;
        align-items: center;
    }

    .store {
        width: 9.0729rem;
        height: 3.5208rem;
        background: #FFFFFF;
        box-shadow: 0px 0px .9271rem 0px rgba(0, 0, 0, 0.15);
        border-radius: .276rem;
        margin: 1.2rem auto;
    }

    .select {
        div:first-child {
            font-size: .3333rem;
            font-family: Arial;
            font-weight: bold;
            color: #333333;
        }

        img {
            width: .276rem;
        }

        padding: 0 .4688rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 0.6417rem;
    }

    .store {
        .l2- {
            display: flex;
            border-top: 1px solid #ddd;

            div {
                &:first-child {
                    border-right: 1px solid #ddd;
                }

                display: flex;

                align-items: center;
                justify-content: center;
                font-size: .3333rem;
                font-family: Arial;
                font-weight: 400;
                color: #F65032;
                height: 1.4792rem;
                width: 50%;
            }
        }

        .l1 {
            display: flex;
            align-items: center;
            height: 2.0313rem;
            padding: 0 .5208rem;
            margin: 0;
        }

        img {
            width: 1.5625rem;
            margin-right: .625rem;
        }

        .china {
            color: #9FA3AA;
            font-size: .2604rem;
        }
    }

    .crtls {
        margin-top: .5208rem;
        margin-bottom: .9375rem;
        padding: 0 .4688rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .btn {
            width: 4.3542rem;
            height: .9271rem;
            background: #F5F6F9;
            border-radius: .4635rem;
            padding: 0 .4688rem;
            font-size: .3021rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .info {
            font-size: 0.3333rem;
            color: #9FA3AA;

            span {
                font-weight: 600;
                color: #111
            }
        }
    }

    .more {
        margin-bottom: .7292rem;
        margin-top: .1563rem;
        font-size: .3333rem;
        text-align: center;
        font-family: Arial;
        font-weight: 400;
        color: #9FA3AA;

        img {
            width: .2396rem;
            margin-right: .1198rem;
        }
    }

    .label {
        font-size: .3333rem;
        font-family: Arial;
        font-weight: 400;
        color: #9FA3AA;
        margin-bottom: .3646rem;
        padding: 0 .4688rem;

    }

    .s {
        display: flex;
        padding: 0 .4488rem;
        flex-wrap: wrap;

        .item {
            width: 2.9063rem;
            height: .9271rem;
            background: #F5F6F9;

            border-radius: .0938rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: .2917rem;
            margin-bottom: .1875rem;
            margin-right: .1875rem;

            &.se {
                border: 1px solid #F51A00;
                color: #F51A00;
                background: #fff;

            }

            &:nth-child(3n) {
                margin: 0;
            }
        }
    }

    .l3 {
        width: 9.0729rem;
        height: 1.8542rem;
        background: #F5F6F9;
        border-radius: .276rem;
        font-size: .3906rem;
        font-family: Arial;
        font-weight: 400;
        color: #111;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: .6771rem auto;

        span {
            color: rgba(245, 26, 0, 1);
            text-decoration: underline;
        }
    }

    .l2 {
        padding: 0 .4688rem;
        font-size: .3333rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: Arial;
        font-weight: 400;
        color: #9FA3AA;
    }

    .l1 {
        // height: 1.1198rem;
        font-size: .4792rem;
        font-family: Arial;
        font-weight: bold;
        color: #333333;
        padding: 0 .4688rem;
        margin-top: .8333rem;
        margin-bottom: .5208rem;

        span {
            // display: inline-block;
            width: 1.2031rem;
            height: .4427rem;
            background: #639EFF;
            font-size: .2083rem;
            border-radius: .1406rem;
            color: #fff;
        }
    }

    .footer-fix {
        width: 9.9896rem;
        height: 1.8542rem;
        background: #FFFFFF;
        box-shadow: 0px 0px .9271rem 0px rgba(0, 0, 0, 0.15);
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        z-index: 10000;
        bottom: 0;

        .btn {
            width: 7.5rem;
            height: 1.1094rem;
            background: #F65032;
            border-radius: .5573rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: .3906rem;
            color: #fff
        }

        img {
            width: 1.0208rem;
            margin-left: .3646rem
        }
    }

    .l1 span {
        width: 80px !important;
        height: 20px !important;
        display: inline-block;
        // display: flex;
        // align-items: center;
        // text-align: center;
        text-align: center;
        font-size: 14px;
    }
}

.active {
    color: #9FA3AA;
}</style>
<script setup lang="ts">
import { ref } from 'vue';

const colorMoreVisble = ref(false)
const payVisble = ref(false)
const logVisble = ref(false)
const colorIdx = ref(1)
const sizeIdx = ref(1)
const i = ref(1)
const distance = ref(0)
function c(x:number) {
    i.value = x
}
function handleColorMoreVisible() {
    colorMoreVisble.value = !colorMoreVisble.value
}

function handlePayVisble() {
    payVisble.value = !payVisble.value
}
function handleLogVisble() {
    logVisble.value = !logVisble.value
}
function handleChooseColor(i: number) {
    colorIdx.value = i
}
function handleChooseSize(i: number) {
    sizeIdx.value = i
}

function next() {
    distance.value -= 1.25
}

function prev() {
    distance.value += 1.25
}
const active = ref(0)
function handleAc(i: number) {
    active.value = i
}
</script>