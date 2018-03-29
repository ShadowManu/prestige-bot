import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class User {

  @PrimaryColumn('text')
  username: string;

  @Column('integer')
  prestige: number;

  constructor() {
    this.username = undefined!;
    this.prestige = undefined!;
  }
}
