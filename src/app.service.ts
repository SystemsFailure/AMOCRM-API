import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async createContact(): Promise<void> {
    
  }
  getHello(): string {
    return 'Hello World!';
  }
}
