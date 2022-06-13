// Documentação https://docs.nestjs.com/techniques/database#repository-pattern
//              https://typeorm.io/entities

import { Tema } from "src/Tema/entities/tema.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Tree, UpdateDateColumn } from "typeorm"


@Entity()
export class Postagem {

    @PrimaryGeneratedColumn()    
    id: number

    @Column({length: 30, nullable: false})
    titulo: string

    @Column({length: 5000, nullable: false})
    texto: string

    @UpdateDateColumn()
    data: Date

    @ManyToOne(() => Tema, (tema) => tema.postagem)
    tema: Tema //Documentação: https://typeorm.io/many-to-one-one-to-many-relations
}