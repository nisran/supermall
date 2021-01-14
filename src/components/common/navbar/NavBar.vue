<template>
    <div class="nav-bar">
<!--        直接写slot会被替换掉，class不生效-->
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
export default {
name: "NavBar"
}
</script>

<style scoped>
    .nav-bar{
        display: flex;
        height: 44px;
        /*没有文字支撑不起来*/
        line-height: 44px;
        text-align: center;
        box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
    }

    .left, .right{
        width: 60px;
        /*background-color: #ff8198;*/
    }

    .center{
        flex: 1;
        /*background-color: aqua;*/
    }
</style>