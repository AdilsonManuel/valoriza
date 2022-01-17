import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateCompliments1642378540957 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'compliments',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true
          },
          {
            name: 'user_sender',
            type: 'uuid'
          },
          {
            name: 'user_receiver',
            type: ' uuid'
          },
          {
            name: 'tag_id',
            type: 'uuid'
          },
          {
            name: 'message',
            type: 'varchar'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          }
        ],
        foreignKeys: [
          {
            name: 'user_sender_compliments_fk',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_sender'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL'
          },
          {
            name: 'user_receiver_compliments_fk',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_receiver'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL'
          },{
            name: 'tags_compliments_fk',
            referencedTableName: 'tags',
            referencedColumnNames: ['id'],
            columnNames: ['tag_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('compliments')
  }
}
