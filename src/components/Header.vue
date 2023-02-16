<template>
    <div 
        id="header" 
        class="header"
        :class="{ active : scrollToYTo }"
    >
        <div class="header__container">
            <div class="header__logo">
                <router-link to="/">
                    <logo />
                </router-link>
            </div>
            <div class="header__navbar nav">
                <navbar />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                scrollToYTo: false
            }
        },
        created() {
            window.addEventListener('scroll', this.scrollToY);
        },
        methods: {
            scrollToY(){
                window.scrollY >= 30 ? this.scrollToYTo = true : this.scrollToYTo = false
            }
        },
        name: 'my-header',
    }
</script>