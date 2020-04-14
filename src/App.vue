<template>
    <v-app>
        <router></router>

        <v-content>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Router from '@/router/Router.vue';
import LandingPage from '@/views/LandingPage.vue';

export default defineComponent({
    name: 'App',

    components: {
        Router,
        LandingPage,
    },

    data: () => ({
        //
    }),
});
</script>
