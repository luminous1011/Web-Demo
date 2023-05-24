<template>
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
</template>
<style scoped lang="less">
section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 549px;

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
}</style>