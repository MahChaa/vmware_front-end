import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        sites: [
            [
                {
                    site: "Site 1",
                    details: null,
                    image: null
                },
                [
                    {
                        server: "VM 1",
                        details: null
                    },
                    {
                        server: "VM 2",
                        details: null
                    },
                    {
                        server: "VM 3",
                        details: null
                    }
                ]
            ],
            [
                {
                    site: "Site 2",
                    details: null,
                    image: null
                },
                [
                    {
                        server: "VM 1",
                        details: null
                    },
                    {
                        server: "VM 2",
                        details: null
                    },
                    {
                        server: "VM 3",
                        details: null
                    }
                ]
            ],
            [
                {
                    site: "Site 3",
                    details: null,
                    image: null
                },
                [
                    {
                        server: "VM 1",
                        details: null
                    },
                    {
                        server: "VM 2",
                        details: null
                    },
                    {
                        server: "VM 3",
                        details: null
                    }
                ]
            ],
            [
                {
                    site: "Site 4",
                    details: null,
                    image: null
                },
                [
                    {
                        server: "VM 1",
                        details: null
                    },
                    {
                        server: "VM 2",
                        details: null
                    },
                    {
                        server: "VM 3",
                        details: null
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
                sites.push(site[0]);
            });

            return sites;
        },
        getServers: state => {
            let servers = [];

            state.sites.forEach((site) => {
                servers.push(site[1]);
            });

            return servers
        }
    },
    actions: {
    }

});

export default store;
