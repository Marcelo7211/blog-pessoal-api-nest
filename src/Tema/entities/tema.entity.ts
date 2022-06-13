import { Postagem } from "src/Postagem/entities/postagem.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tema {

    @PrimaryGeneratedColumn()    
    id: number

    @Column({length: 30, nullable: false})
    descricao: string

    @OneToMany(() => Postagem, (postagem) => postagem.tema)
    postagem: Postagem[]  //Documentação: https://typeorm.io/many-to-one-one-to-many-relations
}