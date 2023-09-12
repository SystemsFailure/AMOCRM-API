import { Controller, Get, Req, Post, Param, Patch } from '@nestjs/common';
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
  @Get('findContact/:email/:name/:phone')
  async get(
      @Param('email') email: string, 
      @Param('name') name: string,
      @Param('phone') phone: string,
    ) : Promise<string> {
      const contacts = await this.apiService.getContact({email: email, name: name, phone: phone});
      return JSON.stringify(contacts);
  };
}
