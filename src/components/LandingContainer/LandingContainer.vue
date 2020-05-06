<template>
    <v-container>
        <v-row justify="center">
            <v-col align="center">
                <v-img
                    src="@/assets/Sutton_Cowperthwaite_Pic.png"
                    max-width="25rem"
                    contain
                    class="profile-pic"
                ></v-img>
                <div class="job-title">Full Stack Software Engineer</div>
            </v-col>
            <v-col>I am words</v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
    name: "LandingPageContainer",
    setup() {}
});
</script>
<style scoped>
a {
    font-size: 1.5rem;
}
.profile-pic {
    border-radius: 100%;
}
.job-title {
    text-align: center;
}
</style>
