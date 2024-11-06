import { createWebHashHistory, createRouter } from 'vue-router'

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        // will match everything and put it under `route.params.pathMatch`
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('./pages/404.vue') },
        {
            path: '',
            component: () => import('./pages/Index.vue'),
            redirect: '/0'
        },
        {
            path: '/:id',
            props: {
                buttonLabel: 'Sign Up',
                errorColor: 'text-red-700',
                successColor: 'text-green-700',
                background: 'bg-[#080808]',
                fontColor: 'text-white',
                campaign: 'inforce-backup',
                content: [
                    {
                        "headline": "Inforce Backup",
                        "subheadline": "Easy, secure, flexible, and automatic file backup for Windows...",
                        "cta": "Try Inforce Backup out for free",
                        "url": "https://www.inforce.de/Download/setupifcb.exe",
                        "explainer": ""
                    }
                ]
            },
            component: () => import('./pages/LandingPage.vue')
        },
        {
            path: '/not-found',
            component: () => import('./pages/404.vue')
        },
        {
            path: '/impressum',
            props: {
                name: "SDS Software",
                address: "Wendlohstr. 185B",
                zip: "22459",
                city: "Hamburg",
                country: "Germany",
                email: "sds@inforce.de",
                handelsregister: "",
                amtsgericht: "",
                vertreter: "Dirk Sandhorst"
            },
            component: () => import('./pages/Impressum.vue')
        }
    ]
})
