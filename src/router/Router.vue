<template>
    <v-app-bar app color="black" dark dense>
        <ul v-for="link in links" :key="link.name">
            <router-link :to="link.route">
                <div>{{ link.name }}</div>
            </router-link>
        </ul>
    </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
    name: "Router",
    setup() {
        const links = [
            { name: "Main", route: "/" },
            { name: "Resume", route: "/resume" },
            { name: "Contact Info", route: "/contact" }
        ];
        return {
            links
        };
    }
});
</script>
<style scoped>
a {
    text-decoration: none;
}
.v-application a {
    color: #2e7aec;
}
</style>
