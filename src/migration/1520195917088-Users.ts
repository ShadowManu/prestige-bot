import { MigrationInterface, QueryRunner } from "typeorm";

export class Users1520195917088 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    queryRunner.query(`
      CREATE TABLE users (
        id integer PRIMARY KEY,
        prestige integer NOT NULL
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    queryRunner.query(`
      DROP TABLE users;
    `);
  }

}
