<template>
    <section class="pc-show">
        <main class="left">
            <header>All Categories</header>
            <a-collapse>
                <a-collapse-panel key="1" header="Tanks">
                    <div class="a">
                        <a-checkbox>Clearomizers</a-checkbox>
                    </div>
                    <div class="a">
                        <a-checkbox>Mesh Tanks</a-checkbox>
                    </div>

                    <div class="a">
                        <a-checkbox>MTL Tanks</a-checkbox>
                    </div>
                    <div class="a">
                        <a-checkbox>Sub Ohm Tanks
                        </a-checkbox>
                    </div>
                    <div class="a">
                        <a-checkbox>RDA</a-checkbox>
                    </div>
                    <div class="a">
                        <a-checkbox>RTA</a-checkbox>
                    </div>
                    <div class="a">
                        <a-checkbox>RDTA</a-checkbox>
                    </div>
                    <div class="a">
                        <a-checkbox>Other Tanks</a-checkbox>
                    </div>
                </a-collapse-panel>
            </a-collapse>
            <a-collapse>
                <a-collapse-panel key="1" header="Mods">
                    <div class="a">
                        <a-checkbox>High Power Mods</a-checkbox>
                    </div>
                    <div class="a">
                        <a-checkbox>Vape Pen Battery</a-checkbox>
                    </div>
                    <div class="a">
                        <a-checkbox>
                            Squonk Mods</a-checkbox>
                    </div>
                    <div class="a">
                        <a-checkbox>
                            Other Mods</a-checkbox>
                    </div>
                </a-collapse-panel>
            </a-collapse>
            <a-collapse>
                <a-collapse-panel key="1" header="E-Liquids">
                    <div class="a">
                        <a-checkbox>High Power Mods</a-checkbox>
                    </div>
                    <div class="a">
                        <a-checkbox>Vape Pen Battery</a-checkbox>
                    </div>
                    <div class="a">
                        <a-checkbox>
                            Squonk Mods</a-checkbox>
                    </div>
                    <div class="a">
                        <a-checkbox>
                            Other Mods</a-checkbox>
                    </div>
                </a-collapse-panel>
            </a-collapse>
            <a-collapse>
                <a-collapse-panel key="1" header="Pods">
                    <div class="a">
                        <a-checkbox>High Power Mods</a-checkbox>
                    </div>
                    <div class="a">
                        <a-checkbox>Vape Pen Battery</a-checkbox>
                    </div>
                    <div class="a">
                        <a-checkbox>
                            Squonk Mods</a-checkbox>
                    </div>
                    <div class="a">
                        <a-checkbox>
                            Other Mods</a-checkbox>
                    </div>
                </a-collapse-panel>
            </a-collapse>
            <a-collapse>
                <a-collapse-panel key="1" header="Kits">
                    <div class="a">
                        <a-checkbox>High Power Mods</a-checkbox>
                    </div>
                    <div class="a">
                        <a-checkbox>Vape Pen Battery</a-checkbox>
                    </div>
                    <div class="a">
                        <a-checkbox>
                            Squonk Mods</a-checkbox>
                    </div>
                    <div class="a">
                        <a-checkbox>
                            Other Mods</a-checkbox>
                    </div>
                </a-collapse-panel>
            </a-collapse>
            <a-collapse>
                <a-collapse-panel key="1" header="Accessories">
                    <div class="a">
                        <a-checkbox>High Power Mods</a-checkbox>
                    </div>
                    <div class="a">
                        <a-checkbox>Vape Pen Battery</a-checkbox>
                    </div>
                    <div class="a">
                        <a-checkbox>
                            Squonk Mods</a-checkbox>
                    </div>
                    <div class="a">
                        <a-checkbox>
                            Other Mods</a-checkbox>
                    </div>
                </a-collapse-panel>
            </a-collapse>
        </main>
        <main class="right">
            <header>
                <a-dropdown placement="bottom">
                    <span class="ant-dropdown-link" @click.prevent>
                        All Brands
                        <img src="@/assets/down.png" style="" alt="" />
                    </span>
                    <template #overlay>
                        <a-menu>
                            <div class="aa">
                                <a-input placeholder="search brands"></a-input>
                                <a-menu-item>
                                    11
                                </a-menu-item>
                            </div>

                        </a-menu>
                    </template>
                </a-dropdown>
                <div style="width: 1px;
                                                                margin: 0 15px;
                                                    height: 17px;
                                                    background: #E5E5E5;"></div>
                <a-dropdown placement="bottom">
                    <span class="ant-dropdown-link" @click.prevent>
                        Popular
                        <img src="@/assets/down.png" alt="" />
                    </span>
                </a-dropdown>
                <div style="color: rgba(159, 163, 170, 1);margin-left: 24px;">
                    Newest
                </div>
                <div style="color: rgba(159, 163, 170, 1);margin-left: 24px;">
                    In Stock
                </div>
            </header>
            <div class="list">
                <div class="item">
                    <div class="pic"><img src="@/assets/shopping/s1.png" alt=""></div>
                    <div class="tilte">Geekvape Aegis 1FC Pod System</div>
                    <div class="dec">Clearomizers</div>
                    <div class="bottom">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s1.png" alt="">
                        <span>3 Reviews </span>
                        <img src="@/assets/shopping/heart-s1.png" class="heart" alt="">
                    </div>
                </div>
                <div class="item">
                    <div class="pic"><img src="@/assets/shopping/s2.png" alt=""></div>
                    <div class="tilte">Geekvape Aegis 1FC Pod System</div>
                    <div class="dec">Clearomizers</div>
                    <div class="bottom">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s1.png" alt="">
                        <span>3 Reviews </span>
                        <img src="@/assets/shopping/heart-s1.png" class="heart" alt="">
                    </div>
                </div>
                <div class="item">
                    <div class="pic"><img src="@/assets/shopping/s3.png" alt=""></div>
                    <div class="tilte">Geekvape Aegis 1FC Pod System</div>
                    <div class="dec">Clearomizers</div>
                    <div class="bottom">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s1.png" alt="">
                        <span>3 Reviews </span>
                        <img src="@/assets/shopping/heart-s1.png" class="heart" alt="">
                    </div>
                </div>
                <div class="item">
                    <div class="pic"><img src="@/assets/shopping/s4.png" alt=""></div>
                    <div class="tilte">Geekvape Aegis 1FC Pod System</div>
                    <div class="dec">Clearomizers</div>
                    <div class="bottom">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s1.png" alt="">
                        <span>3 Reviews </span>
                        <img src="@/assets/shopping/heart-s1.png" class="heart" alt="">
                    </div>
                </div>
                <div class="item">
                    <div class="pic"><img src="@/assets/shopping/s5.png" alt=""></div>
                    <div class="tilte">Geekvape Aegis 1FC Pod System</div>
                    <div class="dec">Clearomizers</div>
                    <div class="bottom">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s1.png" alt="">
                        <span>3 Reviews </span>
                        <img src="@/assets/shopping/heart-s1.png" class="heart" alt="">
                    </div>
                </div>
                <div class="item">
                    <div class="pic"><img src="@/assets/shopping/s6.png" alt=""></div>
                    <div class="tilte">Geekvape Aegis 1FC Pod System</div>
                    <div class="dec">Clearomizers</div>
                    <div class="bottom">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s1.png" alt="">
                        <span>3 Reviews </span>
                        <img src="@/assets/shopping/heart-s1.png" class="heart" alt="">
                    </div>
                </div>
                <div class="item">
                    <div class="pic"><img src="@/assets/shopping/s7.png" alt=""></div>
                    <div class="tilte">Geekvape Aegis 1FC Pod System</div>
                    <div class="dec">Clearomizers</div>
                    <div class="bottom">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s1.png" alt="">
                        <span>3 Reviews </span>
                        <img src="@/assets/shopping/heart-s1.png" class="heart" alt="">
                    </div>
                </div>
                <div class="item">
                    <div class="pic"><img src="@/assets/shopping/s8.png" alt=""></div>
                    <div class="tilte">Geekvape Aegis 1FC Pod System</div>
                    <div class="dec">Clearomizers</div>
                    <div class="bottom">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s1.png" alt="">
                        <span>3 Reviews </span>
                        <img src="@/assets/shopping/heart-s1.png" class="heart" alt="">
                    </div>
                </div>
                <div class="item">
                    <div class="pic"><img src="@/assets/shopping/s9.png" alt=""></div>
                    <div class="tilte">Geekvape Aegis 1FC Pod System</div>
                    <div class="dec">Clearomizers</div>
                    <div class="bottom">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s1.png" alt="">
                        <span>3 Reviews </span>
                        <img src="@/assets/shopping/heart-s1.png" class="heart" alt="">
                    </div>
                </div>
                <div class="item">
                    <div class="pic"><img src="@/assets/shopping/s10.png" alt=""></div>
                    <div class="tilte">Geekvape Aegis 1FC Pod System</div>
                    <div class="dec">Clearomizers</div>
                    <div class="bottom">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s1.png" alt="">
                        <span>3 Reviews </span>
                        <img src="@/assets/shopping/heart-s1.png" class="heart" alt="">
                    </div>
                </div>
                <div class="item">
                    <div class="pic"><img src="@/assets/shopping/s11.png" alt=""></div>
                    <div class="tilte">Geekvape Aegis 1FC Pod System</div>
                    <div class="dec">Clearomizers</div>
                    <div class="bottom">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s1.png" alt="">
                        <span>3 Reviews </span>
                        <img src="@/assets/shopping/heart-s1.png" class="heart" alt="">
                    </div>
                </div>
                <div class="item">
                    <div class="pic"><img src="@/assets/shopping/s12.png" alt=""></div>
                    <div class="tilte">Geekvape Aegis 1FC Pod System</div>
                    <div class="dec">Clearomizers</div>
                    <div class="bottom">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s1.png" alt="">
                        <span>3 Reviews </span>
                        <img src="@/assets/shopping/heart-s1.png" class="heart" alt="">
                    </div>
                </div>
            </div>
        </main>
    </section>
    <section class="h5-show">
        <header>
            <div>All</div>
            <div>Tanks</div>
            <div>Mods</div>
            <div>E-Liquids</div>
            <div>Pods</div>
            <div>Kits</div>
            <div>
                Accessories
            </div>
        </header>
        <div class="sec-header">
            <a-dropdown placement="bottom">
                <span class="ant-dropdown-link" @click.prevent>
                    All Brands
                    <img src="@/assets/down.png" alt="" />
                </span>

            </a-dropdown>
            <div style="width: 1px;
                                                                margin: 0 15px;
                                                    height: 17px;
                                                    background: #E5E5E5;"></div>
            <a-dropdown placement="bottom">
                <span class="ant-dropdown-link" @click.prevent>
                    Popular
                    <img src="@/assets/down.png" alt="" />
                </span>
            </a-dropdown>
            <div style="color: rgba(159, 163, 170, 1);margin-left: 24px;">
                Newest
            </div>
            <div style="color: rgba(159, 163, 170, 1);margin-left: 24px;">
                In Stock
            </div>
        </div>
        <div class="list">
            <div class="item">
                <div class="pic"><img src="@/assets/shopping/s1.png" alt=""></div>
                <div class="tilte">Geekvape Aegis 1FC Pod System</div>
                <div class="dec">Clearomizers</div>
                <div class="bottom">
                    <img src="@/assets/shopping/star-s2.png" alt="">
                    <img src="@/assets/shopping/star-s2.png" alt="">
                    <img src="@/assets/shopping/star-s2.png" alt="">
                    <img src="@/assets/shopping/star-s2.png" alt="">
                    <img src="@/assets/shopping/star-s1.png" alt="">
                    <span>3 Reviews </span>
                    <img src="@/assets/shopping/heart-s1.png" class="heart" alt="">
                </div>
            </div>
            <div class="item">
                    <div class="pic"><img src="@/assets/shopping/s2.png" alt=""></div>
                    <div class="tilte">Geekvape Aegis 1FC Pod System</div>
                    <div class="dec">Clearomizers</div>
                    <div class="bottom">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s1.png" alt="">
                        <span>3 Reviews </span>
                        <img src="@/assets/shopping/heart-s1.png" class="heart" alt="">
                    </div>
                </div>
                <div class="item">
                    <div class="pic"><img src="@/assets/shopping/s3.png" alt=""></div>
                    <div class="tilte">Geekvape Aegis 1FC Pod System</div>
                    <div class="dec">Clearomizers</div>
                    <div class="bottom">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s1.png" alt="">
                        <span>3 Reviews </span>
                        <img src="@/assets/shopping/heart-s1.png" class="heart" alt="">
                    </div>
                </div>
                <div class="item">
                    <div class="pic"><img src="@/assets/shopping/s4.png" alt=""></div>
                    <div class="tilte">Geekvape Aegis 1FC Pod System</div>
                    <div class="dec">Clearomizers</div>
                    <div class="bottom">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s1.png" alt="">
                        <span>3 Reviews </span>
                        <img src="@/assets/shopping/heart-s1.png" class="heart" alt="">
                    </div>
                </div>
                <div class="item">
                    <div class="pic"><img src="@/assets/shopping/s5.png" alt=""></div>
                    <div class="tilte">Geekvape Aegis 1FC Pod System</div>
                    <div class="dec">Clearomizers</div>
                    <div class="bottom">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s1.png" alt="">
                        <span>3 Reviews </span>
                        <img src="@/assets/shopping/heart-s1.png" class="heart" alt="">
                    </div>
                </div>
                <div class="item">
                    <div class="pic"><img src="@/assets/shopping/s6.png" alt=""></div>
                    <div class="tilte">Geekvape Aegis 1FC Pod System</div>
                    <div class="dec">Clearomizers</div>
                    <div class="bottom">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s1.png" alt="">
                        <span>3 Reviews </span>
                        <img src="@/assets/shopping/heart-s1.png" class="heart" alt="">
                    </div>
                </div>
                <div class="item">
                    <div class="pic"><img src="@/assets/shopping/s7.png" alt=""></div>
                    <div class="tilte">Geekvape Aegis 1FC Pod System</div>
                    <div class="dec">Clearomizers</div>
                    <div class="bottom">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s1.png" alt="">
                        <span>3 Reviews </span>
                        <img src="@/assets/shopping/heart-s1.png" class="heart" alt="">
                    </div>
                </div>
                <div class="item">
                    <div class="pic"><img src="@/assets/shopping/s8.png" alt=""></div>
                    <div class="tilte">Geekvape Aegis 1FC Pod System</div>
                    <div class="dec">Clearomizers</div>
                    <div class="bottom">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s1.png" alt="">
                        <span>3 Reviews </span>
                        <img src="@/assets/shopping/heart-s1.png" class="heart" alt="">
                    </div>
                </div>
                <div class="item">
                    <div class="pic"><img src="@/assets/shopping/s9.png" alt=""></div>
                    <div class="tilte">Geekvape Aegis 1FC Pod System</div>
                    <div class="dec">Clearomizers</div>
                    <div class="bottom">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s1.png" alt="">
                        <span>3 Reviews </span>
                        <img src="@/assets/shopping/heart-s1.png" class="heart" alt="">
                    </div>
                </div>
                <div class="item">
                    <div class="pic"><img src="@/assets/shopping/s10.png" alt=""></div>
                    <div class="tilte">Geekvape Aegis 1FC Pod System</div>
                    <div class="dec">Clearomizers</div>
                    <div class="bottom">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s2.png" alt="">
                        <img src="@/assets/shopping/star-s1.png" alt="">
                        <span>3 Reviews </span>
                        <img src="@/assets/shopping/heart-s1.png" class="heart" alt="">
                    </div>
                </div>
        </div>
    </section>
