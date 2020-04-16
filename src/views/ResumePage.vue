<template>
    <v-container class="v-container-override">
        <resume-container></resume-container>
    </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import ResumeContainer from "@/components/ResumeContainer/ResumeContainer.vue";
export default Vue.extend({
    name: "ResumePage",
    components: {
        ResumeContainer
    }
});
</script>
<style scoped>
.v-container-override {
    width: 80%;
    height: 100%;
}
</style>
