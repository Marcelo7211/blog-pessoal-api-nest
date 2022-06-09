// Documentação https://docs.nestjs.com/techniques/database#repository-pattern
//              https://typeorm.io/entities

import { Column, Entity, PrimaryGeneratedColumn, Tree, UpdateDateColumn } from "typeorm"


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
}