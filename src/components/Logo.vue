<template>
    <img 
        :src="logo" 
        alt="Logo-Ease" 
        class="logo"
    >
</template>

<script>
    export default {
        name: 'logo',
        data(){
            return{
                logo: './img/ease.svg'
            }
        }
    }
</script>

<style scoped lang="scss">
    .logo{
        @media (max-width: 1023.98px) {
            max-width: 180px;
        }
        @media (max-width: 767.98px) {
            max-width: 150px;
        }
    }
</style>