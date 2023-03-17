import { defineStore } from "pinia";

export const useGlobalStore = defineStore('globalStore', {
    state: () => ({
        lamp1: './img/lamp1.png',
        lamp2: './img/lamp2.png',
        lamp3: './img/lamp3.png',
        logo: './img/ease.svg',
        mainImg: './img/main.webp',
        mainImgNight: './img/main-night.webp',
        img1: true,
        img2: false,
        img3: false,
        sun: false,
        night: true,
        menuBar: false,
        nightIcon: './img/night.svg',
        sunIcon: './img/sun.svg',
        navItems: [
            { id: 1, value: 'COLLESCTIONS' },
            { id: 2, value: 'BLOG' },
            { id: 3, value: 'ABOUT' },
            { id: 4, value: 'CONTACTS' }
        ],
        lamps_1: [
            { id: 1, material: "Cooper", dimensions: "H 33 x W 15 x D 15", weight: "2,5 kg", electrification: "LED 10W | G9 |  220-240V | 50 Hz" },
        ],
        lamps_2: [
            { id: 2, material: "Random", dimensions: "H 30 x W 20 x D 15", weight: "2,2 kg", electrification: "LED 10W | G9 |  220-240V | 50 Hz" },
        ],
        lamps_3: [
            { id: 3, material: "Metal", dimensions: "H 45 x W 12 x D 12", weight: "2,4 kg", electrification: "LED 10W | G9 |  220-240V | 50 Hz" },
        ]
    }),
    getters: {

    },
    actions: {
        changeImgActive1() {
            this.img1 = true
            this.img2 = false
            this.img3 = false
        },
        changeImgActive2() {
            this.img1 = false
            this.img2 = true
            this.img3 = false
        },
        changeImgActive3() {
            this.img1 = false
            this.img2 = false
            this.img3 = true
        },
        sunMode() {
            this.sun = true
            this.night = false
        },
        nightMode() {
            this.sun = false
            this.night = true
        },
        activeMenu() {
            this.menuBar = !this.menuBar
        }
    }
})



//ImgActive1(e){
//    this.img2 = false, this.img3 = false, this.img1 = true
//},
//ImgActive2(e){
//    this.img2 = true, this.img3 = false, this.img1 = false
//},
//ImgActive3(e){
//    this.img2 = false, this.img3 = true, this.img1 = false
//},
//sunny(){
//    this.sun = true, this.night = false
//}
//,
//dark(){
//    this.sun = false, this.night = true
//},