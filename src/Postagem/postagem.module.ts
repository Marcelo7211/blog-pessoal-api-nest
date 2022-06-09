import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Postagem } from "./entities/postagem.entity";
import { PostagemService } from "./services/postagem.service";

@Module({
    imports: [TypeOrmModule.forFeature([Postagem])], // Resgistrando a Model no modulo de postagem
    providers: [PostagemService], // Restrando o Service no modulo de postagem
    controllers: [],
    exports: [TypeOrmModule]
})
export class PostagemModule {}