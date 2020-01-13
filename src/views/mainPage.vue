<template>
    <div>
<!--        TODO:This works, but think about making it more modular by using routing capabilities-->
        <v-tabs v-model="tabs" dark slider-color="blue darken-1" optional>
            <v-tab>Page 1</v-tab>
            <v-tab>Page 2 & 3</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tabs">
            <v-tab-item>
                p1
                <router-view name="page1"/>
            </v-tab-item>
            <v-tab-item>
                p2
                <router-view name="page2"/>
            </v-tab-item>
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