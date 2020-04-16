<template>
    <v-row justify="center">
        <h1>Sutton Cowperthwaite's Resume</h1>
        <iframe
            src="./assets/Sutton_Cowperthwaite_Resume.pdf"
            type="application/pdf"
            class="resume-embed"
            frameborder="0"
        />
    </v-row>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
    name: "ResumeContainer",
    setup() {}
});
</script>
<style scoped>
.row {
    width: 100%;
    height: 100%;
}
.resume-embed {
    width: 100%;
    height: 95%;
}
</style>
