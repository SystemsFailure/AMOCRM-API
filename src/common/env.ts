import { env } from "process"
export default () => ({
    amoCRM : {
        url: env?.BaseURL_amoCRM || 'https://allistirking422.amocrm.ru',
        token: env?.accessToken_amoCRM || 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjAzYjhjZTgyOTVhYmIyMDRkNjAxZjYyYmY3MWYyZWU2N2FkNjY4MDY5MDcyZDJhZTIwZTY2OWY2MDlmODY2NDQwODUxZjJmYWU5NzJjYmNmIn0.eyJhdWQiOiJhZWUzNDBlYy04YWJlLTQ0MjUtYWQyMC0xNGNkMjA0YmU5MDUiLCJqdGkiOiIwM2I4Y2U4Mjk1YWJiMjA0ZDYwMWY2MmJmNzFmMmVlNjdhZDY2ODA2OTA3MmQyYWUyMGU2NjlmNjA5Zjg2NjQ0MDg1MWYyZmFlOTcyY2JjZiIsImlhdCI6MTY5NDQzMzQ2MSwibmJmIjoxNjk0NDMzNDYxLCJleHAiOjE2OTQ1MTk4NjEsInN1YiI6IjEwMDcyMDg2IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxMjg3OTkwLCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOiJ2MiIsInNjb3BlcyI6WyJwdXNoX25vdGlmaWNhdGlvbnMiLCJmaWxlcyIsImNybSIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiXX0.TfQplKCQ3U9_1bf1mk9DCZFpErIFcms9Ar4eL5YVg0-hVop7Ue4neskDuwaH57AIS2Xk30Aj9DNcW0nmThuZos2DhAqbCOfpuhCivhPQXM4Bs90iTcYX-yOhjt0i4FNkhkjO4HRpQxCSd8lgX8liWo-IgMXdtmfpgWe48gNvEusmZVUAqHJ8q9ryE1rAqnJTy6_Sr42FagFr-fxEgUlWUOKNOoUdmNzYNyKeI1-Yl4wL1c56QPAPGcjHvYIaQKq-EVH-xP0j6EOWt3CKtlrqHea97eGOWhDud1_UElyrEna9SGEFYy1ggR51Lo_1PdkHCg-9Tmmp4mJh9zpUC4MoWQ',
    }
})

// class runtimeConfig {
//     static accessToken: string = env?.accessToken_amoCRM;
//     static baseURL: string = env?.BaseURL_amoCRM;
// }

// export default runtimeConfig;