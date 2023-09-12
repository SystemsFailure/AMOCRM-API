import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiService } from './services/api.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ApiService],
})
export class AppModule {}
