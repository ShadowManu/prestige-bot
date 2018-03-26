import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryColumn('integer')
  id?: number;

  @Column('integer')
  prestige?: number;
}