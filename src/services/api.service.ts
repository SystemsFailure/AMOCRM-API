import { Injectable } from "@nestjs/common";
import axios from "axios";
import process, { env } from "process";
import ContactQuerys from "src/types/requests.type";

@Injectable()
export class ApiService {
    constructor() {};


    private async createContact(data) : Promise<void> {
        const {name, email, phone} = data;
        try {
            const response = await axios.post(process.env.baseURL + '/api/v4/contact')
        }
        catch(error) {
            console.log(error);
        }
    };

    private async updateFields(data: ContactQuerys) : Promise<void> {
        const baseURL = env.accessToken_amoCRM || 'https://allistirking422.amocrm.ru';
        const accessToken = env.BaseURL_amoCRM || 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjAzYjhjZTgyOTVhYmIyMDRkNjAxZjYyYmY3MWYyZWU2N2FkNjY4MDY5MDcyZDJhZTIwZTY2OWY2MDlmODY2NDQwODUxZjJmYWU5NzJjYmNmIn0.eyJhdWQiOiJhZWUzNDBlYy04YWJlLTQ0MjUtYWQyMC0xNGNkMjA0YmU5MDUiLCJqdGkiOiIwM2I4Y2U4Mjk1YWJiMjA0ZDYwMWY2MmJmNzFmMmVlNjdhZDY2ODA2OTA3MmQyYWUyMGU2NjlmNjA5Zjg2NjQ0MDg1MWYyZmFlOTcyY2JjZiIsImlhdCI6MTY5NDQzMzQ2MSwibmJmIjoxNjk0NDMzNDYxLCJleHAiOjE2OTQ1MTk4NjEsInN1YiI6IjEwMDcyMDg2IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxMjg3OTkwLCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOiJ2MiIsInNjb3BlcyI6WyJwdXNoX25vdGlmaWNhdGlvbnMiLCJmaWxlcyIsImNybSIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiXX0.TfQplKCQ3U9_1bf1mk9DCZFpErIFcms9Ar4eL5YVg0-hVop7Ue4neskDuwaH57AIS2Xk30Aj9DNcW0nmThuZos2DhAqbCOfpuhCivhPQXM4Bs90iTcYX-yOhjt0i4FNkhkjO4HRpQxCSd8lgX8liWo-IgMXdtmfpgWe48gNvEusmZVUAqHJ8q9ryE1rAqnJTy6_Sr42FagFr-fxEgUlWUOKNOoUdmNzYNyKeI1-Yl4wL1c56QPAPGcjHvYIaQKq-EVH-xP0j6EOWt3CKtlrqHea97eGOWhDud1_UElyrEna9SGEFYy1ggR51Lo_1PdkHCg-9Tmmp4mJh9zpUC4MoWQ';
        console.log(baseURL);
    };


    // Не используется
    async getContacts(data: ContactQuerys) : Promise<any> {
        const Access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjAzYjhjZTgyOTVhYmIyMDRkNjAxZjYyYmY3MWYyZWU2N2FkNjY4MDY5MDcyZDJhZTIwZTY2OWY2MDlmODY2NDQwODUxZjJmYWU5NzJjYmNmIn0.eyJhdWQiOiJhZWUzNDBlYy04YWJlLTQ0MjUtYWQyMC0xNGNkMjA0YmU5MDUiLCJqdGkiOiIwM2I4Y2U4Mjk1YWJiMjA0ZDYwMWY2MmJmNzFmMmVlNjdhZDY2ODA2OTA3MmQyYWUyMGU2NjlmNjA5Zjg2NjQ0MDg1MWYyZmFlOTcyY2JjZiIsImlhdCI6MTY5NDQzMzQ2MSwibmJmIjoxNjk0NDMzNDYxLCJleHAiOjE2OTQ1MTk4NjEsInN1YiI6IjEwMDcyMDg2IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxMjg3OTkwLCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOiJ2MiIsInNjb3BlcyI6WyJwdXNoX25vdGlmaWNhdGlvbnMiLCJmaWxlcyIsImNybSIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiXX0.TfQplKCQ3U9_1bf1mk9DCZFpErIFcms9Ar4eL5YVg0-hVop7Ue4neskDuwaH57AIS2Xk30Aj9DNcW0nmThuZos2DhAqbCOfpuhCivhPQXM4Bs90iTcYX-yOhjt0i4FNkhkjO4HRpQxCSd8lgX8liWo-IgMXdtmfpgWe48gNvEusmZVUAqHJ8q9ryE1rAqnJTy6_Sr42FagFr-fxEgUlWUOKNOoUdmNzYNyKeI1-Yl4wL1c56QPAPGcjHvYIaQKq-EVH-xP0j6EOWt3CKtlrqHea97eGOWhDud1_UElyrEna9SGEFYy1ggR51Lo_1PdkHCg-9Tmmp4mJh9zpUC4MoWQ';
        axios.defaults.headers.common['Authorization'] = `Bearer ${Access_token}`;
        const {name, email, phone} = data;
        try {
            const content = await axios.get('https://allistirking422.amocrm.ru' + `/api/v4/contacts?query=${phone}`);
            if(content.status != 204) {
                return content?.data?._embedded?.contacts;
            } else {
                console.log(content.status);
            }
        } catch (error) {
            console.log(error);
        }
    };


}