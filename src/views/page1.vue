<template>
    <div>
        <v-container fluid>
            <v-row>
                <v-col md="3" sm="4">
                    <v-card tile>
                        <v-list subheader :three-line="threeLines" :two-line="twoLines">
                            <v-subheader>
                                Sites
                            </v-subheader>
                            <v-list-item-group v-model="item">
<!--                                //TODO: We must find a way to sneak in tooltips for each list item in case the item title is truncated-->
                                <v-list-item v-for="(item, i) in $store.getters.getSites" :key="i">
                                    <v-list-item-content>
                                        <v-list-item-title v-html="item.site" />
                                        <v-list-item-subtitle v-if="twoLines || threeLines && item.subtitle" v-html="item.subtitle" />
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-card>
                </v-col>
                <v-col md="9" sm="8">
<!--                    TODO: Replace place holder img before building-->
<!--                    <v-img v-if="item != null && listItems[item].image" :src="listItems[item].image" max-width="1920px" max-height="1080px" contain position="top">-->
                    <v-img :src="src" max-width="1920px" max-height="1080px" contain position="top">
                        <template v-slot:placeholder>
                            <v-row class="fill-height ma-0" align="center" justify="center">
                                <v-progress-circular indeterminate />
                            </v-row>
                        </template>
                    </v-img>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "page1",
        data: () => ({
            src: require("@/assets/placeholder.png"),       //Placeholder, remove when real data is provided
            twoLines: false,
            threeLines: false,
            item: null
        }),
        watch: {}
    }
</script>

<style scoped>

</style>