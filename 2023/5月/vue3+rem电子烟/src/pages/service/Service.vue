<template>
    <section>
        <div class="wrapper">
            <div>Utilize SinoB2B as Your <span>Purchasing Specialist</span></div>
            <p>Enjoy our all-sided services</p>
        </div>
        <img src="@/assets/service.png" alt="" />
    </section>
    <section class="main">
        <header>Service Fee</header>
        <div class="header-line"></div>
        <p>Kindly check out our service fee criteria, which is based on the high-quality
            services we provide to our clients.</p>
        <div class="card">
            <div class="card-header">
                Bonded Warehousing Fee
            </div>
            <main>
                <div class="row">
                    <div class="red small ">Period</div>
                    <div class="red small ml-6">Price (USD$)</div>
                    <div class="red big ml-6">Service Details</div>
                </div>

                <div class="row">
                    <div class="white small ">0~30 days</div>
                    <div class="white small ml-6">Free</div>
                    <div class="white big ml-6">New buyer privilege</div>
                </div>
                <div class="row">
                    <div class="grey small ">Over 30 days</div>
                    <div class="grey small ml-6">0.03 / piece / Day
                    </div>
                    <div class="grey big ml-6"></div>
                </div>
            </main>
            <div class="note">
                Note : We will soon update warehousing fee over 30 days; The actual amount is subject to changes of everyday
                USD to CNY exchange rate.
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                Standard Operation Fee
            </div>
            <main>
                <div class="row">
                    <div class="red mid " style="width: 2.5417rem;">Service Types</div>
                    <div class="red small ml-6">Price (USD$)</div>
                    <div class="red mid ml-6">Country</div>
                </div>
                <div class="row">
                    <div class="white mid " style="width: 2.5417rem;">Inbound Warehouse</div>
                    <div class="white small ml-6">15 / PO</div>
                    <div class="white mid ml-6">Including ASN (advanced shipping notice) and documentation.</div>
                </div>
                <div class="row">
                    <div class="grey small ">Outbound Warehouse</div>
                    <div class="grey small ml-6">Dropshipping</div>
                    <div class="grey small ml-6">0.95 / Parcel</div>
                    <div class="grey mid ml-6">e-Fulfilment, inclusive of receiving cargo, counting, pick and pack,
                        labeling,
                        customs clearance and effect shipment.</div>
                </div>
                <div class="row">
                    <div class="white small ">Outbound Warehouse</div>
                    <div class="white small ml-6">B2B Shipment</div>
                    <div class="white small ml-6">15 / CBM</div>
                    <div class="white mid ml-6">Shipment management, inclusive of receiving cargo, counting, pick and pack,
                        customs clearance and effect shipment.Minimum charge: $15 (less than 1 CBM)</div>
                </div>
            </main>
            <div class="note">
                Note : The actual amount is subject to changes of everyday USD to CNY exchange rate.
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                Standard Operation Fee
            </div>
            <main>
                <div class="row">
                    <div class="red small ">Service Types</div>
                    <div class="red small ml-6">Price (USD$)</div>
                    <div class="red big ml-6">Service Details</div>
                </div>
                <div class="row">
                    <div class="white small ">Relabeling</div>
                    <div class="white small ml-6"> 0.5 / Piece
                    </div>
                    <div class="white big ml-6"> Relabeling based on buyers need
                    </div>
                </div>
                <div class="row">
                    <div class="grey small ">Quality Inspection</div>
                    <div class="grey small ml-6">0.3 / Piece
                    </div>
                    <div class="grey big ml-6">Quality check piece by piece
                    </div>
                </div>
                <div class="row">
                    <div class="white small ">Custom Inspection
                    </div>
                    <div class="white small ml-6">Free
                    </div>
                    <div class="white big ml-6">SinoB2B assists on possible custom inspection for both dropshipping and B2B
                        shipment.
                    </div>
                </div>
                <div class="row">
                    <div class="grey small ">Customized Package</div>
                    <div class="grey small ml-6" style="width: 5.5729rem;">Negotiate case by case
                    </div>
                </div>
            </main>
            <div class="note">
                Note: The actual amount is subject to changes of everyday USD to CNY exchange rate.
            </div>
        </div>
    </section>
