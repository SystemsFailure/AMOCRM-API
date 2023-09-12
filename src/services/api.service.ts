import { Injectable } from "@nestjs/common";
import axios from "axios";
import process, { env } from "process";
import ContactQuerys from "src/types/requests.type";
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiService {
    constructor(private readonly runtime: ConfigService) {
        // no code
    };

    private async createContact(data) : Promise<any> {
        const {name, email, phone} = data;
        // надо было создать класс и переиспользовать его, но времени уже не было, извините => я пойду на против принцыпа DRY и повторюсь
        const requestData = 
            {            
                name: name,
                custom_fields_values: [
                    {
                        field_name: 'Телефон',
                        field_code: 'PHONE',
                        field_type: 'multitext',
                        values: [{value:phone, enum_code:'WORK'}]
    
                    },
                    {
                        field_name: 'Email',
                        field_code: 'EMAIL',
                        field_type: 'multitext',
                        values: [{value:email, enum_code:'WORK'}]
                    },
                ]
        };
        try {
            const response = await axios.post(this.runtime.get<string>('amoCRM.url') + '/api/v4/contacts', {requestData})
            // Здесь создаем сделку и возвращаем ответ
            return response;
        }
        catch(error) {
            console.log(error);
        }
    };

    private async updateFields(data: ContactQuerys, id: number) : Promise<any> {
        const {name, email, phone} = data;
        const requestData = 
            {        
                id: id,
                name: name,
                custom_fields_values: [
                    {
                        field_name: "Телефон",
                        field_code: "PHONE",
                  
                        values: [
                          {
                            value: phone,
                            enum_code: "WORK"
                          }
                        ]
                    },
                    {
                        field_name: 'Email',
                        field_code: 'EMAIL',
                        values: [{value:email, enum_code:'WORK'}]
                    },
                ]
        };
        console.log('requestData', requestData);
        try {
            const response = await axios.patch(this.runtime.get<string>('amoCRM.url') + '/api/v4/contacts', {requestData})
            console.log(response.status);
            // Здесь создаем сделку и возвращаем ответ
            return response;
        }
        catch(error) {
            console.log(error);
        }
    };


    // Не используется
    async getContact(data: ContactQuerys) : Promise<any> {
        console.log(this.runtime.get<string>('amoCRM.url'));
        // Временный токен, если забыл удалить, изыините)
        // Установка заголовков в axios для всех последующих запросов
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.runtime.get<string>('amoCRM.token')}`;
        // параметры из вне (имя, почта, телефон)
        const {name, email, phone} = data;
        // Обработка ощибок (примитив)
        try {
            // простой get запрос к amoCRM
            const content = await axios.get('https://allistirking422.amocrm.ru' + `/api/v4/contacts?query=${phone}`);
            // Здесь - проверка через статус код 204 (нет контентан), 
            // если нету данных => нету мы создаем с переданными параметрами, если есть, то обновляю и делаю сделку
            if(content.status != 204) {
                await this.updateFields(data, content.data._embedded.contacts[0].id);
                return content?.data?._embedded?.contacts;
            } else {
                const result = await this.createContact(data);
            }
        } catch (error) {
            console.log(error);
        }
    };


}