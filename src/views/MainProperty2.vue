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
        <lamp-2 />
    </div>
</template>

<script>

    export default {
    data() {
        return {
            lamps: [
                { id: 2, material: "Random", dimensions: "H 30 x W 20 x D 15", weight: "2,2 kg", electrification: "LED 10W | G9 |  220-240V | 50 Hz" },
            ]
        };
    },
}
</script>

<style>
        
</style>