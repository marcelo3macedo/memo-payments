import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreatePayment1671109250531 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'payments',
              columns: [
                {
                  name: 'id',
                  type: 'char',
                  length: '64',
                  isPrimary: true,
                },
                {
                  name: 'application',
                  type: 'varchar',
                },
                {
                    name: 'type',
                    type: 'varchar',
                },
                {
                    name: 'orderId',
                    type: 'varchar',
                },
                {
                    name: 'value',
                    type: 'decimal',
                    precision: 2
                },
                {
                    name: 'callbackUrl',
                    type: 'varchar',
                    length: '8000'
                },
                {
                  name: 'createdAt',
                  type: 'timestamp',
                  default: 'now()',
                  isNullable: true,
                },
                {
                  name: 'deletedAt',
                  type: 'timestamp',
                  isNullable: true,
                },
              ],
            })
        ); 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('payments');
    }

}
