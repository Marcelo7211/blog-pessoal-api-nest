//Documentação https://docs.nestjs.com/techniques/database

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './Postagem/entities/postagem.entity';
import { PostagemModule } from './Postagem/postagem.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Admin357/',
      database: 'db_blog_pessoal',
      entities: [Postagem], //Indicar a pasta onde contem as entidades
      synchronize: true,
    }),
    PostagemModule //Registrando o Modulo de Postagem no app.Modulo
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
