import { Sequelize } from 'sequelize-typescript';
export declare function initDatabase(dbLink: string, logging?: boolean, sync?: boolean): Promise<{
    sequelize: Sequelize;
}>;