</template>
<style lang="less" scoped>
.main {
    background: #F5F6F9;

    .row {
        display: flex;
        font-size: .0729rem;
    }

    .flex-center {
        display: flex;
        align-items: center;
        padding-left: .1771rem;
    }

    .note {
        font-size: .0885rem;
        font-family: Arial;
        font-weight: 400;
        margin-top: .1823rem;
        color: #9FA3AA;
    }

    .small {
        width: 1.2604rem;
        height: .3073rem;
        background: linear-gradient(90deg, #FF7366, #FFF8E1);
        border-radius: .0313rem;
        overflow: hidden;
        text-overflow: ellipsis;
        // white-space: nowrap;
        .flex-center();
    }

    .mid {
        .small();
        width: 3.0208rem;
    }

    .big {
        .small();
        width: 4.2969rem;
    }

    .ml-6 {
        margin-left: .0313rem;
    }

    .red {
        color: #fff;
        background: linear-gradient(90deg, #FF7366, #FFF8E1);
    }

    .white {
        background: #fff;
        color: #111;
    }

    .grey {
        color: #111;
        background: #F0F1F4;
    }

    .card {
        width: 7.5rem;
        background: #FFFFFF;
        box-shadow: 0px 0px .4688rem 0px rgba(64, 89, 136, 0.15);
        border-radius: .0938rem;
        padding: .375rem .3125rem;
        margin: 0 auto;
        margin-bottom: .375rem;

        .card-header {
            font-size: .151rem;
            font-family: Arial;
            font-weight: bold;
            color: #111111;
            margin-bottom: .25rem;
        }
    }

    header {
        font-size: .1875rem;
        font-family: Arial;
        font-weight: bold;
        text-align: center;
        color: #111111;
        padding-top: .5625rem;
    }

    .header-line {
        width: .9375rem;
        height: .0365rem;
        background: linear-gradient(90deg, #FF1702, rgba(255, 23, 2, 0.14));
        border-radius: .0208rem;
        margin: .1042rem auto .1563rem;
    }

    p {
        width: 3.2917rem;
        font-size: .099rem;
        font-family: Arial;
        font-weight: 400;
        text-align: center;
        color: #9FA3AA;
        line-height: .151rem;
        margin: 0 auto;
        margin-bottom: .3646rem;
    }
}

.wrapper {
    padding-top: 1.0625rem;
    padding-left: 1.25rem;
    padding-bottom: .625rem;

    div {
        width: 2.7198rem;
        font-size: .3021rem;
        font-family: Arial;
        font-weight: bold;
        color: #111111;
        line-height: .401rem;

        span {
            color: #FF1702;
        }
    }

    p {
        font-size: .125rem;
        font-family: Arial;
        font-weight: 400;
        color: #9FA3AA;
        margin-top: .1083rem;
    }
}

section {
    position: relative;
    overflow: hidden;

    img {
        position: absolute;
        top: .8542rem;
        right: 1.25rem;
        width: 3.8229rem;

    }
}
@media (max-width:750px) {
    .main p{
        line-height: unset;
        width: 320px;
    }
    .main{
        .big,.small,.mid{
            height: auto;
    min-height: 30px;
    white-space: pre-wrap;
        }
    }
    .wrapper{
       margin-top: 100px;
       div{
        width: 320px;
        font-size:.6667rem;
        line-height: unset;
       }
    }
    section  img{
            position: relative;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 320px;
        left: 50%;
        margin-left: -160px;
        }
       .main header{
            font-size: 20px;
        }
        .main p{
            font-size: 14px;
        }
        .main .card .card-header{
            font-size: 16px;
        }
        .card main{
            font-size: 10px;
        }
        .main .row{
            font-size: 10px;
        }
        .main .card{
            width: 9rem;
        }
        .main .big{
            width: 200px;
        }
        .main .small{
            width: 80px;
        }
        .main .mid{
            width: 150px;
        }
}
</style>