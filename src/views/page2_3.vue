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
                            <v-list-item-group v-model="site">
                                <v-list-group v-for="(group, i) in $store.getters.getSites" :key="i" prepend-icon="account-circle">
                                    <template v-slot:activator>
                                        <v-list-item-title v-html="group.site" />
                                        <v-list-item-subtitle v-if="twoLines || threeLines && group.details" v-html="group.details" />
                                    </template>
                                    <!--                                //TODO: We must find a way to sneak in tooltips for each list item in case the item title is truncated-->
                                    <v-list-item v-for="(item, j) in $store.getters.getServers[i]" :key="j">
                                        <v-list-item-content>
                                            <v-list-item-title v-html="item.server" />
                                            <v-list-item-subtitle v-if="twoLines || threeLines && item.details" v-html="item.details" />
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list-group>
                            </v-list-item-group>
                        </v-list>
                    </v-card>
                </v-col>
                <v-col md="9" sm="8" style="border-left: solid darkslategrey 1px">
                    <!--                    TODO: Build where data will be shown-->
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "page2_3",
        data: () => ({
            twoLines: false,
            threeLines: false,
            site: null,
            server: null
        })
    }
</script>

<style scoped>

</style>