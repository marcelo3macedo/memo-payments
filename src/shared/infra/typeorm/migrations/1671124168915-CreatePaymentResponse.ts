import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreatePaymentResponse1671124168915 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'payment_responses',
              columns: [
                {
                  name: 'id',
                  type: 'char',
                  length: '64',
                  isPrimary: true,
                },
                {
                    name: 'paymentId',
                    type: 'char',
                    length: '64',
                },
                {
                  name: 'externalId',
                  type: 'varchar',
                },
                {
                    name: 'status',
                    type: 'varchar',
                    length: '800'
                },
                {
                  name: 'qrCode',
                  type: 'varchar',
                  length: '800'
                },
                {
                    name: 'ticketUrl',
                    type: 'varchar',
                    length: '800'
                },
                {
                    name: 'qrCodeBase64',
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

        await queryRunner.createForeignKey(
            'payment_responses',
            new TableForeignKey({
              columnNames: ['paymentId'],
              referencedTableName: 'payments',
              referencedColumnNames: ['id']
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('payment_responses');
    }

}
