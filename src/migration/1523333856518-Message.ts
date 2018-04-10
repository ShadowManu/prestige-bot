import { MigrationInterface, QueryRunner } from 'typeorm';

export class Message1523333856518 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE message (
        id integer PRIMARY KEY,
        text text,
        date integer NOT NULL,

        original text NOT NULL,

        chat integer NOT NULL,
        userId text REFERENCES user(id)
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE message;
    `);
  }

}
