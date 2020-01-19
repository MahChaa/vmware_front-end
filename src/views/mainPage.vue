<template>
    <div>
        <v-tabs v-model="tabs" dark slider-color="blue darken-1" optional>
            <v-tab to="page1">Page 1</v-tab>
            <v-tab to="page2_3">Page 2 & 3</v-tab>
        </v-tabs>
        <router-view />
    </div>
</template>

<script>
    export default {
        name: "mainPage",
        data: () => ({
            tabs: null
        })
    }
</script>

<style scoped>

</style>