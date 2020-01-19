import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        sites: [
            [
                {
                    site: "Site 1",
                    subtitle: null,
                    image: null
                },
                [
                    {
                        server: "VM 1",
                        subtitle: null
                    },
                    {
                        server: "VM 2",
                        subtitle: null
                    },
                    {
                        server: "VM 3",
                        subtitle: null
                    }
                ]
            ],
            [
                {
                    site: "Site 2",
                    subtitle: null,
                    image: null
                },
                [
                    {
                        server: "VM 1",
                        subtitle: null
                    },
                    {
                        server: "VM 2",
                        subtitle: null
                    },
                    {
                        server: "VM 3",
                        subtitle: null
                    }
                ]
            ],
            [
                {
                    site: "Site 3",
                    subtitle: null,
                    image: null
                },
                [
                    {
                        server: "VM 1",
                        subtitle: null
                    },
                    {
                        server: "VM 2",
                        subtitle: null
                    },
                    {
                        server: "VM 3",
                        subtitle: null
                    }
                ]
            ],
            [
                {
                    site: "Site 4",
                    subtitle: null,
                    image: null
                },
                [
                    {
                        server: "VM 1",
                        subtitle: null
                    },
                    {
                        server: "VM 2",
                        subtitle: null
                    },
                    {
                        server: "VM 3",
                        subtitle: null
                    }
                ]
            ]
        ],
    },
    mutations: {
    },
    getters: {
        getSites: state => {
            let sites = [];

            state.sites.forEach((site) => {
                sites.push(site[0])
            });

            return sites;
        }
    },
    actions: {
    }

});

export default store;
