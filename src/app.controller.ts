import { Controller, Get, Req, Post, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiService } from './services/api.service';

@Controller('uniqueRequest')
export class AppController {
  // Обычное внедрение щависимости через конструктор
  constructor(
      private readonly appService: AppService,
      private readonly apiService: ApiService,
    ) {}

  // Главный запрос, решил передавать данные через параметры, не через тело запроса
  @Get('findContact/:phone')
  async getContact(
      @Param('email') email: string, 
      @Param('name') name: string,
      @Param('phone') phone: string,
    ) : Promise<string> {
      const contacts = await this.apiService.getContacts({email: email, name: name, phone: phone});
      return JSON.stringify(contacts);
  };


  // Не используется, (тестил)
  // Пост запрос для создания контакта с полями (имя, почта, телефон)
  @Post()
  async createContact(@Req() req): Promise<{}> {
    return {body: req.body, headers: req.headers};
  }
}
