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
        <lamp-3 />
    </div>
</template>

<script>
    export default {
    data() {
        return {
            lamps: [
                { id: 3, material: "Metal", dimensions: "H 45 x W 12 x D 12", weight: "2,4 kg", electrification: "LED 10W | G9 |  220-240V | 50 Hz" },
            ]
        };
    },
}
</script>

<style>
        
</style>