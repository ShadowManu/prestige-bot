import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class User {

  constructor() {
    this.username = undefined!;
    this.prestige = undefined!;
  }

  @PrimaryColumn('text')
  username: string;

  @Column('integer')
  prestige: number;
}