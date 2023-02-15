<template>
    <main id="main" class="main">
        <div class="main__container">
            
            <div class="main__content">
                <main-text />
                <main-property
                    @changeImgActive1="ImgActive1"
                    @changeImgActive2="ImgActive2"
                    @changeImgActive3="ImgActive3"
                    @sun="sunny"
                    @night="dark"
                />
            </div>
            
            <div class="main__img">
                <main-img class="sunny"
                    :class="{active : sun}"
                />
                <main-img-night class="dark"
                    :class="{active : night}"
                />
                <div class="image1"
                    :class="{active : img1}"
                >
                    <lamp-1
                        class="changeInImg"
                        style="top: -70px;"
                    />
                </div>
                <div class="image2"
                    :class="{active : img2}"
                    
                >
                    <lamp-2
                        class="changeInImg"
                        style="top: -30px;"
                    />
                </div>
                <div class="image3"
                    :class="{active : img3}"
                >
                    <lamp-3
                        class="changeInImg"
                    />
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        name: 'my-main',
        data(){
            return{
                img1: true,
                img2: false,
                img3: false,
                sun: true,
                night: false
            }
        },
        methods: {
            ImgActive1(){
                this.img2 = false,
                this.img3 = false,
                this.img1 = true
            },
            ImgActive2(){
                this.img2 = true,
                this.img3 = false,
                this.img1 = false
            },
            ImgActive3(){
                this.img2 = false,
                this.img3 = true,
                this.img1 = false
            },
            sunny(){
                this.sun = true,
                this.night = false
            }
            ,
            dark(){
                this.sun = false,
                this.night = true
            }
        }
    }
</script>

<style lang="scss">
    .changeInImg{
        width: 98px;
        height: 360px;
        position: absolute;
        left: 230px;
        top: -150px;
    }
</style>