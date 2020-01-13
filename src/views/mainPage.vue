<template>
    <div>
<!--        TODO:This works, but think about making it more modular by using routing capabilities-->
        <v-tabs v-model="tabs" dark slider-color="blue darken-1">
            <v-tab>Page 1</v-tab>
            <v-tab>Page 2 & 3</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tabs">
            <v-tab-item>YOYOYO</v-tab-item>
            <v-tab-item>YEYEYE</v-tab-item>
        </v-tabs-items>
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