import { fieldsProxy } from "@serenity-is/corelib";

export interface QuaTangRow {
    Id?: number;
    TenQua?: string;
    GiaTri?: number;
    MoTa?: string;
    Anh?: string;
}

export abstract class QuaTangRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'TenQua';
    static readonly localTextPrefix = 'SanPhamDB.QuaTang';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<QuaTangRow>();
}