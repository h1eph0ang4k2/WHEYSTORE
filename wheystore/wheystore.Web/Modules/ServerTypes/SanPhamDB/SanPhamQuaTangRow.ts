import { fieldsProxy } from "@serenity-is/corelib";

export interface SanPhamQuaTangRow {
    Id?: number;
    SanPhamId?: number;
    QuaTangId?: number;
    ThuTu?: number;
    IsDefault?: boolean;
    SanPhamTenSp?: string;
    QuaTangTenQua?: string;
}

export abstract class SanPhamQuaTangRow {
    static readonly idProperty = 'Id';
    static readonly localTextPrefix = 'SanPhamDB.SanPhamQuaTang';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<SanPhamQuaTangRow>();
}