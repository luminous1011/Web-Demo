<template>
    <section>
        <div class="wrapper">
            <h1>Terms & Conditions</h1>
            <main>
                <p>
                    The webste is created by Globex e-Services lnc, Any individual who wants to enter,browse or use this
                    website should read the lega statement beforehand.lf you do not agree witthe legal statement, please do
                    not eter. f you want to continue,it means that you have read,undersitod and agreed to be subjec to this
                    statemen,and compled with alrelevantaws or reaulations. Sinob2b.com retains the rights to change.
                    revise, and renew this statement without prior notice
                </p>
                <header>
                    Terms of Use
                </header>
                <p>
                    BEFORE YOU USE OR ACCESS OUR WEB SITE,PLEASE READ THE FOLLOWNG TERMS OF USE CAREFULLY. IF YOU DO NOT
                    ACCEPT ALL OF THE TERMS OF USEPLEASE DO NOT USE OR ACCESS OUR WEB SITE.
                </p>
                <header>
                    Introduction
                </header>
                <p>
                    Welcome to Sinob2.com, your reliable online marketplace. www.Sinb2b.com is operated by Globex e-Sevices
                    inc. The Terms of Use describe the termis and conditionsapplicable to your access and use of the
                    Site.This document is a legaly binding agreement (the ?Agrement?) betwen you as the userts of the Site
                    (refered to as ?you?. youror ?User? hereinater)and www.Sinob2b.com. Please review the folowing basic
                    rules that govem your use and access of the Site (the ?Agreement?), Please also note that youruse or
                    access ofthe Site constutes your unconditional aoreement to folow and be bound by this Aorement athouah
                    you may ?bookmark? a particular portion of this Site andthereby bypass this Agreement. If you do not
                    acceptterms of thisAgreement,please do not use or access the Site.
                </p>
                <header>
                    1.Application of Terms ofUse
                </header>
                <p>
                    1.1 Your use and access of he Site and ts services. sotware and products (colecivey, the Services are
                    govemed by al terms and conditons related to this Aareement as welas the Security and Privacy Policy,
                    the lntelectual Property Rights Policy, and any other rules and policies of the Site that Sinob2b.com
                    may publish from time to time.ThisAgreement and such other rules and policies of the Site are olechively
                    refered to herein as he"Terms’ Meanwhile, with regard to your purchases and transactions on the
                    Site,theRegistration Agreement and related terms and conditions between you as a buyer or Supler and
                    Sinob2b.com wi be binding upon you.Therefore, we recommend that you readhis Agreement and al relevant
                    additional terms,conditions and information,incuding, but not limited tothe Registration Agreemen, the
                    Securnty and Privacy Policy and theIntellectual Property Rights Policy, carefully.
                </p>
                <p>
                    1.2 Please be advised that your us andor access to the Site are also subiect to any terms and conditions
                    apolicable to certain specific Member Services (defined below. in theevent of any contictor
                    inconsistency between he aforesaid terms, condtions and information and the terms and condtions
                    applicable to that specic Member Servicethe termsand conditions applicable to the specific Member
                    Service shall prevail.
                </p>
                <p>1.3 Member Services means a certain eture or function that Ssinob2b.com reserves for only certain paying
                    Users who undergo a specic egistration or verification process.Thecontents and fee structure of such
                    Member Services shal be determined by Sinob2b.com independenty and reported to the applicable Users from
                    fime to fime and at any fimethrough a notice posted on the Site, email or other means.</p>
                <p>
                    1.4 You acknowledge and agree that Sinob2b.com may amend any Ters at any time by posting the relevant
                    amended and restated Ters on the Site. By continuing to use theServices or the Site, you agree that the
                    amended Terms apply to you.
                </p>
                <p>
                    1.5 lf Sinob2b.com has posted or provded a transaton of the Engish anguage version of the erms, you
                    agree that the transaton is provided tor convenience ony and that theEnglish language version will
                    govern your use of the Services or the Site.
                </p>
                <p>
                    1.6 The Terms may not otherwise be modified except in writing by an authorized officer of Sinob2b.com
                </p>
                <header>
                    2.The Use of the Site
                </header>
                <p>
                    2.1 By acepting these Tems of Use through your use or access of he Site, you represent that you are (a)
                    a person of legal age and able to form a legaly binding contractin thejurisdiction in wich you are a
                    resident and rom which you use the Serices, and (b permited to receive any Services under the aws of the
                    jurisdiction in which you are a residentand from which you use the Services. lf you do not agree to (or
                    cannot comply with) this Section 2.1, do not use this Site.
                </p>
                <p>
                    2.2 Al blig and registration normaton provded on the Site must be truthful and accurate. Each User shal
                    be solely responsible for the informaton and content posted on theSite. Providing untruthful or
                    inaccurate information constitutes a breach of these Terms of Use.
                </p>
                <p>
                    2.3 Al materals, incuding images, text, lustratons, designs, icons, photographs, programs, music clips
                    or downloads, video clips and writen and other materials that are part ofthis Site (colectvel,the
                    "Contents are intended solely for personal, non-commercial use. You may download or copy the Contents
                    and other downloadable materals displayed onthe Site foryour personal use only.No righ:, fle or
                    interestin any downladed materials or software is ransfered to you as a result of any such downloading
                    or copying. You maya reroduce ayant as mnted ahava as ast dsu dsna md mreate derate wrs tam,s t m a sa t
                    yntn ay way inwha t
                </p>
                 <footer @click="show" v-if="vis">
                   View full Terms & Conditions
                </footer>
            </main>

        </div>
    </section>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const vis=ref(true)
function show(){
    vis.value=false
}
</script>

<style lang="less" scoped>
section {
    min-height: 50vh;
    // padding-bottom: 100px;
}

main {
    background: #F5F6F9;
    position: relative;
    border-radius: 6px;
}
footer{
font-size: 16px;
font-family: Arial;
font-weight: 400;
bottom: 0;

text-decoration: underline;
color: #FF1702;
position: absolute;
cursor: pointer;
width: 75vw;
margin-left: -24px;
margin-bottom: -24px;
height: 200px;
display: flex;
align-items: center;
justify-content: center;
background:  linear-gradient(0deg, #fff, #fff,  #fff,  #fff,  rgba(255,255,255,.5));
}
header {
    margin-bottom: 30px;
}

.wrapper {
    width: 75%;
    margin: 0 auto;
    font-family: Arial;
    padding-top: 100px;

    h1 {
        font-size: 40px;
        font-weight: 600;
        font-family: Arial;
        color: #111111;
    }

    main {
        padding: 24px;
        overflow: hidden;

        header {
            font-size: 16px;
            font-weight: 600;

        }

        div {
            margin: 10px 0 10px;
            width: 30px;
            height: 3px;
            background: #FF1803;
        }

        p {
            font-size: 14px;
            margin-bottom: 40px;
        }
    }


}</style>