</template>
<style lang="less" scoped>
section.pc-show {
    padding: .9375rem 1.25rem;
    display: flex;


    .right {
        width: 5.8833rem;
        margin-left: .625rem;
        margin-left: 1.75rem;
        .bottom {
            margin-top: 10px;
            padding-left: .125rem;
            font-size: 12px;
            font-family: Arial;
            font-weight: 400;
            color: #9FA3AA;
            position: relative;

            span {
                margin-left: .125rem;
            }

            img {
                width: .0781rem;
                height: .0781rem;
                margin-left: .026rem;
            }

            .heart {
                width: .1094rem;
                height: .0885rem;
                position: absolute;
                right: .125rem;
            }
        }

        .list {
            display: flex;
            flex-wrap: wrap;

            .dec {
                font-size: 12px;
                font-family: Arial;
                font-weight: 400;
                color: #9FA3AA;
                padding-left: .145rem;
                margin-top: 10px;
            }

            .tilte {
                margin-top: .1083rem;
                padding: 0 .125rem;
                text-align: center;
                font-size: .0885rem;
                white-space: nowrap;

                font-family: Arial;
                font-weight: bold;
                color: #333333;
                &:hover{
                    color: #f51f00;
                }
            }

            margin-top: .1875rem;

            .pic {
                padding: .1875rem .2083rem 0;

                img {
                    width: 1.349rem;
                    mix-blend-mode: multiply; //正片叠底
                    height: 1.349rem;
                }
            }
        }

        .item {
            width: 1.7604rem;
            height: 2.2865rem;
            background: #F5F6F9;
            border-radius: .0938rem;
            margin-left: .125rem;
            margin-bottom: .125rem;
        }

        header {
            display: flex;
            justify-content: flex-end;
            align-items: center;

            img {
                width: 0.0531rem;
                height: 0.0313rem;
                margin-left: 0.0313rem;
            }
        }
    }

    .a+.a {
        margin-top: 10px;
    }

    .left {
        width: 1.25rem;
        position: fixed;
        overflow: hidden;
        // padding-bottom: 2rem;
        overflow: scroll;
    height: 4rem;
        header {
            font-size: .151rem;
            font-family: Arial;
            font-weight: bold;
            color: #333333;
            margin-bottom: .1563rem;
        }
    }
}

