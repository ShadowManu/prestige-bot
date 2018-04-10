import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';

import { Message } from './message.entity';

@Entity()
export class User {

  @PrimaryColumn('integer')
  id: number;

  @Column('text')
  username?: string;

  @Column('integer')
  prestige: number;

  @OneToMany(_type => Message, message => message.user)
  messages?: Message[];

  constructor() {
    this.id = undefined!;
    this.username = undefined!;
    this.prestige = undefined!;
    this.messages = undefined!;
  }
}
