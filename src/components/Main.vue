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
        data: () => ({
            img1: [true],
            img2: false,
            img3: false,
            sun: true,
            night: false,
        }),
        methods: {
            ImgActive1(e){
                this.img2 = false, this.img3 = false, this.img1 = true
            },
            ImgActive2(e){
                this.img2 = true, this.img3 = false, this.img1 = false
            },
            ImgActive3(e){
                this.img2 = false, this.img3 = true, this.img1 = false
            },
            sunny(){
                this.sun = true, this.night = false
            }
            ,
            dark(){
                this.sun = false, this.night = true
            },
        },
    }
</script>

<style lang="scss">
    .changeInImg{
        width: 98px;
        height: 360px;
        position: absolute;
        left: 230px;
        top: -150px;
        @media (max-width: 1400px){
            left: 300px;
            height: 400px;
            width: 100px;
        }
        @media (max-width: 1023.98px){
            left: 230px;
        }
        @media (max-width: 767.98px){
            left: 150px;
            top: -80px;
            height: 250px;
            width: 70px;
        }
        @media (max-width: 574.98px){
            left: 100px;
            top: -130px;
        }
        @media (max-width: 400px){
            left: 70px;
            width: 60px;
            height: 230px;
        }
        @media (max-width: 350px){
            width: 50px;
            height: 200px;
        }
    }
</style>