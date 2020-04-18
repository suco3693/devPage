<template>
    <contact-info-page />
</template>

<script lang="ts">
import Vue from "vue";
import ContactInfoPage from "@/components/ContactInfoPage/ContactInfoPage.vue";
export default Vue.extend({
    name: "ContactPage",
    components: {
        ContactInfoPage
    }
});
</script>
