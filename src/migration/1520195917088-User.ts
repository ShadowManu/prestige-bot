import { MigrationInterface, QueryRunner } from "typeorm";

export class User1520195917088 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    queryRunner.query(`
      CREATE TABLE user (
        username text PRIMARY KEY,
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
