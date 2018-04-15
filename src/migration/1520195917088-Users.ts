import { MigrationInterface, QueryRunner } from 'typeorm';

export class User1520195917088 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE users (
        id bigint PRIMARY KEY,
        username text,
        prestige integer NOT NULL
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE users;
    `);
  }

}
