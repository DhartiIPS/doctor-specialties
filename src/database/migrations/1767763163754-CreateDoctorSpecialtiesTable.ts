import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDoctorSpecialtiesTable1767763163754 implements MigrationInterface {
    name = 'CreateDoctorSpecialtiesTable1767763163754'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "doctor_specialties" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "UQ_9bff1bae77e411453bd4eddfec0" UNIQUE ("name"), CONSTRAINT "PK_28e3c8a89299955a87ece809dbe" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "doctor_specialties"`);
    }

}
