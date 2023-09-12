import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiService } from './services/api.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './common/env';

// Настройка основного модуля
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration]
    })
  ],
  controllers: [AppController],
  providers: [AppService, ApiService],
})

export class AppModule {}


// [{"id":64990189,"name":"Эрик Леонхард","first_name":"Эрик","last_name":"Леонхард","responsible_user_id":10072086,"group_id":0,"created_by":10072086,"updated_by":10072086,"created_at":1694433980,"updated_at":1694434030,"closest_task_at":null,"is_deleted":false,"is_unsorted":false,"custom_fields_values":
//   [
//     {"field_id":2161201,"field_name":"Телефон","field_code":"PHONE","field_type":"multitext","values":[{"value":"+79996370816","enum_id":4808271,"enum_code":"WORK"}]},
//     {"field_id":2161203,"field_name":"Email","field_code":"EMAIL","field_type":"multitext","values":[{"value":"testEmail@gmail.com","enum_id":4808283,"enum_code":"WORK"}]},
//     {"field_id":2161199,"field_name":"Должность","field_code":"POSITION","field_type":"text","values":[{"value":"designer"}]}],"account_id":31287990,"_links":{"self":{"href":"https://allistirking422.amocrm.ru/api/v4/contacts/64990189?query=9996370816&page=1&limit=250"}},
//     "_embedded":{"tags":[],"companies":[{"id":64990217,"_links":{"self":{"href":"https://allistirking422.amocrm.ru/api/v4/companies/64990217?query=9996370816&page=1&limit=250"}}}]}}]