.aa {
    padding: .125rem;

    input {
        width: 1.9375rem;
        height: .25rem;
        background: rgba(245, 246, 249, 0);
        border: .0104rem solid #E6E8EB;
        border-radius: .125rem;
    }
}

.h5-show {
    .list {
        display: flex;
        display: flex;
            flex-wrap: wrap;
            padding-bottom: 100px;
        .item {
           &:nth-child(2n){
            margin-left: .1875rem;
           }
           margin-bottom: .1875rem;

            .tilte {
                font-size: .3333rem;
                font-family: Arial;
                font-weight: bold;
                padding-left: 15px;
                color: #333333;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .dec {
                font-size: .2604rem;
                font-family: Arial;
                font-weight: 400;
                padding-left: 15px;
                color: #9FA3AA;
            }

            .bottom {
                height: 20px;
                display: flex;
                align-items: center;
                padding-left: 15px;

                img {
                    width: .276rem;
                    height: .276rem;
                }

                span {
                    font-size: .2604rem;
                    font-family: Arial;
                    font-weight: 400;
                    color: #9FA3AA;
                    margin-left: 10px;
                }

                .heart {
                    width: .4323rem;
                    height: .3646rem;
                    margin-left: 20px;
                }
            }

            width: 4.9063rem;
            height: 6.7708rem;
            background: #F5F6F9;

            .pic img {
                width: 3.6094rem;
                height: 3.6094rem;
            }

            .pic {
                padding: .474rem .7135rem .5469rem .5833rem;

            }
        }
    }

    padding-top: 2.0313rem;

    .sec-header {
        display: flex;
        font-size: .3333rem;
        font-family: Arial;
        font-weight: 400;
        color: #333333;
        height: 1.5104rem;
        align-items: center;
        padding-left: .4688rem;

        img {
            width: .2083rem;
            height: .1198rem;
        }
    }

    header {
        height: 1.6094rem;
        padding: 0 .4688rem;
        display: flex;
        align-items: center;
        overflow: scroll;
        white-space: nowrap;
        border-bottom: solid #E5E5E5 1px;

        &::-webkit-scrollbar {
            display: none;
        }

        div {
            margin-left: 30px;
            font-size: .3333rem;
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
    font-size: .1146rem;

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
}

/deep/ .ant-collapse {
    padding-top: .0938rem;
    margin-top: .2604rem;
    border-top: 1px solid #e8e8e8 !important;
}

/deep/ .ant-checkbox-wrapper span {
    padding-right: 0;
}

/deep/ .ant-checkbox-checked .ant-checkbox-inner {
    background: #f51f00;
    border-color: #f51f00;
}

.ant-dropdown-link,.right{
    font-size: 14px;
}
</style>