<template>
    <div
        class="property__info"
        v-for="lamp in lamps"
        >
        <div>
            <strong>Material: </strong>
            {{ lamp.material }}
        </div>
        <br>
        <div>
            <strong>Dimensions (cm): </strong>
            {{ lamp.dimensions }}
        </div>
        <br>
        <div>
            <strong>Net Weight: </strong>
            {{ lamp.weight }}
        </div>
        <br>
        <div>
            <strong>Electrification: </strong>
            <br>
            {{ lamp.electrification }}
        </div>
    </div>
    <div class="property__img">
        <lamp-1 />
    </div>
</template>

<script>
    export default {
        name: 'main-property-1',
        data(){
            return{
                lamps: [
                    {id: 1, material: "Cooper", dimensions: "H 33 x W 15 x D 15", weight: "2,5 kg", electrification: "LED 10W | G9 |  220-240V | 50 Hz" },
                ]
            }
        }
    }
</script>

<style>
        
</style>