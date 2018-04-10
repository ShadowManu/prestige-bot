import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';

import { User } from './user.entity';

@Entity()
export class Message {
  @PrimaryColumn('number')
  id: number;

  @Column('text')
  text?: string;

  @Column('integer')
  date: number;

  @Column('text')
  original: string;

  @Column('integer')
  chat: number;

  @Column('integer')
  userId?: number;

  // tslint:disable-next-line:no-reserved-keywords
  @ManyToOne(_type => User, user => user.messages)
  user?: User;

  constructor() {
    this.id = undefined!;
    this.date = undefined!;
    this.original = undefined!;
    this.chat = undefined!;
  }
}