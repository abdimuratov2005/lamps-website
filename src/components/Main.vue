<template>
    <main id="main" class="main">
        <div class="main__container">
            <div class="main__content">
                <main-text />
                <main-property />
            </div>
            <div class="main__img">
                <main-img class="mainImage" />
                <lamp-1
                    class="changeInImg"
                    :class="{changeImg : changeImgActive}"
                />
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        name: 'Main',
    }
</script>

<style lang="scss">
    .main__img{
        position: relative;
    }
    .changeInImg{
        width: 98px;
        height: 360px;
        position: absolute;
        left: 200px;
        top: 0;
    }
</style>