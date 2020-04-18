<template>
    <v-container>
        <v-row>
            <h1>Contact Me @</h1>
        </v-row>
        <v-row justify="center">
            <v-col cols="2">
                <v-icon x-large color="#2E7AEC">mdi-email</v-icon>
            </v-col>
            <v-col cols="8">
                <a href="mailto: sutton.cowperthwaite@gmail.com">Email Me</a>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="2">
                <v-icon x-large color="#2E7AEC">mdi-linkedin</v-icon>
            </v-col>
            <v-col cols="8">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/sutton-cowperthwaite/"
                >Find Me on LinkedIn</a>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
    name: "ContactInfoPage",
    setup() {}
});
</script>
<style scoped>
a {
    font-size: 1.5rem;
}
</style>
