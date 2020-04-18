<template>
    <v-app class="v-application-addition">
        <router></router>
        <v-content class="v-content-additon">
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import Router from "@/router/Router.vue";
import LandingPage from "@/views/LandingPage.vue";

export default defineComponent({
    name: "App",

    components: {
        Router,
        LandingPage
    },

    data: () => ({
        //
    })
});
</script>
<style scoped>
.v-application-addition {
    font-family: "Playfair Display", serif;
}
.v-content-additon {
    color: #2e7aec;
    background: #000;
}
</style>
