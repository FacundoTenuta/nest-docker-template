import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getInitialMessage(): string {
    return 'This is a template for NestJS, Prisma, Mysql database, and Docker.';
  }
}
