<template>
    <div class="flex items-center justify-center bg-[#090909]">
        <div class="text-center">
            <h1
                class="font-bold text-center pt-10 lg:pt-16 pb-2 text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-white">
                Impressum</h1>
            <p class="text-2xl text-white mt-4">{{ name }}</p>
            <p class="text-white mt-2">{{ address }}</p>
            <p class="text-white mt-2">{{ zip }} {{ city }}</p>
            <p class="text-white mt-2">{{ country }}</p>
            <p class="text-white mt-2">Email: {{ email }}</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p class="text-white mt-2">{{ handelsregister }}<br />
                {{ amtsgericht }}</p>

            <p class="text-white mt-2"><strong>Vertreten durch:</strong><br />
                {{ vertreter }}</p>

            <a href="/"
                class="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700">
                Go to Homepage
            </a>



        </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { useGtm } from '@gtm-support/vue-gtm'

const gtm = useGtm()


const props = defineProps({
    name: {
        type: String
    },
    address: {
        type: String
    },
    zip: {
        type: String
    },
    city: {
        type: String
    },
    country: {
        type: String
    },
    email: {
        type: String
    },
    handelsregister: {
        type: String
    },
    amtsgericht: {
        type: String
    },
    vertreter: {
        type: String
    }
});

onMounted(() => {
    gtm.trackView("", `impressum`)
})
</script>