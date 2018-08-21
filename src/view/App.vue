<template>
    <div class="vueCotnainer">
        这是vue里的文本
        <div class="loadingByImage">
            <div class="leftDiv">
                <div class="leftInnerDiv" id = "leftInnerDiv"></div>
            </div>
            <div class="rightDiv">
                <div class="rightInnerDiv" id = "rightInnerDiv"></div>
            </div>
        </div>
        <div class="loadingByNormal">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>
<script>
    import * as rotate from "../js/rotate.js";
    export default {
        data(){
            return {}
        },
        mounted() {
            this.beginRotate();
        },
        methods:{
            beginRotate: () => {
                var rightEle = document.getElementById("rightInnerDiv");
                var leftEle = document.getElementById("leftInnerDiv");
                rotate.circle(rightEle, leftEle, true);
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "../scss/loading.scss"
</style>