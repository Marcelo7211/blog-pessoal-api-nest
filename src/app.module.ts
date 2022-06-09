//Documentação https://docs.nestjs.com/techniques/database

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Admin357/',
      database: 'db_blog_pessoal',
      entities: [], //Indicar a pasta onde contem as entidades
      synchronize: true,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
