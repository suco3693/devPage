<template>
    <landing-page-container />
</template>

<script lang="ts">
import Vue from "vue";
import LandingPageContainer from "@/components/LandingContainer/LandingContainer.vue";

export default Vue.extend({
    name: "LandingPage",
    components: {
        LandingPageContainer
    }
});
</script>
