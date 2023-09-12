import { Injectable } from "@nestjs/common";
import axios from "axios";
import ContactQuerys from "src/types/requests.type";
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiService {
    // Внедрение зависимости через конструктор для доступа к переменным среды
    constructor(private readonly runtime: ConfigService) {
        // no code
    };

    // Функция создания сделки
    private async createDeal(contact) : Promise<any> {
        console.log('contact', contact);
        const requestData = {
            name: 'one deal', price: 0,
            _embedded: {
                contacts: [contact],
                companies: [{name: 'Buy some thing :)'}]
            }
        }
        try {
            const response = await axios.post(this.runtime.get<string>('amoCRM.url') + '/api/v4/leads/complex', {requestData});
            // Здесь создаем сделку и возвращаем ответ
            return response;
        }
        catch(error) {
            console.log(error);
        }
    };

    // Функция создания Клиента
    private async createContact(data) : Promise<any> {
        // Деструктуризирую данные переданные в виде аргумента в функции
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
            // запрос на создание клиента
            const response = await axios.post(this.runtime.get<string>('amoCRM.url') + '/api/v4/contacts', {requestData})
            return response;
        }
        catch(error) {
            console.log(error);
        }
    };

    // Функция обновления данных
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
        try {
            //  Запрос на обновление данныз клиента
            const response = await axios.patch(this.runtime.get<string>('amoCRM.url') + '/api/v4/contacts', {requestData})
            return response;
        }
        catch(error) {
            console.log(error);
        }
    };


    // Не используется
    async getContact(data: ContactQuerys) : Promise<any> {
        // Успешный запрос
        const CODE_SUCCESS = 200;
        // Плохой запрос
        const CODE_BAD_REQUST = 200;
        // ЕСли данные не найдены
        const CODE_DATA_NOT_FOUND = 204;
        // Временный токен, если забыл удалить, изыините)
        // Установка заголовков в axios для всех последующих запросов
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.runtime.get<string>('amoCRM.token')}`;
        // параметры из вне (имя, почта, телефон)
        const {phone} = data;
        // Обработка ощибок (примитив)
        try {
            // простой get запрос к amoCRM
            const content = await axios.get('https://allistirking422.amocrm.ru' + `/api/v4/contacts?query=${phone}`);
            // Здесь - проверка через статус код 204 (нет контентан), 
            // если нету данных => нету мы создаем с переданными параметрами, если есть, то обновляю и делаю сделку
            if(content.status != CODE_DATA_NOT_FOUND) {
                // если данные существуют
                if(content.status === CODE_SUCCESS) {
                    // Обновление полей
                    const result_update = await this.updateFields(data, content.data._embedded.contacts[0].id); // id = идентификатор найденного клиента
                    if(result_update.status === CODE_SUCCESS) {
                        // При успешном обновлении данных создаем сделку
                        await this.createDeal(content.data._embedded.contacts[0]);
                        // возврат массива найденного контакта
                        return {contacts: content?.data?._embedded?.contacts, result: 'Успешное обновление данных и создание сделки', boolResult: true};
                    } else {
                        return 'Статус код отличен от 200 при попытке обновить данные'
                    }
                } else {
                    return 'Статус ответа является отличным от 200'
                }
            } else {
                // если клиент не найден, то создаем его
                await this.createContact(data);
                // создаем сделку
                await this.createDeal(content.data._embedded.contacts[0]);
                return 'Пользователь успешно создан, сделка успешно заключина' 
            }
        } catch (error) {
            console.log(error);
        }
    };

}