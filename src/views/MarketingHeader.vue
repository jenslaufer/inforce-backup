<template>
    <div class="flex flex-col items-center" :class="background">
        <h1 class="font-bold text-center px-2 pt-10 lg:pt-16 pb-1 text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
            :class="fontColor">{{ headline }}</h1>
        <h2 class="px-4 text-xl md:text-2xl xl:text-3xl 2xl:text-4xl py-6 font-semibold text-center" :class="fontColor">
            {{ subheadline }}
        </h2>
        <p class="px-6 pb-4 text-gray-300 text-base font-normal w-1/1 lg:w-1/2">{{ explainer }}</p>

        <a :href="route"
            class="mt-6 inline-block px-6 py-3 bg-red-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-700">
            {{ cta }}
        </a>
    </div>
</template>
<script setup>

const props = defineProps({
    headline: {
        type: String
    },
    subheadline: {
        type: String
    },
    explainer: {
        type: String
    },
    cta: {
        type: String
    },
    errorColor: {
        type: String
    },
    successColor: {
        type: String
    },
    background: {
        type: String
    },
    fontColor: {
        type: String
    },
    campaign: {
        type: String
    },
    route: {
        type: String
    }
});
</script>